import { MetadataRoute } from "next";

const BLOG_SLUGS = [
  "top-10-crm-software-2026",
  "saas-pricing-strategies",
  "ai-tools-productivity-2026",
  "remote-team-collaboration-tools",
  "cybersecurity-best-practices",
  "email-marketing-automation-guide",
  "project-management-methodologies",
  "devops-tools-comparison",
  "hr-software-digital-transformation",
  "customer-support-automation",
  "slack-vs-microsoft-teams-2026-comparison",
  "best-data-analytics-tools-b2b-2026",
  "top-project-management-tools-2026",
  "marketing-automation-platforms-comparison-2026",
  "customer-success-software-reduce-churn",
  "best-remote-work-tools-2026",
  "best-hr-software-2026-comparison",
  "best-video-conferencing-tools-2026",
  "accounting-software-enterprise-2026",
  "best-ai-writing-tools-2026",
  "best-cybersecurity-tools-b2b-2026",
  "best-data-warehousing-tools-2026",
  "best-customer-success-software-2026",
  "best-ecommerce-platforms-b2b-2026",
  "enterprise-ai-agent-orchestration-2026",
  "google-io-2026-gemini-enterprise-ai",
  "hubspot-saas-growth-signals-2026",
  "mixpanel-vs-amplitude-vs-hotjar-2026",
  "outreach-vs-salesloft-vs-gong-b2b-sales-engagement-2026",
  "expressvpn-vs-nordvpn-vs-surfshark-2026-comparison",
];

const TOOL_SLUGS = [
  "upwork",
  "fiverr",
  "freelancer",
  "toptal",
  "peopleperhour",
  "guru",
  "99designs",
  "designcrowd",
  "skyword",
  "contently",
  "clearvoice",
  "textbroker",
  "writeraccess",
  "scripted",
  "constant-content",
  "blogmutt",
  "crowdcontent",
  "n Dash",
  "cloudpeeps",
  "copify",
  "hirewriters",
  "iwriter",
  "journalist-hire",
  "legiit",
  "listiller",
  "myblogguest",
  "one-hour-translation",
  "problogger",
  "skyword",
  "textbroker",
  "the-content-authority",
  "the-hoth",
  "transifex",
  "verblio",
  "writer",
  "writers-access",
  "writers-domain",
  "writers-life",
  "writers-work",
  "writer-access",
  "writers-access",
  "writers-domain",
  "writers-life",
  "writers-work",
  "writer-access",
  "writers-access",
  "writers-domain",
  "writers-life",
  "writers-work",
  "writer-access",
  "writers-access",
  "writers-domain",
  "writers-life",
  "writers-work",
  "writer-access",
  "writers-access",
  "writers-domain",
  "writers-life",
  "writers-work",
  "writer-access",
  "writers-access",
  "writers-domain",
  "writers-life",
  "writers-work",
  "writer-access",
  "writers-access",
  "writers-domain",
  "writers-life",
  "writers-work",
];

export async function GET() {
  const baseUrl = "https://freelancehubs.net";
  
  const urls: string[] = [];
  
  urls.push(`<url><loc>${baseUrl}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/blog</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/about</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/contact</loc><changefreq>monthly</changefreq><priority>0.4</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/faq</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/terms</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/disclosure</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  
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
