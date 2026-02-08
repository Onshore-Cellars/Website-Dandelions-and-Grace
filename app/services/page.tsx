import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Luxury floral design services for weddings, yachts, corporate events, and private celebrations in the South of France.",
};

const services = [
  {
    title: "Weddings",
    slug: "weddings",
    description: "From intimate ceremonies to grand celebrations, we create unforgettable floral experiences for your special day.",
    highlights: [
      "Bridal bouquets & bridesmaid arrangements",
      "Ceremony & reception florals",
      "Installation & styling",
      "Full-service design & coordination",
    ],
  },
  {
    title: "Yacht Floristry",
    slug: "yacht-floristry",
    description: "Elegant weekly arrangements and special event florals for superyachts throughout the French Riviera.",
    highlights: [
      "Weekly fresh arrangements",
      "Guest welcome flowers",
      "Special occasion designs",
      "Seasonal styling",
    ],
  },
  {
    title: "Corporate Events",
    slug: "corporate-events",
    description: "Sophisticated floral design for brand events, galas, conferences, and corporate hospitality.",
    highlights: [
      "Brand event activations",
      "Conference & trade show florals",
      "Gala dinners & awards ceremonies",
      "Office & workspace styling",
    ],
  },
  {
    title: "Private Parties",
    slug: "private-parties",
    description: "Bespoke arrangements for villa parties, milestone celebrations, and intimate gatherings.",
    highlights: [
      "Birthday & anniversary celebrations",
      "Villa party styling",
      "Dinner party centerpieces",
      "Seasonal home décor",
    ],
  },
  {
    title: "Seasonal & Festive",
    slug: "seasonal",
    description: "Create magic throughout the year with our seasonal floral installations and festive designs.",
    highlights: [
      "Christmas styling & wreaths",
      "Summer event florals",
      "Cannes Film Festival season",
      "New Year celebrations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="What We Do"
        description="Tailored floral experiences for the most important moments and spaces in your life."
        image="/images/hero/main-hero.svg"
        imageAlt="Floral services"
        height="default"
      />

      <Section spacing="large">
        <Container size="narrow">
          <div className="text-center mb-16">
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
              Whether you're planning a destination wedding, hosting guests on your yacht, or creating
              a memorable corporate event, we bring artistry, expertise, and impeccable service to every project.
            </p>
          </div>
        </Container>

        <Container>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] relative bg-stone-200">
                    <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                      {service.title} Image
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start text-stone-600">
                        <span className="text-stone-400 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block px-6 py-3 border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
              Ready to Begin?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Let's discuss how we can bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-stone-900 text-white hover:bg-stone-800 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
