"use client";

import { useState, useMemo } from "react";
import {
  Search, ArrowRight, Star, Users, Layers, BookOpen,
  Clock, Tag, Filter, CheckCircle2, ChevronRight,
  Globe, BarChart3, Zap, Sparkles, FileText, Grid3X3,
  List, Heart, Share2, TrendingUp, DownloadCloud
} from "lucide-react";
import Link from "next/link";

// ============================================================
// 模板F：FreelancePicks 首页 — 简洁目录式
// ============================================================

import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";

const ACCENT_COLOR = "#6366F1";
const SECONDARY_ACCENT = "#818CF8";
const SITE_NAME = "FreelancePicks";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // 分类
  const categories = useMemo(() => {
    const m = new Map<string, { count: number; downloads?: number }>();
    for (const t of ALL_TOOLS) {
      if (!m.has(t.category)) m.set(t.category, { count: 0 });
      const s = m.get(t.category)!;
      s.count++;
    }
    return [...m.entries()]
      .map(([name, s]) => ({ name, count: s.count }))
      .sort((a, b) => b.count - a.count);
  }, [ALL_TOOLS]);

  // 搜索过滤
  const filteredTools = useMemo(() => {
    if (!searchQuery) return ALL_TOOLS.slice(0, 12);
    return ALL_TOOLS.filter((t: any) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 12);
  }, [ALL_TOOLS, searchQuery]);

  // 热门资源（按评分）
  const popularResources = useMemo(
    () => [...ALL_TOOLS].sort((a: any, b: any) => b.rating - a.rating).slice(0, 8),
    [ALL_TOOLS]
  );

  // 最新博客
  const latestPosts = useMemo(
    () => [...BLOG_POSTS]
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 4),
    [BLOG_POSTS]
  );

  return (
    <div className="min-h-screen bg-[#0A0A14]">
      {/* ======== HERO ======== */}
      <section className="relative pt-24 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A14] via-[#0F0A20] to-[#0A0A14]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-[0.06] blur-[100px]"
          style={{ background: `radial-gradient(circle, ${ACCENT_COLOR}, ${SECONDARY_ACCENT})` }} />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 border"
            style={{ borderColor: `${ACCENT_COLOR}30`, color: ACCENT_COLOR, backgroundColor: `${ACCENT_COLOR}10` }}>
            <Users className="w-3.5 h-3.5" />
            Discover the Best Freelance Platforms for Remote Work
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Find Your Next{" "}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, ${ACCENT_COLOR}, ${SECONDARY_ACCENT})` }}>
              Freelance Opportunity
            </span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Curated directory of the best freelance platforms. Compare features, read reviews, and find the perfect marketplace for your skills.
          </p>
          {/* 搜索框 */}
          <div className="max-w-2xl mx-auto relative">
            <div className="flex items-center bg-[#12121E] border border-[#1E1E32] rounded-xl px-5 py-3.5">
              <Search className="w-5 h-5 text-gray-500 mr-3" />
              <input
                type="text"
                placeholder={`Search ${ALL_TOOLS.length}+ freelance platforms...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white placeholder-gray-500 outline-none flex-1 text-base"
              />
            </div>
          </div>
          {/* 分类快速入口 */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.slice(0, 8).map((cat) => (
              <Link
                key={cat.name}
                href={`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                className="text-xs px-3 py-1.5 rounded-full border border-[#1E1E32] text-gray-400 hover:border-gray-600 hover:text-gray-200 transition-all"
              >
                {cat.name}
                <span className="ml-1 text-gray-600">{cat.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======== 视图切换 & 统计 ======== */}
      <section className="px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-white">
              {searchQuery ? `Results for "${searchQuery}"` : "Top Freelance Platforms"}
            </h2>
            <span className="text-xs text-gray-500 bg-[#12121E] px-2 py-1 rounded-lg">
              {searchQuery ? filteredTools.length : ALL_TOOLS.length} platforms
            </span>
          </div>
          <div className="flex items-center gap-2 bg-[#12121E] rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-[#1E1E32] text-white" : "text-gray-500 hover:text-gray-300"}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-[#1E1E32] text-white" : "text-gray-500 hover:text-gray-300"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ======== 平台展示区 ======== */}
      <section className="px-6 py-4 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className={viewMode === "grid"
            ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            : "space-y-3"}>
            {(searchQuery ? filteredTools : popularResources).map((tool: any, i: number) => (
              viewMode === "grid" ? (
                <Link
                  key={tool.id || i}
                  href={`/tools/${tool.id}`}
                  className="group bg-[#0F0F1E] border border-[#1A1A2E] rounded-xl overflow-hidden hover:border-[#2A2A4E] transition-all"
                >
                  {/* 平台缩略图 */}
                  <div className="aspect-[16/9] flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${ACCENT_COLOR}15, ${i % 2 === 0 ? SECONDARY_ACCENT : ACCENT_COLOR}08)` }}>
                    <div className="text-center">
                      <Users className="w-8 h-8 mx-auto opacity-30"
                        style={{ color: i % 2 === 0 ? ACCENT_COLOR : SECONDARY_ACCENT }} />
                    </div>
                    {/* 免费标签 */}
                    <span className="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 font-medium">
                      {tool.pricing?.includes("Free") || tool.pricing?.includes("From $0") ? "Free" : "Popular"}
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-white group-hover:underline line-clamp-1">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{tool.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs text-gray-300">{tool.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-gray-500">
                        <Users className="w-3 h-3" />
                        {(Math.floor(Math.random() * 5000) + 100).toLocaleString()}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-[10px] text-gray-600">
                      <Tag className="w-3 h-3" />
                      {tool.category}
                    </div>
                  </div>
                </Link>
              ) : (
                <Link
                  key={tool.id || i}
                  href={`/tools/${tool.id}`}
                  className="flex items-center gap-3 bg-[#0F0F1E] border border-[#1A1A2E] rounded-xl p-3 hover:border-[#2A2A4E] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${ACCENT_COLOR}20, ${SECONDARY_ACCENT}10)` }}>
                    <Users className="w-5 h-5" style={{ color: ACCENT_COLOR }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white">{tool.name}</h3>
                    <p className="text-xs text-gray-500">{tool.category}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs text-gray-300">{tool.rating}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* ======== 分类浏览 ======== */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-bold text-white mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map((cat, i) => (
              <Link
                key={cat.name}
                href={`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                className="flex items-center justify-between bg-[#0F0F1E] border border-[#1A1A2E] rounded-xl px-4 py-3 hover:border-[#2A2A4E] transition-all"
              >
                <span className="text-sm text-white font-medium">{cat.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{cat.count} platforms</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======== 博客 ======== */}
      {latestPosts.length > 0 && (
        <section className="px-6 py-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-white">
                Latest Articles
              </h2>
              <Link href="/blog" className="text-xs flex items-center gap-1"
                style={{ color: ACCENT_COLOR }}>
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {latestPosts.map((post: any, i: number) => (
                <Link
                  key={post.slug || i}
                  href={`/blog/${post.slug}`}
                  className="flex gap-4 bg-[#0F0F1E] border border-[#1A1A2E] rounded-xl p-5 hover:border-[#2A2A4E] transition-all group"
                >
                  <div className="w-1 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: i % 2 === 0 ? ACCENT_COLOR : SECONDARY_ACCENT }} />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#12121E] text-gray-400">
                      {post.category || "Article"}
                    </span>
                    <h3 className="text-sm font-semibold text-white mt-2 mb-1 group-hover:underline line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 mt-2 text-[10px] text-gray-600">
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
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl p-10 text-center overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${ACCENT_COLOR}15, ${SECONDARY_ACCENT}08)` }}>
            <div className="relative">
              <Users className="w-8 h-8 mx-auto mb-3" style={{ color: ACCENT_COLOR }} />
              <h2 className="text-xl font-bold text-white mb-2">
                Start Your Freelance Journey
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                All platforms are reviewed and ranked to help you find the best fit.
              </p>
              <Link
                href="/all-tools"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: ACCENT_COLOR }}
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
