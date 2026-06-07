import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  DollarSign,
  ChevronRight,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { ALL_TOOLS } from "@/data/tools";

const ALL_CATEGORIES = Array.from(new Set(ALL_TOOLS.map((t) => t.category)));

function slugify(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

function deslugify(slug: string): string | undefined {
  return ALL_CATEGORIES.find((c) => slugify(c) === slug);
}

const BUYING_GUIDES: Record<string, string> = {
  "General Freelance":
    "When choosing a general freelance platform, consider your experience level, preferred work type, and income goals. Upwork offers the widest variety of projects across all categories, while Freelancer.com provides contest-based opportunities. Key factors include platform fees, payment protection, client quality, and dispute resolution. Look for platforms with escrow payment systems, robust communication tools, and strong community support.",
  "Design & Creative":
    "Designers have specialized platform options depending on their medium. 99designs excels for logo and graphic design through contest-based selection. Dribbble is ideal for UI/UX designers seeking portfolio-based opportunities. Consider platform commission rates, project visibility, and the quality of creative briefs. Niche platforms often provide better client matching for specialized creative work.",
  "Tech & Development":
    "For developers and technical freelancers, Toptal offers premium rates through rigorous vetting. Upwork provides the broadest range of development projects. Gun.io focuses exclusively on connecting developers with tech companies. Evaluate each platform's screening process, project scoping tools, and support for version control integration.",
  "Writing & Content":
    "Content creators should choose platforms that match their expertise level and writing niche. Contently and ClearVoice connect writers with premium content marketing clients. WriterAccess offers a rating system that rewards quality work. Consider platform editorial standards, payment rates per word or project, and the availability of long-term contracts versus one-off assignments.",
  "Admin & Virtual Assistance":
    "Virtual assistants and administrative freelancers benefit from platforms with strong communication tools and scheduling features. Upwork and Freelancer.com have the largest selection of administrative projects. Guru offers a streamlined interface for finding support roles. Look for platforms with time tracking, milestone-based payments, and clear scope-of-work templates.",
};;

const FAQS: Record<string, { q: string; a: string }[]> = {
  "General Freelance": [
    {
      q: "Which general freelance platform is best for beginners?",
      a: "For beginners, Upwork and Fiverr are the most accessible platforms. Upwork offers a wide range of entry-level projects, while Fiverr lets you create gigs that clients purchase directly. Both have robust support systems and large client bases. Start with smaller projects to build your rating and portfolio before targeting higher-value contracts.",
    },
    {
      q: "How much do general freelance platforms charge in fees?",
      a: "Fees vary significantly. Upwork charges a sliding fee starting at 20% for the first $500 with a client, dropping to 5% after $10,000. Fiverr takes 20% of each transaction. Freelancer.com charges 10% for fixed-price projects. PeoplePerHour takes 20% of earnings. Always factor platform fees into your pricing strategy.",
    },
    {
      q: "What should I include in my freelance profile?",
      a: "A strong profile includes a professional photo, clear headline describing your specialization, detailed work history with quantifiable achievements, portfolio samples, relevant certifications, and a personalized bio that speaks to your target clients. Completing platform skills tests and earning badges also boosts your profile visibility.",
    },
  ],
  "Design & Creative": [
    {
      q: "Which platform is best for graphic designers?",
      a: "99designs is excellent for graphic designers specializing in logos, branding, and print design. Dribbble is the go-to platform for UI/UX designers and digital creatives. DesignCrowd offers contest-based opportunities across multiple design disciplines. For specialized work like illustration or motion graphics, consider Envato Studio.",
    },
    {
      q: "How do design contests work on freelance platforms?",
      a: "On contest-based platforms like 99designs and DesignCrowd, clients post a design brief and multiple freelancers submit concepts. The client selects a winner who receives the prize payment. While this model can yield good payouts for winners, many designers prefer direct-hire platforms where they are compensated for all work submitted.",
    },
    {
      q: "What is the best way to showcase a design portfolio?",
      a: "Create a focused portfolio that highlights your best 10-15 projects rather than everything you have done. Include case studies showing the problem, process, and results. Use high-quality mockups, before/after comparisons, and client testimonials. On platforms like Dribbble, consistency in style and regular posting helps build your following.",
    },
  ],
  "Tech & Development": [
    {
      q: "Is Toptal worth the rigorous screening process?",
      a: "Toptal's screening process accepts only the top 1-3% of applicants, but those who pass gain access to premium clients and higher rates (typically $100-200+/hour). The process includes language and personality tests, live coding challenges, and test projects. For experienced developers seeking quality over quantity, the investment is worthwhile.",
    },
    {
      q: "What development niches are in highest demand?",
      a: "Currently, AI/ML engineering, blockchain development, cloud architecture (AWS/Azure/GCP), full-stack JavaScript (React/Node.js), and cybersecurity are the highest-paying niches. Mobile development (React Native, Flutter) and DevOps engineering also have strong demand. Specializing in a high-demand niche can significantly increase your rates.",
    },
    {
      q: "How do I win technical freelance projects?",
      a: "Beyond technical skills, clients value clear communication, reliability, and understanding of business requirements. Submit proposals that demonstrate you have read the project brief, ask thoughtful technical questions, and include relevant portfolio examples. Consider offering a small paid proof-of-concept for complex projects to build trust.",
    },
  ],
  "Writing & Content": [
    {
      q: "Which writing platform pays the best rates?",
      a: "Contently and ClearVoice offer premium rates ($0.50-$2.00/word) but require experience and strong portfolios. WriterAccess pays based on your rating tier, with top-rated writers earning significantly more. ProBlogger and BloggingPro list mid-range opportunities. Upwork has the widest range from entry-level to premium writing projects.",
    },
    {
      q: "How do I increase my writing rates on platforms?",
      a: "Build a portfolio of published work in your niche, collect strong client reviews, complete platform skill assessments, and specialize in a high-value writing type (e.g., white papers, case studies, technical documentation). Raise rates gradually by 10-20% every few months as you gain reviews and repeat clients.",
    },
    {
      q: "What is more profitable: per-word or per-project pricing?",
      a: "Per-project pricing is generally more profitable once you know how quickly you work. A $200 flat fee for a 1,000-word article is $0.20/word, but if it takes you 2 hours, that is $100/hour. Per-word pricing protects you from scope creep. Start with per-word, then transition to project pricing as you gain experience.",
    },
  ],
  "Admin & Virtual Assistance": [
    {
      q: "What skills are most in-demand for virtual assistants?",
      a: "Top in-demand VA skills include calendar management, email management, CRM administration (HubSpot, Salesforce), social media scheduling, bookkeeping (QuickBooks, Xero), project management (Asana, Trello), and customer service. Technical skills like WordPress management and basic graphic design increase your marketability.",
    },
    {
      q: "How do I set rates as a virtual assistant?",
      a: "VA rates vary widely based on experience and skills. Beginners on Upwork typically earn $10-20/hour, while experienced VAs with specialized skills command $30-60/hour. Consider offering package pricing for recurring tasks. Platforms like Belay and Time Etc offer higher rates for experienced VAs with verified skills.",
    },
    {
      q: "What tools should every virtual assistant master?",
      a: "Essential tools include Google Workspace or Microsoft 365, project management software (Asana, Trello, ClickUp), communication tools (Slack, Zoom), password managers (LastPass, 1Password), time tracking (Toggl, Harvest), and booking tools (Calendly, Acuity). Proficiency in these tools can justify higher rates.",
    },
  ],
};function getDefaultBuyingGuide(category: string): string {
  return `When evaluating ${category.toLowerCase()} platforms, consider your specific skills, experience level, budget, and income goals. Key evaluation criteria include platform fees, payment protection, client quality, support availability, and matching algorithms. Always take advantage of free signup and test the platform with a few proposals before committing.`;
}

function getDefaultFAQs(category: string): { q: string; a: string }[] {
  return [
    {
      q: `What is the best ${category.toLowerCase()} freelance platform?`,
      a: `The best ${category.toLowerCase()} freelance platform depends on your specific needs. Our rankings are based on verified user reviews, feature analysis, and expert evaluation. Compare the top-rated platforms above to find the best fit for your freelance career.`,
    },
    {
      q: `How much does ${category.toLowerCase()} freelance platform charge?`,
      a: `Pricing varies widely across platforms. Most ${category.toLowerCase()} freelance platforms charge a commission on earnings or offer subscription plans. See individual platform pages for detailed pricing information.`,
    },
    {
      q: `What features should I look for in a ${category.toLowerCase()} freelance platform?`,
      a: `Essential features include strong client matching, payment protection, dispute resolution, communication tools, profile customization, and responsive support. Look for platforms with positive freelancer reviews and transparent fee structures.`,
    },
  ];
}

export function generateStaticParams() {
  return ALL_CATEGORIES.map((cat) => ({
    slug: slugify(cat),
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const category = deslugify(params.slug);
  if (!category) {
    return { title: "Category Not Found" };
  }
  const tools = ALL_TOOLS.filter((t) => t.category === category).sort(
    (a, b) => b.rating - a.rating
  );
  return {
    title: `Best ${category} Freelance Platforms in 2026 — Top ${Math.min(tools.length, 10)} Tools Compared`,
    description: `Discover the best ${category.toLowerCase()} freelance platforms in 2026. Compare top-rated platforms with verified reviews, pricing breakdowns, and expert recommendations. Find the perfect ${category.toLowerCase()} platform for your freelance career.`,
    keywords: [
      `best ${category.toLowerCase()} freelance platforms 2026`,
      `top ${category.toLowerCase()} platforms`,
      `${category.toLowerCase()} comparison`,
      `${category.toLowerCase()} reviews`,
      `best ${category.toLowerCase()} platforms`,
    ],
    openGraph: {
      title: `Best ${category} Freelance Platforms in 2026 — Top Picks & Comparison`,
      description: `Find the best ${category.toLowerCase()} freelance platforms. Expert comparisons, verified reviews, and detailed pricing for ${tools.length} leading ${category.toLowerCase()} platforms.`,
    },
  };
}

export default function BestCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = deslugify(params.slug);
  if (!category) {
    notFound();
  }

  const tools = ALL_TOOLS.filter((t) => t.category === category).sort(
    (a, b) => b.rating - a.rating
  );
  const topTool = tools[0];
  const buyingGuide = BUYING_GUIDES[category] || getDefaultBuyingGuide(category);
  const faqs = FAQS[category] || getDefaultFAQs(category);

  return (
    <div className="relative pt-28 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#4A6380] mb-8">
          <Link href="/" className="hover:text-[#3B82F6] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href={`/category/${params.slug}`}
            className="hover:text-[#3B82F6] transition-colors"
          >
            {category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#8BA3BE]">Best {category} 2026</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#22D3EE]/20 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-[#22D3EE]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#F0F4F8] tracking-tight">
                Best {category} Freelance Platforms in 2026
              </h1>
              <p className="text-base text-[#8BA3BE] mt-1">
                Our expert picks for the top{" "}
                {tools.length > 10 ? "10" : tools.length} {category.toLowerCase()}{" "}
                platforms — compared with ratings, pricing, and key features.
              </p>
            </div>
          </div>

          {topTool && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#162440] border border-[#F59E0B]/30 rounded-full text-sm text-[#F59E0B]">
              <Star className="w-4 h-4 fill-[#F59E0B]" />
              Top Pick:{" "}
              <Link
                href={`/tools/${topTool.id}`}
                className="font-bold hover:text-[#F0F4F8] transition-colors underline underline-offset-2"
              >
                {topTool.name}
              </Link>
              <span className="text-[#4A6380]">— {topTool.rating}/5</span>
            </div>
          )}
        </header>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#F0F4F8] mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-[#3B82F6]" />
            Head-to-Head Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#1E3A5F]">
                  <th className="text-left py-3 px-4 text-[#8BA3BE] font-semibold">
                    Tool
                  </th>
                  <th className="text-left py-3 px-4 text-[#8BA3BE] font-semibold">
                    Rating
                  </th>
                  <th className="text-left py-3 px-4 text-[#8BA3BE] font-semibold hidden md:table-cell">
                    Pricing
                  </th>
                  <th className="text-left py-3 px-4 text-[#8BA3BE] font-semibold hidden lg:table-cell">
                    Reviews
                  </th>
                  <th className="text-right py-3 px-4 text-[#8BA3BE] font-semibold">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {tools.slice(0, 10).map((tool, idx) => {
                  const Icon = tool.icon;
                  return (
                    <tr
                      key={tool.id}
                      className="border-b border-[#1E3A5F]/60 hover:bg-[#0F1D32]/80 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#162440] flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 text-[#3B82F6]" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[#F0F4F8] whitespace-nowrap">
                                {tool.name}
                              </span>
                              {idx === 0 && (
                                <span className="text-[10px] font-bold bg-[#F59E0B]/20 text-[#F59E0B] px-1.5 py-0.5 rounded">
                                  #1
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                          <span className="font-bold text-[#F0F4F8]">
                            {tool.rating}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-[#8BA3BE] hidden md:table-cell">
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-3.5 h-3.5 text-[#22D3EE]" />
                          <span>{tool.pricing}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-[#4A6380] hidden lg:table-cell">
                        {tool.reviewCount.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <Link
                          href={`/tools/${tool.id}`}
                          className="inline-flex items-center gap-1 text-[#3B82F6] hover:text-[#22D3EE] transition-colors text-xs font-semibold"
                        >
                          Review <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#F0F4F8] mb-6">
            Detailed Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.slice(0, 6).map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <Link
                  href={`/tools/${tool.id}`}
                  key={tool.id}
                  className="group bg-[#0F1D32] border border-[#1E3A5F] rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg bg-[#162440] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[#3B82F6]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F59E0B] flex items-center justify-center text-[10px] font-bold text-black">
                        #{idx + 1}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-[#F0F4F8] group-hover:text-[#3B82F6] transition-colors truncate">
                        {tool.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                        <span className="text-xs font-bold text-[#F0F4F8]">
                          {tool.rating}
                        </span>
                        <span className="text-xs text-[#4A6380]">
                          ({tool.reviewCount.toLocaleString()})
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#8BA3BE] leading-relaxed line-clamp-2 mb-3">
                    {tool.description}
                  </p>
                  <div className="text-xs text-[#22D3EE] font-medium mb-3">
                    {tool.pricing}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#1E3A5F]">
                    <span className="text-xs text-[#4A6380] capitalize">
                      Best for: {tool.useCase.split(".")[0].slice(0, 50)}...
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mb-14">
          <div className="bg-[#0F1D32] border border-[#1E3A5F] rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#F0F4F8] mb-4 flex items-center gap-2">
              <ArrowRight className="w-6 h-6 text-[#3B82F6]" />
              {category} Platform Buying Guide
            </h2>
            <p className="text-[#8BA3BE] leading-relaxed text-base">
              {buyingGuide}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#F0F4F8] mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#3B82F6]" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-[#0F1D32] border border-[#1E3A5F] rounded-xl group"
              >
                <summary className="px-6 py-4 cursor-pointer text-[#F0F4F8] font-semibold text-sm flex items-center justify-between group-open:text-[#22D3EE] transition-colors">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-[#4A6380] group-open:rotate-90 transition-transform shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-4 text-sm text-[#8BA3BE] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#162440] to-[#0F1D32] border border-[#1E3A5F] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-[#F0F4F8] mb-2">
              Ready to find your perfect {category.toLowerCase()} tool?
            </h2>
            <p className="text-[#8BA3BE] text-sm">
              Browse all {tools.length} {category.toLowerCase()} solutions or dive into detailed reviews.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/category/${params.slug}`}
              className="px-6 py-3 bg-[#0F1D32] border border-[#1E3A5F] text-[#F0F4F8] text-sm font-medium rounded-full hover:border-[#2A5080] transition-colors"
            >
              View All {category} Tools
            </Link>
            {topTool && (
              <Link
                href={`/tools/${topTool.id}`}
                className="px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium rounded-full transition-colors"
              >
                Read {topTool.name} Review
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
