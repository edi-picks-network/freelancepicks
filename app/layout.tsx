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
  title: "LeafConsulting — Freelance Platform Strategy Studio",
  description:
    "Denver-based consulting studio helping freelancers choose the right platforms, optimize their presence, and maximize earnings. Data-driven platform selection and strategy.",
  keywords: [
    "freelance platforms",
    "best freelance websites",
    "freelance marketplace guide",
    "freelance platform strategy",
    "freelance consulting",
    "freelancer income optimization",
    "LeafConsulting",
    "Denver freelance studio",
    "platform fit score",
    "freelance marketplace comparison",
  ],
  verification: {
    google: "T5bb4mZivi0CfaYYRiKZLSNIWmhvAX6_RVgDEyonTGo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "LeafConsulting",
    title: "LeafConsulting — Freelance Platform Strategy Studio",
    description:
      "Denver-based consulting studio helping freelancers choose the right platforms, optimize their presence, and maximize earnings.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans">
      <body className="min-h-screen bg-warm-bg antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
