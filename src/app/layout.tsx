import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { businessConfig } from "../config/business";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${businessConfig.brand.name} - ${businessConfig.services.mainClaim} in ${businessConfig.location.fullLocation}`,
  description: `Professional tile installation and flooring contractors in ${businessConfig.location.fullLocation}. We offer expert tile installation, repairs, and home remodeling services with ${businessConfig.brand.yearsExperience}+ years of experience.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
