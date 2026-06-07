"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Users, BarChart3, CreditCard, Briefcase, Zap, Globe, PenTool } from 'lucide-react';

const CATEGORIES = [
  { label: 'General Freelance', icon: Users },
  { label: 'Tech & Dev', icon: BarChart3 },
  { label: 'Design & Creative', icon: PenTool },
  { label: 'Writing & Content', icon: Globe },
  { label: 'Finance & Accounting', icon: CreditCard },
  { label: 'Marketing', icon: Zap },
  { label: 'Virtual Assistant', icon: Briefcase },
  { label: 'Consulting', icon: Users },
];

export default function Hero() {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2D2D6B] bg-[#111128] text-xs font-medium text-[#C4B5FD] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#8B5CF6] pulse-dot" />
          Curated Freelance Directory — Updated Weekly
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#F0F0FF] tracking-tight leading-[1.05] mb-6 max-w-4xl"
        >
          Find the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]">
            Best Freelance
          </span>{' '}
          Platform for You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-[#C4B5FD] max-w-2xl mb-10 leading-relaxed"
        >
          Compare top freelance platforms with expert reviews, fee comparisons, and detailed analysis. Find the perfect marketplace for your skills.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSubmit}
          className={`w-full max-w-[640px] flex items-center rounded-full border transition-all duration-300 ${
            isFocused
              ? 'border-[#8B5CF6] shadow-glow-sm'
              : 'border-[#2D2D6B] bg-[#111128]'
          }`}
        >
          <Search className={`ml-5 w-5 h-5 transition-colors duration-300 flex-shrink-0 ${
            isFocused ? 'text-[#8B5CF6]' : 'text-[#6B7280]'
          }`} />
          <input
            type="search"
            placeholder="Search freelance platforms by name, category, or feature..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="flex-1 py-4 px-3 bg-transparent text-[#F0F0FF] placeholder:text-[#6B7280] outline-none text-base"
          />
          <button
            type="submit"
            className="mr-2 px-6 py-2.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-sm font-medium rounded-full transition-colors flex-shrink-0"
          >
            Search
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-8"
        >
          <span className="text-xs font-medium text-[#6B7280] mr-1">Popular:</span>
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.label}
                href={`/category/${cat.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A1A3E] border border-[#2D2D6B] text-xs font-medium text-[#C4B5FD] hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-colors"
              >
                <Icon className="w-3 h-3" />
                {cat.label}
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
