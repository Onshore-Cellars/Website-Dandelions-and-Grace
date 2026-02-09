import Hero from '@/components/ui/Hero';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero
        title="Luxury Floristry for French Riviera Weddings"
        subtitle="Creating unforgettable floral experiences for destination weddings and high-end events across Cannes, Monaco, and Saint-Tropez"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact">Start Your Enquiry</Button>
          <Button href="/portfolio" variant="secondary">
            View Our Work
          </Button>
        </div>
      </Hero>

      <Section background="white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Bespoke Floristry for Unforgettable Moments</h2>
            <p className="text-xl text-stone-600">
              Specializing in luxury destination weddings and exclusive events throughout the
              French Riviera, we transform your vision into breathtaking floral artistry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Destination Weddings',
                description:
                  'From intimate ceremonies to grand celebrations, we create stunning floral designs for your perfect day.',
                href: '/services/weddings',
              },
              {
                title: 'Yacht Events',
                description:
                  'Sophisticated arrangements designed specifically for luxury yacht celebrations and marine environments.',
                href: '/services/yacht-floristry',
              },
              {
                title: 'High-End Events',
                description:
                  'Corporate galas, private parties, and exclusive celebrations with impeccable attention to detail.',
                href: '/services/corporate-events',
              },
            ].map((service, index) => (
              <Link key={index} href={service.href} className="card hover:shadow-lg transition-shadow">
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-stone-600 mb-6">{service.description}</p>
                <span className="text-stone-800 font-medium">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Serving the French Riviera</h2>
            <p className="text-xl text-stone-600">
              From Cannes to Monaco, we bring luxury floristry to the most prestigious venues
              across the Côte d&apos;Azur.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Cannes', href: '/locations/cannes' },
              { name: 'Monaco', href: '/locations/monaco' },
              { name: 'Antibes', href: '/locations/antibes' },
              { name: 'Nice', href: '/locations/nice' },
              { name: 'Saint-Tropez', href: '/locations/saint-tropez' },
              { name: 'Mougins', href: '/locations/mougins' },
            ].map((location) => (
              <Link
                key={location.name}
                href={location.href}
                className="card text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg">{location.name}</h3>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">Why Choose Dandelions & Grace</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Local Expertise',
                    description:
                      'Deep knowledge of French Riviera venues, suppliers, and logistics ensures flawless execution.',
                  },
                  {
                    title: 'Bespoke Design',
                    description:
                      'Every arrangement is custom-created to reflect your unique style and vision.',
                  },
                  {
                    title: 'Premium Quality',
                    description:
                      'We source the finest seasonal flowers from trusted growers across Europe.',
                  },
                  {
                    title: 'Full-Service',
                    description:
                      'From initial consultation to final installation, we handle every detail with care.',
                  },
                ].map((feature, index) => (
                  <div key={index}>
                    <h3 className="text-xl mb-2">{feature.title}</h3>
                    <p className="text-stone-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-stone-200 aspect-square flex items-center justify-center">
              <p className="text-stone-400 text-center px-8">
                [Featured work image]
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Ready to Begin?</h2>
            <p className="text-xl text-stone-600 mb-8">
              Let&apos;s create something beautiful together. Share your vision and we&apos;ll
              bring it to life with exceptional floristry.
            </p>
            <Button href="/contact">Get in Touch</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
