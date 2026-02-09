import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Read our journal for wedding inspiration, floral tips, French Riviera venue guides, and behind-the-scenes looks at our luxury floristry work.',
};

export default function JournalPage() {
  const posts = [
    {
      title: 'Capturing the magic of a summer wedding in a Provencal bastide',
      excerpt:
        'Natural and quietly elegant florals for a stunning garden wedding in Provence',
      date: '2026-01-08',
      category: 'Real Weddings',
      slug: 'summer-wedding-provencal-bastide',
    },
    {
      title: 'A timeless Wedding in the south of France',
      excerpt:
        "In the quaint Village of Mougins, nestled in the sun drenched gardens of the Manoir de l'Etang a love story unfolded...",
      date: '2024-01-26',
      category: 'Real Weddings',
      slug: 'timeless-wedding-south-france',
    },
    {
      title: 'Intimate wedding in stunning Chateau de Tourreau',
      excerpt:
        "Intimate destination weddings with your nearest and dearest don't get more beautiful than this.",
      date: '2023-11-10',
      category: 'Real Weddings',
      slug: 'chateau-de-tourreau',
    },
    {
      title: 'Romantic elopement in a beautiful Provençal chapel',
      excerpt:
        'An intimate elopement in a stunning Provençal chapel with soft pale yellows and whites.',
      date: '2023-11-10',
      category: 'Real Weddings',
      slug: 'provencal-chapel-elopement',
    },
    {
      title: 'Beautiful wild flower wedding in Provence Farm',
      excerpt:
        'This beautiful farm in the Grasse hills is a perfect venue for an intimate family wedding.',
      date: '2023-06-27',
      category: 'Real Weddings',
      slug: 'wildflower-provence-farm',
    },
    {
      title: 'All things bright and beautiful',
      excerpt: 'Bold and bright florals for this stunning elopement',
      date: '2022-11-22',
      category: 'Real Weddings',
      slug: 'bright-elopement',
    },
    {
      title: 'Autumnal Wedding at Chateau Robernier',
      excerpt:
        'This stunning wedding shows how beautiful an autumnal date can be in Provence.',
      date: '2022-11-22',
      category: 'Real Weddings',
      slug: 'autumnal-chateau-robernier',
    },
    {
      title: 'Chic bastide wedding near Aix en Provence',
      excerpt: 'Provençal charm for the perfect wedding weekend',
      date: '2022-11-22',
      category: 'Real Weddings',
      slug: 'aix-bastide-wedding',
    },
    {
      title: 'Stunning chateau wedding in Provence',
      excerpt:
        'A hidden gem nestled in the Provence vineyards and close to the French Riviera.',
      date: '2022-11-22',
      category: 'Real Weddings',
      slug: 'provence-chateau-wedding',
    },
    {
      title: 'Intimate elopement above the perfume fields of Grasse',
      excerpt: 'Garden style elopement in the South of France',
      date: '2022-11-22',
      category: 'Real Weddings',
      slug: 'grasse-perfume-fields-elopement',
    },
    {
      title: 'Relaxed Provence wedding in the beautiful Luberon',
      excerpt:
        'This beautiful wedding was set at a stunning family home in Bonnieux.',
      date: '2022-01-13',
      category: 'Real Weddings',
      slug: 'luberon-provence-wedding',
    },
    {
      title: 'A Spectacular Monaco Elopement',
      excerpt:
        'As Featured on Wedding Sparrow - intimate wedding ceremonies in Monaco.',
      date: '2022-01-11',
      category: 'Real Weddings',
      slug: 'monaco-elopement',
    },
    {
      title: 'Top Tips to keep your flowers in tip top condition',
      excerpt:
        'Useful tips to help you care for your flowers on board your yacht!',
      date: '2019-07-02',
      category: 'Tips & Advice',
      slug: 'yacht-flower-care-tips',
    },
    {
      title: "Alex and Lucy's bold and bright Festival wedding",
      excerpt:
        "Bold wedding florals for close friends - colour palette and garden style blooms.",
      date: '2019-07-02',
      category: 'Real Weddings',
      slug: 'festival-wedding',
    },
    {
      title: 'Romantic Summer wedding in Grasse',
      excerpt:
        'Delicate pastel colours and relaxed garden inspired florals in Grasse.',
      date: '2019-07-01',
      category: 'Real Weddings',
      slug: 'romantic-grasse-wedding',
    },
  ];

  return (
    <>
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Journal</h1>
            <p className="text-xl text-stone-600">
              Real weddings, floral inspiration, and stories from the French Riviera
            </p>
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Filter Categories */}
            <div className="flex gap-4 mb-12 justify-center flex-wrap">
              {['All', 'Real Weddings', 'Venues', 'Tips & Advice'].map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 text-sm uppercase tracking-wider border border-stone-300 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-[4/5] bg-stone-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs text-stone-500 uppercase tracking-widest">
                        {post.category}
                      </span>
                      <span className="text-xs text-stone-300 mx-2">·</span>
                      <time className="text-xs text-stone-400">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                    <h2 className="text-xl mb-3 leading-tight">
                      <Link
                        href={`/journal/${post.slug}`}
                        className="hover:text-stone-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/journal/${post.slug}`}
                      className="text-xs uppercase tracking-widest text-stone-900 hover:text-stone-600 transition-colors inline-flex items-center gap-2"
                    >
                      Read More
                      <span className="transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
