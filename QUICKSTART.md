# Quick Start Guide

Get the Dandelions & Grace website running locally in 5 minutes.

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- Git

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/Onshore-Cellars/Website-Dandelions-and-Grace.git
cd Website-Dandelions-and-Grace

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.local.example .env.local

# 4. Edit .env.local and add at minimum:
#    CONTACT_EMAIL=your-email@example.com

# 5. Start development server
npm run dev

# 6. Open browser
# Visit http://localhost:3000
```

## Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Content Migration
node scripts/migrate-content.js    # Scrape old site content
```

## Project Structure

```
├── app/                    # Next.js pages (App Router)
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Service pages
│   ├── portfolio/         # Portfolio
│   ├── journal/           # Blog
│   ├── contact/           # Contact form
│   ├── locations/         # SEO location pages
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # UI primitives
│   ├── sections/         # Page sections
│   └── forms/            # Form components
├── lib/                  # Utilities
│   ├── sanity/          # CMS config
│   └── utils.ts         # Helper functions
├── public/              # Static files
└── sanity/              # CMS schemas
```

## Key Files

- `app/layout.tsx` - Root layout with nav/footer
- `app/page.tsx` - Homepage
- `components/forms/EnquiryForm.tsx` - Multi-step form
- `app/api/contact/route.ts` - Form submission API
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Styling configuration

## Making Changes

### Add a New Page
```bash
# Create a new directory and page.tsx
mkdir -p app/new-page
touch app/new-page/page.tsx
```

### Modify Styling
- Edit `app/globals.css` for global styles
- Use Tailwind classes in components
- Custom colors defined in `:root` CSS variables

### Update Navigation
- Edit `components/sections/Navigation.tsx`
- Add new menu items to `navigation` array

### Modify Forms
- Edit `components/forms/EnquiryForm.tsx`
- Update validation in `enquirySchema`
- Modify API route in `app/api/contact/route.ts`

## Testing Locally

```bash
# Test production build
npm run build
npm run start

# Check for TypeScript errors
npx tsc --noEmit

# Run linter
npm run lint
```

## Deployment

See **DEPLOYMENT.md** for complete instructions, or quick deploy:

```bash
# Push to GitHub
git push

# Deploy to Vercel
npx vercel

# Deploy to production
npx vercel --prod
```

## Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use a different port
PORT=3001 npm run dev
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Module not found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Need Help?

- **Setup**: See README.md
- **Deployment**: See DEPLOYMENT.md
- **Overview**: See PROJECT_SUMMARY.md
- **Code**: Check inline comments

## Environment Variables

Required for full functionality:

```bash
# Minimum (for local dev)
CONTACT_EMAIL=info@dandelionsandgrace.fr

# Recommended (for production)
RESEND_API_KEY=your-api-key
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-site-key
TURNSTILE_SECRET_KEY=your-secret-key

# Optional
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-token
```

See `.env.local.example` for complete list.

## Tips

- Use `npm run build` before deploying to catch errors
- Test the contact form locally before deploying
- Check mobile responsiveness at different breakpoints
- Optimize images before adding to `public/images/`
- Keep `node_modules/` and `.next/` in `.gitignore`

---

**Happy coding!** 🚀
