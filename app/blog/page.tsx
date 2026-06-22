import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Calendar, Clock, User, ArrowRight, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Research — FreelancePicks Studio",
  description:
    "Data-driven insights, platform comparisons, and freelance strategy guides from the FreelancePicks team. Expert analysis for serious freelancers.",
};

const CATEGORIES = Array.from(new Set(BLOG_POSTS.map((post) => post.category)));

export default function BlogPage() {
  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="relative pt-28 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-5 border border-border-soft bg-leaf-subtle/50 text-leaf">
            <Leaf className="w-3.5 h-3.5" />
            FreelancePicks Research
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5">
            Freelance Platform{" "}
            <span className="text-gradient-leaf">Research</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Data-driven platform comparisons, strategy guides, and market intelligence
            from the FreelancePicks team. Built for freelancers who take their income seriously.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["All", ...CATEGORIES].map((cat) => (
            <a
              key={cat}
              href={cat === "All" ? "/blog" : `/blog?category=${cat}`}
              className="px-3.5 py-1.5 rounded-full border border-border-soft bg-warm-card text-sm text-text-secondary hover:text-leaf hover:border-leaf-lighter transition-all"
            >
              {cat}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="card-story-compact p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-leaf bg-leaf-subtle px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime} min read
                  </div>
                </div>

                <h2 className="text-lg font-bold text-text-primary mb-3 group-hover:text-leaf transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-sm text-text-muted mb-4 leading-relaxed flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-text-muted bg-warm-bg px-2 py-0.5 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border-soft">
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                    <span className="mx-1">·</span>
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <ArrowRight className="w-4 h-4 text-leaf opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
