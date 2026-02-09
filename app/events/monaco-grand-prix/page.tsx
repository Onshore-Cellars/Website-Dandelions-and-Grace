import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Monaco Grand Prix Event Floristry',
  description:
    'Luxury floristry for Monaco Grand Prix events, parties, and celebrations. Bring sophistication to your Formula 1 weekend with stunning floral designs.',
};

export default function MonacoGrandPrixPage() {
  return (
    <>
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-6">Monaco Grand Prix Event Floristry</h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              The Monaco Grand Prix is the pinnacle of luxury sporting events. Elevate your race
              weekend celebrations with exceptional floral designs for yacht parties, hospitality
              suites, private events, and corporate entertainment.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Grand Prix Services</h2>
              <ul className="space-y-4">
                {[
                  'Superyacht race viewing parties',
                  'Hospitality suite styling',
                  'Corporate entertainment venues',
                  'Private residence celebrations',
                  'Hotel terrace and balcony arrangements',
                  'Race weekend multi-day florals',
                  'VIP lounge and skybox designs',
                  'After-race celebrations',
                ].map((service, index) => (
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-stone-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6">Race Weekend Expertise</h2>
              <p className="text-stone-600 mb-6">
                Monaco during Grand Prix weekend requires meticulous planning. Road closures,
                restricted access, and high demand mean early booking is essential.
              </p>
              <div className="card">
                <h3 className="text-xl mb-4">Key Considerations</h3>
                <ul className="space-y-3 text-stone-600">
                  <li>• Advance delivery before circuit closure</li>
                  <li>• Designs that last multi-day events</li>
                  <li>• Heat and sun-resistant selections</li>
                  <li>• Coordinated setup with venue restrictions</li>
                  <li>• Premium flowers during peak demand</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <h2 className="mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                q: 'When is the Monaco Grand Prix?',
                a: 'The Monaco Grand Prix takes place annually in late May, typically the weekend after the Cannes Film Festival. The race weekend spans Thursday through Sunday.',
              },
              {
                q: 'How far in advance should we book?',
                a: 'We recommend booking 4-6 months in advance for Grand Prix weekend. This is one of the year\'s busiest periods in Monaco, with extremely high demand for all services.',
              },
              {
                q: 'Can you deliver to yachts in the harbor?',
                a: 'Yes, we have extensive experience with yacht deliveries during Grand Prix. We coordinate with crews and work within the logistical constraints of race weekend.',
              },
              {
                q: 'Do you offer multi-day arrangements?',
                a: 'Yes, we can provide fresh arrangements for the full race weekend or design longer-lasting installations. For extended events, we can also arrange mid-weekend refreshments.',
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-medium text-stone-900 mb-3">{faq.q}</h3>
                <p className="text-stone-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Plan Your Grand Prix Celebration</h2>
            <p className="text-xl text-stone-600 mb-8">
              Secure your floristry for Monaco Grand Prix weekend. Contact us to start planning.
            </p>
            <Button href="/contact">Request a Quote</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
