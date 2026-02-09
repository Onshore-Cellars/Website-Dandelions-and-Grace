import { LocationData } from '@/lib/data/locations';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

interface LocationPageProps {
  location: LocationData;
}

export default function LocationPage({ location }: LocationPageProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Dandelions & Grace - ${location.name}`,
    description: location.description,
    url: `https://dandelionsandgrace.com/locations/${location.slug}`,
    telephone: '+33-6-XX-XX-XX-XX',
    priceRange: '€€€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: location.region,
      postalCode: location.postalCode,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
    },
    serviceType: [
      'Wedding Florist',
      'Event Florist',
      'Luxury Floristry',
      'Destination Wedding Flowers',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-6">Wedding Florist in {location.name}</h1>
            <p className="text-xl text-stone-600 leading-relaxed">{location.description}</p>
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <h2 className="mb-12 text-center">Our Services in {location.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {location.highlights.map((highlight, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-stone-200 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-stone-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl mb-2">{highlight}</h3>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-8">Venues We Love in {location.name}</h2>
              <ul className="space-y-4">
                {location.venues.map((venue, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-stone-600 flex-shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-stone-700">{venue}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {location.faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-stone-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Start Planning?</h2>
            <p className="text-xl text-stone-600 mb-8">
              Let&apos;s create something beautiful together for your {location.name} celebration.
            </p>
            <Button href="/contact">Get in Touch</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
