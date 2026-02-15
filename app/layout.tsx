import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CreaDev Design",
  description: "Professional Web Development in Fairfax, VA",
  metadataBase: new URL('https://creadevdesign.com'),
  robots: 'index, follow',
  authors: [{ name: 'Yaser - CreaDev Design' }],
  creator: 'CreaDev Design',
  publisher: 'CreaDev Design',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://creadevdesign.com',
    siteName: 'CreaDev Design',
    title: 'CreaDev Design - Professional Web Development',
    description: 'Custom websites for businesses that refuse to blend in. Based in Fairfax, VA.',
    images: [
      {
        url: '/og-image.png', // We'll create this
        width: 1200,
        height: 630,
        alt: 'CreaDev Design - Professional Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CreaDev Design - Professional Web Development',
    description: 'Custom websites for businesses that refuse to blend in.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}