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
  return (
    <>
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Portfolio</h1>
            <p className="text-xl text-stone-600">
              A collection of our recent work creating bespoke floral designs for luxury weddings
              and events across the French Riviera.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-stone-300 aspect-[4/5] mb-4 flex items-center justify-center hover:bg-stone-400 transition-colors">
                  <p className="text-stone-500 text-center px-8">
                    [Portfolio Image {index + 1}]
                  </p>
                </div>
                <h3 className="text-lg font-medium mb-1 group-hover:text-stone-600 transition-colors">
                  Project Title {index + 1}
                </h3>
                <p className="text-stone-600 text-sm">
                  {index % 3 === 0
                    ? 'Wedding in Cannes'
                    : index % 3 === 1
                    ? 'Yacht Event, Monaco'
                    : 'Villa Celebration, Saint-Tropez'}
                </p>
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
