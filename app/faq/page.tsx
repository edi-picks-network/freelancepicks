"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a freelance platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A freelance platform is an online marketplace that connects freelancers with clients seeking specific services. Freelancers create profiles showcasing their skills and portfolio, while clients post projects or browse talent to hire. These platforms typically handle payments, dispute resolution, and communication between parties. Popular examples include Upwork, Fiverr, Toptal, Freelancer, and PeoplePerHour.",
      },
    },
    {
      "@type": "Question",
      name: "Which freelance platform is best for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fiverr and Upwork are generally the most beginner-friendly freelance platforms. Fiverr lets you create 'gigs' that clients can purchase directly, making it easy to start without bidding. Upwork offers a wide variety of entry-level projects suitable for building a portfolio. Freelancer.com also has a large number of contests and small projects ideal for newcomers looking to gain experience and reviews.",
      },
    },
    {
      "@type": "Question",
      name: "How do freelance platforms make money?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Freelance platforms typically charge a service fee or commission on each transaction. This ranges from 5% to 20% of the project value depending on the platform. Some platforms also offer premium memberships with additional features, charge for boosting profile visibility, or take a flat fee for connecting freelancers with curated clients. Always check the fee structure before committing to a platform.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best freelance platforms for developers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For developers, Toptal is known for high-quality clients and premium rates, though they have a rigorous screening process. Upwork offers the widest range of development projects from short bug fixes to long-term contracts. Gun.io and Arc.dev specialize in connecting developers with tech companies. For web development specifically, Codeable is an excellent platform focused on WordPress projects.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best freelance platforms for designers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Designers have several excellent platforms to choose from. 99designs specializes in graphic design contests, 99designs and DesignCrowd are great for logo and brand design. Dribbble is ideal for UI/UX designers looking to showcase portfolios. For interdisciplinary creative work, Envato Studio offers opportunities in web design, graphic design, and video production.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best freelance platforms for writers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contently and ClearVoice connect writers with high-quality content marketing clients and offer competitive pay rates. WriterAccess is a platform focused specifically on content creation. ProBlogger job board and BloggingPro are excellent for finding blogging and copywriting gigs. Upwork also has a large volume of writing projects suitable for both beginners and experienced writers.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started as a freelancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To start freelancing, first identify your skills and niche. Build a portfolio showcasing your best work, even if it means doing a few projects for free or at a discount initially. Create a professional profile on 2-3 platforms relevant to your field. Start with smaller projects to build reviews and ratings, then gradually increase your rates. Set up a dedicated workspace, track your time, and manage your finances from day one.",
      },
    },
    {
      "@type": "Question",
      name: "How do freelance platforms verify freelancers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verification varies by platform. Common methods include identity verification via government ID, skills tests and assessments, portfolio reviews, video interviews, and in some cases (like Toptal), a multi-stage technical screening process. Platforms like Toptal and Gun.io have rigorous vetting that accepts only the top 1-3% of applicants, while Upwork and Fiverr have more open signup processes with lower barriers to entry.",
      },
    },
    {
      "@type": "Question",
      name: "How important are reviews and ratings on freelance platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Reviews and ratings are critically important on freelance platforms. They serve as social proof and directly impact your visibility in search results. A profile with 5-star ratings and multiple positive reviews will win projects even with higher rates. Focus on delivering excellent work and communication on every project. If you're new, consider offering discounted rates for your first few projects to build a strong review foundation.",
      },
    },
    {
      "@type": "Question",
      name: "How do I set my freelance rates?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Setting freelance rates depends on your experience, skill level, industry demand, and geographic location. Research what other freelancers with similar skills charge on platforms like Upwork and Fiverr. A common approach is to start slightly below market rate to attract initial clients, then increase rates by 10-20% every few months as you build reputation. Consider both hourly rates and fixed-price project fees based on the scope of work.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best freelance platforms for remote jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "FlexJobs is specifically curated for remote and flexible jobs across many industries. Upwork and Toptal both offer extensive remote work opportunities. For remote tech roles, Gun.io and Arc.dev specialize in connecting developers with remote-first companies. SolidGigs is a curated service that sends vetted freelance gigs to your inbox weekly, saving you time on searching.",
      },
    },
    {
      "@type": "Question",
      name: "How do freelance platforms handle payments and disputes?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Most freelance platforms use an escrow system where clients deposit funds before work begins. Funds are released to freelancers once the client approves the work. For disputes, platforms offer mediation or arbitration services. Upwork has a dispute resolution process, Fiverr offers resolution center support, and most platforms have dedicated teams to handle payment conflicts. Always use the platform's built-in payment system to maintain protection.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use multiple freelance platforms or focus on one?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Starting with 1-2 platforms is recommended to avoid spreading yourself too thin. Once you've established a steady workflow and understand how each platform works, expanding to 3-4 platforms can increase your opportunities. Different platforms have different strengths — for example, Upwork is great for long-term projects, Fiverr excels at smaller gig-based work, and Toptal is ideal for premium clients. Diversify wisely.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the best freelance platforms for data entry and virtual assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Upwork and Freelancer.com have the largest volume of data entry and virtual assistant projects. Guru and PeoplePerHour also offer opportunities in administrative support. For higher-paying virtual assistant roles, Belay and Time Etc specialize in connecting experienced VAs with established businesses. Consider getting certifications in tools like Microsoft Office, Google Workspace, or project management software to stand out.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I write a winning freelance proposal?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "A winning freelance proposal should be personalized, concise, and focused on the client's needs. Start by addressing the client by name and referencing specific details from their project description. Explain how your skills and experience directly solve their problem. Include relevant portfolio samples. Keep it under 300 words, ask one or two thoughtful questions, and end with a clear call to action. Customize every proposal — never use templates.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the difference between hourly and fixed-price projects?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Hourly projects pay based on time worked and are ideal for ongoing work or projects with unclear scope. Fixed-price projects pay a predetermined amount for a defined deliverable. Hourly rates protect you if the client requests additional work, while fixed-price projects reward efficiency. Many platforms like Upwork offer time tracking tools for hourly projects. For your first projects, fixed-price contracts can be simpler to manage.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I stand out on crowded freelance platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "To stand out, focus on a specific niche rather than being a generalist. Invest time in a complete, professional profile with a photo, detailed bio, and portfolio samples. Take platform skills tests to earn badges. Collect and showcase strong reviews from clients. Submit personalized, well-crafted proposals. Price competitively at first, then raise rates as you build reputation. Consider offering a free initial consultation to build trust.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the future of freelance work?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "The future of freelance work is bright, driven by remote work adoption, digital transformation, and the gig economy's growth. AI tools are creating new opportunities while shifting skill demands — freelancers who embrace AI-assisted workflows will have a competitive edge. Specialized platforms for niche skills are emerging. The global freelance market continues to expand, with more companies preferring flexible talent over full-time employees. Upskilling and adaptability are key to long-term success.",
      },
    },
  ],
};

