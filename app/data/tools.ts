import {
  Globe,
  Users,
  PenTool,
  Code2,
  Briefcase,
  Palette,
  Camera,
  BookOpen,
  Headphones,
  DollarSign,
  BarChart3,
  Shield,
  Star,
  type LucideIcon,
} from "lucide-react";

export interface ToolData {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  icon: LucideIcon;
  description: string;
  longDescription: string;
  pros: string[];
  cons: string[];
  pricing: string;
  pricingDetail: string;
  features: string[];
  useCase: string;
  websiteUrl: string;
  alternatives: string[];
  scoreBreakdown: {
    features: number;
    reviews: number;
    momentum: number;
    popularity: number;
  };
  userQuotes: {
    role: string;
    company: string;
    quote: string;
  }[];
}

export const ALL_TOOLS: ToolData[] = [
  {
    id: "upwork",
    name: "Upwork",
    category: "General Freelance",
    rating: 4.5,
    reviewCount: 125000,
    icon: Globe,
    description: "World's largest freelance marketplace connecting businesses with independent talent across all categories.",
    longDescription:
      "Upwork is the world's largest freelance marketplace, connecting over 18 million registered freelancers with millions of clients worldwide. It offers a wide range of categories from web development and mobile development to creative design, writing, data science, and customer support. Upwork provides robust tools for project management, time tracking, and secure payments through escrow. Its Talent Marketplace allows clients to post jobs and review proposals, while Project Catalog offers pre-packaged services. The platform charges a sliding service fee starting at 10% for freelancers. Upwork also offers enterprise-level solutions for larger organizations. However, competition can be intense for entry-level freelancers, and the platform's fee structure has been controversial.",
    pros: [
      "Massive client base with diverse projects across all categories",
      "Built-in time tracking and screenshot monitoring for hourly contracts",
      "Escrow payment system ensures payment protection for freelancers",
      "Project Catalog allows freelancers to list fixed-price services",
      "Enterprise solutions for large-scale hiring needs",
      "Talent Scout feature for curated matching",
      "Dispute resolution center for conflict mediation",
    ],
    cons: [
      "High competition for new freelancers without established profiles",
      "Sliding fee up to 20% for first $500 earned with a client",
      "Connects system limits proposal submissions for free accounts",
      "Quality of clients varies significantly",
      "Account approval process can be restrictive for some categories",
    ],
    pricing: "10-20% service fee",
    pricingDetail: "Freelancers pay a sliding service fee: 20% for first $500 with a client, 10% for lifetime $500.01-$10,000, and 5% for earnings over $10,000. Freelancer Plus plan at $14.99/mo includes 80 connects per month.",
    features: [
      "Talent Marketplace for project bidding",
      "Project Catalog for fixed-price services",
      "Time tracker with screenshots and activity monitoring",
      "Escrow payment protection system",
      "Built-in messaging and video calls",
      "Contracts management and proposals",
      "Milestone-based payment releases",
      "Dispute resolution center",
      "Enterprise Suite for organizations",
      "Mobile app for iOS and Android",
      "API access for integrations",
      "24/7 customer support",
    ],
    useCase: "Best for freelancers of all skill levels looking for a wide variety of projects. Not ideal for specialists who want premium rates without competing on price.",
    websiteUrl: "https://upwork.com",
    alternatives: ["fiverr", "freelancer", "toptal"],
    scoreBreakdown: {
      features: 92,
      reviews: 85,
      momentum: 90,
      popularity: 98,
    },
    userQuotes: [
      {
        role: "Full-Stack Developer",
        company: "Freelance Digital",
        quote: "Upwork has been my primary income source for 3 years. The escrow system gives me peace of mind with new clients."
      },
      {
        role: "Content Writer",
        company: "WordCraft Studio",
        quote: "The variety of writing projects on Upwork is unmatched. I've worked with startups to Fortune 500 companies."
      }
    ],
  },
  {
    id: "fiverr",
    name: "Fiverr",
    category: "General Freelance",
    rating: 4.3,
    reviewCount: 98000,
    icon: PenTool,
    description: "Leading marketplace for creative and digital services starting at $5. Perfect for small projects and gig-based work.",
    longDescription:
      "Fiverr revolutionized the freelance marketplace by introducing a gig-based model where freelancers list specific services at set prices. Founded in 2010, it has grown to host millions of active gigs across categories including graphic design, digital marketing, writing, video editing, programming, and business consulting. Unlike Upwork's bidding system, Fiverr allows freelancers to showcase their services through detailed Gig pages with packages (Basic, Standard, Premium). Fiverr charges a 20% commission on each transaction. The platform excels for small, well-defined projects but is less suited for long-term engagements. Fiverr also offers Fiverr Pro, a vetted premium tier for higher-quality work.",
    pros: [
      "Gig-based model makes it easy to start selling immediately",
      "Well-defined service packages reduce scope creep",
      "Built-in buyer-seller messaging and order management",
      "Fiverr Pro offers premium, vetted freelancer tier",
      "Strong SEO visibility for gigs in search engines",
      "Mobile app with full functionality",
      "Automatic payment processing and withdrawal",
    ],
    cons: [
      "20% commission on every transaction is among the highest",
      "Not ideal for long-term or large-scale projects",
      "Price competition can be intense at lower tiers",
      "Limited customization for complex client requirements",
      "Dispute resolution can favor buyers in some cases",
    ],
    pricing: "20% service fee",
    pricingDetail: "Fiverr charges a 20% commission on all earnings. Gig packages range from $5 to $10,000+. Fiverr Pro requires application and has higher minimum pricing. Seller Plus tiers from $19.99/mo provide advanced analytics and support.",
    features: [
      "Gig-based service listings with packages",
      "Custom offers for tailored projects",
      "Order management and milestone system",
      "Built-in messaging platform",
      "Fiverr Pro vetted marketplace",
      "Fiverr Business for teams",
      "Analytics dashboard with impressions and clicks",
      "Promoted gigs advertising",
      "Multiple withdrawal options",
      "Dispute resolution system",
      "Seller Plus subscription tiers",
      "Mobile app for order management",
    ],
    useCase: "Ideal for creative professionals and digital service providers offering well-defined services. Not ideal for freelancers seeking hourly contracts or ongoing retainer relationships.",
    websiteUrl: "https://fiverr.com",
    alternatives: ["upwork", "freelancer", "99designs"],
    scoreBreakdown: {
      features: 88,
      reviews: 80,
      momentum: 85,
      popularity: 95,
    },
    userQuotes: [
      {
        role: "Graphic Designer",
        company: "PixelPerfect Studio",
        quote: "Fiverr's gig system makes it so easy for clients to understand exactly what they're getting. My conversion rate is amazing."
      },
      {
        role: "Video Editor",
        company: "CutFrame Media",
        quote: "The package system helps me upsell naturally. Most clients start with Basic and upgrade once they see my quality."
      }
    ],
  },
  {
    id: "toptal",
    name: "Toptal",
    category: "Tech & Development",
    rating: 4.7,
    reviewCount: 12000,
    icon: Code2,
    description: "Exclusive network of top freelance software engineers, designers, and finance experts with rigorous screening.",
    longDescription:
      "Toptal occupies a premium niche in the freelance talent marketplace, focusing exclusively on the top 3% of developers, designers, finance experts, and project managers. Its rigorous screening — involving live coding tests, portfolio reviews, and behavioral interviews — delivers consistently high-caliber talent, especially for complex, mission-critical engagements. Key strengths include rapid vetting turnaround (often under 48 hours), deep domain specialization, and strong client support with dedicated talent managers. However, its exclusivity comes at a cost: pricing is significantly higher than generalist platforms, and the talent pool skews toward senior specialists — making it impractical for junior roles or short-term tactical tasks. The platform also lacks robust self-service tools for smaller teams, and contract flexibility is limited compared to alternatives. Toptal is best suited for well-funded startups, enterprise innovation labs, and growth-stage companies needing elite t...",
    pros: [
      "Rigorous multi-stage screening filters for top 3% talent across engineering, design, and finance domains.",
      "Dedicated talent matching managers who deeply understand project context and team dynamics.",
      "Average time-to-hire under 48 hours for pre-vetted candidates, accelerating project kickoff.",
      "Strong emphasis on English fluency and professional communication skills across all freelancers.",
      "Comprehensive compliance handling including contracts, invoicing, and tax documentation globally.",
      "Specialized talent pools for niche areas like blockchain architecture, fintech compliance, and UX research.",
      "Transparent performance tracking with structured feedback loops and easy replacement policy.",
    ],
    cons: [
      "Pricing starts at $60–$120+/hour — often 2–3x higher than comparable senior talent on generalist platforms.",
      "Limited availability for junior or mid-level roles; platform intentionally excludes non-top-tier candidates.",
      "Contract terms require minimum 40-hour weekly commitments, reducing flexibility for part-time needs.",
      "No native collaboration tools or integrated project management — clients must supply their own stack.",
    ],
    pricing: "From $60/hr",
    pricingDetail: "Starter tier: $60–$85/hour; Professional tier: $85–$110/hour; Enterprise tier: $110–$140+/hour. All tiers include 20% platform fee on freelancer rate; no subscription or listing fees. Minimum engagement is 40 billable hours per week.",
    features: [
      "Live Technical Interviewing",
      "Portfolio & Code Sample Review",
      "Behavioral Assessment Framework",
      "Dedicated Talent Matching Manager",
      "Global Compliance Management",
      "Time-Tracking & Invoicing Dashboard",
      "Skill-Specific Screening Rubrics",
      "Real-Time Availability Calendar",
      "Client Feedback Integration System",
      "Contract Lifecycle Automation",
      "Domain-Specialty Talent Filters",
      "Replacement Guarantee Protocol",
    ],
    useCase: "Best for: Well-funded startups, Fortune 500 innovation teams, and VC-backed scale-ups needing elite technical leadership or specialized expertise quickly. Not ideal for: Small businesses with <$5k/month dev budgets, agencies requiring junior support, or teams seeking long-term embedded hires without executive oversight.",
    websiteUrl: "https://toptal.com",

    alternatives: ["upwork", "fiverr", "freelancer"],

    scoreBreakdown: {
      features: 88,
      reviews: 92,
      momentum: 76,
      popularity: 64,
    },

    userQuotes: [
      {
        role: "CTO",
        company: "HealthTech SaaS startup",
        quote: "We hired a Toptal blockchain architect to redesign our HIPAA-compliant ledger — he shipped production code in 11 days and mentored our internal team on zero-knowledge proofs"
      },
      {
        role: "Product Director",
        company: "Fintech scale-up",
        quote: "Their talent matching manager understood our regulatory constraints better than our own HR — saved us three weeks of failed interviews on other platforms"
      },
    ],
  },
  {
    id: "freelancer",
    name: "Freelancer",
    category: "General Freelance",
    rating: 4.1,
    reviewCount: 56000,
    icon: Briefcase,
    description: "Global freelancing platform with contest-based hiring and project bidding for various skill categories.",
    longDescription:
      "Freelancer.com is a global freelancing and crowdsourcing marketplace founded in 2009. It offers both traditional project bidding and unique contest-based hiring, where clients launch contests and freelancers submit work samples to win projects. Categories span web development, mobile apps, writing, data entry, design, marketing, and more. The platform features a detailed milestone payment system, workroom collaboration tools, and mobile app access. Freelancer charges a fee of 10% or $5 USD (whichever is greater) on projects, plus additional fees for contest entries. It also offers Freelancer Enterprise for larger organizations.",
    pros: [
      "Contest-based hiring allows freelancers to showcase skills",
      "Large global user base with projects in many categories",
      "Milestone-based payment system for protection",
      "Detailed workroom with collaboration tools",
      "Freelancer Enterprise for corporate clients",
      "Mobile app for on-the-go management",
      "Built-in time tracking tool",
    ],
    cons: [
      "Interface can feel cluttered and overwhelming",
      "Quality of projects varies widely",
      "Many low-budget projects from price-sensitive clients",
      "Free membership limits bids per month",
      "Contest system can result in unpaid work",
    ],
    pricing: "10% or $5 fee",
    pricingDetail: "Service fee is 10% or $5 USD (whichever is greater) for fixed-price projects. Hourly projects have a 10% fee. Free members get 6 bids per month. Paid plans from $4.95/mo (Basic) to $249.95/mo (Platinum) include more bids and features.",
    features: [
      "Project bidding system",
      "Contest-based hiring",
      "Milestone payment protection",
      "Workroom collaboration tools",
      "Time tracking and reporting",
      "Mobile app for iOS and Android",
      "Bid management dashboard",
      "Freelancer Enterprise plans",
      "API access for developers",
      "Dispute resolution center",
      "Skills tests and certifications",
      "Portfolio showcase",
    ],
    useCase: "Suitable for freelancers who enjoy competitive environments and contest-based work. Good for beginners building portfolios. Not ideal for those seeking premium rates or long-term exclusive contracts.",
    websiteUrl: "https://freelancer.com",
    alternatives: ["upwork", "fiverr", "peopleperhour"],
    scoreBreakdown: {
      features: 80,
      reviews: 72,
      momentum: 65,
      popularity: 82,
    },
    userQuotes: [
      {
        role: "Web Developer",
        company: "CodeCraft Studio",
        quote: "The contest system helped me win my first big project. It's competitive but rewarding."
      },
      {
        role: "Data Entry Specialist",
        company: "RemoteWork Plus",
        quote: "Freelancer has consistent data entry work. The milestone system ensures I get paid for completed work."
      }
    ],
  },
  {
    id: "peopleperhour",
    name: "PeoplePerHour",
    category: "General Freelance",
    rating: 4.2,
    reviewCount: 18000,
    icon: Users,
    description: "UK-based freelance platform connecting businesses with vetted freelancers across digital and creative services.",
    longDescription:
      "PeoplePerHour is a UK-based freelance marketplace founded in 2007 that focuses on connecting businesses with vetted freelancers. The platform is known for its 'Hourlie' system — fixed-price service offerings similar to Fiverr's gigs — alongside traditional project bidding. Categories include web development, graphic design, content writing, SEO, marketing, video production, and business support. PeoplePerHour has a strict vetting process for freelancers, ensuring quality. The platform charges a service fee of 20% on the first £500 earned from a client, dropping to 3.5% thereafter. It also offers enterprise solutions through PPH Enterprise.",
    pros: [
      "Hourlie system for quick, fixed-price service sales",
      "Vetting process maintains quality standards",
      "Lower fee (3.5%) after first £500 per client",
      "Strong UK and European client base",
      "Built-in invoicing and payment system",
      "Escrow protection for both parties",
      "Dedicated account managers for top freelancers",
    ],
    cons: [
      "Smaller client base compared to Upwork and Fiverr",
      "20% initial fee per client is relatively high",
      "Limited categories compared to larger platforms",
      "Geographically concentrated in UK/Europe",
      "Account approval can be selective",
    ],
    pricing: "20% then 3.5% fee",
    pricingDetail: "20% service fee on first £500 earned from a client, then drops to 3.5%. Hourlie fixed-price services follow the same structure. Free to join. No membership tiers required.",
    features: [
      "Hourlie fixed-price services",
      "Project posting and bidding",
      "Escrow payment protection",
      "Built-in time tracking",
      "Invoicing system",
      "Messaging and workroom",
      "Vetted freelancer program",
      "PPH Enterprise for businesses",
      "Dispute resolution",
      "Mobile app access",
      "Client feedback and reviews",
      "Portfolio management",
    ],
    useCase: "Best for UK and European freelancers seeking quality clients. Ideal for creatives and digital service providers who can package their services as Hourlies.",
    websiteUrl: "https://peopleperhour.com",
    alternatives: ["upwork", "fiverr", "freelancer"],
    scoreBreakdown: {
      features: 78,
      reviews: 80,
      momentum: 72,
      popularity: 68,
    },
    userQuotes: [
      {
        role: "SEO Consultant",
        company: "SearchWorks UK",
        quote: "PeoplePerHour connects me with quality UK-based clients who value expertise over the lowest price."
      },
      {
        role: "Graphic Designer",
        company: "CreativeStudio London",
        quote: "The Hourlie system makes it easy for clients to buy my design packages. Love the UK focus."
      }
    ],
  },
  {
    id: "guru",
    name: "Guru",
    category: "General Freelance",
    rating: 3.9,
    reviewCount: 8000,
    icon: Briefcase,
    description: "Flexible freelance marketplace with safe payments and a loyalty rewards program for regular users.",
    longDescription:
      "Guru is an established freelance marketplace founded in 2000 that connects businesses with independent professionals. It operates across categories including web & software development, design, writing, administration, sales & marketing, engineering, and finance. Guru features a unique 'FlexPay' system for safe payments, detailed workroom tools, and a loyalty rewards program called 'Guru Cashback' that gives 5% cashback on SafePay transactions. The platform charges an 8.5% fee on all transactions with no additional membership costs for basic accounts. Guru also offers a mobile app and API access for enterprise integrations.",
    pros: [
      "8.5% flat fee is competitive with major platforms",
      "SafePay escrow payment system",
      "Guru Cashback loyalty rewards (5% back on fees)",
      "No membership fees for basic accounts",
      "Workroom with collaboration and file sharing",
      "Long-standing platform with established reputation",
    ],
    cons: [
      "Smaller client base than Upwork or Fiverr",
      "Website design feels dated",
      "Limited features compared to newer platforms",
      "Fewer high-budget projects available",
      "Mobile app has limited functionality",
    ],
    pricing: "8.5% fee",
    pricingDetail: "8.5% service fee on all transactions. Free membership available. Paid membership levels (Professional at $11.95/mo, Business at $29.95/mo, Executive at $39.95/mo) offer more bids, advanced analytics, and priority support.",
    features: [
      "SafePay escrow system",
      "Guru Cashback rewards program",
      "Workroom with file sharing",
      "Time tracking and milestones",
      "Multiple membership tiers",
      "Invoice management",
      "API access for enterprises",
      "Mobile app access",
      "Dispute resolution",
      "Portfolio management",
      "Skills verification tests",
      "Job alerts and notifications",
    ],
    useCase: "Good for freelancers looking for a lower-cost alternative with competitive fees. Suitable for those who value the cashback rewards program. Not ideal for those needing a large volume of project options.",
    websiteUrl: "https://guru.com",
    alternatives: ["upwork", "freelancer", "peopleperhour"],
    scoreBreakdown: {
      features: 70,
      reviews: 72,
      momentum: 55,
      popularity: 60,
    },
    userQuotes: [
      {
        role: "Virtual Assistant",
        company: "AdminPro Services",
        quote: "Guru's 8.5% fee is much better than other platforms. And the cashback rewards are a nice bonus."
      },
      {
        role: "Web Developer",
        company: "PixelCode",
        quote: "SafePay gives me confidence with new clients. The platform is straightforward and works well."
      }
    ],
  },
  {
    id: "99designs",
    name: "99designs",
    category: "Design & Creative",
    rating: 4.4,
    reviewCount: 15000,
    icon: Palette,
    description: "Premier design marketplace connecting businesses with freelance designers through contests and direct projects.",
    longDescription:
      "99designs occupies a unique niche as the longest-running design contest platform, bridging freelance talent with SMBs and non-designers needing visual assets quickly. Its core strength lies in volume-based ideation — clients receive dozens of logo or branding concepts from global designers in days, not weeks. The platform’s structured feedback loops, built-in legal protections, and escrow payment system reduce friction for first-time buyers. However, it struggles with complex, iterative projects: revision depth is limited post-contest, and direct collaboration feels transactional rather than consultative. Design quality varies widely across tiers, and enterprise teams often find the lack of integrated project management or brand governance tools prohibitive. It’s ideal for startups launching MVPs, solopreneurs needing logos or social assets, or marketers with tight deadlines and modest budgets. It’s less suited for agencies managing ongoing brand evolution, large organizations requi...",
    pros: [
      "Contest model delivers 30–50+ initial logo concepts within 7 days, accelerating early-stage visual exploration.",
      "Fixed-price contests eliminate scope creep and provide upfront budget certainty for clients unfamiliar with design pricing.",
      "Designer verification process includes portfolio review and identity checks, raising baseline quality assurance.",
      "Integrated feedback tool lets clients annotate mockups directly on designs, improving clarity over email chains.",
      "Legal transfer of copyright is automatic upon final payment, simplifying IP handover for non-lawyers.",
      "Mobile-optimized dashboard allows real-time bid tracking, milestone updates, and messaging from iOS/Android.",
      "Niche categories like Twitch overlays, podcast cover art, and Shopify banners offer targeted designer pools.",
    ],
    cons: [
      "Post-contest revisions are capped at 3 rounds per winning design, limiting refinement for nuanced brand guidelines.",
      "No native version control or asset library — clients must manually download and organize final files.",
      "Customer support response times average 24–48 hours for non-urgent tickets, with no phone option.",
      "Designers cannot propose custom quotes outside contest structures, reducing flexibility for specialized requests.",
    ],
    pricing: "From $299 per contest",
    pricingDetail: "Logo contests start at $299 (Basic), $499 (Standard), $999 (Premium); website contests from $1,299; hourly design starts at $49/hr. Premium tiers include faster turnaround, more revisions, and priority support. Hidden costs may arise from add-ons like style guides (+$299) or rush fees (+25%). No annual discounts or nonprofit rates.",
    features: [
      "Logo Design Contests",
      "Website Design Contests",
      "Social Media Graphics Packages",
      "Custom Design Brief Builder",
      "Real-Time Designer Bidding Dashboard",
      "In-Platform Annotation Tool",
      "Automated Copyright Transfer",
      "Designer Portfolio Filtering",
      "Brand Style Guide Add-On",
      "Print-Ready File Delivery",
      "Client-Designer Messaging System",
      "Design Contest Milestone Tracker",
    ],
    useCase: "Best for: Solopreneurs, early-stage startups, and marketing managers needing discrete, spec-driven assets on deadline. Not ideal for: In-house design teams, enterprises requiring SSO or audit trails, or clients seeking long-term creative strategy partners.",
    websiteUrl: "https://99designs.com",

    alternatives: ["fiverr", "designcrowd", "crowdspring"],

    scoreBreakdown: {
      features: 78,
      reviews: 82,
      momentum: 64,
      popularity: 71,
    },

    userQuotes: [
      {
        role: "Founder",
        company: "BrewHaven Coffee Roasters",
        quote: "Got 42 logo options in 5 days — we picked one, added two tweaks, and had print files by Friday. Zero haggling over invoices."
      },
      {
        role: "Marketing Director",
        company: "TechNova Labs",
        quote: "Great for one-offs, but we switched to direct hiring after realizing our third rebrand needed consistent voice — not 50 variations."
      },
    ],
  },
  {
    id: "designcrowd",
    name: "DesignCrowd",
    category: "Design & Creative",
    rating: 4.2,
    reviewCount: 8000,
    icon: Palette,
    description: "Global design marketplace with contests and direct projects for logos, websites, print, and packaging design.",
    longDescription:
      "DesignCrowd is a global creative marketplace founded in 2008 that connects businesses with freelance designers. Like 99designs, it offers both contest-based and direct project hiring. Categories include logo design, web design, brochure design, packaging, and more. DesignCrowd has a community of over 700,000 designers worldwide. The platform offers a money-back guarantee and secure escrow payments. Designers keep 100% of their earnings (DesignCrowd charges clients a listing fee and project management fee). DesignCrowd also offers a managed service for enterprise clients.",
    pros: [
      "Large designer community with diverse styles",
      "Money-back guarantee for client peace of mind",
      "Secure escrow payment system",
      "Designers keep 100% of contest prizes",
      "Both contest and direct project options",
      "Multiple design categories available",
      "Managed service for enterprises",
    ],
    cons: [
      "Contest model risks unpaid design work for freelancers",
      "Focused only on design, not other freelance categories",
      "Higher client pricing than general platforms",
      "Designer community is global, timezone differences",
      "Some contests may not receive quality submissions",
    ],
    pricing: "From $99+ per contest",
    pricingDetail: "Contest pricing starts at $99 for simple logo designs, $299-$899+ for comprehensive branding packages. Direct projects are quoted individually. Designers earn 100% of prize amounts.",
    features: [
      "Design contests with global designer pool",
      "Direct 1-to-1 project collaboration",
      "Escrow payment protection",
      "Client brief templates",
      "Designer portfolios and reviews",
      "IP rights transfer",
      "Managed enterprise service",
      "Satisfaction guarantee",
      "Multiple file format delivery",
      "Revisions and feedback system",
      "Mobile responsive designs",
      "Print-ready file preparation",
    ],
    useCase: "Ideal for businesses seeking design through competitive contests. Good for designers who excel in creative competition. Not for non-design freelance work.",
    websiteUrl: "https://designcrowd.com",
    alternatives: ["99designs", "fiverr"],
    scoreBreakdown: {
      features: 78,
      reviews: 80,
      momentum: 70,
      popularity: 75,
    },
    userQuotes: [
      {
        role: "Marketing Manager",
        company: "BrandWave Agency",
        quote: "DesignCrowd's contests give us fresh perspectives from designers worldwide. We always find something unique."
      },
      {
        role: "Logo Designer",
        company: "Identity Studio",
        quote: "I love that I keep 100% of winnings on DesignCrowd. The global client base keeps my pipeline full."
      }
    ],
  },
  {
    id: "contently",
    name: "Contently",
    category: "Writing & Content",
    rating: 4.6,
    reviewCount: 5000,
    icon: BookOpen,
    description: "Enterprise content marketing platform connecting businesses with vetted freelance writers and content creators.",
    longDescription:
      "Contently positions itself as a premium content marketing platform for enterprise brands and agencies needing end-to-end workflow orchestration — from brief creation and freelancer management to performance analytics and CMS integration. Its key strength lies in tightly coupling editorial planning with real-world content execution, especially for distributed teams juggling multiple stakeholders and external creators. The platform excels at compliance tracking, brand voice enforcement via AI-assisted guidelines, and ROI attribution across owned channels. However, it’s over-engineered for small teams: setup requires dedicated onboarding support, custom fields are rigid, and native SEO tools remain shallow compared to standalone platforms like Surfer or MarketMuse. Reporting dashboards lack flexibility for ad-hoc queries, and the mobile experience is effectively non-existent. Best suited for Fortune 500 marketing ops teams or global agencies managing 50+ creators and $2M+ annual conten...",
    pros: [
      "Intuitive brief builder with dynamic field logic that auto-populates based on content type, audience, and channel.",
      "Freelancer marketplace with vetted, pre-contracted talent pools segmented by industry, skill, and rate band.",
      "Real-time collaboration layer with versioned comments, inline suggestions, and approval workflows tied to SLAs.",
      "Brand voice analyzer scans drafts against custom linguistic rules and provides actionable rewrite prompts.",
      "Unified dashboard showing content performance across web, email, and social using UTM-agnostic attribution models.",
      "Native integrations with Salesforce Marketing Cloud, Adobe Experience Manager, and HubSpot CMS without middleware.",
      "Compliance audit trail logs every edit, approval, and export with user-level timestamps and change diffs.",
    ],
    cons: [
      "Onboarding typically takes 6–8 weeks with mandatory consulting hours, making rapid pilot testing impractical.",
      "No built-in keyword research or SERP analysis — users must import data manually from third-party tools.",
      "Custom reporting requires SQL knowledge or paid professional services; drag-and-drop builders are limited to 5 preset templates.",
      "Mobile app only supports notifications and approvals — no content editing, brief submission, or analytics access.",
    ],
    pricing: "Premium rates",
    pricingDetail: "Enterprise tier starts at $45,000/year (minimum 10 seats); includes onboarding, 24/7 support, and 3 custom integrations. No public SMB or per-user pricing — all quotes require sales consultation. Hidden costs include ~$12k/year for advanced analytics add-ons and $8k for white-label reporting.",
    features: [
      "Smart Brief Builder",
      "Talent Marketplace",
      "Collaborative Editor",
      "Brand Voice Analyzer",
      "Content Performance Dashboard",
      "Compliance Audit Trail",
      "Workflow Automation Engine",
      "CMS Sync Connector",
      "Content Calendar API",
      "Freelancer Payment Gateway",
      "ROI Attribution Model",
      "Editorial Governance Rules",
    ],
    useCase: "Best for: Large enterprises and global agencies managing complex, regulated content programs with distributed creators and strict governance requirements. Not ideal for: Small marketing teams, bootstrapped startups, or organizations needing lightweight, low-cost content planning tools.",
    websiteUrl: "https://contently.com",

    alternatives: ["skyword", "clearvoice", "writeraccess"],

    scoreBreakdown: {
      features: 89,
      reviews: 76,
      momentum: 64,
      popularity: 58,
    },

    userQuotes: [
      {
        role: "Head of Content Operations",
        company: "Global Financial Services Firm",
        quote: "Cut our time-to-publish for regulatory blog posts by 40% — but we had to build three internal training modules just to get editors comfortable with the workflow rules."
      },
      {
        role: "Director of Marketing",
        company: "Healthcare SaaS Startup",
        quote: "Worth the investment once we scaled past 12 freelancers, but the first quarter felt like learning a new ERP system instead of shipping content."
      },
    ],
  },
  {
    id: "clearvoice",
    name: "ClearVoice",
    category: "Writing & Content",
    rating: 4.4,
    reviewCount: 4000,
    icon: BookOpen,
    description: "Content marketing platform connecting brands with vetted freelance writers, editors, and content strategists.",
    longDescription:
      "ClearVoice is a content marketing platform and freelance network that connects brands with professional writers, editors, and content strategists. Founded in 2013, ClearVoice curates a network of vetted freelance talent. The platform offers a comprehensive content marketing solution including content strategy, creation, distribution, and performance tracking. ClearVoice works with mid-market to enterprise clients across various industries. The platform uses a team-based approach, assigning a dedicated content strategist to manage each client's projects. Freelancers are individually vetted and must demonstrate expertise in their niche.",
    pros: [
      "Vetted writer network ensures quality standards",
      "Team-based approach with dedicated content manager",
      "Comprehensive content marketing platform",
      "Consistent workflow with reliable payment",
      "Performance tracking and analytics",
      "Long-term client relationships are common",
      "Niche expertise matching",
    ],
    cons: [
      "Limited availability for new freelancers (application required)",
      "Focus exclusively on content marketing",
      "Rates may be lower than direct client work",
      "Less flexibility in project choice",
      "Not suitable for freelancers outside content marketing",
    ],
    pricing: "Custom pricing",
    pricingDetail: "Client pricing is project-based or retainer-based, typically starting from $2,000+/month. Freelancer rates vary by experience level and niche. Freelancers must be accepted into the network through a vetting process.",
    features: [
      "Freelancer vetting and curation",
      "Content strategy development",
      "Content creation and editing",
      "Team-based project management",
      "Content distribution support",
      "Performance analytics dashboard",
      "SEO optimization guidance",
      "Brand voice and style management",
      "Editorial calendar management",
      "Integration with CMS platforms",
      "Usage rights management",
      "Dedicated content strategist",
    ],
    useCase: "Ideal for experienced content writers and strategists seeking steady, quality work. Best for brands needing managed content marketing solutions. Not suitable for beginners or non-content categories.",
    websiteUrl: "https://clearvoice.com",
    alternatives: ["contently", "skyword"],
    scoreBreakdown: {
      features: 82,
      reviews: 85,
      momentum: 78,
      popularity: 72,
    },
    userQuotes: [
      {
        role: "Freelance Writer",
        company: "WordSmith Pro",
        quote: "ClearVoice provides a steady stream of well-paying content projects. The team approach ensures projects run smoothly."
      },
      {
        role: "Content Manager",
        company: "TechBrand Co.",
        quote: "The vetted talent pool saves us hours of screening. ClearVoice delivers consistent quality every time."
      }
    ],
  },
  {
    id: "crowdspring",
    name: "CrowdSpring",
    category: "Design & Creative",
    rating: 4.3,
    reviewCount: 6000,
    icon: Palette,
    description: "Design marketplace connecting businesses with global designers through logo, web, print, and branding contests.",
    longDescription:
      "CrowdSpring is a global design marketplace founded in 2008 that connects businesses with over 200,000 freelance designers worldwide. The platform operates primarily through a contest-based model where clients post design briefs and receive dozens of concepts from multiple designers. Categories include logo design, web design, print materials, packaging, and branding packages. CrowdSpring differentiates itself with a unique '100% Satisfaction Guarantee' policy — if the client isn't satisfied with any design, they get their money back. Designers appreciate the all-inclusive prize system where the winner receives full payment with no additional platform fees deducted. The platform has facilitated over 300,000 projects and serves clients ranging from startups to Fortune 500 companies.",
    pros: [
      "Designers keep 100% of contest prize money with no deductions",
      "100% satisfaction guarantee for clients reduces risk",
      "Large, active designer community with diverse global perspectives",
      "Structured contest format provides clear expectations for both parties",
      "IP rights transfer automatically upon payment completion",
      "Dedicated project managers for premium clients",
      "Multiple design categories beyond just logos (web, print, apparel, etc.)",
    ],
    cons: [
      "Contest model means many designers work without compensation",
      "Not ideal for long-term or ongoing design partnerships",
      "Quality of submissions can vary significantly between contests",
      "Limited to design work only — no other freelance categories",
    ],
    pricing: "From $99 per contest",
    pricingDetail: "Contest pricing starts at $299 for basic logo design, $499 for standard branding packages, and up to $1,499 for premium web design contests. Direct hire projects are quoted individually. No membership fees for either party. Designers receive 100% of awarded prize money.",
    features: [
      "Design contest platform with global designer pool",
      "Direct hire 1-to-1 project collaboration",
      "100% satisfaction guarantee policy",
      "Escrow-backed payment protection",
      "Intellectual property rights transfer",
      "Design brief templates and guidance",
      "Client feedback and rating system",
      "Mobile-optimized project dashboard",
      "Multiple file format delivery",
      "Revision and refinement process",
      "Managed enterprise services",
      "Priority customer support",
    ],
    useCase: "Best for startups and small businesses seeking design through competitive contests. Great for designers who thrive on creative competition. Not suitable for non-design freelance work or long-term retainer relationships.",
    websiteUrl: "https://crowdspring.com",
    alternatives: ["99designs", "designcrowd", "fiverr"],
    scoreBreakdown: {
      features: 76,
      reviews: 78,
      momentum: 68,
      popularity: 72,
    },
    userQuotes: [
      {
        role: "Founder",
        company: "GreenLeaf Organics",
        quote: "CrowdSpring gave us 80+ logo concepts from designers around the world. We found the perfect brand identity in less than a week."
      },
      {
        role: "Freelance Designer",
        company: "VisualCore Studio",
        quote: "I love that CrowdSpring doesn't take a cut of my winnings. The global client base keeps my creative portfolio diverse."
      },
    ],
  },
  {
    id: "skyword",
    name: "Skyword",
    category: "Writing & Content",
    rating: 4.5,
    reviewCount: 3500,
    icon: BookOpen,
    description: "Enterprise content marketing platform with a curated network of vetted freelance writers and content creators.",
    longDescription:
      "Skyword is an enterprise content marketing platform founded in 2012 that combines a curated freelance talent network with robust content strategy and analytics tools. The platform connects brands with pre-vetted writers, editors, videographers, and designers who specialize in industries like finance, healthcare, technology, and consumer goods. Skyword's differentiator is its integrated approach — clients get both the talent marketplace and a full content operations platform including editorial calendar management, SEO guidance, performance analytics, and CMS integrations. The platform serves over 500 enterprise clients including some of the world's largest brands. Freelancers must go through a rigorous application and vetting process, which maintains high quality standards but limits accessibility.",
    pros: [
      "High-quality, pre-vetted freelance talent network with niche expertise",
      "All-in-one content marketing platform with strategy and analytics tools",
      "Dedicated client success managers for enterprise accounts",
      "Strong focus on content performance and ROI measurement",
      "Seamless integrations with major CMS and marketing platforms",
      "Consistent, reliable workflow and payment schedules",
    ],
    cons: [
      "Enterprise-focused pricing puts it out of reach for small businesses",
      "Limited availability for freelancers — acceptance rate is selective",
      "Freelancers have less control over project selection and pricing",
      "Platform complexity requires onboarding and training investment",
    ],
    pricing: "Custom enterprise pricing",
    pricingDetail: "Enterprise plans typically start at $30,000-$50,000/year depending on content volume and features. No per-project or SMB tier available. Freelancer rates are set by Skyword based on experience and niche, typically $0.25-$0.75 per word for writers.",
    features: [
      "Curated freelance talent network",
      "Content strategy and planning tools",
      "Editorial calendar management",
      "SEO content optimization guidance",
      "Performance analytics dashboard",
      "CMS integration connectors",
      "Brand voice and style management",
      "Workflow automation and approvals",
      "Content distribution support",
      "Freelancer payment processing",
      "Dedicated account management",
      "Compliance and governance tracking",
    ],
    useCase: "Ideal for enterprise marketing teams needing high-quality content at scale with tight brand governance. Best for experienced niche writers. Not suitable for small businesses or freelancers outside of content marketing.",
    websiteUrl: "https://skyword.com",
    alternatives: ["contently", "clearvoice", "writeraccess"],
    scoreBreakdown: {
      features: 88,
      reviews: 82,
      momentum: 70,
      popularity: 62,
    },
    userQuotes: [
      {
        role: "Content Marketing Director",
        company: "Enterprise SaaS Corp",
        quote: "Skyword's talent matching is exceptional — they understand our industry deeply and consistently deliver writers who get complex B2B topics."
      },
      {
        role: "Freelance Technology Writer",
        company: "TechContent Pro",
        quote: "Skyword provides consistent, well-paying assignments with clear briefs. The editing team actually improves my work rather than just formatting it."
      },
    ],
  },
  {
    id: "writeraccess",
    name: "WriterAccess",
    category: "Writing & Content",
    rating: 4.3,
    reviewCount: 5000,
    icon: PenTool,
    description: "Content marketplace connecting businesses with vetted freelance writers, editors, and content strategists.",
    longDescription:
      "WriterAccess is a content creation platform founded in 2009 that connects businesses with a curated network of freelance writers, editors, and content strategists. The platform offers a full content workflow: clients submit briefs, receive matched writer suggestions, review and revise drafts, and publish — all within the platform. WriterAccess uses an AI-powered matching system called 'RocketLink' that analyzes writer expertise, style, and past performance to recommend the best fit for each project. The platform serves over 60,000 clients ranging from SMBs to enterprise brands. Writers are rated on a 1-6 star scale based on quality, reliability, and client satisfaction, with top-tier writers receiving priority access to higher-paying projects.",
    pros: [
      "AI-powered writer matching streamlines content sourcing",
      "Wide range of content types supported (blog, web, video scripts, social)",
      "Built-in editing and revision workflow with version tracking",
      "Performance scoring system helps identify top talent quickly",
      "Integration with major CMS platforms for direct publishing",
      "Content strategy tools including keyword research integration",
    ],
    cons: [
      "Quality varies across different writer tiers and levels",
      "Platform fees can be high for premium-tier writers",
      "Freeform brief system sometimes leads to misinterpretation",
      "Limited to content writing — no design or development services",
    ],
    pricing: "From $0.07/word",
    pricingDetail: "Writer pricing ranges from $0.07/word (3-star writers) to $0.60+/word (6-star elite writers). Monthly subscription plans start at $29/mo for basic access. Platform adds a service fee on top of writer rates. Enterprise plans available.",
    features: [
      "AI-powered writer matching engine",
      "Content brief builder and templates",
      "Built-in editing and proofreading workflow",
      "Version control and revision tracking",
      "CMS integration for direct publishing",
      "Content performance analytics",
      "Writer rating and quality scoring system",
      "SEO keyword recommendation tool",
      "Content calendar management",
      "Team collaboration workspace",
      "Usage rights and licensing management",
      "Priority support for premium plans",
    ],
    useCase: "Ideal for content marketers and businesses needing consistent, quality written content. Best for writers who can demonstrate niche expertise. Not suitable for non-writing freelance work or very technical documentation.",
    websiteUrl: "https://writeraccess.com",
    alternatives: ["clearvoice", "skyword", "contently"],
    scoreBreakdown: {
      features: 82,
      reviews: 76,
      momentum: 74,
      popularity: 68,
    },
    userQuotes: [
      {
        role: "Marketing Manager",
        company: "GrowthStage Inc.",
        quote: "WriterAccess has become our primary content engine. The AI matching saves hours of screening and the quality is consistently solid."
      },
      {
        role: "Freelance B2B Writer",
        company: "ContentWorks",
        quote: "The rating system on WriterAccess rewards quality work. Since reaching 5-star status, I've had more work than I can handle."
      },
    ],
  },
  {
    id: "codeable",
    name: "Codeable",
    category: "Tech & Development",
    rating: 4.6,
    reviewCount: 4000,
    icon: Code2,
    description: "Premier freelance platform exclusively for WordPress development, design, and support services.",
    longDescription:
      "Codeable is the leading freelance platform exclusively dedicated to WordPress development, founded in 2012 and used by over 10,000 clients worldwide. Unlike generalist platforms, Codeable focuses 100% on WordPress — from custom theme and plugin development to website migration, performance optimization, security hardening, and emergency fixes. All freelancers on Codeable are thoroughly vetted WordPress experts who must pass technical assessments and portfolio reviews. The platform offers fixed-price estimates within 24 hours, escrow payment protection, and dedicated project management. Codeable charges a 17.5% service fee on all projects. The platform has completed over 100,000 projects and maintains a 4.8/5 client satisfaction rating, making it the go-to platform for serious WordPress work.",
    pros: [
      "100% WordPress focus ensures deep expertise in the platform",
      "Rigorous vetting process guarantees high-quality freelancers",
      "Fixed-price estimates provided within 24 hours of request",
      "Escrow payment protection for both clients and freelancers",
      "Dedicated support team available for project coordination",
      "Excellent client satisfaction ratings across all project types",
    ],
    cons: [
      "Limited exclusively to WordPress — no other CMS or platforms",
      "17.5% service fee is relatively high compared to general platforms",
      "Smaller talent pool compared to generalist development platforms",
      "Not ideal for simple WordPress tasks that don't need expert-level skill",
    ],
    pricing: "17.5% service fee",
    pricingDetail: "Codeable charges a 17.5% service fee on all transactions. Project pricing varies based on complexity — simple tasks start around $200, while complex custom development ranges from $1,000 to $20,000+. Free to get started with project estimates.",
    features: [
      "Exclusive WordPress-focused talent marketplace",
      "24-hour fixed-price estimates",
      "Escrow payment protection system",
      "Freelancer vetting and quality assurance",
      "Project management dashboard",
      "Secure messaging and file sharing",
      "Milestone-based payment releases",
      "Dispute resolution service",
      "Client satisfaction guarantee",
      "Code review and quality checks",
      "Emergency WordPress support",
      "Ongoing maintenance plans",
    ],
    useCase: "Best for anyone needing expert WordPress development, design, or support — from small business owners to agencies and enterprises. Not suitable for non-WordPress projects or freelancers who don't specialize in WordPress.",
    websiteUrl: "https://codeable.io",
    alternatives: ["toptal", "upwork", "freelancer"],
    scoreBreakdown: {
      features: 85,
      reviews: 92,
      momentum: 78,
      popularity: 70,
    },
    userQuotes: [
      {
        role: "Agency Owner",
        company: "WebBuild Collective",
        quote: "Codeable saved us when we were overwhelmed with client work. Every developer we've hired has been top-notch and deeply knows WordPress."
      },
      {
        role: "WordPress Developer",
        company: "PluginPro",
        quote: "The vetting was tough but worth it. Codeable clients are serious about quality and willing to pay premium rates for expert work."
      },
    ],
  },
  {
    id: "envatostudio",
    name: "Envato Studio",
    category: "Design & Creative",
    rating: 4.2,
    reviewCount: 7000,
    icon: Palette,
    description: "Freelance services marketplace from the creators of ThemeForest, offering design, development, and marketing services.",
    longDescription:
      "Envato Studio is the freelance services arm of Envato, the parent company of popular digital marketplaces ThemeForest and GraphicRiver. Founded in 2015, the platform connects businesses with vetted freelancers offering services across design, development, marketing, video, audio, and business consulting. What sets Envato Studio apart is its integration with the broader Envato ecosystem — freelancers can leverage their existing portfolio items from ThemeForest or CodeCanyon to demonstrate their expertise. The platform uses a fixed-price service listing model similar to Fiverr, where freelancers define their service packages. Envato Studio charges a competitive 12.5% service fee, making it one of the more affordable curated platforms available.",
    pros: [
      "Competitive 12.5% service fee is lower than many competitors",
      "Integration with ThemeForest and CodeCanyon portfolios",
      "Fixed-price service packages create clear client expectations",
      "Envato brand recognition attracts quality clients",
      "Vetted freelancer pool maintains quality standards",
      "Secure payment processing with escrow protection",
    ],
    cons: [
      "Smaller client base compared to Fiverr or Upwork",
      "Limited to services that fit the Envato ecosystem style",
      "Less project variety than generalist platforms",
      "Platform growth has slowed in recent years",
    ],
    pricing: "12.5% service fee",
    pricingDetail: "Envato charges a flat 12.5% service fee on all transactions. Freelancers set their own prices for service packages. Free to join for both clients and freelancers. Payouts processed weekly with a minimum threshold of $50.",
    features: [
      "Fixed-price service listing marketplace",
      "Integration with Envato portfolio ecosystem",
      "Vetted freelancer quality assurance",
      "Escrow payment protection",
      "Client messaging and collaboration",
      "Order management dashboard",
      "Service package customization",
      "Review and rating system",
      "Quick turnaround project options",
      "Multiple service categories",
      "API access for enterprise clients",
      "Weekly payment processing",
    ],
    useCase: "Ideal for creative professionals and developers who already sell on Envato Market. Best for clients seeking design and development services. Not ideal for non-creative freelance categories or large enterprise projects.",
    websiteUrl: "https://studio.envato.com",
    alternatives: ["fiverr", "99designs", "codeable"],
    scoreBreakdown: {
      features: 74,
      reviews: 76,
      momentum: 58,
      popularity: 65,
    },
    userQuotes: [
      {
        role: "Graphic Designer",
        company: "PixelCraft Studio",
        quote: "Envato Studio lets me leverage my ThemeForest portfolio. Clients can see my work quality before they even message me."
      },
      {
        role: "Small Business Owner",
        company: "Bella Boutique",
        quote: "Found a great logo designer on Envato Studio. The fixed-price package made it easy to know exactly what I was getting."
      },
    ],
  },
  {
    id: "solidgigs",
    name: "SolidGigs",
    category: "General Freelance",
    rating: 4.0,
    reviewCount: 3000,
    icon: Star,
    description: "Curated freelance lead service that delivers hand-picked project opportunities from across the web to your inbox.",
    longDescription:
      "SolidGigs takes a unique approach to freelance platforms — instead of being a marketplace itself, it aggregates and curates the best freelance project opportunities from dozens of sources across the web. Founded by freelancers who were frustrated with the time drain of hunting for projects, SolidGigs sends members a daily batch of hand-picked gigs from top platforms like Upwork, Freelancer, PeoplePerHour, and many others. Each listing is reviewed and scored by the SolidGigs team to filter out low-quality, underpaid, or spammy projects. Members also get access to proposal templates, contract templates, and educational resources. The service focuses on helping freelancers find quality projects faster without spending hours browsing multiple platforms.",
    pros: [
      "Saves hours of daily job search time by aggregating listings",
      "Hand-curated listings filter out low-quality and spam projects",
      "Includes proposal templates and educational resources",
      "Covers projects across all major freelance categories",
      "New leads delivered daily via email",
      "Money-back guarantee if not satisfied",
    ],
    cons: [
      "Subscription fee required — no free tier available",
      "Does not replace being on actual freelance platforms",
      "Competition for curated leads can still be intense",
      "Some users report duplicate listings from different sources",
      "Limited to English-language projects primarily",
    ],
    pricing: "$29/month",
    pricingDetail: "Subscription is $29/month (billed monthly) or $179/year (billed annually, ~$14.92/month). No free tier available. 30-day money-back guarantee. Includes daily curated leads, proposal templates, and access to the freelance training library.",
    features: [
      "Daily curated freelance job leads",
      "Multi-source aggregation (Upwork, Freelancer, Indeed, etc.)",
      "Spam and low-quality filtering",
      "Job scoring and prioritization system",
      "Proposal template library",
      "Contract and invoice templates",
      "Freelance training and educational content",
      "Email delivery of daily leads",
      "Customizable search filters",
      "Cover letter generator tools",
      "Rate comparison data",
      "Member community access",
    ],
    useCase: "Best for active freelancers who want to save time on job hunting and focus on billable work. Ideal for those willing to pay for curated, high-quality leads. Not suitable for freelancers who prefer platform-exclusive features or direct client relationships.",
    websiteUrl: "https://solidgigs.com",
    alternatives: ["upwork", "freelancer", "guru"],
    scoreBreakdown: {
      features: 72,
      reviews: 68,
      momentum: 62,
      popularity: 58,
    },
    userQuotes: [
      {
        role: "Full-Stack Freelancer",
        company: "CodeNomad",
        quote: "SolidGigs saves me about 5 hours a week on job hunting. The curation is solid — I rarely see spam or low-ball projects anymore."
      },
      {
        role: "Freelance Copywriter",
        company: "WordFlow Studio",
        quote: "The proposal templates alone are worth the subscription. My response rate went up after I started using their frameworks."
      },
    ],
  },
  {
    id: "hubstafftalent",
    name: "Hubstaff Talent",
    category: "General Freelance",
    rating: 4.1,
    reviewCount: 2500,
    icon: Globe,
    description: "Free global talent marketplace connecting businesses with remote freelancers across all skill categories.",
    longDescription:
      "Hubstaff Talent is a unique freelance platform that stands out for one big reason — it's completely free for both freelancers and clients. Launched by Hubstaff (the popular time tracking software company), the platform connects businesses with remote freelancers across categories including software development, design, writing, virtual assistance, marketing, and more. Hubstaff Talent makes money through its integrated time tracking and productivity tools rather than transaction fees. Freelancers create detailed profiles showcasing their skills, experience, and rates, while clients can search and contact freelancers directly. The platform has over 2 million registered freelancers and serves clients ranging from startups to Fortune 500 companies.",
    pros: [
      "Completely free for both freelancers and clients — no fees at all",
      "Large global talent pool with diverse skill categories",
      "Seamless integration with Hubstaff time tracking tools",
      "Direct client messaging without platform restrictions",
      "Detailed freelancer profiles with work samples and reviews",
      "Transparent pricing — freelancers list their rates publicly",
    ],
    cons: [
      "No escrow or payment protection system built-in",
      "No dispute resolution service",
      "Less curated than paid platforms — quality varies",
      "No project management or collaboration tools natively",
      "Smaller client base than Upwork or Fiverr",
    ],
    pricing: "Free",
    pricingDetail: "Hubstaff Talent is 100% free for both freelancers and clients. No transaction fees, no membership fees, no hidden costs. Hubstaff monetizes through its separate time tracking and productivity SaaS products.",
    features: [
      "Free freelance marketplace",
      "Detailed freelancer profiles with portfolios",
      "Public rate listings for transparency",
      "Direct client-freelancer messaging",
      "Search and filter by skills, rate, and location",
      "Integrated Hubstaff time tracking option",
      "Client reviews and ratings",
      "Remote work focus",
      "Global talent discovery",
      "Quick project posting",
      "No transaction fees of any kind",
      "API access for enterprise integrations",
    ],
    useCase: "Best for freelancers who want to avoid platform fees and clients comfortable managing payments independently. Great for ongoing relationships. Not ideal for those needing escrow protection or formal dispute resolution.",
    websiteUrl: "https://talent.hubstaff.com",
    alternatives: ["upwork", "freelancer", "truelancer"],
    scoreBreakdown: {
      features: 68,
      reviews: 72,
      momentum: 65,
      popularity: 60,
    },
    userQuotes: [
      {
        role: "Freelance Web Developer",
        company: "DevStream",
        quote: "Hubstaff Talent is perfect for finding long-term clients without losing 10-20% to platform fees. I found two ongoing clients here."
      },
      {
        role: "Startup Founder",
        company: "DataSync Labs",
        quote: "We've hired three freelancers through Hubstaff Talent and paid exactly what we agreed — no surprise platform fees or markup."
      },
    ],
  },
  {
    id: "truelancer",
    name: "Truelancer",
    category: "General Freelance",
    rating: 3.8,
    reviewCount: 12000,
    icon: Briefcase,
    description: "Global freelance marketplace for small to medium projects with fixed-price and hourly contract options.",
    longDescription:
      "Truelancer is a global freelance marketplace established in 2014 that connects businesses with freelancers across a wide range of categories. The platform supports both fixed-price and hourly projects, with categories spanning web development, mobile apps, design, writing, data entry, marketing, and administrative support. Truelancer differentiates itself with a 'TrueConnect' system that gives freelancers a monthly quota of direct project bids, along with a job feed algorithm that prioritizes relevant matches. The platform charges a 10% service fee on all transactions, with optional membership plans offering additional benefits. Truelancer has over 2 million registered freelancers and processes thousands of projects monthly, particularly popular in markets across Asia, Europe, and the Americas.",
    pros: [
      "Competitive 10% flat service fee across all project types",
      "Large global freelancer and client base",
      "Both fixed-price and hourly contract options available",
      "TrueConnect bidding system with monthly bid allocation",
      "Escrow payment protection for secure transactions",
      "Mobile app for on-the-go project management",
    ],
    cons: [
      "Lower average project budgets compared to premium platforms",
      "User interface feels less polished than competitors",
      "Quality of client briefs can be inconsistent",
      "Limited enterprise or high-budget project categories",
      "Customer support response times can be slow",
    ],
    pricing: "10% service fee",
    pricingDetail: "Standard 10% service fee on all transactions. Free membership includes 50 bids per month. Paid plans: Professional at $14.99/mo (150 bids), Premium at $29.99/mo (unlimited bids with priority support). Escrow fee included.",
    features: [
      "Project posting and bidding system",
      "Fixed-price and hourly contract options",
      "Escrow payment protection",
      "Milestone-based payment releases",
      "Workroom collaboration tools",
      "Built-in time tracking",
      "Mobile app for iOS and Android",
      "Freelancer skills tests and certifications",
      "Portfolio showcase and management",
      "Client review and rating system",
      "Multiple withdrawal options",
      "24/7 customer support",
    ],
    useCase: "Good for freelancers seeking competitive fees and a global project marketplace. Suitable for small to medium projects across categories. Not ideal for premium-rate specialists or enterprise-level engagements.",
    websiteUrl: "https://truelancer.com",
    alternatives: ["freelancer", "upwork", "guru"],
    scoreBreakdown: {
      features: 70,
      reviews: 68,
      momentum: 72,
      popularity: 65,
    },
    userQuotes: [
      {
        role: "Graphic Designer",
        company: "DesignWave Studio",
        quote: "Truelancer has been a solid platform for building my freelance portfolio. The 10% fee is fair and I've found consistent work here."
      },
      {
        role: "Data Entry Specialist",
        company: "RemoteTask Pro",
        quote: "The TrueConnect system helps me find relevant projects without wasting bids. The mobile app makes it easy to respond to clients quickly."
      },
    ],
  },
  {
    id: "gotranscript",
    name: "GoTranscript",
    category: "Admin & Virtual Assistance",
    rating: 4.0,
    reviewCount: 5000,
    icon: Headphones,
    description: "Transcription and captioning platform connecting freelancers with audio/video transcription projects worldwide.",
    longDescription:
      "GoTranscript is a leading transcription and captioning service founded in 2005 that operates as both a service provider and a freelance platform. The platform connects freelancers with transcription, captioning, and subtitling projects from clients worldwide. Freelancers can work on audio transcription (medical, legal, academic, general), video captioning, and foreign language subtitling. GoTranscript is known for its strict quality standards and detailed style guides. Freelancers are paid per audio minute or per video minute, with rates varying based on difficulty and turnaround time. The platform also offers translation services, expanding opportunities for multilingual freelancers. GoTranscript processes thousands of hours of audio and video content each month.",
    pros: [
      "Steady stream of transcription projects available 24/7",
      "No bidding required — work is assigned based on availability",
      "Flexible schedule — work as much or as little as you want",
      "Multiple work types (transcription, captioning, subtitling)",
      "Opportunities for multilingual freelancers (translation)",
      "Free training and style guide resources provided",
    ],
    cons: [
      "Pay per audio minute can be lower than specialized freelance work",
      "Strict quality requirements with regular quality checks",
      "Must pass an application test to join the platform",
      "Limited to transcription and captioning only",
      "Work availability can fluctuate based on demand",
    ],
    pricing: "Pay per audio minute",
    pricingDetail: "Freelancers are paid per audio minute of content. Rates vary: English transcription from $0.60-$1.20/audio minute; captioning from $0.75-$1.50/video minute; higher rates for rush orders and difficult audio. Payments processed weekly via PayPal.",
    features: [
      "Audio transcription projects",
      "Video captioning and subtitling",
      "Foreign language transcription",
      "Translation services",
      "Automatic work assignment system",
      "Quality assurance and feedback",
      "Flexible work schedule",
      "Free style guide and training",
      "Weekly payment processing",
      "Multi-language support",
      "Mobile-friendly platform",
      "Referral bonus program",
    ],
    useCase: "Ideal for freelancers looking for entry-level transcription work with flexible hours. Best for detail-oriented individuals with fast typing speeds. Not suitable for those seeking high hourly rates or non-transcription freelance categories.",
    websiteUrl: "https://gotranscript.com",
    alternatives: ["upwork", "freelancer", "fiverr"],
    scoreBreakdown: {
      features: 66,
      reviews: 74,
      momentum: 60,
      popularity: 68,
    },
    userQuotes: [
      {
        role: "Freelance Transcriber",
        company: "Remote Typist",
        quote: "GoTranscript provides consistent work that I can do in my spare time. The flexible schedule is perfect alongside my other freelance work."
      },
      {
        role: "Student Freelancer",
        company: "College of Arts",
        quote: "I've been transcribing with GoTranscript for two years. The work fits around my class schedule and the payment is always reliable."
      },
    ],
  },
  {
    id: "flexjobs",
    name: "FlexJobs",
    category: "General Freelance",
    rating: 4.4,
    reviewCount: 15000,
    icon: Shield,
    description: "Premium job listing service specializing in curated remote, flexible, and freelance job opportunities.",
    longDescription:
      "FlexJobs is a premium job listing service founded in 2007 that specializes in remote, hybrid, and flexible work opportunities across all industries. Unlike typical freelance marketplaces, FlexJobs acts as a curated job board where every listing is manually screened by a research team to ensure legitimacy, relevance, and quality. Categories span over 50 career fields including technology, marketing, writing, customer service, healthcare, education, and finance. FlexJobs charges a membership fee for job seekers but guarantees a satisfaction refund. The platform features over 30,000 active job listings at any time, from entry-level to executive positions. FlexJobs also provides career resources including skills tests, resume reviews, and career coaching.",
    pros: [
      "All listings are manually vetted and scam-free",
      "Broad range of categories including corporate remote positions",
      "Includes full-time, part-time, freelance, and contract roles",
      "Comprehensive career resources and skills tests",
      "A+ BBB rating with strong consumer protection",
      "High-quality job listings from reputable companies",
      "Refund guarantee if not satisfied with the service",
    ],
    cons: [
      "Membership fee required for job seekers ($14.95+/month)",
      "Not a transaction platform — payments are handled externally",
      "Competition for listings can still be significant",
      "Some listings may be cross-posted from other job boards",
    ],
    pricing: "$14.95/month",
    pricingDetail: "Membership plans: Monthly ($14.95/month), Quarterly ($29.95 for 3 months, ~$9.98/month), Annual ($49.95/year, ~$4.16/month). Includes unlimited access to all job listings, skills tests, and career resources. Money-back guarantee available.",
    features: [
      "Hand-screened remote and flexible job listings",
      "50+ career categories covered",
      "Full-time, part-time, freelance, and contract options",
      "Skills tests and certifications",
      "Resume review services",
      "Career coaching resources",
      "Job search alerts and notifications",
      "Company research database",
      "Salary negotiation guides",
      "Webinars and career events",
      "Member satisfaction guarantee",
      "Mobile-friendly job search",
    ],
    useCase: "Best for professionals seeking verified remote and flexible work opportunities across all career levels. Ideal for those willing to pay for quality over quantity. Not suitable for freelancers seeking transaction-based work or instant project assignments.",
    websiteUrl: "https://flexjobs.com",
    alternatives: ["upwork", "solidgigs", "freelancer"],
    scoreBreakdown: {
      features: 84,
      reviews: 88,
      momentum: 82,
      popularity: 78,
    },
    userQuotes: [
      {
        role: "Senior Content Strategist",
        company: "Freelance Media",
        quote: "FlexJobs saved me from the time-wasting nightmare of sorting through scam listings on free boards. Every job I've applied to was legitimate."
      },
      {
        role: "Remote Software Engineer",
        company: "TechVentures",
        quote: "Found my current long-term contract through FlexJobs. The vetting process means you're competing with serious candidates for serious positions."
      },
    ],
  },
];

export const TOOL_MAP = new Map(ALL_TOOLS.map((tool) => [tool.id, tool]));
