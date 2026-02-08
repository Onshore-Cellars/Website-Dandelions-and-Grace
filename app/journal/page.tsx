import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal | Blog & Real Weddings",
  description: "Wedding inspiration, floral design tips, and real wedding features from the South of France.",
};

// Mock journal data - in production, this would come from Sanity CMS
const posts = [
  {
    id: 1,
    title: "A Romantic Wedding at Villa Ephrussi de Rothschild",
    slug: "villa-ephrussi-wedding",
    category: "Real Weddings",
    excerpt: "Sarah and James's intimate celebration on the French Riviera was a dream come true.",
    image: "/images/journal/1.svg",
    date: "2024-06-15",
    featured: true,
  },
  {
    id: 2,
    title: "Yacht Floristry: Creating Elegance at Sea",
    slug: "yacht-floristry-guide",
    category: "Editorial",
    excerpt: "Everything you need to know about styling superyachts with seasonal flowers.",
    image: "/images/journal/2.svg",
    date: "2024-05-20",
    featured: false,
  },
  {
    id: 3,
    title: "Summer Wedding Trends in the South of France",
    slug: "summer-wedding-trends",
    category: "Advice",
    excerpt: "The hottest floral trends for summer 2024 weddings on the Côte d'Azur.",
    image: "/images/journal/3.svg",
    date: "2024-04-10",
    featured: false,
  },
  {
    id: 4,
    title: "Monaco Grand Prix Hospitality Event",
    slug: "monaco-gp-event",
    category: "Real Weddings",
    excerpt: "Behind the scenes of a luxury corporate event during Monaco's most exciting weekend.",
    image: "/images/journal/4.svg",
    date: "2024-05-28",
    featured: true,
  },
  {
    id: 5,
    title: "Choosing Your Wedding Flowers: A Guide",
    slug: "choosing-wedding-flowers",
    category: "Advice",
    excerpt: "How to select the perfect blooms for your South of France wedding.",
    image: "/images/journal/5.svg",
    date: "2024-03-15",
    featured: false,
  },
  {
    id: 6,
    title: "Cannes Film Festival Florals",
    slug: "cannes-film-festival",
    category: "Editorial",
    excerpt: "Creating show-stopping arrangements for the world's most glamorous festival.",
    image: "/images/journal/6.svg",
    date: "2024-05-18",
    featured: false,
  },
];

const categories = ["All Posts", "Real Weddings", "Editorial", "Advice"];

export default function JournalPage() {
  return (
    <>
      <Hero
        title="Journal"
        subtitle="Stories & Inspiration"
        description="Wedding features, design insights, and stories from the South of France."
        image="/images/hero/main-hero.svg"
        imageAlt="Journal"
        height="default"
      />

      <Section spacing="large">
        <Container>
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 text-sm uppercase tracking-wider text-stone-700 hover:text-stone-900 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-stone-900 mb-8">Featured</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts
                .filter((post) => post.featured)
                .slice(0, 2)
                .map((post) => (
                  <Link
                    key={post.id}
                    href={`/journal/${post.slug}`}
                    className="group"
                  >
                    <div className="aspect-[3/2] bg-stone-200 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                        {post.title}
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center text-sm text-stone-500 mb-2">
                        <span className="uppercase tracking-wider">{post.category}</span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <h3 className="text-2xl font-display text-stone-900 mb-2 group-hover:text-stone-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-stone-600 leading-relaxed">{post.excerpt}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* All Posts */}
          <div>
            <h2 className="text-3xl font-display text-stone-900 mb-8">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/journal/${post.slug}`}
                  className="group"
                >
                  <div className="aspect-[4/5] bg-stone-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                      {post.title}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-xs text-stone-500 mb-2">
                      <span className="uppercase tracking-wider">{post.category}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h3 className="text-lg font-display text-stone-900 mb-2 group-hover:text-stone-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Get wedding inspiration and floral design tips delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-stone-900 text-white hover:bg-stone-800 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
