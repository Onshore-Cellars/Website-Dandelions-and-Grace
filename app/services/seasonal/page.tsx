import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seasonal Florals | Christmas & Festival Flowers French Riviera",
  description: "Luxury seasonal floral design for Christmas, Cannes Film Festival, summer events, and festive celebrations in the South of France.",
  keywords: [
    "christmas flowers monaco",
    "cannes film festival florist",
    "summer event flowers",
    "festive florals french riviera",
    "seasonal decorations cannes",
  ],
};

const faqItems = [
  {
    question: "When should I book Christmas decorations?",
    answer: "We recommend booking Christmas services by late October or early November to ensure availability and allow time for custom designs. Popular dates book quickly during the festive season.",
  },
  {
    question: "Do you provide services during Cannes Film Festival?",
    answer: "Yes, we specialize in event florals during the festival season. We work with hotels, villas, yachts, and private clients hosting guests and parties during this prestigious event.",
  },
  {
    question: "Can you adapt designs to seasonal blooms?",
    answer: "Absolutely. We celebrate the natural beauty of each season by featuring blooms at their peak. This ensures the freshest, most vibrant arrangements while embracing the season's unique character.",
  },
  {
    question: "Do you offer installation and removal services?",
    answer: "Yes, for seasonal decorations like Christmas installations, we provide full setup and post-season removal services. This includes larger pieces like wreaths, garlands, and tree decorations.",
  },
];

export default function SeasonalPage() {
  return (
    <>
      <Hero
        title="Seasonal Floral Design"
        subtitle="Celebrate Every Season"
        description="Bespoke seasonal florals that capture the magic of special times throughout the year."
        image="/images/hero/main-hero.svg"
        imageAlt="Seasonal flowers"
        height="large"
        cta={{
          text: "Explore Services",
          href: "/contact",
        }}
      />

      <Section spacing="large">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
              Embracing the Rhythm of the Seasons
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              The French Riviera transforms throughout the year, and so do our floral designs. From
              the festive magic of Christmas to the glamour of Cannes Film Festival and the vibrant
              energy of summer celebrations, we create arrangements that capture the essence of each
              season. Our designs honor natural cycles while adding sophistication to your seasonal
              events and spaces.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container>
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-12 text-center">
            Our Seasonal Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Christmas Styling",
                description: "Elegant festive arrangements, wreaths, garlands, and full seasonal decoration.",
              },
              {
                title: "Cannes Film Festival",
                description: "Glamorous designs for parties, yachts, and villa events during the festival.",
              },
              {
                title: "Summer Celebrations",
                description: "Vibrant seasonal blooms perfect for outdoor events and Mediterranean settings.",
              },
              {
                title: "Holiday Occasions",
                description: "Easter, Valentine's Day, and special celebrations throughout the year.",
              },
              {
                title: "Autumn Elegance",
                description: "Rich, warm designs celebrating harvest season and fall gatherings.",
              },
              {
                title: "Spring Awakening",
                description: "Fresh, delicate arrangements featuring the season's most beautiful blooms.",
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
                Celebrating the French Riviera Calendar
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Living on the Côte d'Azur means enjoying a year filled with extraordinary moments.
                From the sophistication of winter holidays in Monaco to the excitement of summer
                festivals and yacht season, we understand the unique character of each season here.
                Our designs reflect both the international glamour and natural Mediterranean beauty
                that define life on the Riviera.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                We source the finest seasonal blooms, many locally grown, to create arrangements
                that feel both timeless and perfectly of-the-moment. Whether you're decorating
                your home for the holidays or hosting during peak social season, we bring artistry
                and elegance to every occasion.
              </p>
            </div>
            <div className="aspect-[4/5] relative bg-stone-200">
              <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                Seasonal Gallery
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
              Plan Your Seasonal Celebration
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Let's discuss how we can make your seasonal events and spaces truly special.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Get in Touch
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
