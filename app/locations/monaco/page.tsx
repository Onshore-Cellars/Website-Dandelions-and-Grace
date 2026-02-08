import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Florist in Monaco | Monte-Carlo Wedding & Event Flowers",
  description: "Monaco's premier luxury florist for royal weddings, Grand Prix events, casino galas, and superyacht floristry. Serving Monte-Carlo, Fontvieille, and La Condamine.",
  keywords: [
    "florist Monaco",
    "Monaco wedding florist",
    "Monte-Carlo florist",
    "Monaco Grand Prix florist",
    "luxury flowers Monaco",
    "Monaco event florist",
    "royal wedding florist",
  ],
};

const faqItems = [
  {
    question: "Do you serve all areas of Monaco?",
    answer: "Yes, we serve all districts of Monaco including Monte-Carlo, Fontvieille, La Condamine, Monaco-Ville (Le Rocher), and Larvotto. We deliver to hotels, private residences, casinos, and yachts in Port Hercules.",
  },
  {
    question: "Can you provide flowers for Grand Prix events?",
    answer: "Absolutely! We have extensive experience with Monaco Grand Prix hospitality suites, private yacht parties, sponsor activations, and VIP events during race week. Early booking is essential.",
  },
  {
    question: "What luxury venues in Monaco do you work with?",
    answer: "We work with Hôtel de Paris Monte-Carlo, Hôtel Hermitage, Fairmont Monte Carlo, Monte-Carlo Bay Hotel, Café de Paris, Casino de Monte-Carlo, Port Hercules superyachts, and exclusive private residences.",
  },
  {
    question: "Do you create florals for superyachts in Port Hercules?",
    answer: "Yes, we specialize in superyacht floristry with regular weekly arrangements and special event styling. We understand the unique requirements of yacht environments and deliver with discretion and professionalism.",
  },
];

export default function MonacoPage() {
  return (
    <>
      <Hero
        title="Luxury Florist in Monaco"
        subtitle="Serving Monte-Carlo & the Principality"
        description="Exquisite floral design for royal occasions, Grand Prix celebrations, casino events, and luxury weddings in Monaco and Monte-Carlo."
        image="/images/hero/main-hero.svg"
        imageAlt="Monaco Monte-Carlo florist"
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
              Monaco's Distinguished Floral Design Atelier
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Dandelions & Grace is the trusted florist for Monaco's most prestigious events. From royal weddings
              to Grand Prix galas, we bring sophistication and elegance to every celebration in the Principality.
              Our intimate knowledge of Monaco's exclusive venues and exacting standards ensures flawless execution.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container>
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-12 text-center">
            Our Services in Monaco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Royal & Luxury Weddings",
                description: "Bespoke floral artistry for weddings at Monaco's palatial venues and exclusive locations.",
              },
              {
                title: "Grand Prix Events",
                description: "High-profile florals for hospitality suites, yacht parties, and VIP celebrations during race week.",
              },
              {
                title: "Casino Galas & Events",
                description: "Opulent arrangements for Casino de Monte-Carlo galas, charity balls, and exclusive soirées.",
              },
              {
                title: "Superyacht Floristry",
                description: "Weekly arrangements and event styling for Port Hercules superyachts with discreet, professional service.",
              },
              {
                title: "Hotel & Residence Styling",
                description: "Seasonal florals for penthouses, palace suites, and prestigious Monaco addresses.",
              },
              {
                title: "Corporate & Brand Events",
                description: "Elegant corporate events, product launches, and brand activations in the Principality.",
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
                Why Choose Us in Monaco
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Monaco Expertise</p>
                    <p className="text-stone-600">Intimate knowledge of the Principality's venues, hotels, and exclusive locations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Exceptional Standards</p>
                    <p className="text-stone-600">Only the rarest and finest blooms for Monaco's discerning clientele.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Discretion & Privacy</p>
                    <p className="text-stone-600">Absolute confidentiality and professional conduct for high-profile events.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-stone-900">Grand Prix Specialist</p>
                    <p className="text-stone-600">Proven expertise managing complex logistics during Monaco's busiest week.</p>
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
                Monaco Portfolio
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
              Ready to Discuss Your Monaco Event?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Whether it's a wedding, Grand Prix celebration, or superyacht styling, we're here to exceed your expectations.
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
              "addressLocality": "Monaco",
              "addressRegion": "Monaco",
              "addressCountry": "MC"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 43.7384,
              "longitude": 7.4246
            },
            "url": "https://www.dandelionsandgrace.fr/locations/monaco",
            "telephone": "+33000000000",
            "priceRange": "€€€€",
            "servesCuisine": [],
            "areaServed": {
              "@type": "City",
              "name": "Monaco"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Floral Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Royal Wedding Flowers"
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
                    "name": "Grand Prix Event Florals"
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
