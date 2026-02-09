import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Flower Arranging Workshops | French Riviera Floral Training',
  description:
    'Learn the art of floristry with Claire. Workshops for businesses, schools, parent groups, and private events. Hands-on flower arranging training on the French Riviera.',
  openGraph: {
    title: 'Flower Arranging Workshops | Dandelions & Grace',
    description:
      'Hands-on flower arranging workshops and training with expert florist Claire on the French Riviera.',
  },
};

export default function TrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6">Flower Arranging Workshops</h1>
            <p className="text-2xl font-display text-stone-600 mb-6">
              Learn the art of floristry with Claire
            </p>
            <p className="text-xl text-stone-600 leading-relaxed mb-8">
              Discover the joy of creating beautiful floral arrangements with expert guidance from Claire and her team. Whether you're organizing corporate team building, a special celebration, school enrichment, or simply want to learn a new creative skill, our hands-on workshops offer an unforgettable experience on the French Riviera.
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured Image Space */}
      <Section background="stone" className="py-0">
        <Container>
          <div className="aspect-[21/9] bg-stone-300 image-container flex items-center justify-center">
            <p className="text-stone-500 text-center px-8">
              [Hero Image: Group of people enjoying a flower arranging workshop]
              <br />
              <span className="text-sm">training-hero.jpg</span>
            </p>
          </div>
        </Container>
      </Section>

      {/* Workshop Types */}
      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">Workshop Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Corporate Team Building',
                  description:
                    'Boost morale and creativity with a unique team experience. Perfect for company offsites, team retreats, or celebrating milestones. Participants work together creating beautiful arrangements while learning valuable skills.',
                  ideal: 'Teams of 8-30 people',
                  duration: '2-3 hours',
                  image: 'training-corporate.jpg',
                },
                {
                  title: 'Private Groups & Celebrations',
                  description:
                    'Celebrate birthdays, hen parties, anniversaries, or girls' weekends with a creative floral workshop. Enjoy wine, conversation, and create stunning arrangements to take home.',
                  ideal: 'Groups of 6-20 friends/family',
                  duration: '2-3 hours',
                  image: 'training-private.jpg',
                },
                {
                  title: 'School & Educational Programs',
                  description:
                    'Bring creativity and nature connection to students. Age-appropriate workshops teaching floral design, color theory, and the science of flowers. Perfect for enrichment days or special programs.',
                  ideal: 'Classes of 10-25 students',
                  duration: '1.5-2 hours',
                  image: 'training-school.jpg',
                },
                {
                  title: 'Parent Groups & Associations',
                  description:
                    'PTA fundraisers, mother-daughter events, or community gatherings. Learn floristry skills while raising funds or building community connections. Claire can adapt to various group needs.',
                  ideal: 'Groups of 10-30 participants',
                  duration: '2 hours',
                  image: 'training-parents.jpg',
                },
                {
                  title: 'Professional Development',
                  description:
                    'Intensive training for aspiring florists, event planners, or hospitality professionals. Learn techniques, mechanics, design principles, and business insights from an experienced luxury florist.',
                  ideal: 'Small groups of 4-8 professionals',
                  duration: 'Half day or full day',
                  image: 'training-professional.jpg',
                },
                {
                  title: 'Special Interest Workshops',
                  description:
                    'Seasonal wreath making, bridal bouquet techniques, sustainable floristry, French garden style, or yacht florals. Themed workshops for enthusiasts wanting to dive deeper into specific topics.',
                  ideal: 'Groups of 6-15 participants',
                  duration: '2-3 hours',
                  image: 'training-special.jpg',
                },
              ].map((workshop, index) => (
                <div key={index} className="card hover-lift">
                  <div className="aspect-[4/3] bg-stone-200 mb-4 image-container flex items-center justify-center">
                    <span className="text-stone-400 text-sm text-center px-4">
                      [{workshop.image}]
                    </span>
                  </div>
                  <h3 className="text-xl mb-3">{workshop.title}</h3>
                  <p className="text-stone-600 mb-4 leading-relaxed text-sm">{workshop.description}</p>
                  <div className="border-t border-stone-200 pt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-500 font-medium">Ideal For:</span>
                      <span className="text-stone-700">{workshop.ideal}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-500 font-medium">Duration:</span>
                      <span className="text-stone-700">{workshop.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* What You'll Learn */}
      <Section background="stone">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">What You'll Learn & Create</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-sm">
                <h3 className="text-xl mb-4">Skills & Techniques</h3>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">✓</span>
                    <span>Proper flower conditioning and care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">✓</span>
                    <span>Color theory and palette selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">✓</span>
                    <span>Design principles: balance, proportion, texture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">✓</span>
                    <span>Mechanics: foam, wire, tape techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">✓</span>
                    <span>Hand-tied bouquet construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">✓</span>
                    <span>Arrangement styles: garden, modern, classic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">✓</span>
                    <span>Flower identification and selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">✓</span>
                    <span>Making arrangements last longer</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-sm">
                <h3 className="text-xl mb-4">What's Included</h3>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">✓</span>
                    <span>All fresh flowers and materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">✓</span>
                    <span>Professional tools and equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">✓</span>
                    <span>Vases or containers to take home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">✓</span>
                    <span>Expert instruction from Claire's team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">✓</span>
                    <span>Your finished arrangement(s)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">✓</span>
                    <span>Care instructions and tips sheet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">✓</span>
                    <span>Refreshments (can be customized)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">✓</span>
                    <span>Photos for social media sharing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section background="white">
        <Container>
          <h2 className="mb-12 text-center">How To Book Your Workshop</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: '01',
                title: 'Get In Touch',
                description:
                  'Contact Claire with your workshop idea. Share the type of group, approximate number of participants, preferred dates, and any special requirements or themes you have in mind.',
              },
              {
                step: '02',
                title: 'Custom Planning',
                description:
                  'Claire will create a workshop plan tailored to your group. Receive details on the session structure, what you'll create, skill level, pricing, and logistics. We adapt to your needs and budget.',
              },
              {
                step: '03',
                title: 'Confirm Details',
                description:
                  'Once you're happy with the plan, confirm your date and finalize details like exact headcount, venue (our studio, your location, or elsewhere), timing, and any special requests.',
              },
              {
                step: '04',
                title: 'Enjoy Your Workshop',
                description:
                  'Arrive ready to create! Claire and her team provide all materials, expert guidance, and ensure everyone has a wonderful, creative experience. Leave with beautiful arrangements and new skills.',
              },
            ].map((phase, index) => (
              <div key={index} className="flex items-start gap-6 bg-stone-50 p-6 rounded-sm">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-stone-900 text-white rounded-full flex items-center justify-center text-lg font-display">
                    {phase.step}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl mb-2">{phase.title}</h3>
                  <p className="text-stone-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Venue Options */}
      <Section background="stone">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">Where Workshops Take Place</h2>
            <p className="text-center text-stone-600 mb-12 text-lg">
              We offer flexible venue options to suit your group's needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-lg mb-2">Our Studio</h3>
                <p className="text-stone-600 text-sm">
                  Beautiful workspace designed for creativity. All equipment on site. Easy parking.
                </p>
              </div>
              <div className="card text-center">
                <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-lg mb-2">Your Location</h3>
                <p className="text-stone-600 text-sm">
                  We come to you! Corporate offices, private villas, hotels, or event spaces.
                </p>
              </div>
              <div className="card text-center">
                <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-lg mb-2">Special Venues</h3>
                <p className="text-stone-600 text-sm">
                  Vineyards, gardens, châteaux. Create magic in inspiring French Riviera locations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing & Packages */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Investment & Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="card border-2 border-stone-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl mb-2">Small Group</h3>
                  <p className="text-sm text-stone-500 mb-4">6-10 participants</p>
                  <p className="text-3xl font-display">€85</p>
                  <p className="text-sm text-stone-500">per person</p>
                </div>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400">✓</span>
                    <span>2-hour workshop</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400">✓</span>
                    <span>One arrangement per person</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400">✓</span>
                    <span>All materials included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400">✓</span>
                    <span>Light refreshments</span>
                  </li>
                </ul>
              </div>

              <div className="card border-2 border-stone-900 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-stone-900 text-white px-4 py-1 text-xs uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-xl mb-2">Medium Group</h3>
                  <p className="text-sm text-stone-500 mb-4">11-20 participants</p>
                  <p className="text-3xl font-display">€75</p>
                  <p className="text-sm text-stone-500">per person</p>
                </div>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400">✓</span>
                    <span>2.5-hour workshop</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400">✓</span>
                    <span>One arrangement per person</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400">✓</span>
                    <span>Premium materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400">✓</span>
                    <span>Refreshments provided</span>
                  </li>
                </ul>
              </div>

              <div className="card border-2 border-stone-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl mb-2">Large Group</h3>
                  <p className="text-sm text-stone-500 mb-4">21-30 participants</p>
                  <p className="text-3xl font-display">€65</p>
                  <p className="text-sm text-stone-500">per person</p>
                </div>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400">✓</span>
                    <span>3-hour workshop</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400">✓</span>
                    <span>One arrangement per person</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400">✓</span>
                    <span>Premium materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400">✓</span>
                    <span>Full catering options</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-stone-100 p-8 rounded-sm">
              <h3 className="text-lg font-medium mb-4 text-center">Custom Options Available</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-600">
                <div>
                  <p className="font-medium text-stone-900 mb-2">Add-Ons:</p>
                  <ul className="space-y-1">
                    <li>• Wine or champagne service</li>
                    <li>• Multiple arrangement styles</li>
                    <li>• Extended workshop time</li>
                    <li>• Professional photography</li>
                    <li>• Branded materials (corporate)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-stone-900 mb-2">Special Rates:</p>
                  <ul className="space-y-1">
                    <li>• Schools & educational groups</li>
                    <li>• Non-profit organizations</li>
                    <li>• Multiple session bookings</li>
                    <li>• Off-season scheduling</li>
                    <li>• Groups over 30 people</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section background="stone">
        <Container>
          <h2 className="mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'Do we need any prior experience?',
                answer:
                  'Not at all! Workshops are designed for all skill levels, from complete beginners to those with some experience. Claire adapts instruction to your group\'s level and ensures everyone feels comfortable and successful.',
              },
              {
                question: 'How far in advance should we book?',
                answer:
                  '4-6 weeks notice is ideal to ensure availability and flower sourcing. However, sometimes last-minute workshops can be arranged depending on schedule. Peak seasons (spring and summer) book up faster.',
              },
              {
                question: 'Can you accommodate special themes or occasions?',
                answer:
                  'Absolutely! Workshops can be themed for seasons, holidays, specific color palettes, or tied to your event theme. Tell us your vision and we\'ll customize the flower selection and style accordingly.',
              },
              {
                question: 'What age groups can participate?',
                answer:
                  'We can adapt workshops for ages 8+ with age-appropriate instruction and materials. School groups typically work well from age 10+. Adults of all ages enjoy our workshops. Parent-child sessions are popular!',
              },
              {
                question: 'What if someone has allergies?',
                answer:
                  'Let us know about any allergies in advance. We can avoid strongly scented flowers, use hypoallergenic blooms, and provide gloves if needed. The safety and comfort of all participants is our priority.',
              },
              {
                question: 'Can we take our arrangements home?',
                answer:
                  'Yes! Everyone takes their beautiful creation home, complete with care instructions. For corporate events, arrangements can stay to decorate the office, or participants can take them. Your choice!',
              },
              {
                question: 'Do you provide corporate team-building certificates?',
                answer:
                  'Yes, we can provide participation certificates, include your company branding, and coordinate with your HR or team-building programs. We understand corporate requirements and deliverables.',
              },
              {
                question: 'What happens if we need to reschedule?',
                answer:
                  'We understand plans change. With 2+ weeks notice, we can usually reschedule at no charge. Less than 2 weeks may incur costs for flowers already ordered. We work with you to find solutions.',
              },
            ].map((faq, index) => (
              <div key={index} className="card bg-white">
                <h3 className="text-lg font-medium text-stone-900 mb-2">{faq.question}</h3>
                <p className="text-stone-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      <Section background="white">
        <Container>
          <h2 className="mb-12 text-center">Workshop Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div
                key={num}
                className="aspect-square bg-stone-200 image-container hover-scale flex items-center justify-center"
              >
                <span className="text-stone-400 text-sm">
                  [training-gallery-{num}.jpg]
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="stone">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready To Book Your Workshop?</h2>
            <p className="text-xl text-stone-600 mb-8">
              Whether you're planning corporate team building, a special celebration, or educational enrichment, Claire creates memorable flower arranging experiences tailored to your group. Get in touch to start planning your creative day!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact">Book Your Workshop</Button>
              <Button href="/about" variant="secondary">
                Meet Claire
              </Button>
            </div>
            <p className="text-sm text-stone-500 mt-6">
              Serving the French Riviera: Cannes, Monaco, Nice, Antibes, and surrounding areas
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
