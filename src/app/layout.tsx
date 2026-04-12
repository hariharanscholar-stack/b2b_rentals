import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: '%s | B2B Rentals',
    default: 'B2B Rentals - Industrial Material Handling Equipment',
  },
  description:
    'Premium industrial equipment rentals including electric forklifts, reach trucks, and earth moving equipment. Simplify your B2B rentals today.',
  keywords: ['B2B Rentals', 'forklift rental', 'industrial equipment', 'material handling', 'machinery rental'],
  openGraph: {
    title: 'B2B Rentals - Premium Industrial Equipment',
    description: 'Simplifying Industrial Rentals. Rent and manage your entire fleet in one powerful platform.',
    url: 'https://b2brentals.netlify.app',
    siteName: 'B2B Rentals',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  );
}
