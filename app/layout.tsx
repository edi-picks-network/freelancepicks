import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "./globals.css";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import CookieBanner from "./components/CookieBanner";

export const metadata: Metadata = {
  title: "FreelancePicks — Best Freelance Platforms & Marketplaces 2026",
  description:
    "Honest reviews of the best freelance platforms and marketplaces. Find your next remote work opportunity with our expert comparisons.",
  keywords: [
    "freelance platforms",
    "best freelance websites",
    "freelance marketplace",
    "remote work platforms",
    "Upwork review",
    "Fiverr review",
    "Toptal review",
    "freelance jobs",
    "remote work",
    "freelance services",
  ],
  verification: {
    google: "T5bb4mZivi0CfaYYRiKZLSNIWmhvAX6_RVgDEyonTGo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FreelancePicks",
    title: "FreelancePicks — Best Freelance Platforms & Marketplaces 2026",
    description:
      "Honest reviews of the best freelance platforms and marketplaces. Find your next remote work opportunity with our expert comparisons.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans">
      <body className="min-h-screen bg-white antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
