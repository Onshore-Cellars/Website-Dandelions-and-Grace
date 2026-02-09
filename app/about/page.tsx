import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Dandelions & Grace, the premier luxury wedding and event florist on the French Riviera. Our story, philosophy, and approach to exceptional floristry.',
};

export default function AboutPage() {
  return (
    <>
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">About Dandelions & Grace</h1>
            <p className="text-2xl font-display text-stone-600 mb-8">
              Creating timeless floral artistry for life&apos;s most precious moments
            </p>
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-stone-300 aspect-square flex items-center justify-center">
              <p className="text-stone-500 text-center px-8">
                [About image / Portrait]
              </p>
            </div>

            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-stone-600">
                <p>
                  Dandelions & Grace was born from a deep love of flowers and a passion for creating
                  unforgettable celebrations. Based on the stunning French Riviera, we specialize in
                  luxury floristry for destination weddings and exclusive events.
                </p>
                <p>
                  What began as a dream has blossomed into a full-service luxury floristry studio,
                  trusted by discerning couples and event hosts from around the world. We&apos;ve had
                  the privilege of working with incredible venues, talented planners, and wonderful
                  clients across Cannes, Monaco, Saint-Tropez, and beyond.
                </p>
                <p>
                  Every wedding, every event is an opportunity to create something truly special.
                  We believe in thoughtful design, impeccable execution, and the transformative
                  power of beautiful flowers.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-12 text-center">Our Philosophy</h2>
            <div className="space-y-12">
              {[
                {
                  title: 'Bespoke by Nature',
                  description:
                    'We don\'t believe in one-size-fits-all. Every design is custom-created to reflect your personal style, venue, and vision. Your flowers should be as unique as your celebration.',
                },
                {
                  title: 'Quality Without Compromise',
                  description:
                    'We source only the finest flowers, working with trusted growers and suppliers across Europe. From premium Dutch roses to seasonal French blooms, quality is paramount.',
                },
                {
                  title: 'Seamless Execution',
                  description:
                    'Beautiful flowers are just the beginning. Our experienced team ensures flawless logistics, timely installation, and attention to every detail so you can simply enjoy your day.',
                },
                {
                  title: 'Sustainable Approach',
                  description:
                    'We prioritize seasonal and locally-sourced flowers when possible, use eco-friendly mechanics, and donate flowers after events whenever we can.',
                },
              ].map((value, index) => (
                <div key={index} className="border-l-4 border-stone-300 pl-6">
                  <h3 className="text-2xl mb-3">{value.title}</h3>
                  <p className="text-stone-600 text-lg">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Let&apos;s Create Together</h2>
            <p className="text-xl text-stone-600 mb-8">
              We&apos;d love to hear about your upcoming celebration and explore how we can bring
              your floral vision to life on the French Riviera.
            </p>
            <Button href="/contact">Get in Touch</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
