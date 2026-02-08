import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Florist in Nice | Côte d'Azur Wedding & Event Flowers",
  description: "Nice's premier luxury florist for Old Town weddings, Promenade des Anglais events, and Côte d'Azur celebrations. Serving Nice, Villefranche, and surrounding areas.",
  keywords: [
    "florist Nice",
    "Nice wedding florist",
    "Côte d'Azur florist",
    "luxury flowers Nice",
    "Promenade des Anglais florist",
    "Old Town Nice florist",
    "Nice event florist",
  ],
};

const faqItems = [
  {
    question: "Which areas of Nice do you serve?",
    answer: "We serve all areas of Nice including Vieux Nice (Old Town), Promenade des Anglais, Cimiez, Mont Boron, the Port, and extending to Villefranche-sur-Mer, Eze, and Saint-Jean-Cap-Ferrat.",
  },
  {
    question: "Can you create florals for Old Town weddings?",
    answer: "Yes! We specialize in Old Town Nice weddings with their unique charm and logistics. We're experienced with narrow streets, historic venues, and creating designs that complement the Mediterranean architecture.",
  },
  {
    question: "What venues in Nice do you work with?",
    answer: "We work with Hôtel Negresco, Le Méridien Nice, Villa Ephrussi de Rothschild, Château de Crémat, Palais de la Méditerranée, historic churches, and numerous private villas with sea views.",
  },
  {
    question: "Do you offer delivery to Nice Côte d'Azur Airport?",
    answer: "Yes, we can arrange special deliveries to Nice Côte d'Azur Airport for VIP arrivals, as well as to hotels and residences throughout the Nice region for destination wedding guests.",
  },
];

export default function NicePage() {
  return (
    <>
      <Hero
        title="Luxury Florist in Nice"
        subtitle="Serving the Côte d'Azur Capital"
        description="Elegant floral design for weddings, events, and celebrations in Nice, from the charm of Vieux Nice to the grandeur of the Promenade des Anglais."
        image="/images/hero/main-hero.svg"
        imageAlt="Nice Côte d'Azur florist"
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
              Nice's Premier Floral Design House
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              As the jewel of the Côte d'Azur, Nice offers a perfect blend of historic charm and contemporary elegance.
              Dandelions & Grace creates floral experiences that honor both—from intimate celebrations in Vieux Nice's
              cobbled lanes to spectacular events overlooking the Baie des Anges. Our designs capture the vibrant spirit
              and timeless beauty of the French Riviera's capital.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container>
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-12 text-center">
            Our Services in Nice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Old Town Weddings",
                description: "Romantic floral design for intimate weddings in the heart of Vieux Nice's historic quarter.",
              },
              {
                title: "Promenade Events",
                description: "Glamorous arrangements for events along the iconic Promenade des Anglais.",
              },
              {
                title: "Villa & Château Celebrations",
                description: "Bespoke florals for hilltop villas, historic châteaux, and estates with panoramic views.",
              },
              {
                title: "Hotel & Venue Styling",
                description: "Luxury florals for Negresco, Méridien, and Nice's finest hotels and event spaces.",
              },
              {
                title: "Corporate Events",
                description: "Sophisticated designs for conferences, galas, and business events in Nice.",
              },
              {
                title: "Seasonal Arrangements",
                description: "Weekly florals for residences, boutiques, and businesses throughout Nice.",
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
                Why Choose Us in Nice
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Local Expertise</p>
                    <p className="text-stone-600">Comprehensive knowledge of Nice venues from Old Town to Mont Boron.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Mediterranean Beauty</p>
                    <p className="text-stone-600">Designs inspired by the colors and light of the Côte d'Azur.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Bilingual Service</p>
                    <p className="text-stone-600">Fluent coordination for international clients and destination weddings.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Trusted Network</p>
                    <p className="text-stone-600">Established relationships with Nice's best venues, hotels, and vendors.</p>
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
                Nice Portfolio
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
              Ready to Discuss Your Nice Event?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Whether it's an Old Town wedding, Promenade celebration, or hilltop villa event, we're here to bring your vision to life.
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
              "addressLocality": "Nice",
              "addressRegion": "Provence-Alpes-Côte d'Azur",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 43.7102,
              "longitude": 7.2620
            },
            "url": "https://www.dandelionsandgrace.fr/locations/nice",
            "telephone": "+33000000000",
            "priceRange": "€€€€",
            "servesCuisine": [],
            "areaServed": {
              "@type": "City",
              "name": "Nice"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Floral Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Wedding Flowers"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Old Town Event Florals"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Promenade Event Styling"
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
