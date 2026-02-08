import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Flowers | South of France Wedding Florist",
  description: "Luxury wedding florals for destination weddings in Cannes, Monaco, Nice, Antibes, and Saint-Tropez. Bespoke bridal bouquets and ceremony designs.",
  keywords: [
    "wedding florist south of france",
    "cannes wedding flowers",
    "monaco wedding florist",
    "destination wedding florist france",
    "french riviera wedding flowers",
  ],
};

const faqItems = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking 8-12 months in advance for weddings, especially during peak season (May-September). However, we can accommodate last-minute requests when possible.",
  },
  {
    question: "Do you travel throughout the South of France?",
    answer: "Yes! We serve the entire French Riviera including Cannes, Monaco, Nice, Antibes, Saint-Tropez, Mougins, and surrounding areas. Travel fees may apply for venues outside our main service area.",
  },
  {
    question: "Can you match my wedding colors and style?",
    answer: "Absolutely. We work closely with you to understand your vision, color palette, and aesthetic preferences. We'll create a custom proposal that perfectly complements your wedding style.",
  },
  {
    question: "What's included in wedding floral services?",
    answer: "Our full-service packages include bridal party bouquets, ceremony arrangements, reception centerpieces, installation florals, and coordination with your venue and planner.",
  },
];

export default function WeddingsPage() {
  return (
    <>
      <Hero
        title="Wedding Florals in the South of France"
        subtitle="Weddings"
        description="Creating unforgettable floral designs for destination weddings across the French Riviera."
        image="/images/hero/main-hero.svg"
        imageAlt="Luxury wedding flowers"
        height="large"
        cta={{
          text: "Start Planning",
          href: "/contact",
        }}
      />

      <Section spacing="large">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
              Your Dream Wedding, Beautifully Realized
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Your wedding day is one of the most important celebrations of your life. We understand the
              significance of every detail, and we're here to ensure your floral design is nothing short
              of perfect. From the moment you walk down the aisle to your final dance, our arrangements
              create an atmosphere of romance, elegance, and natural beauty.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container>
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-12 text-center">
            Our Wedding Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bridal Bouquets",
                description: "Handcrafted bouquets designed to complement your style and dress.",
              },
              {
                title: "Ceremony Florals",
                description: "Arches, aisle arrangements, and altar designs that set the tone.",
              },
              {
                title: "Reception Centerpieces",
                description: "Stunning table arrangements that wow your guests.",
              },
              {
                title: "Installation Design",
                description: "Large-scale floral installations and statement pieces.",
              },
              {
                title: "Boutonnieres & Corsages",
                description: "Elegant personal flowers for the wedding party and family.",
              },
              {
                title: "Full-Service Coordination",
                description: "From setup to breakdown, we handle every detail.",
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
                Destination Weddings on the French Riviera
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                The South of France provides the perfect backdrop for your wedding celebration. Whether
                you're planning an intimate ceremony at a hillside chapel, a grand affair at a château,
                or a seaside reception overlooking the Mediterranean, we know the venues, understand the
                logistics, and have the local expertise to make your day seamless.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                We work with the best wedding planners, venues, and vendors throughout Cannes, Monaco,
                Antibes, Nice, and beyond to ensure every element of your floral design is executed flawlessly.
              </p>
            </div>
            <div className="aspect-[4/5] relative bg-stone-200">
              <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                Wedding Gallery
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container size="narrow">
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
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
              Ready to Start Planning?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Let's discuss your wedding vision and create something unforgettable together.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Enquire Now
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
