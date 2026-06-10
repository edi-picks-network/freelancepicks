"use client";
import { useState, useEffect } from 'react';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const NAV_MAIN = [
  { label: 'Platforms', href: '/' },
  { label: 'For Freelancers', href: '/blog' },
  { label: 'Our Story', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-warm-card/90 backdrop-blur-lg border-b border-border-soft shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-leaf to-leaf-light flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold text-text-primary group-hover:text-leaf transition-colors">
              LeafConsulting
            </span>
            <span className="text-[10px] text-text-muted font-medium -mt-0.5">
              Freelance Platform Guide
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_MAIN.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-leaf rounded-lg hover:bg-leaf-subtle/60 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/blog"
            className="btn-secondary text-xs px-4 py-2"
          >
            Read Our Research
          </Link>
          <Link
            href="/contact"
            className="btn-primary text-xs px-4 py-2"
          >
            Book a Session
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-warm-card border-b border-border-soft shadow-sm">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {NAV_MAIN.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-leaf hover:bg-leaf-subtle/60 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border-soft space-y-2">
              <Link
                href="/blog"
                className="block w-full px-5 py-3 text-sm font-medium text-leaf bg-leaf-subtle rounded-lg text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Read Our Research
              </Link>
              <Link
                href="/contact"
                className="block w-full px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-leaf to-leaf-light rounded-lg text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Session
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
