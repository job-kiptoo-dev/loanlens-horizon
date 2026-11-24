
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "LoanLens | Compare loans in Kenya",
    template: "%s | LoanLens",
  },
  description:
    "Compare personal, auto and home loans from Kenyan lenders side by side.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense meta tag */}
        <meta
          name="google-adsense-account"
          content="ca-pub-8768631473417402"
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Source+Serif+4:wght@500;600;700&display=swap"
        />
      </head>

      <body className="flex min-h-screen flex-col bg-cream font-sans text-ink antialiased">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />

        {/* Google AdSense script */}
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8768631473417402"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}

