import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Summer Season French Riviera Floristry',
  description:
    'Luxury floristry for summer events on the French Riviera. From June through September, celebrate the Mediterranean summer with beautiful floral designs.',
};

export default function SummerSeasonPage() {
  return (
    <>
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-6">Summer Season on the French Riviera</h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              Summer on the Côte d&apos;Azur is magical. From intimate garden weddings to
              spectacular yacht celebrations, we bring the beauty of the season to life with
              fresh, vibrant floral designs that capture the essence of Mediterranean summer.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Summer Event Services</h2>
              <ul className="space-y-4">
                {[
                  'Beach wedding ceremonies',
                  'Garden party floristry',
                  'Yacht and harbor celebrations',
                  'Villa terrace styling',
                  'Pool party arrangements',
                  'Outdoor dinner parties',
                  'Summer festival events',
                  'Seasonal home refreshments',
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
              <h2 className="mb-6">Summer Flowers We Love</h2>
              <p className="text-stone-600 mb-6">
                Summer offers incredible variety in blooms. We source the finest seasonal flowers
                that thrive in the Mediterranean climate.
              </p>
              <div className="card">
                <h3 className="text-xl mb-4">Seasonal Highlights</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• Garden roses in full bloom</li>
                  <li>• Vibrant dahlias and zinnias</li>
                  <li>• Delicate sweet peas</li>
                  <li>• Lavender from Provençal fields</li>
                  <li>• Sunflowers and cheerful blooms</li>
                  <li>• Mediterranean herbs and foliage</li>
                  <li>• Exotic tropicals for drama</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <h2 className="mb-12 text-center">Summer Planning Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                month: 'June',
                weather: 'Perfect weather begins',
                flowers: 'Peak rose season, peonies still available, early summer blooms',
                events: 'Weddings, celebrations, fewer crowds than high summer',
              },
              {
                month: 'July & August',
                weather: 'Hot, sunny, vibrant',
                flowers: 'Dahlias, zinnias, sunflowers, lavender, heat-loving blooms',
                events: 'Peak season - beach parties, yacht events, villa celebrations',
              },
              {
                month: 'September',
                weather: 'Warm, less crowded',
                flowers: 'Late summer roses, dahlias at their peak, autumn hints',
                events: 'Ideal for weddings - great weather, better availability',
              },
            ].map((month, index) => (
              <div key={index} className="card">
                <h3 className="text-2xl font-display mb-4">{month.month}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-stone-900">Weather</p>
                    <p className="text-stone-600">{month.weather}</p>
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">Flowers</p>
                    <p className="text-stone-600">{month.flowers}</p>
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">Events</p>
                    <p className="text-stone-600">{month.events}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <h2 className="mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                q: 'What is the best month for a summer wedding?',
                a: 'June and September offer ideal conditions - beautiful weather with fewer crowds and better venue availability. July and August are stunning but busier and hotter. We recommend booking 12-18 months ahead for any summer date.',
              },
              {
                q: 'How do you handle the heat?',
                a: 'We select heat-tolerant flowers, use professional techniques to keep arrangements fresh, and time deliveries strategically. For outdoor events, we may recommend shaded placement or provide backup arrangements.',
              },
              {
                q: 'Is summer more expensive for flowers?',
                a: 'Not necessarily. While demand is high, summer also offers abundant seasonal blooms at peak quality. Some spring flowers (like peonies) cost more if sourced in summer, but many gorgeous options are at their best and most affordable.',
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

      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Plan Your Summer Celebration</h2>
            <p className="text-xl text-stone-600 mb-8">
              Ready to bring your summer event to life? Let&apos;s start planning together.
            </p>
            <Button href="/contact">Start Planning</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
