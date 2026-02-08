import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Florist in Cannes | Wedding & Event Flowers",
  description: "Premier luxury florist in Cannes. Specializing in wedding flowers, yacht floristry, and event designs on the French Riviera. Serving Cannes Film Festival & beyond.",
  keywords: [
    "florist Cannes",
    "wedding florist Cannes",
    "Cannes Film Festival florist",
    "luxury flowers Cannes",
    "Cannes event florist",
  ],
};

const faqItems = [
  {
    question: "Do you serve all areas of Cannes?",
    answer: "Yes, we serve all areas of Cannes including La Croisette, Le Suquet, La Californie, and surrounding neighborhoods. We also deliver to hotels, villas, and venues throughout the city.",
  },
  {
    question: "Can you provide flowers for Cannes Film Festival events?",
    answer: "Absolutely! We have extensive experience creating floral designs for Film Festival hospitality suites, private parties, yacht events, and corporate activations during the festival season.",
  },
  {
    question: "What venues in Cannes do you work with?",
    answer: "We work with all major venues including Hôtel du Cap-Eden-Roc, InterContinental Carlton, Hôtel Martinez, private villas, and yachts in the Vieux Port and Port Pierre Canto.",
  },
  {
    question: "How far in advance should I book?",
    answer: "For weddings, we recommend 6-12 months in advance. For Film Festival season (May), book as early as possible. For other events, 4-8 weeks is typical.",
  },
];

export default function CannesPage() {
  return (
    <>
      <Hero
        title="Luxury Florist in Cannes"
        subtitle="Serving Cannes & La Croisette"
        description="Award-winning floral design for weddings, yachts, Film Festival events, and luxury celebrations in Cannes."
        image="/images/hero/main-hero.svg"
        imageAlt="Cannes florist"
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
              Cannes' Premier Floral Design Studio
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Based in the heart of the French Riviera, Dandelions & Grace is Cannes' leading luxury
              florist. We specialize in creating sophisticated floral experiences for the most discerning
              clients, from intimate villa weddings to grand Film Festival galas.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container>
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-12 text-center">
            Our Services in Cannes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cannes Weddings",
                description: "Bespoke floral design for destination weddings at Cannes' finest venues and private villas.",
              },
              {
                title: "Film Festival Florals",
                description: "Exclusive arrangements for hospitality suites, brand activations, and private parties during the festival.",
              },
              {
                title: "Yacht Arrangements",
                description: "Weekly fresh flowers and special event styling for superyachts in Vieux Port and Port Canto.",
              },
              {
                title: "Hotel & Villa Styling",
                description: "Seasonal arrangements for luxury properties including penthouses, suites, and private residences.",
              },
              {
                title: "Corporate Events",
                description: "Sophisticated florals for conferences, product launches, and brand events.",
              },
              {
                title: "Private Celebrations",
                description: "Elegant arrangements for birthdays, anniversaries, and intimate gatherings.",
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
                Why Choose Us in Cannes
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Local Expertise</p>
                    <p className="text-stone-600">Deep knowledge of Cannes venues, hotels, and event spaces.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Premium Quality</p>
                    <p className="text-stone-600">Only the finest seasonal blooms from trusted growers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">White-Glove Service</p>
                    <p className="text-stone-600">Professional delivery and setup throughout Cannes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Film Festival Specialist</p>
                    <p className="text-stone-600">Proven track record during the busiest time of year.</p>
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
                Cannes Portfolio
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
              Ready to Discuss Your Cannes Event?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Whether it's a wedding, Film Festival party, or yacht styling, we're here to help.
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
              "addressLocality": "Cannes",
              "addressRegion": "Provence-Alpes-Côte d'Azur",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 43.5528,
              "longitude": 7.0174
            },
            "url": "https://www.dandelionsandgrace.fr/locations/cannes",
            "telephone": "+33000000000",
            "priceRange": "€€€€",
            "servesCuisine": [],
            "areaServed": {
              "@type": "City",
              "name": "Cannes"
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
                    "name": "Yacht Floristry"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Event Florals"
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
