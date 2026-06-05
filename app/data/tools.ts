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
      "Toptal positions itself as a premium freelance platform that connects businesses with the top 3% of freelance talent worldwide. Founded in 2010, Toptal is known for its rigorous screening process that includes language and communication tests, technical interviews, live coding challenges, and test projects. The platform focuses on software developers, designers, project managers, product managers, and finance experts. Toptal's clients include Fortune 500 companies and leading startups. The platform handles all billing and contracting, and offers a no-risk trial period. Toptal's rates are higher than most platforms, typically starting at $60-$100+/hour, reflecting the premium talent pool.",
    pros: [
      "Top 3% screening ensures high-quality talent pool",
      "Rigorous technical and communication assessments",
      "No-risk trial period for client satisfaction",
      "Dedicated account managers for enterprise clients",
      "Covers billing, contracts, and compliance",
      "Fast matching within 24-48 hours",
      "Global talent pool across time zones",
    ],
    cons: [
      "High hourly rates (typically $60-$150+/hr)",
      "Not suitable for small or short-term projects",
      "Screening process is time-consuming for freelancers",
      "Limited categories compared to general platforms",
      "Less suitable for creative or content work",
    ],
    pricing: "From $60/hr",
    pricingDetail: "Toptal freelancers set their own rates, typically $60-$150+/hour. Toptal adds a markup for enterprise clients. No cost to join as a freelancer. Free trial periods are offered to clients.",
    features: [
      "Elite talent screening (top 3%)",
      "Technical skills assessment and interviews",
      "Risk-free trial period",
      "Dedicated account management",
      "Billing and invoicing management",
      "NDA and IP protection agreements",
      "Compliance and tax support",
      "Project scoping assistance",
      "Time tracking and reporting",
      "Global talent matching",
      "Enterprise-grade security",
      "Scalable team augmentation",
    ],
    useCase: "Best for businesses needing top-tier technical talent for critical projects. Ideal for experienced developers and designers seeking premium compensation. Not suitable for beginners or small-budget projects.",
    websiteUrl: "https://toptal.com",
    alternatives: ["upwork", "fiverr"],
    scoreBreakdown: {
      features: 85,
      reviews: 92,
      momentum: 80,
      popularity: 88,
    },
    userQuotes: [
      {
        role: "CTO",
        company: "ScaleUp Technologies",
        quote: "Toptal delivered a senior React developer within 48 hours who integrated seamlessly with our team."
      },
      {
        role: "Senior Software Engineer",
        company: "Toptal Network",
        quote: "The screening was tough but worth it. I'm consistently working with interesting clients at excellent rates."
      }
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
      "99designs is a specialized freelance marketplace focused exclusively on design services, founded in 2008. It connects businesses with over 125,000 designers worldwide through two main hiring models: design contests where multiple designers submit concepts and the client picks a winner, and 1-to-1 Projects for direct collaboration. Design categories include logo design, web design, packaging, book covers, merchandise, and more. 99designs is known for high-quality design work and guarantees client satisfaction. Designers earn based on contest prizes or project rates, with the platform taking a commission. It also offers a managed service through 99designs Pro.",
    pros: [
      "Exclusive focus on design ensures high-quality talent",
      "Contest model allows seeing work before committing",
      "Money-back guarantee for client satisfaction",
      "Large community of professional designers",
      "1-to-1 Projects for direct designer collaboration",
      "99designs Pro for managed design services",
      "Clear IP rights transfer upon payment",
    ],
    cons: [
      "Contest system means designers may work without winning",
      "Higher price point than general platforms for design work",
      "Limited to design categories only",
      "Designer vetting process can be selective",
      "Platform fee is built into contest pricing",
    ],
    pricing: "From $299 per contest",
    pricingDetail: "Design contests start from $299 (Bronze), $499 (Silver), $799 (Gold), $1,499 (Platinum). 1-to-1 Projects are quoted based on scope. Designers keep 100% of prize money but 99designs adds a client fee.",
    features: [
      "Design contests with multiple submissions",
      "1-to-1 Projects for direct hiring",
      "Blind contests for unbiased selection",
      "Client brief creation tools",
      "Designer portfolios and ratings",
      "IP rights transfer and contracts",
      "99designs Pro managed service",
      "Free design consultation",
      "Satisfaction guarantee",
      "Category-specific design contests",
      "Real-time designer collaboration",
      "Mobile app for designers",
    ],
    useCase: "Best for businesses needing professional design work and for designers specializing in visual branding. Not suitable for non-design work or those on tight budgets.",
    websiteUrl: "https://99designs.com",
    alternatives: ["fiverr", "designcrowd"],
    scoreBreakdown: {
      features: 82,
      reviews: 88,
      momentum: 75,
      popularity: 85,
    },
    userQuotes: [
      {
        role: "Startup Founder",
        company: "NovaTech Inc.",
        quote: "99designs gave us 50+ logo concepts in a week. We found the perfect one without endless revisions."
      },
      {
        role: "Freelance Designer",
        company: "Artisan Visuals",
        quote: "The contest model challenges me to do my best work. Winning contests has built my portfolio significantly."
      }
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
      "Contently is a premium content marketing platform and freelance marketplace that connects enterprise brands with vetted freelance writers, editors, and content strategists. Founded in 2010, Contently's network includes over 100,000 freelance creators. The platform is known for high-quality content production, with clients including major global brands. Contently offers a full content marketing platform (The Content Marketing Platform) that includes content strategy, planning, creation, and analytics. Writers are curated and go through an application process. Contently is not open to all freelancers — it maintains a selective network focused on quality.",
    pros: [
      "High-quality, vetted writer network",
      "Enterprise-level clients with premium rates",
      "Content strategy and planning tools included",
      "Reliable payment and professional contracts",
      "Editorial support and content team management",
      "Analytics and performance tracking",
      "Long-term client relationships common",
    ],
    cons: [
      "Highly selective application process for writers",
      "Not open to all freelancers — invitation or application only",
      "Focus on content marketing, limited other categories",
      "Minimum project sizes may exclude small businesses",
      "Rates are not transparent upfront",
    ],
    pricing: "Premium rates",
    pricingDetail: "Pricing is quote-based for clients, typically starting at $5,000+ monthly retainers. Freelancer rates vary by experience and client, typically $0.50-$2.00+/word. Freelancers must apply and be accepted into the network.",
    features: [
      "Curation and vetting of freelance talent",
      "Content strategy and planning tools",
      "Content creation and editing workflow",
      "Performance analytics and reporting",
      "Rights management and licensing",
      "Team collaboration features",
      "Brand voice guidelines management",
      "Calendar and deadline management",
      "Asset management and storage",
      "Enterprise-grade security and compliance",
      "Dedicated account management",
      "Integration with major CMS platforms",
    ],
    useCase: "Best for experienced writers and content creators seeking premium clients and stable work. Suitable for enterprise brands needing high-quality content at scale. Not accessible for entry-level freelancers.",
    websiteUrl: "https://contently.com",
    alternatives: ["skyword", "clearvoice"],
    scoreBreakdown: {
      features: 88,
      reviews: 90,
      momentum: 82,
      popularity: 78,
    },
    userQuotes: [
      {
        role: "Senior Content Strategist",
        company: "Freelance Content Co.",
        quote: "Contently provides consistent, high-quality work with enterprise clients who value excellent writing."
      },
      {
        role: "Content Marketing Director",
        company: "GlobalBrand Inc.",
        quote: "The quality of writers in Contently's network is consistently excellent. A vital part of our content strategy."
      }
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

// Lookup map for tool detail pages
export const TOOL_MAP = new Map(ALL_TOOLS.map((tool) => [tool.id, tool]));
