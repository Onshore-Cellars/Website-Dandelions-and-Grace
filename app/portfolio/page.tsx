import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Our Work",
  description: "Browse our portfolio of luxury wedding flowers, yacht floristry, and event designs throughout the South of France.",
};

// Mock portfolio data - in production, this would come from Sanity CMS
const portfolioItems = [
  {
    id: 1,
    title: "Villa Wedding in Cannes",
    category: "wedding",
    location: "Cannes",
    year: "2024",
    image: "/images/portfolio/1.svg",
  },
  {
    id: 2,
    title: "Superyacht Monaco",
    category: "yacht",
    location: "Monaco",
    year: "2024",
    image: "/images/portfolio/2.svg",
  },
  {
    id: 3,
    title: "Corporate Gala Nice",
    category: "corporate",
    location: "Nice",
    year: "2024",
    image: "/images/portfolio/3.svg",
  },
  {
    id: 4,
    title: "Saint-Tropez Wedding",
    category: "wedding",
    location: "Saint-Tropez",
    year: "2023",
    image: "/images/portfolio/4.svg",
  },
  {
    id: 5,
    title: "Private Party Antibes",
    category: "private",
    location: "Antibes",
    year: "2024",
    image: "/images/portfolio/5.svg",
  },
  {
    id: 6,
    title: "Monaco Grand Prix Event",
    category: "corporate",
    location: "Monaco",
    year: "2024",
    image: "/images/portfolio/6.svg",
  },
];

const categories = ["all", "wedding", "yacht", "corporate", "private"];

export default function PortfolioPage() {
  return (
    <>
      <Hero
        title="Our Portfolio"
        subtitle="Our Work"
        description="A curated selection of our favorite projects from across the South of France."
        image="/images/hero/main-hero.svg"
        imageAlt="Portfolio"
        height="default"
      />

      <Section spacing="large">
        <Container>
          {/* Filter (in production, this would be interactive) */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 text-sm uppercase tracking-wider border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Link
                key={item.id}
                href={`/portfolio/${item.id}`}
                className="group"
              >
                <div className="relative aspect-[4/5] bg-stone-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                    {item.title}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-sm uppercase tracking-wider">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-display text-stone-900 group-hover:text-stone-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-600">
                    {item.location} • {item.year}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
              Let's Create Your Story
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Every project is unique. Let us bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-stone-900 text-white hover:bg-stone-800 transition-colors"
            >
              Start Your Enquiry
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
