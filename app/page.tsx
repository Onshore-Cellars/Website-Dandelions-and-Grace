import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Luxury floral design for weddings, yachts, and events in the South of France.",
};

const services = [
  {
    title: "Weddings",
    description: "Bespoke floral design for destination weddings across the French Riviera.",
    image: "/images/services/weddings.svg",
    href: "/services/weddings",
  },
  {
    title: "Yacht Floristry",
    description: "Weekly arrangements and special events for superyachts in Monaco, Antibes, and Cannes.",
    image: "/images/services/yacht.svg",
    href: "/services/yacht-floristry",
  },
  {
    title: "Corporate Events",
    description: "Sophisticated florals for brand events, galas, and corporate hospitality.",
    image: "/images/services/corporate.svg",
    href: "/services/corporate-events",
  },
  {
    title: "Private Parties",
    description: "Elegant arrangements for intimate celebrations and villa parties.",
    image: "/images/services/private.svg",
    href: "/services/private-parties",
  },
];

const testimonials = [
  {
    quote: "The flowers were absolutely breathtaking. Every detail was perfect, and the team made our wedding day truly magical.",
    author: "Sarah & James",
    event: "Wedding in Cannes",
  },
  {
    quote: "Professional, creative, and impeccable. Our yacht looks stunning every week thanks to Dandelions & Grace.",
    author: "Maria L.",
    event: "Private Yacht, Monaco",
  },
  {
    quote: "They understood our vision perfectly and delivered beyond our expectations. The arrangements were show-stopping.",
    author: "Catherine B.",
    event: "Corporate Event, Nice",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Luxury Floral Design for the South of France"
        description="Creating unforgettable floral experiences for weddings, yachts, and exclusive events in Cannes, Monaco, Antibes, and beyond."
        image="/images/hero/main-hero.svg"
        imageAlt="Elegant floral arrangement"
        height="full"
        cta={{
          text: "Start Your Enquiry",
          href: "/contact",
        }}
        secondaryCta={{
          text: "View Portfolio",
          href: "/portfolio",
        }}
      />

      {/* Introduction */}
      <Section spacing="large">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-display text-stone-900 mb-6">
              Where Nature Meets Elegance
            </h2>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-8">
              Based in the heart of the French Riviera, we specialize in creating sophisticated floral designs
              that elevate the most discerning celebrations. From intimate weddings to grand galas, from weekly
              yacht arrangements to seasonal villa décor, every creation is crafted with artistry and precision.
            </p>
            <Link href="/about">
              <Button variant="outline">Discover Our Story</Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section background="muted" spacing="large">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-stone-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Tailored floral experiences for every occasion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group"
              >
                <div className="bg-white overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <div className="aspect-square relative bg-stone-200">
                    <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                      {service.title}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display text-stone-900 mb-2 group-hover:text-stone-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Work CTA */}
      <Section spacing="large">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] relative bg-stone-200">
              <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                Featured Portfolio Image
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-display text-stone-900 mb-6">
                Creating Moments That Last Forever
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                Each floral design tells a unique story. From the first consultation to the final petal,
                we work closely with you to bring your vision to life with impeccable attention to detail
                and a refined aesthetic that reflects the beauty of the South of France.
              </p>
              <Link href="/portfolio">
                <Button variant="primary">Explore Our Portfolio</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section background="muted" spacing="large">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-stone-900 mb-4">
              Kind Words
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8">
                <p className="text-stone-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-stone-200 pt-4">
                  <p className="font-medium text-stone-900">{testimonial.author}</p>
                  <p className="text-sm text-stone-500">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="large">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-display text-stone-900 mb-6">
              Let's Create Something Beautiful
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Ready to discuss your wedding, yacht, or event? We'd love to hear from you.
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
