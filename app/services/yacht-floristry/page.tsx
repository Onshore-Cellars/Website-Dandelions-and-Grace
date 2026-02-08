import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yacht Floristry | Luxury Superyacht Flowers Monaco & Cannes",
  description: "Premium floral arrangements for superyachts in Monaco, Antibes, and Cannes. Weekly yacht flowers, special events, and guest welcome arrangements.",
  keywords: [
    "yacht floristry monaco",
    "superyacht flowers cannes",
    "yacht flower delivery antibes",
    "luxury yacht arrangements",
    "french riviera yacht florist",
  ],
};

const faqItems = [
  {
    question: "How often can you refresh yacht flowers?",
    answer: "We offer flexible delivery schedules including daily, twice-weekly, or weekly refreshes depending on your needs. Our most popular service is twice-weekly delivery to ensure arrangements always look their best.",
  },
  {
    question: "Do you deliver to yachts in all ports?",
    answer: "Yes, we deliver to Monaco, Port Hercules, Port Canto Cannes, Port Vauban Antibes, and surrounding marinas. We coordinate with yacht crew and dock masters to ensure seamless delivery.",
  },
  {
    question: "Can you accommodate last-minute requests?",
    answer: "Absolutely. We understand the dynamic nature of yachting life and can often fulfill same-day requests for guest arrivals or spontaneous celebrations. Contact us for availability.",
  },
  {
    question: "What arrangements work best on yachts?",
    answer: "We specialize in low-profile arrangements that won't obstruct views, stable designs that handle movement, and climate-appropriate blooms. Each design considers the yacht's interior style and practical requirements.",
  },
];

export default function YachtFloristryPage() {
  return (
    <>
      <Hero
        title="Luxury Yacht Floristry"
        subtitle="Superyacht Services"
        description="Exquisite floral arrangements for superyachts along the French Riviera."
        image="/images/hero/main-hero.svg"
        imageAlt="Luxury yacht flowers"
        height="large"
        cta={{
          text: "Request Service",
          href: "/contact",
        }}
      />

      <Section spacing="large">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
              Elevating Life at Sea
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Your yacht deserves the same attention to beauty and detail as any luxury residence.
              We provide bespoke floral arrangements designed specifically for the marine environment,
              creating an atmosphere of elegance and refinement throughout your vessel. From the main
              salon to guest cabins, our designs enhance every space while meeting the practical demands
              of life at sea.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container>
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-12 text-center">
            Our Yacht Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Weekly Arrangements",
                description: "Regular floral refreshes to maintain a pristine aesthetic throughout your yacht.",
              },
              {
                title: "Guest Welcome Flowers",
                description: "Personalized cabin arrangements to welcome guests aboard in style.",
              },
              {
                title: "Special Events",
                description: "Celebrations, parties, and gatherings on board with stunning floral design.",
              },
              {
                title: "Seasonal Styling",
                description: "Transform your yacht for Monaco Yacht Show, regattas, and special occasions.",
              },
              {
                title: "Table Arrangements",
                description: "Low-profile designs perfect for alfresco dining and formal dinners.",
              },
              {
                title: "Crew Coordination",
                description: "Seamless delivery and setup working with your yacht crew's schedule.",
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
                Expertise in Superyacht Floristry
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Working with superyachts requires unique expertise. We understand the importance of
                timing, discretion, and working harmoniously with your crew. Our arrangements are
                designed to withstand the marine environment while maintaining their beauty, using
                blooms that can handle sea air and temperature changes.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Whether you're cruising the Mediterranean, hosting VIP guests, or preparing for a
                special celebration on board, we ensure your yacht is adorned with fresh, beautiful
                flowers that reflect your impeccable taste.
              </p>
            </div>
            <div className="aspect-[4/5] relative bg-stone-200">
              <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                Yacht Gallery
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
              Ready to Enhance Your Yacht?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Contact us to discuss your yacht's floral needs and arrange a consultation.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Get Started
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
