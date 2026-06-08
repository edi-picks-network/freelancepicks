"use client";
import { Users } from 'lucide-react';
import Link from 'next/link';

interface FooterLink {
  name: string;
  href: string;
}

const FOOTER_LINKS: Record<string, FooterLink[]> = {
  Product: [
    { name: 'Browse Platforms', href: '/' },
    { name: 'Categories', href: '/' },
    { name: 'Comparisons', href: '/' },
    { name: 'Blog', href: '/blog' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  Resources: [
    { name: 'Help Center', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Affiliate Disclosure', href: '/disclosure' },
    { name: 'Sitemap', href: '/sitemap.xml' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">FreelancePicks</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              The most comprehensive directory of freelance platforms. Discover, compare, and read reviews for the best freelance marketplaces for remote work opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
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

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} FreelancePicks. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-blue-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-blue-600 transition-colors">
              Terms
            </Link>
            <Link href="/disclosure" className="text-sm text-gray-400 hover:text-blue-600 transition-colors">
              Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
