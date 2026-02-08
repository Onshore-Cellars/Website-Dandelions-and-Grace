import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Florist in Saint-Tropez | Villa Wedding & Beach Club Flowers",
  description: "Saint-Tropez's premier luxury florist for villa weddings, yacht club events, beach club parties, and exclusive summer celebrations in the French Riviera's most glamorous destination.",
  keywords: [
    "florist Saint-Tropez",
    "Saint-Tropez wedding florist",
    "luxury flowers Saint-Tropez",
    "beach club florist",
    "villa wedding Saint-Tropez",
    "yacht club florist",
    "Pampelonne florist",
  ],
};

const faqItems = [
  {
    question: "Do you serve all areas of Saint-Tropez?",
    answer: "Yes, we serve Saint-Tropez town, Pampelonne beaches, Ramatuelle, Gassin, and the surrounding peninsula. We specialize in private villas, beach clubs, yacht clubs, and exclusive venues throughout the area.",
  },
  {
    question: "Can you provide florals for beach club events?",
    answer: "Absolutely! We have extensive experience with Saint-Tropez's legendary beach clubs including Club 55, Nikki Beach, and others. We understand the unique requirements of beach environments and create designs that thrive in coastal conditions.",
  },
  {
    question: "What is your availability during the summer season?",
    answer: "Summer (June-September) is our busiest season in Saint-Tropez. We recommend booking 8-12 months in advance for July and August events. Our team expands during peak season to handle the high volume of celebrations.",
  },
  {
    question: "Do you work with villa weddings and private estates?",
    answer: "Yes, villa weddings are one of our specialties. We work with numerous private estates throughout Saint-Tropez, Ramatuelle, and Gassin, and have experience managing the logistics of secluded villa locations and their unique access requirements.",
  },
];

export default function SaintTropezPage() {
  return (
    <>
      <Hero
        title="Luxury Florist in Saint-Tropez"
        subtitle="Serving the French Riviera's Most Glamorous Destination"
        description="Exquisite floral design for villa weddings, beach clubs, yacht clubs, and exclusive summer celebrations in Saint-Tropez."
        image="/images/hero/main-hero.svg"
        imageAlt="Saint-Tropez florist"
        height="large"
        cta={{
          text: "Request a Quote",
          href: "/contact",
        }}
      />

      <Section spacing="large">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
              Saint-Tropez's Distinguished Floral Artisan
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Saint-Tropez embodies effortless glamour and Mediterranean beauty. Dandelions & Grace brings the same
              sophistication to every celebration—whether it's an intimate villa wedding overlooking the bay, a vibrant
              beach club party at Pampelonne, or an elegant yacht club soirée. We understand the unique rhythm of
              Saint-Tropez and create florals that capture its legendary joie de vivre.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container>
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-12 text-center">
            Our Services in Saint-Tropez
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Private Villa Weddings",
                description: "Bespoke floral design for exclusive villa estates in Saint-Tropez, Ramatuelle, and Gassin.",
              },
              {
                title: "Beach Club Events",
                description: "Vibrant, weather-resilient arrangements for Pampelonne's legendary beach clubs.",
              },
              {
                title: "Yacht Club Celebrations",
                description: "Elegant florals for Port de Saint-Tropez yacht clubs and maritime events.",
              },
              {
                title: "Summer Soirées",
                description: "Glamorous designs for exclusive summer parties, galas, and VIP celebrations.",
              },
              {
                title: "Hotel & Residence Styling",
                description: "Luxury arrangements for Byblos, Château de la Messardière, and private residences.",
              },
              {
                title: "Intimate Celebrations",
                description: "Sophisticated florals for anniversaries, proposals, and special occasions in paradise.",
              },
            ].map((service) => (
              <div key={service.title} className="bg-white p-6">
                <h3 className="text-xl font-display text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="large">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
                Why Choose Us in Saint-Tropez
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Saint-Tropez Specialists</p>
                    <p className="text-stone-600">Intimate knowledge of villas, beach clubs, and the area's exclusive venues.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Coastal Expertise</p>
                    <p className="text-stone-600">Designs that thrive in beach and maritime environments with sea breeze and sun.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Summer Season Mastery</p>
                    <p className="text-stone-600">Proven ability to manage high-profile events during the busiest months.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Glamorous Aesthetic</p>
                    <p className="text-stone-600">Sophisticated designs that capture Saint-Tropez's effortless elegance.</p>
                  </div>
                </div>
              </div>
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="aspect-[4/5] relative bg-stone-200">
              <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                Saint-Tropez Portfolio
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container>
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white p-6">
                <h3 className="text-lg font-medium text-stone-900 mb-3">{item.question}</h3>
                <p className="text-stone-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="large">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
              Ready to Discuss Your Saint-Tropez Event?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Whether it's a villa wedding, beach club party, or yacht club celebration, we're here to create an unforgettable experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Request a Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Florist",
            "name": "Dandelions & Grace",
            "image": "https://www.dandelionsandgrace.fr/logo.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Saint-Tropez",
              "addressRegion": "Provence-Alpes-Côte d'Azur",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 43.2677,
              "longitude": 6.6407
            },
            "url": "https://www.dandelionsandgrace.fr/locations/saint-tropez",
            "telephone": "+33000000000",
            "priceRange": "€€€€",
            "servesCuisine": [],
            "areaServed": {
              "@type": "City",
              "name": "Saint-Tropez"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Floral Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Villa Wedding Flowers"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Beach Club Florals"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Yacht Club Events"
                  }
                }
              ]
            }
          })
        }}
      />
    </>
  );
}
