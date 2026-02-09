# Quick Start Guide

Get the Dandelions & Grace website running locally in 5 minutes.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Code editor (VS Code recommended)

## Setup Steps

### 1. Clone & Install (1 minute)

```bash
# If you haven't cloned yet
git clone https://github.com/your-username/dandelions-and-grace.git
cd dandelions-and-grace

# Install dependencies
npm install
```

### 2. Environment Setup (1 minute)

```bash
# Copy example environment file
cp .env.local.example .env.local
```

Edit `.env.local` and set your contact email:
```env
CONTACT_EMAIL=your-email@example.com
```

**That's the only required variable!** All other services are optional.

### 3. Run Development Server (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Verify It Works (2 minutes)

**Test the site:**
1. ✅ Homepage loads
2. ✅ Navigate to Services → Weddings
3. ✅ Navigate to Locations → Cannes
4. ✅ Navigate to Contact page
5. ✅ Fill out the enquiry form (check console for submission)

**Expected behavior:**
- All pages load instantly (static generation)
- Forms validate in real-time
- Console shows form submissions (since email isn't configured yet)

## What You Have

### 26 Pages Ready
- 1 homepage
- 5 service pages (weddings, yacht, corporate, private parties, seasonal)
- 6 location pages (Cannes, Monaco, Antibes, Nice, Saint-Tropez, Mougins)
- 3 event pages (Film Festival, Grand Prix, Summer Season)
- 7 core pages (about, contact, portfolio, journal, privacy, cookies)
- 2 SEO pages (sitemap.xml, robots.txt)
- 1 API route (/api/contact)

### Working Features
- ✅ Multi-step enquiry form with validation
- ✅ Spam protection (honeypot + rate limiting)
- ✅ SEO optimization (metadata, sitemap, structured data)
- ✅ Mobile responsive design
- ✅ Accessibility-compliant
- ✅ Fast page loads (static generation)

### Not Yet Configured (Optional)
- ❌ Email sending (needs Resend API key)
- ❌ Database storage (needs Supabase)
- ❌ CMS (needs Sanity setup)
- ❌ Advanced spam protection (needs Turnstile)
- ❌ Slack notifications (needs webhook)

## Next Steps

### For Local Development
You're ready to go! Make changes and see them live.

### For Production
See [DEPLOYMENT.md](./DEPLOYMENT.md) for:
- Deploying to Vercel
- Setting up email (Resend)
- Configuring custom domain
- Optional service integrations

## Common Tasks

### Add Content

**Edit location data:**
```typescript
// lib/data/locations.ts
export const locations = {
  cannes: {
    name: 'Cannes',
    description: 'Your custom description...',
    // ... update other fields
  }
}
```

**Edit service data:**
```typescript
// lib/data/services.ts
export const services = {
  weddings: {
    name: 'Wedding Floristry',
    description: 'Your custom description...',
    // ... update other fields
  }
}
```

### Customize Styling

**Colors:**
```css
/* app/globals.css */
/* Update the stone color palette or add new colors */
```

**Fonts:**
```typescript
// app/layout.tsx
// Change Cormorant_Garamond or Inter to your preferred fonts
```

### Test Contact Form

**Option 1: Check console**
- Fill out form
- Submit
- Open browser DevTools → Console
- See submission data logged

**Option 2: Set up email**
- Get Resend API key (free tier available)
- Add to `.env.local`: `RESEND_API_KEY=re_...`
- Install Resend: `npm install resend`
- Follow integration in [DEPLOYMENT.md](./DEPLOYMENT.md)

## Project Structure Quick Reference

```
app/                    # All pages
├── locations/         # City pages
├── services/          # Service pages
├── events/            # Event pages
└── page.tsx           # Homepage

components/
├── forms/             # Enquiry form
├── layout/            # Header & Footer
└── ui/                # Reusable components

lib/
├── actions/           # Server actions
├── data/              # Content data
├── validations/       # Zod schemas
└── sanity/            # CMS integration
```

## Development Commands

```bash
npm run dev         # Start dev server (localhost:3000)
npm run build       # Build for production
npm run start       # Run production build locally
npm run lint        # Check code quality
```

## Troubleshooting

### Port 3000 Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Build Errors After Package Update
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### TypeScript Errors
```bash
# Restart TypeScript server in VS Code
# Command Palette (Cmd/Ctrl + Shift + P)
# TypeScript: Restart TS Server
```

### Form Validation Not Working
- Ensure Zod is installed: `npm install zod`
- Check browser console for errors
- Verify schema in `lib/validations/contact.ts`

## Tips

**VS Code Extensions:**
- ESLint - Code linting
- Prettier - Code formatting
- Tailwind CSS IntelliSense - Auto-complete
- TypeScript Vue Plugin - Better TS support

**Keyboard Shortcuts:**
- `Ctrl/Cmd + C` - Stop dev server
- `Ctrl/Cmd + Shift + R` - Hard refresh browser
- `Ctrl/Cmd + K + S` - Save all files

## Getting Help

1. **Check documentation:**
   - [README.md](./README.md) - Overview
   - [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
   - [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - Feature inventory

2. **Common resources:**
   - [Next.js Docs](https://nextjs.org/docs)
   - [TailwindCSS Docs](https://tailwindcss.com/docs)
   - [TypeScript Docs](https://www.typescriptlang.org/docs)

3. **Debugging:**
   - Check browser console (F12)
   - Check terminal output
   - Check Network tab for API calls

---

You're all set! Happy coding! 🚀
