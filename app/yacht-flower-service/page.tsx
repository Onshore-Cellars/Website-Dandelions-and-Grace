import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Yacht Flower Service | Luxury Marine Floristry',
  description:
    'Premium yacht floristry services for superyachts and luxury vessels on the French Riviera. Expert marine floral designs that withstand the sea environment.',
  openGraph: {
    title: 'Yacht Flower Service | Dandelions & Grace',
    description:
      'Premium yacht floristry services for superyachts and luxury vessels on the French Riviera.',
  },
};

export default function YachtFlowerServicePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6">Yacht Flower Service</h1>
            <p className="text-2xl font-display text-stone-600 mb-6">
              Sophisticated floral elegance designed for life at sea
            </p>
            <p className="text-xl text-stone-600 leading-relaxed mb-8">
              Elevate your yacht experience with our specialized marine floristry service. Claire and her team create stunning floral designs specifically engineered for the unique challenges of the marine environment – from intimate gatherings to glamorous celebrations aboard superyachts along the French Riviera.
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured Image Space */}
      <Section background="stone" className="py-0">
        <Container>
          <div className="aspect-[21/9] bg-stone-300 image-container flex items-center justify-center">
            <p className="text-stone-500 text-center px-8">
              [Hero Image: Luxurious yacht deck with floral arrangements]
              <br />
              <span className="text-sm">yacht-flower-service-hero.jpg</span>
            </p>
          </div>
        </Container>
      </Section>

      {/* What Claire Can Do */}
      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">What Claire Can Create For Your Yacht</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Welcome & Stateroom Arrangements',
                  description:
                    'Elegant floral welcomes for guests arriving aboard. Fresh arrangements for master and guest staterooms that complement your yacht\'s interior design.',
                  image: 'yacht-stateroom.jpg',
                },
                {
                  title: 'Deck & Dining Florals',
                  description:
                    'Marine-safe centerpieces and installations for alfresco dining on deck. Designs that won\'t tip in motion and withstand wind and salt air.',
                  image: 'yacht-deck-dining.jpg',
                },
                {
                  title: 'Event Styling',
                  description:
                    'Complete floral styling for yacht parties, anniversaries, proposals, and celebrations. From intimate gatherings to glamorous Monaco GP entertaining.',
                  image: 'yacht-party.jpg',
                },
                {
                  title: 'Charter Refreshments',
                  description:
                    'Regular flower services for extended charters. Mid-charter refreshments as you cruise between ports along the Côte d\'Azur.',
                  image: 'yacht-refresh.jpg',
                },
                {
                  title: 'Seasonal & Themed Décor',
                  description:
                    'Holiday decorations, seasonal styling, and themed event florals that transform your yacht for special occasions.',
                  image: 'yacht-seasonal.jpg',
                },
                {
                  title: 'Regatta & Racing Events',
                  description:
                    'Specialized florals for yachting events, regattas, and racing weekends. Celebrate victories with championship-worthy arrangements.',
                  image: 'yacht-regatta.jpg',
                },
              ].map((service, index) => (
                <div key={index} className="card hover-lift">
                  <div className="aspect-[4/3] bg-stone-200 mb-4 image-container flex items-center justify-center">
                    <span className="text-stone-400 text-sm text-center px-4">
                      [{service.image}]
                    </span>
                  </div>
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-stone-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* The Process */}
      <Section background="stone">
        <Container>
          <h2 className="mb-12 text-center">How We Work With You</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                step: '01',
                title: 'Initial Brief & Vessel Assessment',
                description:
                  'Share your vision, dates, and yacht details with Claire. We\'ll review your vessel\'s dimensions, interior style, and any technical requirements (air conditioning, storage, crew access). Whether you\'re in port at Monaco, Antibes, or Cannes, or arriving from elsewhere, we coordinate seamlessly.',
                considerations: [
                  'Number of guests and event type',
                  'Yacht size and layout',
                  'Color preferences and design style',
                  'Charter duration and ports of call',
                  'Any allergies or scent sensitivities',
                ],
              },
              {
                step: '02',
                title: 'Custom Design Proposal',
                description:
                  'Claire creates a bespoke proposal specifically for your yacht and event. You\'ll receive mood boards, flower selections chosen for marine durability, placement suggestions, and detailed pricing. Every design accounts for motion stability, salt air resilience, and temperature variations.',
                considerations: [
                  'Marine-safe vessels and mechanics',
                  'Flowers that withstand sea conditions',
                  'Strategic placement for movement',
                  'Coordination with your yacht\'s aesthetic',
                  'Budget and value optimization',
                ],
              },
              {
                step: '03',
                title: 'Coordination & Logistics',
                description:
                  'We work directly with your captain, crew, or charter manager to finalize delivery details. Our team coordinates timing, access, and any port-specific requirements. For multi-port charters, we arrange sequential deliveries or refreshments along your route.',
                considerations: [
                  'Delivery timing (pre-embarkation ideal)',
                  'Crew coordination and access',
                  'Port regulations and restrictions',
                  'Storage and water source aboard',
                  'Backup plans for weather',
                ],
              },
              {
                step: '04',
                title: 'Delivery, Setup & Support',
                description:
                  'Our team delivers and installs your flowers at the agreed time, working efficiently and discreetly. We position arrangements for security during passage, provide care instructions to your crew, and remain available for any questions or mid-charter refreshments.',
                considerations: [
                  'Professional, discrete installation',
                  'Secure placement for stability',
                  'Clear care instructions for crew',
                  'Emergency contact information',
                  'Optional mid-charter refresh service',
                ],
              },
            ].map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-sm">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-stone-900 text-white rounded-full flex items-center justify-center text-xl font-display">
                      {phase.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-4">{phase.title}</h3>
                    <p className="text-stone-600 mb-6 leading-relaxed">{phase.description}</p>
                    <div className="bg-stone-50 p-6 rounded-sm">
                      <p className="text-sm font-medium text-stone-900 mb-3 uppercase tracking-wider">
                        Key Considerations:
                      </p>
                      <ul className="space-y-2">
                        {phase.considerations.map((item, i) => (
                          <li key={i} className="text-stone-600 text-sm flex items-start gap-2">
                            <span className="text-stone-400 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What To Think About */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Planning Your Yacht Floristry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl mb-4">Timing & Booking</h3>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Book 2-6 weeks advance for standard arrangements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Peak season (May-September) requires earlier booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Monaco GP and Cannes Film Festival: book 3+ months ahead</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Last-minute requests often possible for in-port vessels</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl mb-4">Marine Considerations</h3>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Arrangements designed for stability during passage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Flowers selected to withstand salt air and sun</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Secure vessels that won\'t tip or slide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Temperature-appropriate blooms for deck vs. interior</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl mb-4">Logistics & Access</h3>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Coordinate with captain/crew for delivery timing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Port access badges may be required (we handle this)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Best delivered shortly before guests arrive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Multi-port deliveries require advance route planning</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl mb-4">Investment & Value</h3>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Simple arrangements from €300-€800</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Event styling typically €2,000-€8,000+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Weekly charter services available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Premium blooms and marine engineering included</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery Section */}
      <Section background="stone">
        <Container>
          <h2 className="mb-12 text-center">Yacht Floristry Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div
                key={num}
                className="aspect-[4/5] bg-stone-300 image-container hover-scale flex items-center justify-center"
              >
                <span className="text-stone-400 text-sm">
                  [yacht-gallery-{num}.jpg]
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Elevate Your Yacht Experience?</h2>
            <p className="text-xl text-stone-600 mb-8">
              Whether you&apos;re chartering for a week or hosting an event in port, Claire and her team will create stunning florals perfectly suited to life at sea. Get in touch to discuss your yacht flower needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact">Request Your Quote</Button>
              <Button href="/portfolio" variant="secondary">
                View Our Work
              </Button>
            </div>
            <p className="text-sm text-stone-500 mt-6">
              Serving all major ports: Monaco, Cannes, Antibes, Nice, Saint-Tropez, and beyond
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
