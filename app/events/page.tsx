import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Event Floristry | French Riviera Corporate & Private Events',
  description:
    'Premium floristry for Cannes Film Festival, Monaco Grand Prix, Cannes Lions, and exclusive private events. Corporate galas, product launches, and luxury celebrations.',
  openGraph: {
    title:Event Floristry | Dandelions & Grace',
    description:
      'Premium floristry for French Riviera events: Cannes Film Festival, Monaco GP, corporate galas, and private celebrations.',
  },
};

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6">Event Floristry</h1>
            <p className="text-2xl font-display text-stone-600 mb-6">
              Elevating the French Riviera's most prestigious events
            </p>
            <p className="text-xl text-stone-600 leading-relaxed mb-8">
              From the glamour of the Cannes Film Festival to the excitement of Monaco Grand Prix, Claire and her team bring sophisticated floral artistry to the world's most exclusive events. Whether you're hosting a corporate gala, private celebration, or brand activation, we create stunning installations that leave lasting impressions.
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured Image Space */}
      <Section background="stone" className="py-0">
        <Container>
          <div className="aspect-[21/9] bg-stone-300 image-container flex items-center justify-center">
            <p className="text-stone-500 text-center px-8">
              [Hero Image: Luxurious event with dramatic floral installation]
              <br />
              <span className="text-sm">events-hero.jpg</span>
            </p>
          </div>
        </Container>
      </Section>

      {/* Signature Events */}
      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">French Riviera Signature Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Cannes Film Festival',
                  season: 'May',
                  description:
                    'The world watches Cannes in May. Claire creates show-stopping florals for film premieres, yacht parties, villa receptions, and brand activations during the festival. From intimate dinners to grand galas, we bring Hollywood glamour to life.',
                  services: ['Red carpet installations', 'Yacht party styling', 'Villa events', 'Brand activations', 'VIP suite flowers', 'After-party decor'],
                  image: 'cannes-film-festival.jpg',
                },
                {
                  title: 'Monaco Grand Prix',
                  season: 'May',
                  description:
                    'Formula 1\'s Crown Jewel. The Monaco GP demands sophistication and drama. We style yacht decks overlooking the harbor, exclusive trackside suites, champagne receptions, and private parties where racing excitement meets refined elegance.',
                  services: ['Yacht deck styling', 'Hospitality suites', 'VIP lounges', 'Victory celebrations', 'Corporate entertaining', 'Weekend events'],
                  image: 'monaco-grand-prix.jpg',
                },
                {
                  title: 'Cannes Lions',
                  season: 'June',
                  description:
                    'The advertising industry\'s premier festival. We create memorable florals for agency parties, brand experiences, award ceremonies, beachfront events, and networking dinners. Make your brand stand out with custom floral installations.',
                  services: ['Brand installations', 'Award ceremonies', 'Beach club events', 'Yacht hospitality', 'Agency parties', 'Networking dinners'],
                  image: 'cannes-lions.jpg',
                },
                {
                  title: 'Monaco Yacht Show',
                  season: 'September',
                  description:
                    'The world\'s most prestigious superyacht event. We style yachts for display, create welcome arrangements for VIP visitors, design florals for evening receptions, and transform spaces for product launches and brand experiences.',
                  services: ['Yacht display styling', 'VIP welcomes', 'Evening receptions', 'Product launches', 'Corporate hospitality', 'Networking events'],
                  image: 'monaco-yacht-show.jpg',
                },
              ].map((event, index) => (
                <div key={index} className="card hover-lift">
                  <div className="aspect-video bg-stone-200 mb-4 image-container flex items-center justify-center">
                    <span className="text-stone-400 text-sm text-center px-4">
                      [{event.image}]
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl">{event.title}</h3>
                    <span className="text-sm text-stone-500 uppercase tracking-wider bg-stone-100 px-3 py-1 rounded-full">
                      {event.season}
                    </span>
                  </div>
                  <p className="text-stone-600 mb-4 leading-relaxed">{event.description}</p>
                  <div className="border-t border-stone-200 pt-4">
                    <p className="text-xs text-stone-500 uppercase tracking-wider mb-2 font-medium">Services:</p>
                    <div className="flex flex-wrap gap-2">
                      {event.services.map((service, i) => (
                        <span
                          key={i}
                          className="text-xs bg-stone-100 text-stone-700 px-2 py-1 rounded-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* What Claire Can Create */}
      <Section background="stone">
        <Container>
          <h2 className="mb-12 text-center">Event Floristry Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Corporate Galas',
                description:
                    'Impressive florals for company celebrations, award ceremonies, annual dinners, and milestone events. Brand-aligned designs that elevate your corporate image.',
                image: 'corporate-gala.jpg',
              },
              {
                title: 'Product Launches',
                description:
                  'Memorable floral installations for product reveals, brand activations, and press events. Create Instagram-worthy moments that amplify your launch.',
                image: 'product-launch.jpg',
              },
              {
                title: 'Private Celebrations',
                description:
                  'Milestone birthdays, anniversaries, engagement parties, and intimate gatherings. Bespoke designs that reflect the personality of your celebration.',
                image: 'private-party.jpg',
              },
              {
                title: 'Villa & Château Events',
                description:
                  'Transform luxury properties for exclusive events. From garden parties to black-tie affairs, we enhance these stunning venues with spectacular florals.',
                image: 'villa-event.jpg',
              },
              {
                title: 'Beach Club Events',
                description:
                  'Sophisticated beach styling that works in the elements. Perfect for day parties, sunset cocktails, and beachfront celebrations along the Riviera.',
                image: 'beach-club.jpg',
              },
              {
                title: 'Conference Floristry',
                description:
                  'Professional installations for conferences, seminars, and business gatherings. Stage florals, reception areas, and meeting room enhancements.',
                image: 'conference.jpg',
              },
            ].map((service, index) => (
              <div key={index} className="card hover-lift">
                <div className="aspect-[4/3] bg-stone-200 mb-4 image-container flex items-center justify-center">
                  <span className="text-stone-400 text-sm text-center px-4">
                    [{service.image}]
                  </span>
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-stone-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* The Process */}
      <Section background="white">
        <Container>
          <h2 className="mb-12 text-center">How Claire Works With Event Clients</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                step: '01',
                title: 'Event Brief & Objectives',
                description:
                  'Share your event details, objectives, and brand requirements with Claire. Discuss venue, guest count, budget, timeline, and style direction. For corporate clients, we align with brand guidelines. For private events, we capture your personal vision.',
                considerations: [
                  'Event date, time, and venue',
                  'Guest count and event format',
                  'Brand guidelines or style preferences',
                  'Budget parameters and priorities',
                  'Key focal points and photo moments',
                  'Existing decor or production elements',
                  'Any VIP or special requirements',
                ],
              },
              {
                step: '02',
                title: 'Custom Design Proposal',
                description:
                  'Claire creates a comprehensive proposal tailored to your event. Receive mood boards, specific flower selections, placement strategies, and detailed pricing. We present options at different price points and design approaches for your consideration.',
                considerations: [
                  'Detailed itemized budget breakdown',
                  'Mood boards and design concepts',
                  'Specific arrangements and quantities',
                  'Installation and strike timeline',
                  'Alternative options for flexibility',
                  'Load-in logistics and venue restrictions',
                  'Contract terms and payment schedule',
                ],
              },
              {
                step: '03',
                title: 'Coordination & Planning',
                description:
                  'We work closely with your event planner, production team, and venue to ensure seamless execution. Coordinate with other vendors, finalize timing, and handle all logistics. Our team integrates smoothly into your larger event production.',
                considerations: [
                  'Venue walkthrough and site survey',
                  'Coordination with event planner/producer',
                  'Load-in schedule and workforce needed',
                  'Power, water, and storage access',
                  'Coordination with AV, lighting, catering',
                  'Weather backup plans if outdoor',
                  'Final approvals and sign-offs',
                ],
              },
              {
                step: '04',
                title: 'Installation & Event Support',
                description:
                  'Our professional team arrives at the scheduled time for efficient, discreet installation. We work quickly and cleanly, often during off-hours. On-site support during your event if needed, handling any adjustments. Complete breakdown and removal afterward.',
                considerations: [
                  'Professional, efficient installation team',
                  'Minimal disruption during setup',
                  'Final placement and adjustments',
                  'On-site contact during event',
                  'Post-event photography time allowed',
                  'Complete strike and removal',
                  'Eco-friendly disposal or donation',
                ],
              },
            ].map((phase, index) => (
              <div key={index} className="bg-stone-50 p-8 rounded-sm">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-stone-900 text-white rounded-full flex items-center justify-center text-xl font-display">
                      {phase.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-4">{phase.title}</h3>
                    <p className="text-stone-600 mb-6 leading-relaxed">{phase.description}</p>
                    <div className="bg-white p-6 rounded-sm">
                      <p className="text-sm font-medium text-stone-900 mb-3 uppercase tracking-wider">
                        Key Considerations:
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

      {/* Planning Tips */}
      <Section background="stone">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Planning Your Event Floristry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl mb-4">Booking Timeline</h3>
                <ul className="space-y-3 text-stone-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span><strong>Major events (Film Festival, GP):</strong> 4-6 months advance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span><strong>Corporate galas:</strong> 2-3 months notice ideal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span><strong>Private parties:</strong> 4-8 weeks minimum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span><strong>Last-minute:</strong> Sometimes possible, call us</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Peak season (May-September) books fastest</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl mb-4">Budget Considerations</h3>
                <ul className="space-y-3 text-stone-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span><strong>Small events (< 50 guests):</strong> €2,000-€5,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span><strong>Medium events (50-150):</strong> €5,000-€15,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span><strong>Large galas (150+):</strong> €15,000-€50,000+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Major installations increase investment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>We work within your budget parameters</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl mb-4">Design & Impact</h3>
                <ul className="space-y-3 text-stone-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Create focal points for photos and social media</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Consider sightlines and guest flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Coordinate with lighting for maximum impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Brand colors can be matched exactly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Scent considerations for indoor events</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl mb-4">Logistics & Execution</h3>
                <ul className="space-y-3 text-stone-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Venue restrictions (fire codes, mechanics, timing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Load-in timing coordinated with production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Weather backup plans for outdoor events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Strike timing and flower donation options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Professional, discrete installation teams</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Event Gallery */}
      <Section background="white">
        <Container>
          <h2 className="mb-12 text-center">Event Floristry Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div
                key={num}
                className="aspect-[4/5] bg-stone-200 image-container hover-scale flex items-center justify-center"
              >
                <span className="text-stone-400 text-sm">
                  [event-gallery-{num}.jpg]
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section background="stone">
        <Container>
          <h2 className="mb-12 text-center">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: 'Claire transformed our Monaco GP yacht party into something truly spectacular. The florals were stunning and perfectly executed despite challenging marine conditions.',
                client: 'Corporate Event Planner',
                event: 'Monaco Grand Prix Hospitality',
              },
              {
                quote: 'For our Cannes Film Festival activation, we needed something memorable. The floral installation became the most photographed element of our campaign.',
                client: 'Marketing Director',
                event: 'Cannes Lions Brand Experience',
              },
              {
                quote: 'Professional, creative, and flawless execution. Claire understands luxury events and delivers beyond expectations every time.',
                client: 'Private Client',
                event: 'Villa Celebration, Cap Ferrat',
              },
            ].map((testimonial, index) => (
              <div key={index} className="card">
                <p className="text-stone-600 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-stone-200 pt-4">
                  <p className="font-medium text-stone-900">{testimonial.client}</p>
                  <p className="text-sm text-stone-500">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Let's Create Something Extraordinary</h2>
            <p className="text-xl text-stone-600 mb-8">
              Whether you're planning a corporate gala, private celebration, or major event activation, Claire and her team bring sophisticated floral artistry and flawless execution to the French Riviera's most prestigious occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact">Discuss Your Event</Button>
              <Button href="/portfolio" variant="secondary">
                View Our Work
              </Button>
            </div>
            <p className="text-sm text-stone-500 mt-6">
              Serving Cannes, Monaco, Nice, Antibes, Saint-Tropez, and the entire Côte d'Azur
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
