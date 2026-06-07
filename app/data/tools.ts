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

    alternatives: [
      "upwork",
      "fiverr",
      "CTO",
      "ScaleUp Technologies",
      "Toptal delivered a senior React developer within 48 hours who integrated seamlessly with our team.",
      "Senior Software Engineer",
      "Toptal Network",
      "The screening was tough but worth it. I'm consistently working with interesting clients at excellent rates.",
    ],

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

    alternatives: [
      "fiverr",
      "designcrowd",
      "Startup Founder",
      "NovaTech Inc.",
      "99designs gave us 50+ logo concepts in a week. We found the perfect one without endless revisions.",
      "Freelance Designer",
      "Artisan Visuals",
      "The contest model challenges me to do my best work. Winning contests has built my portfolio significantly.",
    ],

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

    alternatives: [
      "skyword",
      "clearvoice",
      "Senior Content Strategist",
      "Freelance Content Co.",
      "Contently provides consistent, high-quality work with enterprise clients who value excellent writing.",
      "Content Marketing Director",
      "GlobalBrand Inc.",
      "The quality of writers in Contently's network is consistently excellent. A vital part of our content strategy.",
    ],

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
];

export const TOOL_MAP = new Map(ALL_TOOLS.map((tool) => [tool.id, tool]));
