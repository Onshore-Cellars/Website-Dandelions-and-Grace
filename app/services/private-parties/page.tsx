import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Party Florals | Luxury Celebration Flowers South of France",
  description: "Bespoke floral design for private parties, birthdays, anniversaries, and intimate celebrations in Cannes, Monaco, and the French Riviera.",
  keywords: [
    "private party florist monaco",
    "birthday flowers cannes",
    "anniversary celebration florals",
    "villa party flowers",
    "intimate celebration florist",
  ],
};

const faqItems = [
  {
    question: "What types of private parties do you cater to?",
    answer: "We design florals for all types of celebrations including milestone birthdays, anniversaries, engagement parties, baby showers, dinner parties, and any special occasion you want to make memorable.",
  },
  {
    question: "Can you decorate my villa or private venue?",
    answer: "Absolutely. We specialize in transforming private villas, estates, and exclusive venues throughout the French Riviera. We'll visit your location to understand the space and create a design that enhances its natural beauty.",
  },
  {
    question: "How much notice do you need?",
    answer: "For intimate gatherings, 2-3 weeks is ideal. For larger celebrations or complex designs, 4-6 weeks allows us to source specialty blooms and plan every detail. We can accommodate shorter timelines when possible.",
  },
  {
    question: "Do you offer party planning services?",
    answer: "While we focus on floral design, we work closely with the best event planners and vendors in the region and can provide recommendations to ensure your celebration is flawless from start to finish.",
  },
];

export default function PrivatePartiesPage() {
  return (
    <>
      <Hero
        title="Private Party Florals"
        subtitle="Intimate Celebrations"
        description="Bespoke floral design that makes your private celebrations unforgettable."
        image="/images/hero/main-hero.svg"
        imageAlt="Private party flowers"
        height="large"
        cta={{
          text: "Plan Your Party",
          href: "/contact",
        }}
      />

      <Section spacing="large">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
              Celebrate Life's Special Moments
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Every celebration deserves flowers that capture its unique spirit. Whether you're hosting
              an intimate dinner party, marking a milestone birthday, or celebrating an anniversary,
              our bespoke floral designs add beauty, elegance, and personality to your gathering. We
              create arrangements that reflect your style and make your guests feel truly special.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container>
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-12 text-center">
            Our Private Party Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Milestone Birthdays",
                description: "Stunning floral designs that celebrate life's important milestones.",
              },
              {
                title: "Anniversary Parties",
                description: "Romantic arrangements that honor your love story.",
              },
              {
                title: "Villa Parties",
                description: "Transform your space with elegant floral installations.",
              },
              {
                title: "Intimate Dinners",
                description: "Sophisticated table arrangements for memorable evenings.",
              },
              {
                title: "Garden Parties",
                description: "Fresh, seasonal designs that complement outdoor settings.",
              },
              {
                title: "Surprise Celebrations",
                description: "Discreet setup and show-stopping arrangements for special moments.",
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
                Personalized to Perfection
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                No two celebrations are alike, and neither are our floral designs. We take the time
                to understand your vision, preferences, and the story you want to tell. From choosing
                blooms in your favorite colors to incorporating meaningful elements, every arrangement
                is thoughtfully crafted just for you.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Whether you're hosting guests at your Riviera villa, celebrating at an exclusive
                restaurant, or creating magic in an unexpected location, we bring creativity, expertise,
                and attention to detail that makes your party truly extraordinary.
              </p>
            </div>
            <div className="aspect-[4/5] relative bg-stone-200">
              <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                Party Gallery
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
              Let's Make It Unforgettable
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Share your celebration plans and let's create something beautiful together.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Start Planning
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
