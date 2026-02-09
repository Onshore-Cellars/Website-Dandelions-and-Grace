import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'View our portfolio of luxury wedding and event floristry across the French Riviera. See examples of our bespoke floral designs.',
};

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: 'Elegant Château Wedding',
      location: 'Provence',
      type: 'Wedding',
      description: 'Romantic garden-inspired florals for an intimate château celebration',
    },
    {
      title: 'Monaco Grand Prix Gala',
      location: 'Monaco',
      type: 'Corporate Event',
      description: 'Bold contemporary arrangements for a prestigious racing weekend event',
    },
    {
      title: 'Villa Ephrussi Garden Party',
      location: 'Saint-Jean-Cap-Ferrat',
      type: 'Private Party',
      description: 'Lush Mediterranean-inspired designs for a summer soirée',
    },
    {
      title: 'Yacht Wedding Reception',
      location: 'Cannes',
      type: 'Yacht Event',
      description: 'Sophisticated marine-safe florals for an elegant aboard celebration',
    },
    {
      title: 'Bastide Spring Wedding',
      location: 'Grasse',
      type: 'Wedding',
      description: 'Soft pastel blooms celebrating the perfume capital of the world',
    },
    {
      title: 'Riviera Corporate Gala',
      location: 'Nice',
      type: 'Corporate Event',
      description: 'Modern luxury installations for a prestigious company milestone',
    },
    {
      title: 'Intimate Vineyard Elopement',
      location: 'Mougins',
      type: 'Elopement',
      description: 'Organic wildflower arrangements among the vines',
    },
    {
      title: 'Superyacht Charter Welcome',
      location: 'Antibes',
      type: 'Yacht Event',
      description: 'Bespoke arrangements for an exclusive charter week',
    },
    {
      title: 'Villa Kérylos Reception',
      location: 'Beaulieu-sur-Mer',
      type: 'Private Party',
      description: 'Classical elegance with Mediterranean touches',
    },
  ];

  return (
    <>
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Portfolio</h1>
            <p className="text-xl text-stone-600">
              A curated collection of our bespoke floral designs for luxury weddings
              and exclusive events across the French Riviera. Each project reflects our commitment to artistry, elegance, and unforgettable experiences.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-stone-300 aspect-[4/5] mb-4 relative overflow-hidden hover-lift">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-stone-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm uppercase tracking-widest">View Project</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium group-hover:text-stone-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 text-sm uppercase tracking-wider">
                    {item.type} · {item.location}
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Create Your Story?</h2>
            <p className="text-xl text-stone-600 mb-8">
              Each project in our portfolio represents a unique vision brought to life. Let&apos;s
              create something beautiful for your celebration.
            </p>
            <Button href="/contact">Start Your Enquiry</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
