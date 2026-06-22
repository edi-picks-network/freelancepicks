import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Calendar, Clock, User, ArrowLeft, Tag, ArrowRight } from "lucide-react";
import { blogPostSchema, organizationSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — FreelancePicks Studio`,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl md:text-2xl font-bold text-text-primary mt-10 mb-4 tracking-tight">
          {trimmed.replace(/^##\s+/, "")}
        </h2>
      );
      i++;
      continue;
    }
    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-bold text-text-primary mt-8 mb-3">
          {trimmed.replace(/^###\s+/, "")}
        </h3>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("|")) {
      const tableRows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableRows.push(lines[i].trim());
        i++;
      }
      elements.push(renderTable(tableRows, `table-${i}`));
      continue;
    }

    if (trimmed === "---") {
      elements.push(<hr key={i} className="border-border-soft my-8" />);
      i++;
      continue;
    }

    if (trimmed === "") {
      i++;
      continue;
    }

    elements.push(
      <p key={i} className="text-text-secondary leading-relaxed mb-4 text-base">
        {formatInline(trimmed)}
      </p>
    );
    i++;
  }

  return elements;
}

function renderTable(rows: string[], key: string) {
  const parsed = rows.map((row) =>
    row
      .replace(/^\||\|$/g, "")
      .split("|")
      .map((cell) => cell.trim())
  );

  const headerRow = parsed[0];
  const dataRows = parsed.slice(2);

  return (
    <div key={key} className="overflow-x-auto mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-leaf-subtle/60">
            {headerRow.map((h, idx) => (
              <th
                key={idx}
                className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-leaf border-b border-border-soft"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, rIdx) => (
            <tr key={rIdx} className="border-b border-border-soft/50 hover:bg-warm-bg/50 transition-colors">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="px-4 py-3 text-text-secondary">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-bold text-text-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function getRelatedPosts(currentSlug: string, category: string) {
  return BLOG_POSTS.filter(
    (p) => p.slug !== currentSlug && p.category === category
  ).slice(0, 3);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const contentElements = renderContent(post.content);
  const relatedPosts = getRelatedPosts(slug, post.category);

  const blogJsonLd = blogPostSchema(
    post.title,
    post.author,
    post.date,
    'FreelancePicks Studio',
    post.excerpt
  );
  const orgJsonLd = organizationSchema(
    'FreelancePicks',
    'https://freelancepicks.net',
    'Freelance platform strategy studio helping freelancers maximize platform earnings.'
  );

  return (
    <div className="relative pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <div className="max-w-[1200px] mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-leaf transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <article>
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-leaf bg-leaf-subtle px-3 py-1.5 rounded-md">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-xs text-text-muted">
                  <User className="w-3.5 h-3.5" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2 text-xs text-text-muted">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-text-muted">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime} min read
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-4">
                {post.title}
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 px-3 py-1 bg-warm-card border border-border-soft rounded-full text-xs text-text-muted"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div className="prose-custom max-w-none">
              {contentElements}
            </div>

            <div className="mt-12 pt-8 border-t border-border-soft">
              <div className="card-story-compact p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-leaf to-leaf-lighter flex items-center justify-center text-white font-bold text-lg">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-text-primary">{post.author}</p>
                    <p className="text-sm text-text-muted">{post.authorRole}</p>
                    <p className="text-xs text-text-muted mt-2">
                      FreelancePicks independently researches and verifies all platform data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {relatedPosts.length > 0 && (
              <div className="mt-12 lg:hidden">
                <h3 className="text-lg font-bold text-text-primary mb-4">Related Research</h3>
                <div className="grid gap-4">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="card-story-compact p-4 hover:border-leaf-lighter transition-all"
                    >
                      <h4 className="font-bold text-text-primary hover:text-leaf transition-colors text-sm">
                        {rp.title}
                      </h4>
                      <p className="text-xs text-text-muted mt-1">
                        {rp.readTime} min read · {new Date(rp.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="card-story-compact p-5">
                <h3 className="text-sm font-bold text-text-primary mb-3 uppercase tracking-wider">
                  In This Article
                </h3>
                <nav className="space-y-2">
                  {post.content
                    .split("\n")
                    .filter((l) => l.trim().startsWith("## "))
                    .slice(0, 8)
                    .map((heading, idx) => (
                      <a
                        key={idx}
                        href={`#`}
                        className="block text-xs text-text-muted hover:text-leaf transition-colors"
                      >
                        {heading.replace(/^##\s+/, "")}
                      </a>
                    ))}
                </nav>
              </div>

              {relatedPosts.length > 0 && (
                <div className="card-story-compact p-5">
                  <h3 className="text-sm font-bold text-text-primary mb-3 uppercase tracking-wider">
                    Related Research
                  </h3>
                  <div className="space-y-3">
                    {relatedPosts.map((rp) => (
                      <Link
                        key={rp.slug}
                        href={`/blog/${rp.slug}`}
                        className="block group"
                      >
                        <h4 className="text-sm font-bold text-text-muted group-hover:text-leaf transition-colors leading-snug">
                          {rp.title}
                        </h4>
                        <p className="text-xs text-text-muted mt-1">
                          {rp.readTime} min read
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="card-story-compact p-5 text-center bg-gradient-to-br from-warm-card to-warm-bg border-leaf-lighter/20">
                <div className="w-10 h-10 rounded-full bg-leaf-subtle flex items-center justify-center mx-auto mb-3">
                  <ArrowRight className="w-5 h-5 text-leaf" />
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-2">Find Your Platform Fit</h3>
                <p className="text-xs text-text-muted mb-4">
                  Book a free discovery call with our team.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-leaf to-leaf-light hover:from-leaf-dark hover:to-leaf text-white text-xs font-bold rounded-lg transition-all shadow-sm"
                >
                  Get Started <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
