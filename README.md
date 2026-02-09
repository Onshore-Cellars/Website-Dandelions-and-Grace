# Dandelions & Grace

Premium luxury florist website targeting destination weddings and high-end events on the French Riviera. Built with Next.js 15, TypeScript, and Tailwind CSS 4.

💐 **Reference site:** https://www.dandelionsandgrace.fr/

## 🌟 Features

### Multi-Step Conversion Funnel
- **4-step enquiry wizard**: Contact → Event Details → Style/Budget → Confirmation
- Zod validation with React Hook Form
- Built-in spam protection (honeypot + IP-based rate limiting)
- Server-side form handling with extensibility for email services

### Local SEO Strategy
- **6 location-specific pages**: Cannes, Monaco, Antibes, Nice, Saint-Tropez, Mougins
- LocalBusiness Schema.org structured data with geo-coordinates
- Location-specific FAQs and service descriptions
- Dynamic sitemap generation

### Event-Specific Landing Pages
- Cannes Film Festival
- Monaco Grand Prix
- Summer Season
- Seasonal traffic capture strategy

### Service Pages
- Weddings
- Yacht Floristry
- Corporate Events
- Private Parties
- Seasonal Floristry

### Technical Implementation
- **26 statically pre-rendered pages** (~4s build time)
- Server actions with rate limiting (5 requests/hour)
- Zero external runtime dependencies for core functionality
- Full TypeScript coverage with Zod schemas
- Mobile-first responsive design
- Sanity CMS integration (ready to connect)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── api/contact/         # Contact form API endpoint
│   ├── events/              # Event-specific pages (3)
│   ├── locations/           # Location pages (6)
│   ├── services/            # Service pages (5)
│   ├── layout.tsx           # Root layout with fonts & metadata
│   ├── page.tsx             # Homepage
│   ├── about/                  # About page
│   ├── contact/                # Contact page with enquiry form
│   ├── portfolio/              # Portfolio gallery
│   ├── journal/                # Blog/journal
│   ├── locations/              # 6 location pages
│   │   ├── cannes/
│   │   ├── monaco/
│   │   ├── antibes/
│   │   ├── nice/
│   │   ├── saint-tropez/
│   │   └── mougins/
│   ├── services/               # 5 service pages
│   │   ├── weddings/
│   │   ├── yacht-floristry/
│   │   ├── corporate-events/
│   │   ├── private-parties/
│   │   └── seasonal/
│   ├── events/                 # 3 event pages
│   │   ├── cannes-film-festival/
│   │   ├── monaco-grand-prix/
│   │   └── summer-season/
│   ├── privacy/                # Privacy policy
│   ├── cookies/                # Cookie policy
│   ├── api/
│   │   └── contact/           # Contact form API route
│   ├── sitemap.ts             # Dynamic sitemap
│   └── robots.ts              # Robots.txt
├── components/
│   ├── forms/
│   │   └── EnquiryForm.tsx    # Multi-step form wizard
│   ├── layout/
│   │   ├── Header.tsx         # Site header
│   │   └── Footer.tsx         # Site footer
│   ├── locations/
│   │   └── LocationPage.tsx   # Reusable location page component
│   ├── services/
│   │   └── ServicePage.tsx    # Reusable service page component
│   └── ui/                     # Reusable UI components
│       ├── Hero.tsx
│       ├── Button.tsx
│       ├── Container.tsx
│       └── Section.tsx
├── lib/
│   ├── actions/
│   │   └── contact.ts         # Server action for form submission
│   ├── validations/
│   │   └── contact.ts         # Zod schemas
│   ├── data/
│   │   ├── locations.ts       # Location data
│   │   └── services.ts        # Service data
│   └── sanity/                # Sanity CMS integration
│       ├── client.ts
│       ├── image.ts
│       └── schemas/
└── scripts/
    └── migrate-content.js     # Content migration tool
```

## 🚀 Quick Start

See [QUICKSTART.md](./QUICKSTART.md) for a 5-minute setup guide.

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.local.example .env.local

# 3. Update CONTACT_EMAIL in .env.local

# 4. Run development server
npm run dev

# Open http://localhost:3000
```

## 🎨 Design System

### Typography
- **Display**: Cormorant Garamond (serif)
- **Body**: Inter (sans-serif)
- Loaded via Google Fonts with display swap optimization

### Colors
- **Primary**: Stone palette (Stone 50-900)
- Tailored neutral palette for luxury aesthetic

### Components
All UI components support variants and are fully typed:
- `Button` - primary, secondary, ghost
- `Hero` - default, small
- `Section` - background variants (default, white, stone)
- `Container` - responsive max-width wrapper

## 🔐 Environment Variables

### Required
```env
CONTACT_EMAIL=your-email@example.com
```

### Optional Services
```env
# Email (Resend)
RESEND_API_KEY=re_...

# Spam Protection (Cloudflare Turnstile)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=...
TURNSTILE_SECRET_KEY=...

# CMS (Sanity)
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk...

# Database (Supabase)
SUPABASE_URL=https://....supabase.co
SUPABASE_ANON_KEY=eyJ...

# Notifications (Slack)
SLACK_WEBHOOK_URL=https://hooks.slack.com/...
```

## 📦 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🧪 Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Run content migration
npm run migrate
```

## 📊 SEO Features

- Dynamic sitemap with all 26 pages
- Robots.txt configuration
- Metadata API with title templates
- OpenGraph and Twitter Card tags
- LocalBusiness structured data on location pages
- Mobile-first responsive design
- Semantic HTML structure

## 📄 License

This project is proprietary and confidential.

---

Built with Next.js, TypeScript, and Tailwind CSS