const FAQ_ITEMS = [
  {
    question: "What is a freelance platform?",
    answer:
      "A freelance platform is an online marketplace that connects freelancers with clients seeking specific services. Freelancers create profiles showcasing their skills and portfolio, while clients post projects or browse talent to hire. These platforms typically handle payments, dispute resolution, and communication between parties. Popular examples include Upwork, Fiverr, Toptal, Freelancer, and PeoplePerHour.",
  },
  {
    question: "Which freelance platform is best for beginners?",
    answer:
      "Fiverr and Upwork are generally the most beginner-friendly freelance platforms. Fiverr lets you create 'gigs' that clients can purchase directly, making it easy to start without bidding. Upwork offers a wide variety of entry-level projects suitable for building a portfolio. Freelancer.com also has a large number of contests and small projects ideal for newcomers looking to gain experience and reviews.",
  },
  {
    question: "How do freelance platforms make money?",
    answer:
      "Freelance platforms typically charge a service fee or commission on each transaction. This ranges from 5% to 20% of the project value depending on the platform. Some platforms also offer premium memberships with additional features, charge for boosting profile visibility, or take a flat fee for connecting freelancers with curated clients. Always check the fee structure before committing to a platform.",
  },
  {
    question: "What are the best freelance platforms for developers?",
    answer:
      "For developers, Toptal is known for high-quality clients and premium rates, though they have a rigorous screening process. Upwork offers the widest range of development projects from short bug fixes to long-term contracts. Gun.io and Arc.dev specialize in connecting developers with tech companies. For web development specifically, Codeable is an excellent platform focused on WordPress projects.",
  },
  {
    question: "What are the best freelance platforms for designers?",
    answer:
      "Designers have several excellent platforms to choose from. 99designs specializes in graphic design contests, and DesignCrowd is great for logo and brand design. Dribbble is ideal for UI/UX designers looking to showcase portfolios. For interdisciplinary creative work, Envato Studio offers opportunities in web design, graphic design, and video production.",
  },
  {
    question: "What are the best freelance platforms for writers?",
    answer:
      "Contently and ClearVoice connect writers with high-quality content marketing clients and offer competitive pay rates. WriterAccess is a platform focused specifically on content creation. ProBlogger job board and BloggingPro are excellent for finding blogging and copywriting gigs. Upwork also has a large volume of writing projects suitable for both beginners and experienced writers.",
  },
  {
    question: "How do I get started as a freelancer?",
    answer:
      "To start freelancing, first identify your skills and niche. Build a portfolio showcasing your best work, even if it means doing a few projects for free or at a discount initially. Create a professional profile on 2-3 platforms relevant to your field. Start with smaller projects to build reviews and ratings, then gradually increase your rates. Set up a dedicated workspace, track your time, and manage your finances from day one.",
  },
  {
    question: "How do freelance platforms verify freelancers?",
    answer:
      "Verification varies by platform. Common methods include identity verification via government ID, skills tests and assessments, portfolio reviews, video interviews, and in some cases (like Toptal), a multi-stage technical screening process. Platforms like Toptal and Gun.io have rigorous vetting that accepts only the top 1-3% of applicants, while Upwork and Fiverr have more open signup processes with lower barriers to entry.",
  },
  {
    question: "How important are reviews and ratings on freelance platforms?",
    answer:
      "Reviews and ratings are critically important on freelance platforms. They serve as social proof and directly impact your visibility in search results. A profile with consistent 5-star ratings and multiple positive reviews will win projects even with higher rates. Focus on delivering excellent work and communication on every project. If you're new, consider offering discounted rates for your first few projects to build a strong review foundation.",
  },
  {
    question: "How do I set my freelance rates?",
    answer:
      "Setting freelance rates depends on your experience, skill level, industry demand, and geographic location. Research what other freelancers with similar skills charge on platforms like Upwork and Fiverr. A common approach is to start slightly below market rate to attract initial clients, then increase rates by 10-20% every few months as you build reputation. Consider both hourly rates and fixed-price project fees based on the scope of work.",
  },
  {
    question: "What are the best freelance platforms for remote jobs?",
    answer:
      "FlexJobs is specifically curated for remote and flexible jobs across many industries. Upwork and Toptal both offer extensive remote work opportunities. For remote tech roles, Gun.io and Arc.dev specialize in connecting developers with remote-first companies. SolidGigs is a curated service that sends vetted freelance gigs to your inbox weekly, saving you time on searching.",
  },
  {
    question: "How do freelance platforms handle payments and disputes?",
    answer:
      "Most freelance platforms use an escrow system where clients deposit funds before work begins. Funds are released to freelancers once the client approves the work. For disputes, platforms offer mediation or arbitration services. Upwork has a dispute resolution process, Fiverr offers resolution center support, and most platforms have dedicated teams to handle payment conflicts. Always use the platform's built-in payment system to maintain protection.",
  },
  {
    question: "Should I use multiple freelance platforms or focus on one?",
    answer:
      "Starting with 1-2 platforms is recommended to avoid spreading yourself too thin. Once you've established a steady workflow and understand how each platform works, expanding to 3-4 platforms can increase your opportunities. Different platforms have different strengths — for example, Upwork is great for long-term projects, Fiverr excels at smaller gig-based work, and Toptal is ideal for premium clients. Diversify wisely.",
  },
  {
    question: "What are the best freelance platforms for data entry and virtual assistance?",
    answer:
      "Upwork and Freelancer.com have the largest volume of data entry and virtual assistant projects. Guru and PeoplePerHour also offer opportunities in administrative support. For higher-paying virtual assistant roles, Belay and Time Etc specialize in connecting experienced VAs with established businesses. Consider getting certifications in tools like Microsoft Office, Google Workspace, or project management software to stand out.",
  },
  {
    question: "How do I write a winning freelance proposal?",
    answer:
      "A winning freelance proposal should be personalized, concise, and focused on the client's needs. Start by addressing the client by name and referencing specific details from their project description. Explain how your skills and experience directly solve their problem. Include relevant portfolio samples. Keep it under 300 words, ask one or two thoughtful questions, and end with a clear call to action. Customize every proposal — never use templates.",
  },
  {
    question: "What is the difference between hourly and fixed-price projects?",
    answer:
      "Hourly projects pay based on time worked and are ideal for ongoing work or projects with unclear scope. Fixed-price projects pay a predetermined amount for a defined deliverable. Hourly rates protect you if the client requests additional work, while fixed-price projects reward efficiency. Many platforms like Upwork offer time tracking tools for hourly projects. For your first projects, fixed-price contracts can be simpler to manage.",
  },
  {
    question: "How do I stand out on crowded freelance platforms?",
    answer:
      "To stand out, focus on a specific niche rather than being a generalist. Invest time in a complete, professional profile with a photo, detailed bio, and portfolio samples. Take platform skills tests to earn badges. Collect and showcase strong reviews from clients. Submit personalized, well-crafted proposals. Price competitively at first, then raise rates as you build reputation. Consider offering a free initial consultation to build trust.",
  },
  {
    question: "What is the future of freelance work?",
    answer:
      "The future of freelance work is bright, driven by remote work adoption, digital transformation, and the gig economy's growth. AI tools are creating new opportunities while shifting skill demands — freelancers who embrace AI-assisted workflows will have a competitive edge. Specialized platforms for niche skills are emerging. The global freelance market continues to expand, with more companies preferring flexible talent over full-time employees. Upskilling and adaptability are key to long-term success.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#3B82F6] bg-[#162440] px-3 py-1.5 rounded-md mb-4">
              FAQ
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#F0F4F8] tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#8BA3BE] max-w-xl mx-auto leading-relaxed">
              Everything you need to know about freelance platforms — from choosing the right
              marketplace to setting rates, building your profile, and growing your freelance career.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-[#0F1D32] border border-[#1E3A5F] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#162440] transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[#F0F4F8] font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#3B82F6] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 text-[#8BA3BE] leading-relaxed text-sm border-t border-[#1E3A5F] pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#8BA3BE] text-sm">
              Still have questions?{" "}
              <a
                href="/contact"
                className="text-[#3B82F6] hover:underline font-medium"
              >
                Contact our team
              </a>{" "}
              and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
