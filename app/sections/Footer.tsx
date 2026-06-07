"use client";
import { Users, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

interface FooterLink {
  name: string;
  href: string;
}

const FOOTER_LINKS: Record<string, FooterLink[]> = {
  Product: [
    { name: 'Browse Freelance Platforms', href: '/' },
    { name: 'Platform Categories', href: '/' },
    { name: 'Platform Comparisons', href: '/' },
    { name: 'API Access', href: '/' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '#' },
    { name: 'Press Kit', href: '#' },
  ],
  Resources: [
    { name: 'Documentation', href: '/' },
    { name: 'Help Center', href: '/contact' },
    { name: 'Community', href: '#' },
    { name: 'Status', href: '#' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Affiliate Disclosure', href: '/disclosure' },
    { name: 'Cookie Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[#2D2D6B] bg-[#0A0A1A]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-[#F0F0FF]">FreelanceHubs</span>
            </Link>
            <p className="text-sm text-[#C4B5FD] leading-relaxed mb-6">
              The most comprehensive directory of freelance platforms. Discover, compare, and read reviews for the best freelance marketplaces for remote work opportunities.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-[#111128] border border-[#2D2D6B] flex items-center justify-center text-[#C4B5FD] hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#111128] border border-[#2D2D6B] flex items-center justify-center text-[#C4B5FD] hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#111128] border border-[#2D2D6B] flex items-center justify-center text-[#C4B5FD] hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-[#F0F0FF] mb-4">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#C4B5FD] hover:text-[#8B5CF6] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-[#2D2D6B] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6B7280]">
            &copy; {new Date().getFullYear()} FreelanceHubs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-[#6B7280] hover:text-[#C4B5FD] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-[#6B7280] hover:text-[#C4B5FD] transition-colors">
              Terms
            </Link>
            <a href="#" className="text-sm text-[#6B7280] hover:text-[#C4B5FD] transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
