"use client";

import { useMemo } from "react";
import {
  Leaf, TrendingUp, ArrowRight, Star, Users, Globe,
  DollarSign, Shield, Sparkles, BookOpen, Quote,
  MapPin, BarChart3, ChevronRight,
} from "lucide-react";
import Link from "next/link";

import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";

const SITE_NAME = "FreelancePicks";

export default function HomePage() {
  const categories = useMemo(() => {
    const m = new Map<string, { count: number }>();
    for (const t of ALL_TOOLS) {
      if (!m.has(t.category)) m.set(t.category, { count: 0 });
      const s = m.get(t.category)!;
      s.count++;
    }
    return [...m.entries()]
      .map(([name, s]) => ({ name, count: s.count }))
      .sort((a, b) => b.count - a.count);
  }, []);

  const topTools = useMemo(
    () => [...ALL_TOOLS].sort((a: any, b: any) => b.rating - a.rating).slice(0, 8),
    []
  );

  const latestPosts = useMemo(
    () => [...BLOG_POSTS]
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3),
    []
  );

  return (
    <div className="min-h-screen bg-warm-bg">
      {/* ============================================ */}
      {/* HERO — Freelancer-First Story */}
      {/* ============================================ */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-leaf-subtle/40 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-20 w-[300px] h-[300px] rounded-full bg-green-100/30 blur-2xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Left: Story */}
            <div className="md:col-span-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 border border-border-soft bg-warm-card/80 text-leaf shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                From the FreelancePicks Studio — Denver, CO
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight mb-4 tracking-tight">
                You Don&apos;t Need{" "}
                <span className="text-gradient-leaf">More Platforms</span>
                <br />
                You Need the <em>Right</em> One
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-6 max-w-lg">
                Most freelancers are on 3–5 platforms but earning from just 1.
                We help you find your one — then master it.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/about" className="btn-primary">
                  Start Your Strategy <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/blog" className="btn-secondary">
                  <BookOpen className="w-4 h-4" />
                  Read Research
                </Link>
              </div>
            </div>

            {/* Right: Income Stat Card */}
            <div className="md:col-span-2">
              <div className="card-story p-6 md:p-8 text-center relative">
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-leaf rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-leaf mb-1">
                  $4.2M
                </div>
                <p className="text-sm text-text-muted mb-4">
                  Additional annual revenue generated for our clients
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-leaf-subtle/60 rounded-xl p-3">
                    <div className="text-lg font-bold text-leaf">47%</div>
                    <div className="text-[10px] text-text-muted">Avg. income lift</div>
                  </div>
                  <div className="bg-leaf-subtle/60 rounded-xl p-3">
                    <div className="text-lg font-bold text-leaf">200+</div>
                    <div className="text-[10px] text-text-muted">Clients served</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-center text-xs text-text-muted">
                  <MapPin className="w-3 h-3 text-leaf-lighter" />
                  Based in Denver, helping freelancers worldwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PLATFORM STORIES — Story Cards Instead of Grid */}
      {/* ============================================ */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">Featured Platforms</h2>
              <p className="text-sm text-text-muted mt-1">
                Our analysts have evaluated 40+ platforms. Here are the standouts.
              </p>
            </div>
            <Link href="/" className="text-sm text-leaf font-medium hover:underline flex items-center gap-1">
              View all <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {topTools.slice(0, 4).map((tool: any, i: number) => {
              const storyData = [
                {
                  tag: "BEST FOR BEGINNERS",
                  stat: "1M+ jobs posted monthly",
                  highlight: "Large pool but high competition. Best for generalists starting out.",
                },
                {
                  tag: "BEST FOR DESIGNERS",
                  stat: "83% satisfaction rate",
                  highlight: "Strong creative community with project-based pricing.",
                },
                {
                  tag: "BEST FOR EXPERTS",
                  stat: "$100k+ avg annual earnings",
                  highlight: "Premium rates for vetted professionals. Low volume, high quality.",
                },
                {
                  tag: "BEST FOR WRITERS",
                  stat: "85% repeat client rate",
                  highlight: "Quality-focused platform with strong long-term relationships.",
                },
              ][i] || { tag: "POPULAR", stat: "4.5+ stars", highlight: "Consistently top-rated by freelancers." };

              return (
                <Link
                  key={tool.id || i}
                  href={`/tools/${tool.id}`}
                  className="card-story p-5 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-leaf-subtle flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-leaf" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-leaf">
                          {storyData.tag}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-amber-600">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          {tool.rating}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-text-primary group-hover:text-leaf transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-text-muted mt-1.5 line-clamp-2">{tool.description}</p>
                      <div className="flex items-center gap-3 mt-3 text-xs">
                        <span className="flex items-center gap-1 text-text-muted">
                          <TrendingUp className="w-3 h-3 text-leaf-lighter" />
                          {storyData.stat}
                        </span>
                        <span className="flex items-center gap-1 text-text-muted">
                          <Users className="w-3 h-3 text-leaf-lighter" />
                          {tool.category}
                        </span>
                      </div>
                      <div className="mt-3 text-xs text-text-muted italic border-t border-border-soft pt-3">
                        &ldquo;{storyData.highlight}&rdquo;
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-leaf transition-colors flex-shrink-0 mt-3" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* INCOME STATISTICS MODULE */}
      {/* ============================================ */}
      <section className="px-6 py-12 bg-white/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-text-primary">The Platform Reality Check</h2>
            <p className="text-sm text-text-muted mt-1 max-w-lg mx-auto">
              Most freelancers spread themselves too thin. Here&apos;s what the data actually says.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <div className="card-story-compact p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-red-400">1</span>
              </div>
              <div className="text-sm font-bold text-text-primary mb-2">of 5 platforms</div>
              <p className="text-xs text-text-muted leading-relaxed">
                The average freelancer signs up for 5 platforms but earns 85% of their income from just one.
                The other four are a distraction.
              </p>
            </div>

            <div className="card-story-compact p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-7 h-7 text-amber-500" />
              </div>
              <div className="text-sm font-bold text-text-primary mb-2">12–20% hidden fees</div>
              <p className="text-xs text-text-muted leading-relaxed">
                Between platform commissions, payment processing, and currency conversion, most freelancers
                lose 12–20% of their gross income to fees they didn&apos;t anticipate.
              </p>
            </div>

            <div className="card-story-compact p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-7 h-7 text-leaf" />
              </div>
              <div className="text-sm font-bold text-text-primary mb-2">3x income potential</div>
              <p className="text-xs text-text-muted leading-relaxed">
                Freelancers who focus on one platform and optimize their profile see 3x the income growth
                compared to those who spread across 5+ platforms.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/blog" className="btn-secondary text-sm">
              <BookOpen className="w-4 h-4" />
              See the Full Research
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CATEGORIES — Story Style */}
      {/* ============================================ */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-2">Browse by Category</h2>
          <p className="text-sm text-text-muted mb-6">Find platforms that match your skills and goals.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map((cat, i) => (
              <Link
                key={cat.name}
                href={`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                className="card-story-compact flex items-center justify-between p-4 group"
              >
                <div>
                  <span className="text-sm font-medium text-text-primary group-hover:text-leaf transition-colors">
                    {cat.name}
                  </span>
                  <span className="block text-[10px] text-text-muted mt-0.5">
                    {cat.count} platforms
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-leaf transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIAL — Real Freelancer Story */}
      {/* ============================================ */}
      <section className="px-6 py-12 bg-white/40">
        <div className="max-w-5xl mx-auto">
          <div className="card-story p-8 md:p-10 relative">
            <Quote className="w-10 h-10 text-leaf-lighter/30 absolute top-6 left-6" />
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <p className="text-lg md:text-xl text-text-primary font-medium leading-relaxed mb-6">
                &ldquo;I was jumping between three platforms every day, making a few hundred dollars here and
                there. FreelancePicks&apos;s Platform Fit Score showed me I was a perfect match for Toptal&apos;s
                model — three months later I was earning six figures.&rdquo;
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-leaf-subtle flex items-center justify-center">
                  <span className="text-sm font-bold text-leaf">JD</span>
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-text-primary">Jordan Delgado</div>
                  <div className="text-xs text-text-muted">Sr. Full-Stack Developer, Denver</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BLOG — Latest Research */}
      {/* ============================================ */}
      {latestPosts.length > 0 && (
        <section className="px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-text-primary">Latest Research</h2>
                <p className="text-sm text-text-muted mt-1">Data-driven insights from the FreelancePicks team.</p>
              </div>
              <Link href="/blog" className="text-sm text-leaf font-medium hover:underline flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {latestPosts.map((post: any, i: number) => (
                <Link
                  key={post.slug || i}
                  href={`/blog/${post.slug}`}
                  className="card-story-compact p-5 group"
                >
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-leaf-subtle text-leaf font-medium">
                    {post.category || "Research"}
                  </span>
                  <h3 className="text-sm font-bold text-text-primary mt-3 mb-1.5 group-hover:text-leaf transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-3 text-[10px] text-text-muted">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime || "3 min read"}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* CTA — Book a Session */}
      {/* ============================================ */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="card-story p-10 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-leaf via-leaf-lighter to-leaf" />
            <Leaf className="w-10 h-10 mx-auto mb-4 text-leaf animate-float" />
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
              Find Your Platform, Grow Your Income
            </h2>
            <p className="text-sm text-text-secondary mb-6 max-w-md mx-auto">
              Start with a free 15-minute discovery call. We&apos;ll analyze your situation
              and tell you exactly which platform fits your skills and income goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Book a Free Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="btn-secondary"
              >
                <Users className="w-4 h-4" />
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
