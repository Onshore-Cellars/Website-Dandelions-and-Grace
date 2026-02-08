import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Florist in Antibes | Cap d'Antibes Wedding & Yacht Flowers",
  description: "Premier florist in Antibes specializing in Cap d'Antibes villa weddings, Port Vauban superyacht floristry, and Juan-les-Pins events on the French Riviera.",
  keywords: [
    "florist Antibes",
    "Cap d'Antibes florist",
    "Antibes wedding florist",
    "Port Vauban florist",
    "luxury flowers Antibes",
    "Juan-les-Pins florist",
    "villa wedding florist",
  ],
};

const faqItems = [
  {
    question: "Do you serve Cap d'Antibes and Juan-les-Pins?",
    answer: "Yes, we serve all areas of Antibes including Cap d'Antibes, Juan-les-Pins, Vieil Antibes, and the surrounding coastal areas. We specialize in villa weddings and private estates on the Cap.",
  },
  {
    question: "Can you provide flowers for yachts at Port Vauban?",
    answer: "Absolutely! As Europe's largest marina, Port Vauban is a key service area. We provide weekly yacht arrangements, special event florals, and understand the unique logistics of superyacht deliveries.",
  },
  {
    question: "What venues in Antibes do you work with?",
    answer: "We work with Hôtel du Cap-Eden-Roc, Hôtel Belles Rives, Hôtel Juana, Villa Eilenroc, private Cap d'Antibes estates, and numerous beachfront venues in Juan-les-Pins.",
  },
  {
    question: "How far in advance should we book for a Cap d'Antibes villa wedding?",
    answer: "For Cap d'Antibes villa weddings, we recommend booking 8-12 months in advance, especially for peak summer season (June-September). This ensures availability and allows time for perfect planning.",
  },
];

export default function AntibesPage() {
  return (
    <>
      <Hero
        title="Luxury Florist in Antibes"
        subtitle="Serving Cap d'Antibes & Juan-les-Pins"
        description="Sophisticated floral design for Cap d'Antibes villas, Port Vauban superyachts, and elegant celebrations along the Antibes coastline."
        image="/images/hero/main-hero.svg"
        imageAlt="Antibes Cap d'Antibes florist"
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
              Antibes' Foremost Floral Design Studio
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Nestled between the glamour of Cannes and Monaco, Antibes offers unparalleled elegance. Dandelions & Grace
              specializes in the distinctive beauty of this coastal gem—from intimate Cap d'Antibes villa weddings to
              grand celebrations at iconic venues. We understand the romantic allure of Antibes and create florals
              that reflect its timeless Mediterranean charm.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container>
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-12 text-center">
            Our Services in Antibes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cap d'Antibes Villa Weddings",
                description: "Bespoke floral design for exclusive villa estates with stunning Mediterranean views.",
              },
              {
                title: "Port Vauban Yacht Floristry",
                description: "Weekly arrangements and event styling for superyachts at Europe's premier marina.",
              },
              {
                title: "Eden-Roc Celebrations",
                description: "Luxury florals for events at the legendary Hôtel du Cap-Eden-Roc and surrounding venues.",
              },
              {
                title: "Juan-les-Pins Beach Events",
                description: "Romantic beachfront styling for weddings, parties, and summer celebrations.",
              },
              {
                title: "Private Estate Gardens",
                description: "Seasonal plantings and event florals for Cap d'Antibes residences and gardens.",
              },
              {
                title: "Intimate Celebrations",
                description: "Elegant arrangements for anniversaries, proposals, and special moments in Antibes.",
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
                Why Choose Us in Antibes
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Cap d'Antibes Specialists</p>
                    <p className="text-stone-600">Deep knowledge of villa venues, access requirements, and coastal conditions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Marina Excellence</p>
                    <p className="text-stone-600">Expert superyacht floristry with professional Port Vauban access.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Mediterranean Aesthetic</p>
                    <p className="text-stone-600">Designs that capture the natural beauty and elegance of the Antibes coastline.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Seamless Logistics</p>
                    <p className="text-stone-600">Professional coordination for complex villa and yacht installations.</p>
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
                Antibes Portfolio
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
              Ready to Discuss Your Antibes Event?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Whether it's a Cap d'Antibes villa wedding, yacht celebration, or beachfront event, we're here to create something extraordinary.
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
              "addressLocality": "Antibes",
              "addressRegion": "Provence-Alpes-Côte d'Azur",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 43.5808,
              "longitude": 7.1251
            },
            "url": "https://www.dandelionsandgrace.fr/locations/antibes",
            "telephone": "+33000000000",
            "priceRange": "€€€€",
            "servesCuisine": [],
            "areaServed": {
              "@type": "City",
              "name": "Antibes"
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
                    "name": "Superyacht Floristry"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Coastal Event Florals"
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
