export interface LocationData {
  name: string;
  slug: string;
  description: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  postalCode: string;
  region: string;
  highlights: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  venues: string[];
}

export const locations: Record<string, LocationData> = {
  cannes: {
    name: 'Cannes',
    slug: 'cannes',
    description:
      'Create unforgettable floral designs for your Cannes wedding or event. From intimate beachfront ceremonies to grand celebrations at prestigious venues, our luxury floristry brings elegance to the heart of the French Riviera.',
    coordinates: {
      latitude: 43.5528,
      longitude: 7.0174,
    },
    postalCode: '06400',
    region: 'Alpes-Maritimes, French Riviera',
    highlights: [
      'Cannes Film Festival venue floristry',
      'Luxury hotel and villa weddings',
      'Beachfront ceremony arrangements',
      'Yacht and private event styling',
      'Palace and historic venue designs',
    ],
    venues: [
      'InterContinental Carlton Cannes',
      'Hôtel Martinez',
      'Villa Ephrussi de Rothschild',
      'Private villas in Super Cannes',
      'Beaches and waterfront venues',
    ],
    faqs: [
      {
        question: 'How far in advance should I book wedding flowers in Cannes?',
        answer:
          'We recommend booking 6-12 months in advance for weddings, especially during peak season (May-September) and around the Cannes Film Festival. This ensures availability and allows time for detailed planning.',
      },
      {
        question: 'Do you work with venues in Cannes?',
        answer:
          'Yes, we have established relationships with premium venues including the Carlton, Martinez, and private villas throughout Cannes. We handle all logistics and setup coordination.',
      },
      {
        question: 'What is your service area around Cannes?',
        answer:
          'We serve all of Cannes and surrounding areas including Mougins, Le Cannet, and the Cap d\'Antibes, with full-service floristry for weddings and events.',
      },
    ],
  },
  monaco: {
    name: 'Monaco',
    slug: 'monaco',
    description:
      'Elevate your Monaco wedding or event with exceptional floral artistry. Specializing in ultra-luxury celebrations at iconic venues, yacht events, and exclusive private affairs in the world\'s most glamorous principality.',
    coordinates: {
      latitude: 43.7384,
      longitude: 7.4246,
    },
    postalCode: '98000',
    region: 'Principality of Monaco',
    highlights: [
      'Monaco Grand Prix event floristry',
      'Superyacht and harbor celebrations',
      'Casino de Monte-Carlo events',
      'Wedding at Hôtel de Paris',
      'Private residence and villa styling',
    ],
    venues: [
      'Hôtel de Paris Monte-Carlo',
      'Hôtel Hermitage Monte-Carlo',
      'Casino de Monte-Carlo',
      'Yacht Club de Monaco',
      'Private superyachts',
    ],
    faqs: [
      {
        question: 'What makes Monaco weddings unique?',
        answer:
          'Monaco weddings demand the highest level of sophistication and attention to detail. We specialize in creating showstopping designs that complement the principality\'s legendary glamour.',
      },
      {
        question: 'Do you provide floristry for yacht events?',
        answer:
          'Yes, yacht floristry is one of our specialties. We design arrangements specifically for marine environments, ensuring they remain pristine throughout your event.',
      },
      {
        question: 'Can you handle last-minute requests for Monaco Grand Prix?',
        answer:
          'While we prefer advance booking, we maintain relationships with premium flower suppliers to accommodate select last-minute requests during the Grand Prix season.',
      },
    ],
  },
  antibes: {
    name: 'Antibes',
    slug: 'antibes',
    description:
      'Transform your Antibes wedding with exquisite floral designs that capture the essence of this historic Mediterranean gem. From Cap d\'Antibes estates to charming old town venues, we create stunning arrangements for discerning couples.',
    coordinates: {
      latitude: 43.5808,
      longitude: 7.1251,
    },
    postalCode: '06600',
    region: 'Alpes-Maritimes, French Riviera',
    highlights: [
      'Cap d\'Antibes villa weddings',
      'Historic old town venues',
      'Garden and estate ceremonies',
      'Beachside receptions',
      'Picasso Museum events',
    ],
    venues: [
      'Hotel du Cap-Eden-Roc',
      'Villa Eilenroc',
      'Private estates on Cap d\'Antibes',
      'Château de la Garoupe',
      'Beachfront venues',
    ],
    faqs: [
      {
        question: 'What styles work best for Antibes weddings?',
        answer:
          'Antibes\' natural beauty lends itself to romantic, garden-inspired designs. We often incorporate Mediterranean botanicals, soft palettes, and elegant European styling.',
      },
      {
        question: 'Do you work with Hotel du Cap-Eden-Roc?',
        answer:
          'Yes, we have extensive experience creating floral designs for this iconic venue and work closely with their events team.',
      },
      {
        question: 'What is the best season for an Antibes wedding?',
        answer:
          'Late spring (May-June) and early fall (September-October) offer ideal weather and stunning seasonal flowers. Summer is beautiful but busier and warmer.',
      },
    ],
  },
  nice: {
    name: 'Nice',
    slug: 'nice',
    description:
      'Bring timeless elegance to your Nice wedding or event. From Belle Époque palaces to contemporary venues, our bespoke floral designs honor the sophistication and charm of the Côte d\'Azur\'s cultural capital.',
    coordinates: {
      latitude: 43.7102,
      longitude: 7.2620,
    },
    postalCode: '06000',
    region: 'Alpes-Maritimes, French Riviera',
    highlights: [
      'Historic palace hotel weddings',
      'Promenade des Anglais venues',
      'Old town charm celebrations',
      'Contemporary art venue events',
      'Villa and garden ceremonies',
    ],
    venues: [
      'Hôtel Negresco',
      'La Réserve de Nice',
      'Villa Ephrussi de Rothschild',
      'Museum of Modern Art venues',
      'Private villas in Cimiez',
    ],
    faqs: [
      {
        question: 'Is Nice a good choice for a destination wedding?',
        answer:
          'Absolutely! Nice offers excellent accessibility via the international airport, diverse venue options, and the perfect blend of French culture and Mediterranean beauty.',
      },
      {
        question: 'What floral styles are popular in Nice?',
        answer:
          'Nice weddings often feature classic French elegance with touches of Mediterranean flair. We excel at both traditional romantic designs and contemporary artistic arrangements.',
      },
      {
        question: 'Do you offer setup for outdoor venues in Nice?',
        answer:
          'Yes, we specialize in outdoor venue setup including gardens, terraces, and beachfront locations. We account for weather and logistics in our planning.',
      },
    ],
  },
  'saint-tropez': {
    name: 'Saint-Tropez',
    slug: 'saint-tropez',
    description:
      'Create show-stopping floral moments for your Saint-Tropez wedding or celebration. Known for glamorous beach clubs, luxury villas, and sophisticated soirées, we design arrangements that embody the legendary Saint-Tropez lifestyle.',
    coordinates: {
      latitude: 43.2677,
      longitude: 6.6407,
    },
    postalCode: '83990',
    region: 'Var, French Riviera',
    highlights: [
      'Beach club celebrations',
      'Private villa weddings',
      'Harbor and yacht events',
      'Luxury hotel ceremonies',
      'Vineyard venue styling',
    ],
    venues: [
      'Château de la Messardière',
      'Hôtel Byblos',
      'Club 55',
      'Private villas in Ramatuelle',
      'Villa Marie Saint-Tropez',
    ],
    faqs: [
      {
        question: 'What defines Saint-Tropez wedding style?',
        answer:
          'Saint-Tropez weddings blend casual elegance with luxury. Think sophisticated beach vibes, white and neutral palettes with vibrant accents, and effortlessly chic designs.',
      },
      {
        question: 'Can you work with beach club venues?',
        answer:
          'Yes, we have extensive experience with Saint-Tropez\'s iconic beach clubs. We design arrangements that complement the relaxed-luxury atmosphere while withstanding coastal conditions.',
      },
      {
        question: 'How does weather affect planning?',
        answer:
          'Saint-Tropez enjoys excellent weather May-September. We always have contingency plans for wind near the coast and choose hardy, heat-resistant flowers for summer events.',
      },
    ],
  },
  mougins: {
    name: 'Mougins',
    slug: 'mougins',
    description:
      'Discover enchanting floral designs for your Mougins wedding. This medieval hilltop village offers intimate charm and Provençal elegance, perfect for romantic celebrations surrounded by art, gastronomy, and breathtaking views.',
    coordinates: {
      latitude: 43.5997,
      longitude: 6.9968,
    },
    postalCode: '06250',
    region: 'Alpes-Maritimes, French Riviera',
    highlights: [
      'Medieval village venue weddings',
      'Michelin-starred restaurant events',
      'Private villa celebrations',
      'Garden and olive grove ceremonies',
      'Art gallery and museum venues',
    ],
    venues: [
      'Royal Mougins Golf Resort',
      'Private estates and villas',
      'Historic village venues',
      'Michelin-starred restaurants',
      'Olive grove settings',
    ],
    faqs: [
      {
        question: 'Why choose Mougins for a wedding?',
        answer:
          'Mougins offers intimate charm away from the coastal bustle, with Provençal character, world-class dining, and stunning countryside views. Perfect for couples seeking authentic French Riviera romance.',
      },
      {
        question: 'What floral styles suit Mougins venues?',
        answer:
          'Mougins\' Provençal setting is ideal for garden-style arrangements, rustic elegance, and designs featuring lavender, herbs, and Mediterranean botanicals alongside classic wedding flowers.',
      },
      {
        question: 'Is Mougins easily accessible for guests?',
        answer:
          'Yes, Mougins is only 15 minutes from Cannes and 30 minutes from Nice Airport. It offers the best of both worlds: village charm with excellent accessibility.',
      },
    ],
  },
};
