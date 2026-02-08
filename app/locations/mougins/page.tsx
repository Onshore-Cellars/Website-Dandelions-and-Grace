import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Florist in Mougins | Provençal Wedding & Hilltop Venue Flowers",
  description: "Mougins and Grasse region luxury florist specializing in Provençal weddings, hilltop venues, perfume-inspired designs, and rustic-elegant celebrations in the French countryside.",
  keywords: [
    "florist Mougins",
    "Mougins wedding florist",
    "Provençal wedding florist",
    "Grasse florist",
    "luxury flowers Mougins",
    "hilltop venue florist",
    "countryside wedding florist",
  ],
};

const faqItems = [
  {
    question: "Do you serve both Mougins and Grasse?",
    answer: "Yes, we serve Mougins, Grasse, and the surrounding Provençal countryside including Valbonne, Opio, and the hill towns. We specialize in venues that celebrate the natural beauty and heritage of this historic region.",
  },
  {
    question: "Can you create perfume-inspired floral designs?",
    answer: "Absolutely! Given Grasse's heritage as the world's perfume capital, we create bespoke designs inspired by the region's fragrant flowers—roses, jasmine, lavender, and orange blossom. These scented arrangements honor the area's unique botanical legacy.",
  },
  {
    question: "What venues in Mougins do you work with?",
    answer: "We work with exclusive venues including Mas Candille, Le Mas des Oliviers, Château de la Bégude, historic bastides, private estates, and charming hilltop venues throughout the Mougins and Grasse countryside.",
  },
  {
    question: "How do you incorporate Provençal style into your designs?",
    answer: "We embrace Provençal aesthetics through natural textures, fragrant herbs like lavender and rosemary, olive branches, regional flowers, and a palette inspired by the countryside—soft whites, sage greens, lavender hues, and warm terracotta tones.",
  },
];

export default function MouginsPage() {
  return (
    <>
      <Hero
        title="Luxury Florist in Mougins"
        subtitle="Serving Mougins, Grasse & the Provençal Countryside"
        description="Elegant Provençal floral design for hilltop venues, countryside weddings, and celebrations infused with the timeless beauty of Mougins and Grasse."
        image="/images/hero/main-hero.svg"
        imageAlt="Mougins Grasse Provençal florist"
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
              Mougins' Provençal Floral Atelier
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Nestled in the hills above Cannes, Mougins and neighboring Grasse offer an enchanting alternative to
              coastal celebrations. With medieval charm, fragrant gardens, and panoramic vistas, this region embodies
              Provençal elegance. Dandelions & Grace creates floral designs that honor this heritage—sophisticated yet
              natural, luxurious yet rooted in the landscape. From perfume-inspired arrangements to rustic-chic weddings,
              we capture the soul of the countryside.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container>
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-12 text-center">
            Our Services in Mougins
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Provençal Weddings",
                description: "Romantic countryside weddings at hilltop venues, bastides, and estates with olive groves and lavender fields.",
              },
              {
                title: "Perfume-Inspired Designs",
                description: "Bespoke arrangements celebrating Grasse's perfume heritage with jasmine, roses, and fragrant botanicals.",
              },
              {
                title: "Mas Candille Events",
                description: "Luxury florals for events at Mas Candille and other prestigious Mougins venues.",
              },
              {
                title: "Garden & Estate Styling",
                description: "Seasonal plantings and event florals for private estates and historic properties.",
              },
              {
                title: "Rustic-Elegant Celebrations",
                description: "Sophisticated designs that balance Provençal charm with contemporary luxury.",
              },
              {
                title: "Intimate Gatherings",
                description: "Thoughtful arrangements for anniversaries, family celebrations, and special moments in the countryside.",
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
                Why Choose Us in Mougins
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Provençal Heritage</p>
                    <p className="text-stone-600">Deep appreciation for the region's botanical traditions and countryside aesthetic.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Grasse Connection</p>
                    <p className="text-stone-600">Unique expertise in perfume-inspired florals honoring the world's perfume capital.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Hilltop Venue Experts</p>
                    <p className="text-stone-600">Experience with countryside estates, access logistics, and outdoor celebrations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Natural Elegance</p>
                    <p className="text-stone-600">Designs that balance refined luxury with organic, countryside beauty.</p>
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
                Mougins Portfolio
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
              Ready to Discuss Your Mougins Event?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Whether it's a hilltop wedding, perfume-inspired celebration, or countryside gathering, we're here to create something beautiful.
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
              "addressLocality": "Mougins",
              "addressRegion": "Provence-Alpes-Côte d'Azur",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 43.5997,
              "longitude": 6.9972
            },
            "url": "https://www.dandelionsandgrace.fr/locations/mougins",
            "telephone": "+33000000000",
            "priceRange": "€€€€",
            "servesCuisine": [],
            "areaServed": [
              {
                "@type": "City",
                "name": "Mougins"
              },
              {
                "@type": "City",
                "name": "Grasse"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Floral Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Provençal Wedding Flowers"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Perfume-Inspired Florals"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Countryside Event Styling"
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
