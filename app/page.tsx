"use client";

import { useState, useMemo } from "react";
import {
  Search, ArrowRight, Star, Users, Layers, BookOpen,
  Clock, Tag, Filter, ChevronRight,
  Globe, BarChart3, Zap, Sparkles,
  Grid3X3, List, TrendingUp
} from "lucide-react";
import Link from "next/link";

import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";

const BLUE = "#3B82F6";
const BLUE_LIGHT = "#60A5FA";
const SITE_NAME = "FreelancePicks";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

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
  }, [ALL_TOOLS]);

  const filteredTools = useMemo(() => {
    if (!searchQuery) return ALL_TOOLS.slice(0, 12);
    return ALL_TOOLS.filter((t: any) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 12);
  }, [ALL_TOOLS, searchQuery]);

  const popularResources = useMemo(
    () => [...ALL_TOOLS].sort((a: any, b: any) => b.rating - a.rating).slice(0, 8),
    [ALL_TOOLS]
  );

  const latestPosts = useMemo(
    () => [...BLOG_POSTS]
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 4),
    [BLOG_POSTS]
  );

  return (
    <div className="min-h-screen bg-white">
      {/* ======== HERO ======== */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 border border-blue-100 bg-blue-50 text-blue-600">
            <Sparkles className="w-3.5 h-3.5" />
            Discover the Best Freelance Platforms for Remote Work
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
            Find Your Next{" "}
            <span className="text-gradient">
              Freelance Opportunity
            </span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto mb-8 text-lg">
            Curated directory of the best freelance platforms. Compare features, read reviews, and find the perfect marketplace for your skills.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <div className="flex items-center bg-white border border-gray-200 rounded-xl px-5 py-3.5 shadow-sm focus-within:border-blue-400 focus-within:shadow-md transition-all">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder={`Search ${ALL_TOOLS.length}+ freelance platforms...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-gray-900 placeholder-gray-400 outline-none flex-1 text-base"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.slice(0, 8).map((cat) => (
              <Link
                key={cat.name}
                href={`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                {cat.name}
                <span className="ml-1 text-gray-300">{cat.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Stats Bar ======== */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-gray-900">
              {searchQuery ? `Results for "${searchQuery}"` : "Top Freelance Platforms"}
            </h2>
            <span className="text-xs text-gray-500 bg-white border border-gray-200 px-2 py-1 rounded-lg">
              {searchQuery ? filteredTools.length : ALL_TOOLS.length} platforms
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-blue-50 text-blue-600" : "text-gray-400 hover:text-gray-600"}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-colors ${viewMode === "list" ? "bg-blue-50 text-blue-600" : "text-gray-400 hover:text-gray-600"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ======== Platform Grid ======== */}
      <section className="px-6 py-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className={viewMode === "grid"
            ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            : "space-y-3"}>
            {(searchQuery ? filteredTools : popularResources).map((tool: any, i: number) => (
              viewMode === "grid" ? (
                <Link
                  key={tool.id || i}
                  href={`/tools/${tool.id}`}
                  className="group card overflow-hidden"
                >
                  <div className="aspect-[16/9] flex items-center justify-center bg-blue-50/40">
                    <div className="text-center">
                      <Users className="w-8 h-8 mx-auto text-blue-300/50" />
                    </div>
                    <span className="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-medium border border-green-100">
                      {tool.pricing?.includes("Free") || tool.pricing?.includes("From $0") ? "Free" : "Popular"}
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 line-clamp-1">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{tool.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span className="text-xs text-gray-700 font-medium">{tool.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-gray-400">
                        <Users className="w-3 h-3" />
                        {(Math.floor(Math.random() * 5000) + 100).toLocaleString()}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-[10px] text-gray-400">
                      <Tag className="w-3 h-3" />
                      {tool.category}
                    </div>
                  </div>
                </Link>
              ) : (
                <Link
                  key={tool.id || i}
                  href={`/tools/${tool.id}`}
                  className="flex items-center gap-3 card p-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">{tool.name}</h3>
                    <p className="text-xs text-gray-500">{tool.category}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="text-xs text-gray-700 font-medium">{tool.rating}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* ======== Categories ======== */}
      <section className="px-6 py-12 bg-gray-50/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map((cat, i) => (
              <Link
                key={cat.name}
                href={`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <span className="text-sm text-gray-900 font-medium">{cat.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">{cat.count} platforms</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Blog ======== */}
      {latestPosts.length > 0 && (
        <section className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                Latest Articles
              </h2>
              <Link href="/blog" className="text-sm flex items-center gap-1 text-blue-500 hover:text-blue-600 font-medium">
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {latestPosts.map((post: any, i: number) => (
                <Link
                  key={post.slug || i}
                  href={`/blog/${post.slug}`}
                  className="flex gap-4 card p-5 group"
                >
                  <div className="w-1 flex-shrink-0 rounded-full bg-blue-500" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium">
                      {post.category || "Article"}
                    </span>
                    <h3 className="text-sm font-semibold text-gray-900 mt-2 mb-1 group-hover:text-blue-600 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 mt-2 text-[10px] text-gray-400">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime || "3 min"}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======== CTA ======== */}
      <section className="px-6 py-16 bg-gray-50/60">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl p-10 text-center overflow-hidden bg-gradient-to-br from-blue-50 to-white border border-blue-100">
            <div className="relative">
              <Users className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Start Your Freelance Journey
              </h2>
              <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
                All platforms are reviewed and ranked to help you find the best fit.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-blue-500 hover:bg-blue-600 transition-all shadow-sm hover:shadow-md"
              >
                Browse All Platforms <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
