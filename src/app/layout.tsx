import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { businessConfig } from "../config/business";
import Canonical from "../components/Canonical";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${businessConfig.brand.name} - Professional Tile & Flooring in ${businessConfig.location.fullLocation}`,
    template: `%s | ${businessConfig.brand.name} - ${businessConfig.location.fullLocation}`
  },
  description: `Professional tile installation and flooring contractors in ${businessConfig.location.fullLocation}. We offer expert tile installation, repairs, and home remodeling services with ${businessConfig.brand.yearsInBusiness}+ years of experience serving ${businessConfig.location.serviceAreas.join(", ")} and surrounding areas.`,
  keywords: [
    'tile installation',
    'flooring contractors',
    'bathroom tile',
    'kitchen backsplash',
    'tile repair',
    'flooring installation',
    businessConfig.location.city,
    businessConfig.location.state,
    businessConfig.location.fullLocation,
    ...businessConfig.location.serviceAreas
  ],
  authors: [{ name: businessConfig.brand.name }],
  creator: businessConfig.brand.name,
  publisher: businessConfig.brand.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vantatileflooring.com',
    siteName: businessConfig.brand.name,
    title: `${businessConfig.brand.name} - Professional Tile & Flooring in ${businessConfig.location.fullLocation}`,
    description: businessConfig.brand.tagline,
    images: [
      {
        url: 'https://vantatileflooring.com/og.jpg',
        width: 1200,
        height: 630,
        alt: `${businessConfig.brand.name} Logo`,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessConfig.brand.name} - Professional Tile & Flooring in ${businessConfig.location.fullLocation}`,
    description: businessConfig.brand.tagline,
    images: ['https://vantatileflooring.com/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your actual verification code
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/vanta-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Canonical />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
