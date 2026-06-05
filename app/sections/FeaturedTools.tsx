"use client";
import { motion } from 'framer-motion';
import { Star, ArrowRight, Users, Globe, PenTool, Code2, BookOpen, DollarSign, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  icon: LucideIcon;
  pricing: string;
}

const FEATURED_TOOLS: Tool[] = [
  {
    id: 'upwork',
    name: 'Upwork',
    category: 'General Freelance',
    rating: 4.5,
    reviews: 125000,
    description: 'The world\'s largest freelance marketplace connecting businesses with independent talent across all categories.',
    icon: Globe,
    pricing: 'From 10% fee',
  },
  {
    id: 'fiverr',
    name: 'Fiverr',
    category: 'General Freelance',
    rating: 4.3,
    reviews: 98000,
    description: 'Leading marketplace for creative and digital services starting at $5. Perfect for small projects and gig-based work.',
    icon: PenTool,
    pricing: 'From 20% fee',
  },
  {
    id: 'toptal',
    name: 'Toptal',
    category: 'Tech & Dev',
    rating: 4.7,
    reviews: 12000,
    description: 'Exclusive network of top freelance software engineers, designers, and finance experts. Rigorous screening process.',
    icon: Code2,
    pricing: 'From $60/hr',
  },
  {
    id: 'freelancer',
    name: 'Freelancer',
    category: 'General Freelance',
    rating: 4.1,
    reviews: 56000,
    description: 'Global freelancing platform with contest-based hiring and project bidding for various skill categories.',
    icon: Briefcase,
    pricing: 'From 10% fee',
  },
];

export default function FeaturedTools() {
  return (
    <section className="relative pb-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[#F59E0B]" />
            <h2 className="text-lg font-bold text-[#F0F0FF]">Editor&apos;s Choice Freelance Platforms</h2>
          </div>
          <a
            href="/#all-tools"
            className="hidden md:flex items-center gap-1 text-sm text-[#8B5CF6] hover:text-[#A78BFA] transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURED_TOOLS.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.a
                key={tool.id}
                href={`/tools/${tool.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group block"
              >
                <article className="bg-[#111128] border border-[#2D2D6B] rounded-xl p-5 hover:shadow-lg hover:shadow-[#8B5CF6]/5 hover:border-[#8B5CF6] transition-all h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1A1A3E] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-[#8B5CF6]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold text-[#F0F0FF] group-hover:text-[#8B5CF6] transition-colors truncate">
                        {tool.name}
                      </h3>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8B5CF6]">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#C4B5FD] leading-relaxed line-clamp-1 flex-grow">
                    {tool.description}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#2D2D6B]">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                      <span className="text-sm font-bold text-[#F0F0FF]">{tool.rating}</span>
                      <span className="text-xs text-[#6B7280]">({tool.reviews.toLocaleString()} reviews)</span>
                    </div>
                    <span className="text-xs text-[#6B7280]">{tool.pricing}</span>
                  </div>
                </article>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-6 text-center md:hidden">
          <a
            href="/#all-tools"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111128] border border-[#2D2D6B] rounded-full text-sm text-[#8B5CF6] hover:text-[#A78BFA] transition-colors"
          >
            View All Tools <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
