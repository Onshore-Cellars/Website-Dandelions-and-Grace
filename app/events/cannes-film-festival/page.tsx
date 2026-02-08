import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cannes Film Festival Florals | Luxury Event Flowers",
  description: "Premier floral design for Cannes Film Festival hospitality suites, brand activations, yacht parties, and VIP events. Serving La Croisette since 2010.",
  keywords: [
    "cannes film festival florist",
    "film festival flowers cannes",
    "hospitality suite flowers",
    "brand activation florist",
    "film festival event florist",
  ],
};

export default function CannesFilmFestivalPage() {
  return (
    <>
      <Hero
        title="Cannes Film Festival Florals"
        subtitle="Festival Events"
        description="Creating show-stopping floral designs for the world's most glamorous film festival."
        image="/images/hero/main-hero.svg"
        imageAlt="Film Festival flowers"
        height="large"
        cta={{
          text: "Book for Festival Season",
          href: "/contact",
        }}
      />

      <Section spacing="large">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
              Your Festival Partner
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              The Cannes Film Festival brings together the world's biggest stars, brands, and
              tastemakers. For over a decade, we've been the go-to florist for hospitality suites,
              yacht parties, brand activations, and VIP events along La Croisette.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container>
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-12 text-center">
            Festival Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hospitality Suites",
                description: "Daily fresh arrangements for hotel suites, penthouses, and private spaces throughout the festival.",
              },
              {
                title: "Brand Activations",
                description: "Statement installations and branded florals for product launches and corporate events.",
              },
              {
                title: "Yacht Parties",
                description: "Elegant arrangements for superyacht events, dinners, and celebrations in the harbor.",
              },
              {
                title: "Red Carpet Events",
                description: "Sophisticated designs for premieres, galas, and after-parties.",
              },
              {
                title: "Villa & Hotel Styling",
                description: "Full property styling for private villas and luxury hotels during festival week.",
              },
              {
                title: "Last-Minute Requests",
                description: "Same-day delivery and emergency styling when you need it most.",
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
            <div className="aspect-[4/5] relative bg-stone-200">
              <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                Festival Events Gallery
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
                Why Book Early for Festival Season
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-stone-600">
                  The Cannes Film Festival is the busiest time of year on the French Riviera. Hotels,
                  suppliers, and services book out months in advance. Our festival calendar fills
                  quickly, often by February.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-stone-400 mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-medium text-stone-900">Early Bird Priority</p>
                      <p className="text-stone-600">Book before February for guaranteed availability</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-stone-400 mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-medium text-stone-900">Premium Flower Selection</p>
                      <p className="text-stone-600">Access to the best blooms from our trusted growers</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-stone-400 mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-medium text-stone-900">Dedicated Festival Team</p>
                      <p className="text-stone-600">Experienced crew managing multiple events daily</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-stone-400 mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-medium text-stone-900">Flexible Scheduling</p>
                      <p className="text-stone-600">Daily refresh, same-day changes, emergency service</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Enquire for 2024 Festival
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container>
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-12 text-center">
            Past Festival Clients
          </h2>
          <div className="text-center text-stone-600 mb-12">
            <p className="text-lg">
              We've had the privilege of working with leading brands, studios, and private clients
              during the Cannes Film Festival. While we respect client confidentiality, our portfolio
              includes work for luxury brands, film studios, yacht charters, and VIP hospitality.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white aspect-square flex items-center justify-center">
                <span className="text-stone-400 text-sm">Client Logo</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="large">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
              Ready for Festival 2024?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              The festival dates are May 14-25, 2024. Don't wait—book your floral services now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Request a Quote
                </Button>
              </Link>
              <a href="tel:+33000000000" className="inline-block">
                <Button size="lg" variant="outline">
                  Call Us Directly
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
