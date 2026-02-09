import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Weddings | Luxury French Riviera Wedding Florist',
  description:
    'Bespoke wedding floristry for destination weddings across the French Riviera. From intimate ceremonies to grand celebrations in Provence, Cannes, Monaco, and Saint-Tropez.',
  openGraph: {
    title: 'Wedding Floristry | Dandelions & Grace',
    description:
      'Bespoke wedding floristry for destination weddings across the French Riviera.',
  },
};

export default function WeddingsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6">Wedding Floristry</h1>
            <p className="text-2xl font-display text-stone-600 mb-6">
              Your love story deserves flowers as extraordinary as your celebration
            </p>
            <p className="text-xl text-stone-600 leading-relaxed mb-8">
              Claire specializes in creating bespoke floral designs for destination weddings across the French Riviera. From intimate elopements in Provençal chapels to grand celebrations at historic châteaux, every bloom is thoughtfully chosen and every arrangement meticulously crafted to bring your vision to life.
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured Image Space */}
      <Section background="stone" className="py-0">
        <Container>
          <div className="aspect-[21/9] bg-stone-300 image-container flex items-center justify-center">
            <p className="text-stone-500 text-center px-8">
              [Hero Image: Stunning wedding ceremony with floral arch]
              <br />
              <span className="text-sm">weddings-hero.jpg</span>
            </p>
          </div>
        </Container>
      </Section>

      {/* What Claire Can Create */}
      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">What Claire Creates For Your Wedding</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Bridal Bouquets',
                  description:
                    'Your bouquet is the most important floral piece of your day. Claire creates stunning, personalized bouquets that complement your dress, style, and personality – from loose garden-style to structured classic elegance.',
                  image: 'wedding-bouquet.jpg',
                },
                {
                  title: 'Ceremony Installations',
                  description:
                    'Breathtaking ceremony arches, chuppas, and altar arrangements. Aisle decorations, pew flowers, and entrance installations that frame your vows in beauty and create that unforgettable first impression.',
                  image: 'wedding-ceremony.jpg',
                },
                {
                  title: 'Reception Florals',
                  description:
                    'Table centerpieces, statement arrangements, and floral installations that transform your reception space. From intimate tablescapes to dramatic suspended installations and ceiling features.',
                  image: 'wedding-reception.jpg',
                },
                {
                  title: 'Bridal Party Flowers',
                  description:
                    'Coordinated bouquets for bridesmaids, boutonnieres for groomsmen, corsages for mothers, and flower crowns. Every member of your party receives beautifully designed personal flowers.',
                  image: 'wedding-party.jpg',
                },
                {
                  title: 'Venue Styling',
                  description:
                    'Complete venue transformation with entrance arrangements, bar florals, lounge area styling, restroom touches, and any special focal points. We bring your vision to life in every corner.',
                  image: 'wedding-venue.jpg',
                },
                {
                  title: 'Welcome & Extras',
                  description:
                    'Rehearsal dinner flowers, welcome party arrangements, day-after brunch florals, flower girl petals, toss bouquets, and any special floral touches for your wedding weekend.',
                  image: 'wedding-extras.jpg',
                },
              ].map((service, index) => (
                <div key={index} className="card hover-lift">
                  <div className="aspect-[4/3] bg-stone-200 mb-4 image-container flex items-center justify-center">
                    <span className="text-stone-400 text-sm text-center px-4">
                      [{service.image}]
                    </span>
                  </div>
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* The Wedding Process */}
      <Section background="stone">
        <Container>
          <h2 className="mb-12 text-center">Your Wedding Flower Journey</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                step: '01',
                title: 'Initial Consultation & Vision',
                timeline: '12-18 months before (ideally)',
                description:
                  'Your journey begins with Claire getting to know you and your vision. Share your Pinterest boards, photos, fabric swatches, and dreams. Discuss your venue, wedding style, color palette, and any must-have flowers. This can be in person at our studio, at your venue, or via video call for destination clients.',
                considerations: [
                  'Your venue and wedding date',
                  'Overall wedding style (romantic, modern, rustic, etc.)',
                  'Color palette and seasonal flowers',
                  'Budget parameters and priorities',
                  'Inspiration images and Pinterest boards',
                  'Any allergies or flower aversions',
                  'Cultural or symbolic flower preferences',
                ],
              },
              {
                step: '02',
                title: 'Custom Proposal & Design',
                timeline: '2-4 weeks after consultation',
                description:
                  'Claire creates a comprehensive proposal tailored specifically to your wedding. You\'ll receive detailed mood boards, flower selections with seasonality notes, design sketches for key pieces, and transparent pricing broken down by element. We refine together until every detail is exactly right.',
                considerations: [
                  'Detailed itemized pricing',
                  'Mood boards with style direction',
                  'Specific flower varieties and colors',
                  'Quantity of arrangements needed',
                  'Installation and timing logistics',
                  'Alternative options within budget',
                  'Contract terms and deposit requirements',
                ],
              },
              {
                step: '03',
                title: 'Planning & Refinement',
                timeline: '6-8 months before',
                description:
                  'As your wedding evolves, we refine the floral design. Finalize guest count for table arrangements, confirm venue logistics with your coordinator, adjust seasonal flower selections, and add any additional elements. Claire stays in close communication with your planner and venue.',
                considerations: [
                  'Final guest count and table numbers',
                  'Venue walkthrough and logistics',
                  'Timeline coordination with planner',
                  'Backup plans for weather (if outdoor)',
                  'Special requests or additions',
                  'Delivery and setup access',
                  'Final flower availability confirmation',
                ],
              },
              {
                step: '04',
                title: 'Final Details & Execution',
                timeline: '4-6 weeks before',
                description:
                  'The final phase focuses on perfect execution. We confirm all flower orders with growers, create detailed installation plans and timelines, coordinate with venue staff and other vendors, and prepare for setup. Everything is managed so you can focus on enjoying your celebration.',
                considerations: [
                  'Setup schedule and venue access times',
                  'Vendor coordination (planner, photographer, venue)',
                  'Backup flower options if needed',
                  'Delivery of personal flowers (bouquets, boutonnieres)',
                  'Installation of ceremony and reception florals',
                  'Strike/removal plans after event',
                  'Emergency contact during wedding',
                ],
              },
              {
                step: '05',
                title: 'Your Wedding Day',
                timeline: 'The big day!',
                description:
                  'Claire and her team arrive early to transform your venue into floral magic. Personal flowers are delivered beautifully packaged at the perfect time. Ceremony installations are completed before guests arrive. Reception is styled to perfection. Your only job is to enjoy every beautiful moment.',
                considerations: [
                  'Bridal bouquet delivered fresh on schedule',
                  'All personal flowers distributed properly',
                  'Ceremony setup completed early',
                  'Reception florals installed during ceremony',
                  'Last-minute adjustments handled seamlessly',
                  'Team available for any needs',
                  'Removal/donation coordinated post-event',
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
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl">{phase.title}</h3>
                      <span className="text-sm text-stone-500 uppercase tracking-wider mt-1 md:mt-0">
                        {phase.timeline}
                      </span>
                    </div>
                    <p className="text-stone-600 mb-6 leading-relaxed">{phase.description}</p>
                    <div className="bg-stone-50 p-6 rounded-sm">
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

      {/* What To Think About */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Planning Your Wedding Flowers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card">
                <h3 className="text-xl mb-4">Timing & Seasons</h3>
                <ul className="space-y-3 text-stone-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span><strong>Spring (March-May):</strong> Peonies, tulips, ranunculus, sweet peas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span><strong>Summer (June-August):</strong> Garden roses, dahlias, lavender, hydrangeas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span><strong>Autumn (Sept-Nov):</strong> Dahlias, chrysanthemums, autumn foliage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span><strong>Winter (Dec-Feb):</strong> Amaryllis, hellebores, evergreens, imported blooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Peak wedding season is May-October; book 12-18 months ahead</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl mb-4">Budget Guidelines</h3>
                <ul className="space-y-3 text-stone-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span><strong>Intimate (20-50 guests):</strong> €5,000-€12,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span><strong>Mid-size (50-100 guests):</strong> €12,000-€25,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span><strong>Large (100-150+ guests):</strong> €25,000-€50,000+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Luxury installations and rare blooms increase investment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Allocate 10-15% of total wedding budget to flowers</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl mb-4">Venue Considerations</h3>
                <ul className="space-y-3 text-stone-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Grand châteaux need scale and drama</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Bastides suit romantic garden styles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Beach/yacht venues require secure, wind-resistant designs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Villa weddings offer flexibility in placement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Consider venue restrictions (candles, mechanics, timing)</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl mb-4">Weather & Backup Plans</h3>
                <ul className="space-y-3 text-stone-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Outdoor ceremonies need shade/protection for flowers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Have rain plan: florals adapt to indoor/outdoor setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Extreme heat requires hardier flower selections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Mistral winds on Riviera? We design for stability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-1">•</span>
                    <span>Claire always has backup plans built into design</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-stone-100 p-8 rounded-sm">
              <h3 className="text-2xl mb-4 text-center">Popular French Riviera Wedding Venues</h3>
              <p className="text-center text-stone-600 mb-6">
                Claire regularly works at these prestigious venues:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-stone-700">
                {[
                  'Château de Tourreau',
                  'Château de la Napoule',
                  'Château de Robernier',
                  'Manoir de l\'Etang',
                  'Villa Ephrussi de Rothschild',
                  'Bastide de Gordes',
                  'Domaine de Fontenille',
                  'La Bastide de Moustiers',
                  'Hotel du Cap-Eden-Roc',
                  'Private villas throughout Provence',
                  'Yacht weddings in Monaco',
                  'And many more...',
                ].map((venue, i) => (
                  <div key={i} className="text-center py-2 border-b border-stone-300">
                    {venue}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Real Wedding Gallery */}
      <Section background="stone">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">Real Weddings</h2>
            <p className="text-xl text-stone-600">See Claire's work in action</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div
                key={num}
                className="aspect-[4/5] bg-stone-300 image-container hover-scale flex items-center justify-center"
              >
                <span className="text-stone-400 text-sm">
                  [wedding-gallery-{num}.jpg]
                </span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-stone-900 hover:text-stone-600 transition-colors uppercase tracking-wider text-sm font-medium"
            >
              See More Real Weddings in Our Journal →
            </Link>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section background="white">
        <Container>
          <h2 className="mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'When should we book our wedding flowers?',
                answer:
                  'Ideally 12-18 months in advance, especially for weddings during peak season (May-October). This ensures your preferred date is available and allows ample time for thoughtful design development. Last-minute bookings (6 months or less) are sometimes possible but subject to availability.',
              },
              {
                question 'How do we choose our wedding flowers?',
                answer:
                  'Claire guides you through the selection process based on your style, season, venue, and budget. She'll suggest blooms that work well together, perform in your wedding conditions, and are available during your season. You'll see everything in mood boards before committing.',
              },
              {
                question: 'What if our dream flowers aren't in season?',
                answer:
                  'Claire can usually source out-of-season flowers through specialty growers, though they may cost more. Often, she'll suggest equally beautiful seasonal alternatives that may even work better for your wedding. Seasonal flowers are typically fresher, more affordable, and more sustainable.',
              },
              {
                question: 'Do you provide flowers for the rehearsal dinner?,
                answer:
                  'Absolutely! Many couples include rehearsal dinner florals in their overall package. These are typically simpler than wedding day flowers but coordinate beautifully with your overall design aesthetic.',
              },
              {
                question: 'Can we see samples before the wedding?',
                answer:
                  'For local couples with larger weddings, Claire can arrange a sample arrangement or bouquet closer to your date (additional fee applies). For most clients, detailed mood boards, photos of past work, and clear communication ensure you'll love the final result.',
              },
              {
                question: 'What happens to the flowers after the wedding?',
                answer:
                  'Many couples have personal flowers preserved. Reception florals can be donated to local hospitals or care homes, given to guests, or delivered to you/family the next day. We coordinate whatever you prefer and can arrange donation services.',
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-medium text-stone-900 mb-2">{faq.question}</h3>
                <p className="text-stone-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="stone">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Let's Create Your Dream Wedding</h2>
            <p className="text-xl text-stone-600 mb-8">
              Your French Riviera wedding deserves exceptional floristry. Share your vision with Claire, and together we'll bring your celebration to life with breathtaking flowers that reflect your love story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact">Start Planning Your Wedding</Button>
              <Button href="/journal" variant="secondary">
                View Real Weddings
              </Button>
            </div>
            <p className="text-sm text-stone-500 mt-6">
              Serving Provence, Cannes, Monaco, Saint-Tropez, and the entire French Riviera
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
