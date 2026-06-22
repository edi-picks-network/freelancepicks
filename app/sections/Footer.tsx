"use client";
import { Leaf, MapPin, Mail, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const FOOTER_SECTIONS = {
  Discover: [
    { name: 'All Platforms', href: '/' },
    { name: 'Freelance Blog', href: '/blog' },
    { name: 'Platform Index', href: '/blog' },
    { name: 'Research Reports', href: '/blog' },
  ],
  Studio: [
    { name: 'Our Story', href: '/about' },
    { name: 'The Team', href: '/about' },
    { name: 'Book a Session', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ],
  Support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Disclosure', href: '/disclosure' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border-soft bg-warm-bg/80">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-leaf to-leaf-light flex items-center justify-center shadow-sm">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold text-text-primary group-hover:text-leaf transition-colors">
                  FreelancePicks
                </span>
                <span className="text-[10px] text-text-muted font-medium -mt-0.5">
                  Freelance Platform Guide
                </span>
              </div>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              We help freelancers navigate the platform economy. Denver-based strategy studio
              with a mission to maximize YOUR freelance earnings through data-driven platform
              selection and optimization.
            </p>
            <div className="flex items-center gap-4 text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-leaf-lighter" />
                Denver, Colorado
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-leaf-lighter" />
                hello@freelancepicks.io
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(FOOTER_SECTIONS).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-text-primary mb-4">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-text-muted hover:text-leaf transition-colors flex items-center gap-1"
                      >
                        {link.name}
                        <ExternalLink className="w-2.5 h-2.5 opacity-0 -ml-1 group-hover:opacity-100 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-border-soft flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} FreelancePicks Studio. Built for freelancers, by freelancers.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-text-muted hover:text-leaf transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-text-muted hover:text-leaf transition-colors">
              Terms
            </Link>
            <Link href="/disclosure" className="text-xs text-text-muted hover:text-leaf transition-colors">
              Disclosure
            </Link>
            <a
              href="https://freelancepicks.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-leaf transition-colors flex items-center gap-1"
            >
              freelancepicks.io
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
