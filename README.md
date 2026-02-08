# Dandelions & Grace - Luxury Floral Design Website

A modern, SEO-optimized website for Dandelions & Grace, a luxury floral design studio serving the South of France.

## 🌟 Features

- **Next.js 16** with App Router and TypeScript
- **Tailwind CSS 4** for styling with custom luxury design system
- **SEO-first architecture**: Server components, metadata, sitemap, robots.txt
- **Multi-step enquiry form** with validation and spam protection
- **Responsive design** optimized for all devices
- **Image optimization** with next/image
- **Structured data** (Schema.org) for local SEO
- **Location-specific pages** for Cannes, Monaco, Nice, Antibes, etc.
- **Service pages** for weddings, yachts, corporate events
- **Portfolio** and **Journal** sections
- **GDPR-compliant** privacy and cookie policies

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Onshore-Cellars/Website-Dandelions-and-Grace.git
cd Website-Dandelions-and-Grace
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

4. Configure environment variables (see Environment Variables section below)

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── contact/                  # Contact page with enquiry form
│   ├── services/                 # Service pages
│   │   ├── weddings/
│   │   ├── yacht-floristry/
│   │   ├── corporate-events/
│   │   └── ...
│   ├── portfolio/                # Portfolio gallery
│   ├── journal/                  # Blog/journal
│   ├── locations/                # Location-specific SEO pages
│   │   ├── cannes/
│   │   ├── monaco/
│   │   └── ...
│   ├── api/                      # API routes
│   │   └── contact/              # Form submission endpoint
│   ├── layout.tsx                # Root layout with navigation/footer
│   ├── page.tsx                  # Homepage
│   ├── sitemap.ts                # Dynamic sitemap
│   └── robots.ts                 # Robots.txt configuration
├── components/                   # Reusable React components
│   ├── ui/                       # UI primitives (Button, Container, etc.)
│   ├── sections/                 # Section components (Hero, Footer, etc.)
│   └── forms/                    # Form components
├── lib/                          # Utility functions and configs
│   ├── sanity/                   # Sanity CMS client
│   └── utils.ts                  # Helper functions
├── public/                       # Static assets
│   └── images/
└── tailwind.config.ts            # Tailwind configuration
```

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token

# Email Service (Resend recommended)
RESEND_API_KEY=your-resend-api-key
CONTACT_EMAIL=info@dandelionsandgrace.fr

# Spam Protection (Cloudflare Turnstile)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-site-key
TURNSTILE_SECRET_KEY=your-secret-key

# Optional: Supabase for lead storage
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Optional: Slack notifications
SLACK_WEBHOOK_URL=your-slack-webhook-url

# Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=dandelionsandgrace.fr
```

## 📝 Content Management

### Option 1: Sanity CMS (Recommended)

1. Create a Sanity project at [sanity.io](https://www.sanity.io/)
2. Configure schemas in `sanity/schemas/`
3. Add environment variables for Sanity
4. Run `npm run sanity` to manage content

### Option 2: MDX + Git-based

Content can be managed directly in MDX files if CMS is not desired.

## 🎨 Customization

### Colors & Branding

Edit `app/globals.css` to customize the color palette:

```css
:root {
  --background: #fafaf9;
  --foreground: #1c1917;
  --primary: #78716c;
  --accent: #d6d3d1;
}
```

### Typography

Fonts are loaded via Google Fonts in `app/layout.tsx`. Current fonts:
- Display: Cormorant Garamond
- Body: Inter

## 📧 Form Submission

The contact form (`components/forms/EnquiryForm.tsx`) includes:

- Multi-step validation
- Honeypot spam protection
- Rate limiting
- Email notifications (requires Resend API key)
- Optional database storage (Supabase)
- Optional Slack notifications

To enable email sending, add Resend integration in `app/api/contact/route.ts`.

## 🔍 SEO Features

### Metadata

Each page includes comprehensive metadata:
- Title and description
- OpenGraph tags
- Twitter cards
- Keywords

### Structured Data

Location pages include LocalBusiness schema markup for better local SEO.

### Sitemap & Robots.txt

Automatically generated at:
- `/sitemap.xml`
- `/robots.txt`

## 🚢 Deployment on Vercel

1. Push code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Add environment variables in Vercel project settings
4. Deploy!

### Build Command
```bash
npm run build
```

### Output Directory
```
.next
```

### Environment Variables
Add all variables from `.env.local` to Vercel environment settings.

## 📊 Analytics

The site supports:
- **Plausible Analytics** (privacy-friendly, no cookies)
- **Vercel Analytics**

Configure in Vercel dashboard or add Plausible script to layout.

## 🧪 Testing

```bash
# Run linter
npm run lint

# Type checking
npx tsc --noEmit

# Build test
npm run build
```

## 🛠 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Color contrast compliance

## 🔒 Security

- HTTPS only
- CSRF protection
- Rate limiting on forms
- Honeypot fields
- Input validation
- Sanitized user input

## 📄 License

Proprietary - All rights reserved by Dandelions & Grace

## 🤝 Support

For questions or issues, contact: info@dandelionsandgrace.fr

## 🗺 Roadmap

- [ ] Sanity CMS integration
- [ ] Image gallery lightbox
- [ ] Blog post templates
- [ ] Newsletter signup
- [ ] Multi-language support (French)
- [ ] Advanced filtering for portfolio
- [ ] Client testimonials section
- [ ] Instagram feed integration

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
