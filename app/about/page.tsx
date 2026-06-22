import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, MapPin, TrendingUp, Users, BarChart3, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story — FreelancePicks Studio",
  description:
    "FreelancePicks is a Denver-based freelance platform strategy studio. We help freelancers maximize earnings through data-driven platform selection and optimization.",
};

const TEAM = [
  {
    name: "Addison Scott",
    role: "CEO & Strategy Lead",
    initials: "AS",
    bio: "Former VP of Product at a major freelance marketplace. Addison spent 12 years building platform-side tools for millions of freelancers before realizing the biggest gap wasn't on the platform side — it was helping freelancers themselves navigate the ecosystem. She founded FreelancePicks in 2023 to bridge that gap. Her framework for Platform Fit Scoring has helped over 200 freelancers optimize their income.",
  },
  {
    name: "Ronan Galli",
    role: "Backend & Data Infrastructure",
    initials: "RG",
    bio: "Systems architect with a decade of experience building data pipelines at scale. Ronan designed the Freelance Platform Index — a real-time ranking engine that tracks job volume, average rates, and competition across 40+ platforms. His infrastructure processes over 2 million data points weekly, delivering actionable market intelligence to FreelancePicks clients.",
  },
  {
    name: "Zoey Van Leeuwen",
    role: "Mobile & Frontend Architecture",
    initials: "ZV",
    bio: "Mobile-first engineer who built platform tools used by 500K+ freelancers worldwide. Zoey brings deep expertise in how platform UX affects freelancer success rates. She developed FreelancePicks's Portfolio Optimization System, which analyzes how freelancers present themselves across platforms and recommends profile changes that consistently improve win rates by 30%+.",
  },
];

const STATS = [
  { value: "200+", label: "Freelancers Helped" },
  { value: "$4.2M", label: "Additional Revenue Generated" },
  { value: "47%", label: "Average Income Lift" },
  { value: "98%", label: "Client Satisfaction" },
];

const VALUES = [
  {
    icon: TrendingUp,
    title: "Data Over Opinion",
    desc: "Every recommendation is backed by real platform data — job volumes, fee structures, competition levels, and client quality scores. We don't guess; we analyze.",
  },
  {
    icon: Users,
    title: "Freelancer-First",
    desc: "We don't take affiliate fees or kickbacks from platforms. Our only incentive is your success. If a platform isn't right for you, we'll tell you — even if it's popular.",
  },
  {
    icon: BarChart3,
    title: "Continuous Intelligence",
    desc: "Platform markets shift weekly. Our Freelance Platform Index updates in real-time, so your strategy adapts as conditions change. Static advice is outdated advice.",
  },
  {
    icon: Award,
    title: "Proven Methodology",
    desc: "Our Platform Fit Score™ system has been refined through 200+ client engagements. The average client sees a 47% income increase within 90 days of following our recommendations.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative pt-28 pb-20 px-6">
      <div className="max-w-[900px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-5 border border-border-soft bg-leaf-subtle/50 text-leaf">
            <MapPin className="w-3.5 h-3.5" />
            Based in Denver, Colorado
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
            From the Platform to{" "}
            <span className="text-gradient-leaf">Your Success</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            FreelancePicks was born from a simple realization: freelancers have 40+ platform options,
            endless review sites, and almost no real guidance. We started FreelancePicks to change that.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="card-story-compact p-5 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-leaf mb-1">{stat.value}</div>
              <div className="text-xs text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Our Story</h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              In early 2023, Addison Scott was wrapping up a decade-long tenure as VP of Product at one of
              the world&apos;s largest freelance marketplaces. She had helped build platform features used by
              millions of freelancers — but something bothered her.
            </p>
            <p>
              Every week, she&apos;d hear from freelancers who were working harder than ever but earning less.
              They were on the wrong platforms. They were competing in oversaturated categories. They were
              losing 20% of their income to fees they didn&apos;t understand.
            </p>
            <p>
              The problem wasn&apos;t a lack of platforms. It was a lack of <em>navigation</em>. Freelancers
              needed someone who understood the platforms from the inside — someone who could cut through
              the marketing noise and give straight answers.
            </p>
            <p>
              Addison teamed up with Ronan Galli (data infrastructure) and Zoey Van Leeuwen (platform UX
              architecture), and FreelancePicks was born. We don&apos;t compare software tools. We help
              <strong> you</strong> — the freelancer — choose which freelance platform deserves your time,
              and how to maximize every hour you spend there.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Meet the FreelancePicks Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="card-story-compact p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-leaf to-leaf-lighter flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-white">{member.initials}</span>
                </div>
                <h3 className="text-base font-bold text-text-primary mb-0.5">{member.name}</h3>
                <p className="text-xs text-leaf font-medium mb-3">{member.role}</p>
                <p className="text-sm text-text-muted leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="card-story-compact p-6"
                >
                  <div className="w-11 h-11 rounded-lg bg-leaf-subtle flex items-center justify-center mb-3">
                    <Icon className="w-5.5 h-5.5 text-leaf" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-1.5">{value.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center card-story-compact p-10">
          <h2 className="text-2xl font-bold text-text-primary mb-3">
            Ready to Find Your Platform?
          </h2>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto text-sm">
            Book a free 15-minute discovery call. We&apos;ll look at your current platform strategy
            and tell you if we can help — no strings attached.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Book a Free Call <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="btn-secondary"
            >
              Browse Platforms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
