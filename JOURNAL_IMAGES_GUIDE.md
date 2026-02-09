# Journal & Blog Images Guide

## Overview

Your journal now features **17 real wedding posts** from your existing website, plus a luxury-inspired design with:
- Elegant grid layout (3 columns on desktop)
- Category filters (Real Weddings, Venues, Tips & Advice)
- Individual blog post pages with image galleries
- Refined typography inspired by Iris & Fig, The Farmer Florist, and Greg Finck

## Adding Images from Google Drive

Your images are in: [Google Drive Folder](https://drive.google.com/drive/folders/19LIQam_Y8UCEY5P2iQXr3SzIA3jEGEh5?usp=sharing)

### Option 1: Public Folder (Quickest for Development)

1. Download images from your Google Drive
2. Place them in `/public/images/blog/`
3. Name them to match the slugs:
   - `summer-wedding-provencal-bastide.jpg`
   - `timeless-wedding-south-france.jpg`
   - `chateau-de-tourreau.jpg`
   - etc.

### Option 2: Next.js Image Optimization

For best performance, use Next.js Image Optimization:

```jsx
import Image from 'next/image';

<Image 
  src="/images/blog/summer-wedding-provencal-bastide.jpg"
  alt="Summer Wedding in Provencal Bastide"
  width={1200}
  height={1500}
  className="w-full h-full object-cover"
/>
```

### Option 3: Sanity CMS (Production Ready)

For the full CMS experience:

1. Set up Sanity Studio (instructions in DEPLOYMENT.md)
2. Upload images through Sanity dashboard
3. Images are automatically optimized and served via Sanity's CDN

## Blog Post Image Requirements

Each blog post needs:
- **Featured Image**: 4:5 ratio (recommended 1200x1500px)
- **Gallery Images**: 6-12 images per wedding, 4:5 ratio
- **Format**: JPEG or WebP
- **Optimization**: Keep under 500KB per image

## Current Blog Posts

1. Capturing the magic of a summer wedding in a Provencal bastide
2. A timeless Wedding in the south of France (Mougins - Manoir de l'Etang)
3. Intimate wedding in stunning Chateau de Tourreau
4. Romantic elopement in a beautiful Provençal chapel
5. Beautiful wild flower wedding in Provence Farm (Grasse)
6. All things bright and beautiful
7. Autumnal Wedding at Chateau Robernier
8. Chic bastide wedding near Aix en Provence
9. Stunning chateau wedding in Provence
10. Intimate elopement above the perfume fields of Grasse
11. Relaxed Provence wedding in the beautiful Luberon (Bonnieux)
12. A Spectacular Monaco Elopement (Featured on Wedding Sparrow)
13. Top Tips to keep your flowers in tip top condition (Yacht flowers)
14. Alex and Lucy's bold and bright Festival wedding
15. Romantic Summer wedding in Grasse

## Design Improvements

### Inspired by Your Reference Sites

**From Iris & Fig:**
- Clean, unfussy grid layout
- Minimal category filters
- Elegant typography with Cormorant Garamond

**From The Farmer Florist:**
- Generous white space
- Large, impactful imagery (4:5 aspect ratio)
- Focus on "Real Weddings" storytelling

**From Greg Finck:**
- Immediate luxury feel with refined fonts
- Subtle hover animations
- Sophisticated color palette (stone tones)

### Key Design Features

1. **Typography**: 
   - Headings: Cormorant Garamond (light weight, elegant serifs)
   - Body: Inter (clean, readable sans-serif)
   - Font size: 17px body text for luxury readability

2. **Layout**:
   - 3-column grid on desktop, 2 on tablet, 1 on mobile
   - 4:5 aspect ratio images (portrait orientation shows more detail)
   - Generous padding and hover effects

3. **Colors**:
   - Background: Stone 50 (warm off-white)
   - Text: Stone 800/900 (charcoal, not pure black)
   - Accents: Stone 600 for subtle hierarchy

4. **Animations**:
   - Subtle hover lift
   - Smooth color transitions
   - Arrow translation on "Read More"

## Next Steps

1. **Add Images**: Download from Google Drive and place in `/public/images/blog/`
2. **Test Locally**: Run `npm run dev` to see your journal
3. **Review Content**: Each post has placeholder content that you can expand
4. **Add More Posts**: Copy the pattern in `/app/journal/[slug]/page.tsx`
5. **Deploy**: Push to GitHub and deploy to Vercel

## File Locations

- **Journal Index**: `/app/journal/page.tsx`
- **Individual Posts**: `/app/journal/[slug]/page.tsx`
- **Styles**: `/app/globals.css`
- **Components**: `/components/ui/`

## Quick Test

```bash
cd /workspaces/Website-Dandelions-and-Grace
npm run dev
# Visit http://localhost:3000/journal
```

Your journal is now live and ready for images!
