import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.palsontax.com"),
  title: {
    default: "Palson Tax - Expert Tax Services for Individuals & Small Businesses",
    template: "%s | Palson Tax",
  },
  description:
    "Professional tax preparation, planning, and IRS resolution services. Serving individuals and small businesses with year-round support and proactive tax strategies.",
  keywords: [
    "tax preparation",
    "tax planning",
    "small business accounting",
    "IRS resolution",
    "bookkeeping services",
    "payroll services",
    "CPA",
    "enrolled agent",
  ],
  authors: [{ name: "Palson Tax" }],
  creator: "Palson Tax",
  publisher: "Palson Tax",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.palsontax.com",
    siteName: "Palson Tax",
    title: "Palson Tax - Expert Tax Services",
    description:
      "Professional tax preparation, planning, and IRS resolution services for individuals and small businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Palson Tax",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palson Tax - Expert Tax Services",
    description:
      "Professional tax preparation, planning, and IRS resolution services.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.palsontax.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
