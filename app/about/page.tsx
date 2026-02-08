import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Dandelions & Grace, a luxury floral design studio serving the South of France.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Dandelions & Grace"
        subtitle="Our Story"
        description="A passion for flowers, a commitment to excellence, and a deep love for the South of France."
        image="/images/hero/main-hero.svg"
        imageAlt="Floral studio"
        height="default"
      />

      <Section spacing="large">
        <Container size="narrow">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
              Where It All Began
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              Dandelions & Grace was born from a simple belief: that flowers have the power to transform
              spaces, elevate experiences, and create lasting memories. Founded in the heart of the French
              Riviera, our studio specializes in creating bespoke floral designs for the most discerning clients.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              Every creation we craft tells a story—your story. Whether it's an intimate wedding in Cannes,
              a grand gala in Monaco, or weekly arrangements for a superyacht, we approach each project
              with the same dedication to artistry, quality, and impeccable service.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] relative bg-stone-200">
              <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                Studio Photo
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
                Our Approach
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display text-stone-900 mb-2">Artistry First</h3>
                  <p className="text-stone-600">
                    We believe in creating arrangements that are works of art, combining seasonal blooms
                    with unexpected textures and a refined aesthetic.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display text-stone-900 mb-2">Quality Without Compromise</h3>
                  <p className="text-stone-600">
                    We source only the finest flowers, working with trusted growers and suppliers to ensure
                    every stem meets our exacting standards.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display text-stone-900 mb-2">Personalized Service</h3>
                  <p className="text-stone-600">
                    From the initial consultation to the final delivery, we provide white-glove service
                    tailored to your unique needs and vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="large">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
              Serving the South of France
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Based on the French Riviera, we serve clients throughout Cannes, Monaco, Antibes, Nice,
              Saint-Tropez, Mougins, and beyond. Wherever your event takes you, we're there.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Let's Work Together
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
