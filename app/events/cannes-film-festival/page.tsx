import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Cannes Film Festival Event Floristry',
  description:
    'Premium floristry for Cannes Film Festival events, parties, and celebrations. Elevate your festival presence with stunning floral designs that capture the glamour of cinema\'s biggest night.',
};

export default function CannesFilmFestivalPage() {
  return (
    <>
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-6">Cannes Film Festival Event Floristry</h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              When the world&apos;s film elite descend on Cannes, every detail matters. Our
              luxury floristry elevates festival parties, yacht celebrations, villa dinners, and
              brand activations with designs worthy of the red carpet spotlight.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Festival Event Services</h2>
              <ul className="space-y-4">
                {[
                  'Film premiere after-parties',
                  'Brand pavilion and activation styling',
                  'Yacht party floristry',
                  'Private villa celebrations',
                  'Hotel suite and terrace arrangements',
                  'Corporate entertainment events',
                  'Quick turnaround installations',
                  'Multi-day event support',
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
              <h2 className="mb-6">Why Book Early</h2>
              <p className="text-stone-600 mb-6">
                The Cannes Film Festival is one of the busiest periods on the French Riviera.
                Hotels, venues, and premium suppliers book out months in advance.
              </p>
              <div className="card">
                <h3 className="text-xl mb-4">Planning Timeline</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="font-semibold text-stone-900">6+ months:</span>
                    <span className="text-stone-600">Large installations, multiple events</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-stone-900">3-6 months:</span>
                    <span className="text-stone-600">Single events, yacht parties</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-stone-900">1-2 months:</span>
                    <span className="text-stone-600">
                      Smaller arrangements, suite florals
                    </span>
                  </li>
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
                q: 'When is the Cannes Film Festival?',
                a: 'The festival typically takes place in mid-May each year, spanning approximately 12 days. Dates are announced by the festival organizers and we recommend booking as soon as your event is confirmed.',
              },
              {
                q: 'Can you handle last-minute festival requests?',
                a: 'While we prefer advance booking, we maintain strong supplier relationships and reserve capacity for select festival clients. Contact us as early as possible, even for shorter timelines.',
              },
              {
                q: 'Do you work with event planners and production companies?',
                a: 'Yes, we regularly collaborate with event professionals, production teams, and brand agencies for festival activations and parties. We\'re experienced in fast-paced, high-stakes environments.',
              },
              {
                q: 'What makes festival floristry different?',
                a: 'Festival events often require rapid turnarounds, after-hours installations, flexibility for schedule changes, and designs that photograph beautifully for press and social media coverage.',
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
            <h2 className="mb-6">Ready for Festival Season?</h2>
            <p className="text-xl text-stone-600 mb-8">
              Secure your floristry for Cannes Film Festival events. Contact us today to discuss
              your vision.
            </p>
            <Button href="/contact">Get in Touch</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
