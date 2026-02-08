import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dandelions & Grace | Luxury Floral Design South of France",
    template: "%s | Dandelions & Grace",
  },
  description: "Award-winning luxury floral design for weddings, yachts, and events in Cannes, Monaco, Antibes, Nice, and Saint-Tropez.",
  keywords: [
    "luxury florist",
    "wedding flowers south of france",
    "cannes florist",
    "monaco florist",
    "yacht floristry",
    "destination wedding florist",
  ],
  authors: [{ name: "Dandelions & Grace" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dandelionsandgrace.fr",
    siteName: "Dandelions & Grace",
    title: "Dandelions & Grace | Luxury Floral Design South of France",
    description: "Award-winning luxury floral design for weddings, yachts, and events in Cannes, Monaco, Antibes, Nice, and Saint-Tropez.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dandelions & Grace | Luxury Floral Design South of France",
    description: "Award-winning luxury floral design for weddings, yachts, and events in Cannes, Monaco, Antibes, Nice, and Saint-Tropez.",
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
