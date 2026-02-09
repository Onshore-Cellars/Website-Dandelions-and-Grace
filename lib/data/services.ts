export interface ServiceData {
  name: string;
  slug: string;
  description: string;
  tagline: string;
  services: string[];
  process: Array<{
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const services: Record<string, ServiceData> = {
  weddings: {
    name: 'Wedding Floristry',
    slug: 'weddings',
    tagline: 'Timeless floral designs for your French Riviera wedding',
    description:
      'Your wedding day deserves flowers as extraordinary as your love story. We create bespoke floral designs for luxury weddings across the French Riviera, from intimate ceremonies to grand celebrations. Every bloom, every arrangement, meticulously crafted to reflect your unique vision.',
    services: [
      'Bridal bouquets and party flowers',
      'Ceremony arches and aisle decorations',
      'Reception centerpieces and table designs',
      'Venue styling and installation',
      'Flower crowns and personal flowers',
      'Rehearsal dinner arrangements',
    ],
    process: [
      {
        title: 'Initial Consultation',
        description:
          'We begin with an in-depth conversation about your vision, venue, and style preferences. Whether in person or virtual, we capture every detail.',
      },
      {
        title: 'Proposal & Design',
        description:
          'Receive a comprehensive proposal with mood boards, flower selections, and detailed pricing. We refine together until every element is perfect.',
      },
      {
        title: 'Final Planning',
        description:
          'Closer to your date, we finalize all details, coordinate with your venue, and ensure seamless logistics for your celebration.',
      },
      {
        title: 'Wedding Day',
        description:
          'Our team handles setup, installation, and any adjustments needed. You simply enjoy your beautiful day surrounded by stunning flowers.',
      },
    ],
    faqs: [
      {
        question: 'When should we book our wedding flowers?',
        answer:
          '12-18 months in advance for weddings, especially during peak season (May-October). This ensures your preferred date and allows time for thoughtful planning.',
      },
      {
        question: 'What is your minimum investment for weddings?',
        answer:
          'Our wedding collections typically start at €5,000-€8,000, with most luxury weddings ranging from €15,000-€50,000 depending on guest count, venue, and design complexity.',
      },
      {
        question: 'Do you travel for destination weddings?',
        answer:
          'Yes! While based on the French Riviera, we travel throughout France and internationally for destination weddings. Travel fees apply for locations beyond our service area.',
      },
      {
        question: 'Can we see samples before the wedding?',
        answer:
          'We provide detailed digital mood boards and inspiration. For local clients with larger budgets, we can arrange a preview arrangement closer to the wedding date.',
      },
    ],
  },
  'yacht-floristry': {
    name: 'Yacht Floristry',
    slug: 'yacht-floristry',
    tagline: 'Sophisticated floral designs for luxury yacht events',
    description:
      'Elevate your yacht experience with stunning floral designs created specifically for the marine environment. From intimate gatherings to glamorous celebrations aboard superyachts, we bring elegance to the water.',
    services: [
      'Superyacht event styling',
      'Marine-safe arrangements',
      'Welcome and stateroom flowers',
      'Deck and dining area designs',
      'Seasonal and themed decorations',
      'Charter and regatta events',
    ],
    process: [
      {
        title: 'Vessel Assessment',
        description:
          'We review your yacht\'s dimensions, style, and technical requirements to design arrangements that complement the space.',
      },
      {
        title: 'Custom Design',
        description:
          'Our designs account for motion, salt air, and space constraints while maintaining luxury aesthetics.',
      },
      {
        title: 'Delivery & Setup',
        description:
          'We coordinate with your crew for seamless delivery and installation, whether in harbor or at anchor.',
      },
      {
        title: 'Maintenance',
        description:
          'For extended charters, we can arrange regular flower refreshments to keep arrangements pristine.',
      },
    ],
    faqs: [
      {
        question: 'How do yacht flowers differ from land-based arrangements?',
        answer:
          'Yacht arrangements require special considerations: secure vessels to prevent tipping, hardy flowers that withstand salt air and temperature changes, and designs that account for movement.',
      },
      {
        question: 'What is the lead time for yacht floristry?',
        answer:
          'We require at least 2 weeks notice for yacht events, though 4-6 weeks is ideal for larger installations or during peak season.',
      },
      {
        question: 'Can you service yachts in multiple ports?',
        answer:
          'Yes, we can coordinate flower deliveries along the French Riviera as your yacht moves between ports. We work with trusted suppliers for destinations beyond our direct service area.',
      },
    ],
  },
  'corporate-events': {
    name: 'Corporate Events',
    slug: 'corporate-events',
    tagline: 'Professional floristry for business events and conferences',
    description:
      'Make a lasting impression with sophisticated floral designs for corporate gatherings. From product launches to gala dinners, we create arrangements that enhance your brand and elevate your event experience.',
    services: [
      'Conference and seminar florals',
      'Product launch styling',
      'Gala dinners and awards ceremonies',
      'Office and showroom installations',
      'Seasonal and holiday decorations',
      'Brand-aligned color schemes',
    ],
    process: [
      {
        title: 'Brand & Event Briefing',
        description:
          'We understand your brand identity, event objectives, and any specific color or style requirements.',
      },
      {
        title: 'Detailed Proposal',
        description:
          'Receive a comprehensive plan with designs, quantities, installation timeline, and transparent pricing.',
      },
      {
        title: 'Professional Execution',
        description:
          'Our team works efficiently and discreetly, often during off-hours to ensure readiness without disrupting your schedule.',
      },
      {
        title: 'Support & Strike',
        description:
          'We provide on-site support during your event if needed and handle complete breakdown and removal afterward.',
      },
    ],
    faqs: [
      {
        question: 'Can you work within corporate branding guidelines?',
        answer:
          'Absolutely. We excel at translating brand colors, values, and aesthetics into floral designs that enhance your corporate identity.',
      },
      {
        question: 'Do you offer recurring services for offices?',
        answer:
          'Yes, we provide weekly or monthly flower services for corporate offices, lobbies, and showrooms throughout the French Riviera.',
      },
      {
        question: 'What is your capacity for large corporate events?',
        answer:
          'We regularly service events from 50 to 500+ guests and can scale our team and resources for larger conferences or multi-day events.',
      },
    ],
  },
  'private-parties': {
    name: 'Private Parties',
    slug: 'private-parties',
    tagline: 'Bespoke floristry for exclusive celebrations',
    description:
      'Transform your private celebration into an unforgettable experience. From milestone birthdays to anniversary celebrations, we design custom floral arrangements that capture the essence of your special occasion.',
    services: [
      'Birthday and anniversary celebrations',
      'Engagement and bridal shower parties',
      'Holiday entertaining',
      'Garden parties and luncheons',
      'Intimate dinners and gatherings',
      'Themed event styling',
    ],
    process: [
      {
        title: 'Personal Consultation',
        description:
          'We discuss your celebration, personal style, and how flowers can enhance the ambiance of your gathering.',
      },
      {
        title: 'Tailored Design',
        description:
          'Receive a customized proposal that fits your event size, venue, and budget while exceeding your expectations.',
      },
      {
        title: 'Seamless Setup',
        description:
          'We handle delivery and installation at your home, villa, or chosen venue with minimal disruption.',
      },
      {
        title: 'Enjoy Your Party',
        description:
          'With flowers in place, you can focus on hosting while your guests admire the beautiful surroundings.',
      },
    ],
    faqs: [
      {
        question: 'What is the minimum order for private parties?',
        answer:
          'We typically have a minimum of €500-€1,000 for private party florals, though this varies based on location and service requirements.',
      },
      {
        question: 'Can you source specific or rare flowers?',
        answer:
          'Yes, with adequate notice (usually 2-4 weeks), we can source specialty or rare blooms from our network of premium growers.',
      },
      {
        question: 'Do you provide vases and vessels?',
        answer:
          'Yes, our arrangements include appropriate vases and containers. For home parties, we can also provide rental options for larger or specialty vessels.',
      },
    ],
  },
  seasonal: {
    name: 'Seasonal Floristry',
    slug: 'seasonal',
    tagline: 'Celebrate every season with beautiful floral designs',
    description:
      'Embrace the changing seasons with fresh, inspiring floral arrangements. From spring blooms to winter elegance, we create designs that capture the beauty and spirit of each season throughout the year.',
    services: [
      'Spring garden collections',
      'Summer coastal arrangements',
      'Autumn harvest designs',
      'Winter holiday styling',
      'Seasonal home subscriptions',
      'Event seasonal themes',
    ],
    process: [
      {
        title: 'Seasonal Consultation',
        description:
          'We discuss how seasonal flowers can enhance your space or event, highlighting what\'s at its peak.',
      },
      {
        title: 'Nature-Inspired Design',
        description:
          'Our designs showcase the best each season offers, from delicate spring bulbs to rich autumn dahlias.',
      },
      {
        title: 'Fresh Delivery',
        description:
          'Receive the freshest seasonal blooms, sourced from local growers and international markets at their prime.',
      },
      {
        title: 'Seasonal Updates',
        description:
          'For subscriptions, we rotate designs throughout the season to keep your space feeling fresh and current.',
      },
    ],
    faqs: [
      {
        question: 'What are the benefits of seasonal floristry?',
        answer:
          'Seasonal flowers are at their peak quality and abundance, often more affordable, and create a natural connection to the time of year. They\'re also more sustainable.',
      },
      {
        question: 'Can we still have our favorite flowers out of season?',
        answer:
          'Many flowers are available year-round through imports, though they may be more expensive. We can incorporate them alongside seasonal selections.',
      },
      {
        question: 'Do you offer holiday-specific arrangements?',
        answer:
          'Yes, we create custom designs for Christmas, New Year, Easter, and other celebrations throughout the year with seasonal and festive elements.',
      },
    ],
  },
};
