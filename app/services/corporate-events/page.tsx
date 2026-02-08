import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Event Florals | Luxury Brand Events French Riviera",
  description: "Premium floral design for corporate events, galas, conferences, and brand activations in Cannes, Monaco, and Nice. Professional event floristry services.",
  keywords: [
    "corporate event florist monaco",
    "brand event flowers cannes",
    "gala florals french riviera",
    "conference flowers nice",
    "corporate hospitality florist",
  ],
};

const faqItems = [
  {
    question: "Can you incorporate our brand colors?",
    answer: "Absolutely. We work closely with your brand guidelines to create floral designs that perfectly reflect your company's identity and color palette while maintaining elegance and sophistication.",
  },
  {
    question: "How far in advance should we book?",
    answer: "For large-scale events like galas and conferences, we recommend booking 2-3 months in advance. For smaller corporate functions, 4-6 weeks is ideal. We can accommodate tighter timelines when possible.",
  },
  {
    question: "Do you handle setup and breakdown?",
    answer: "Yes, our full-service approach includes delivery, installation, and post-event removal. We coordinate with event planners and venue staff to ensure seamless execution without disrupting your event.",
  },
  {
    question: "Can you work within our event budget?",
    answer: "We create custom proposals tailored to your budget and objectives. We'll recommend the most impactful design solutions that align with your financial parameters while maintaining quality.",
  },
];

export default function CorporateEventsPage() {
  return (
    <>
      <Hero
        title="Corporate Event Florals"
        subtitle="Brand & Business Events"
        description="Sophisticated floral design that elevates corporate gatherings and brand experiences."
        image="/images/hero/main-hero.svg"
        imageAlt="Corporate event flowers"
        height="large"
        cta={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />

      <Section spacing="large">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
              Make a Lasting Impression
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Your corporate events reflect your brand's values and vision. We create floral designs
              that enhance your message, impress clients, and create memorable experiences for attendees.
              From intimate executive dinners to large-scale conferences and product launches, our
              arrangements add a touch of natural elegance that resonates with your audience.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container>
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-12 text-center">
            Our Corporate Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Activations",
                description: "Innovative floral installations that bring your brand story to life.",
              },
              {
                title: "Galas & Awards",
                description: "Elegant designs for prestigious evening events and ceremonies.",
              },
              {
                title: "Conferences",
                description: "Professional arrangements for stages, registration areas, and networking spaces.",
              },
              {
                title: "Product Launches",
                description: "Show-stopping displays that create buzz and photo opportunities.",
              },
              {
                title: "Corporate Hospitality",
                description: "Refined florals for executive suites, VIP lounges, and client entertainment.",
              },
              {
                title: "Team Events",
                description: "Stylish arrangements for celebrations, milestones, and company gatherings.",
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
                Strategic Floral Design
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                We understand that corporate events require more than just beautiful flowers—they
                need strategic design that aligns with your objectives. Whether you're launching a
                new product, celebrating achievements, or hosting important clients, we create
                arrangements that enhance your brand presence and event goals.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Our experience serving luxury brands and international companies throughout the French
                Riviera means we understand the high standards expected at corporate events. We deliver
                impeccable design with professional execution every time.
              </p>
            </div>
            <div className="aspect-[4/5] relative bg-stone-200">
              <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                Corporate Gallery
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
              Let's Create Something Extraordinary
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Discuss your corporate event needs and receive a custom proposal.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Request Proposal
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
