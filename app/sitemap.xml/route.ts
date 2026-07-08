import { MetadataRoute } from "next";

const BLOG_SLUGS = [
  "ai-tools-freelancers-2026",
  "best-crm-tools-for-freelancers-comparison",
  "build-freelance-personal-brand-linkedin-2026",
  "build-freelance-portfolio-2026",
  "essential-freelance-tools-invoicing-contracts-crm-2026",
  "essential-freelance-tools-succeed-2026",
  "fiverr-upwork-toptal-payout-truth-2026",
  "freelance-client-onboarding-contract-management-2026",
  "freelance-client-retention-strategies-2026",
  "freelance-platform-fees-hidden-costs-2026",
  "freelance-platforms-comparison-2026",
  "freelance-productivity-tools-trap-2026",
  "freelance-proposal-writing-2026",
  "freelance-rate-negotiation-playbook-2026",
  "freelance-taxes-financial-management-2026",
  "freelancer-taxes-quarterly-payments-guide-2026",
  "freelancing-2026-highest-paying-platforms",
  "freelancing-tools-comparison-2026",
  "how-to-negotiate-rates-freelancer-2026",
  "how-to-start-freelancing",
  "niche-freelance-platforms-highest-paying-2026",
  "remote-collaboration-tools-freelancers-2026",
  "remote-work-tools-ecosystem-2026-guide",
  "state-of-freelance-platforms-2026-fees-ai-opportunities",
  "freelance-pricing-strategies-2026-hourly-value-based",
  "top-freelance-niches-highest-demand-2026",
  "top-freelance-platforms-for-designers-2026",
  "upwork-vs-fiverr-vs-freelancer-2026",
  "upwork-vs-toptal-vs-fiverr-which-freelance-platform",
  "freelance-pricing-value-based-2026-practical",
  "freelance-contract-negotiation-2026-data-driven-guide",
  "first-freelance-client-platform-strategies-2026",
  "freelance-niche-strategy-specialist-2026",
] as const;

const TOOL_SLUGS = [
  "upwork",
    "fiverr",
    "toptal",
    "freelancer",
    "peopleperhour",
    "guru",
    "99designs",
    "designcrowd",
    "contently",
    "clearvoice",
    "crowdspring",
    "skyword",
    "writeraccess",
    "codeable",
    "envatostudio",
    "solidgigs",
    "hubstafftalent",
    "truelancer",
    "gotranscript",
    "flexjobs",
] as const;

const CATEGORY_SLUGS = [
  "design-and-creative",
    "general-freelance",
    "tech-and-development",
    "writing-and-content",
] as const;

export async function GET() {
  const baseUrl = "https://freelancepicks.net";

  const urls: string[] = [];

  urls.push(`<url><loc>${baseUrl}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/blog</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/about</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/contact</loc><changefreq>monthly</changefreq><priority>0.4</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/faq</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/terms</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/disclosure</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);

  for (const slug of CATEGORY_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/category/${slug}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
  }

  for (const slug of BLOG_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/blog/${slug}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`);
  }

  for (const slug of TOOL_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/tools/${slug}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
