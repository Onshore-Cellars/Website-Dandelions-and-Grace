import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Link from 'next/link';

// This would typically come from a CMS or database
const blogPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    content: string;
    date: string;
    category: string;
    images?: string[];
  }
> = {
  'summer-wedding-provencal-bastide': {
    title: 'Capturing the magic of a summer wedding in a Provencal bastide',
    excerpt:
      'Natural and quietly elegant florals for a stunning garden wedding in Provence',
    content: `
      <p>There's something truly magical about a summer wedding in Provence. The warm golden light, the scent of lavender on the breeze, and the timeless beauty of a historic bastide create the perfect setting for celebrating love.</p>

      <p>For this enchanting wedding, we created natural, garden-inspired arrangements that complemented the stunning architecture and lush grounds. Soft whites, gentle creams, and touches of sage green formed the color palette, with an abundance of seasonal blooms including garden roses, peonies, and delicate sweet peas.</p>

      <h2>The Ceremony</h2>
      <p>The ceremony took place in the bastide's formal garden, framed by centuries-old stone walls and manicured hedges. We created an organic arch featuring locally sourced greenery and ethereal white blooms that swayed gently in the summer breeze.</p>

      <h2>The Reception</h2>
      <p>For the reception, long harvest tables were dressed with abundant centerpieces mixing high and low arrangements to create visual interest and encourage conversation. Each piece told a story of the Provençal landscape, incorporating elements from the surrounding countryside.</p>

      <p>The bride's bouquet was a work of art – a lush, romantic gathering of the finest blooms, tied with hand-dyed silk ribbon. It perfectly captured the essence of the day: natural, elegant, and utterly timeless.</p>
    `,
    date: '2026-01-08',
    category: 'Real Weddings',
  },
  'timeless-wedding-south-france': {
    title: 'A timeless Wedding in the south of France',
    excerpt:
      'In the quaint Village of Mougins, nestled in the sun drenched gardens of the Manoir de l\'Etang a love story unfolded...',
    content: `
      <p>Nestled in the charming village of Mougins, the Manoir de l'Etang provided the most exquisite backdrop for this timeless celebration. The historic manor, with its sun-drenched gardens and elegant interiors, created an atmosphere of refined romance.</p>

      <h2>The Vision</h2>
      <p>Our couple wanted a classic, sophisticated aesthetic that would stand the test of time. We worked closely with them to create a floral design rooted in traditional elegance while incorporating modern touches that felt fresh and current.</p>

      <p>The color palette was soft and romantic – blush, ivory, champagne, and the palest of pinks, accented with garden greenery and flowing vines.</p>

      <h2>Ceremony Design</h2>
      <p>The ceremony took place in the manor's formal garden, where we created a stunning floral installation that framed the couple against the beautiful French countryside. Lush arrangements of roses, peonies, and hydrangeas in varying heights created a romantic garden atmosphere.</p>

      <h2>Reception Details</h2>
      <p>For the reception, we transformed the manor's elegant spaces with sophisticated centerpieces that mixed garden roses with seasonal French blooms. Candlelight added warmth and romance as the sun set over the Provençal hills.</p>

      <p>This wedding perfectly embodied the magic of celebrating love in the South of France – timeless, elegant, and utterly unforgettable.</p>
    `,
    date: '2024-01-26',
    category: 'Real Weddings',
  },
  'chateau-de-tourreau': {
    title: 'Intimate wedding in stunning Chateau de Tourreau',
    excerpt:
      'Intimate destination weddings with your nearest and dearest don\'t get more beautiful than this.',
    content: `
      <p>Located in the heart of Provence, Chateau de Tourreau is the epitome of French elegance and history. For this intimate wedding, we had the pleasure of creating abundant spring floral designs that complemented the château's breathtaking architecture and gardens.</p>

      <h2>Spring's Finest</h2>
      <p>Timing this wedding for peak spring season meant we had access to the most beautiful blooms. We filled the château with arrangements featuring tulips, ranunculus, sweet peas, and the most spectacular peonies, all sourced from local French growers.</p>

      <h2>The Ceremony Setting</h2>
      <p>The ceremony took place in the château's chapel, where we created installations that honored the sacred space while adding romantic spring florals. Garlands of greenery and flowers adorned the ancient stone walls, and a lush ground installation created a floral path for the bride.</p>

      <h2>Intimate Reception</h2>
      <p>With just their closest family and friends in attendance, the couple celebrated in the château's elegant dining room. We created generous centerpieces that encouraged conversation across the table while allowing guests to connect.</p>

      <p>The outdoor terrace was transformed into a cocktail area with arrangements in stone urns, connecting the formal indoor spaces with the natural beauty of the Provençal countryside.</p>

      <p>This intimate celebration proved that sometimes the most meaningful weddings are those shared with just your nearest and dearest, in a setting as spectacular as Chateau de Tourreau.</p>
    `,
    date: '2023-11-10',
    category: 'Real Weddings',
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Journal`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section background="white" className="pt-32 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/journal"
                className="text-sm text-stone-500 hover:text-stone-900 uppercase tracking-widest"
              >
                ← Back to Journal
              </Link>
            </div>

            {/* Category & Date */}
            <div className="mb-6">
              <span className="text-sm text-stone-600 uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-sm text-stone-300 mx-3">·</span>
              <time className="text-sm text-stone-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl mb-8 leading-tight">{post.title}</h1>

            {/* Featured Image Placeholder */}
            <div className="aspect-[16/10] bg-stone-200 mb-12 rounded-sm" />

            {/* Excerpt */}
            <p className="text-xl text-stone-600 mb-12 italic border-l-2 border-stone-300 pl-6">
              {post.excerpt}
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white" className="pt-0">
        <Container>
          <article className="max-w-3xl mx-auto prose prose-lg prose-stone">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </Container>
      </Section>

      {/* Image Gallery Section */}
      <Section background="stone">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl mb-12 text-center">Gallery</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[4/5] bg-stone-300 rounded-sm" />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl mb-12 text-center">More Real Weddings</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="group">
                  <div className="aspect-[4/5] bg-stone-200 mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-t from-stone-900/10 to-transparent" />
                  </div>
                  <p className="text-sm text-stone-500 mb-2 uppercase tracking-wider">
                    Real Weddings
                  </p>
                  <h3 className="text-lg hover:text-stone-600 transition-colors cursor-pointer">
                    Related Wedding Title {i + 1}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
