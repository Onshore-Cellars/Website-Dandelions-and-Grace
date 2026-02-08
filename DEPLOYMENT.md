# Deployment Guide for Vercel

## Quick Deploy

Click the button below to deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Onshore-Cellars/Website-Dandelions-and-Grace)

## Manual Deployment Steps

### 1. Prerequisites
- Vercel account (sign up at [vercel.com](https://vercel.com))
- GitHub repository pushed
- Environment variables ready (see `.env.local.example`)

### 2. Import Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings

### 3. Configure Environment Variables

In the Vercel project settings, add these environment variables:

**Required:**
- `CONTACT_EMAIL` - Your business email address

**Optional (but recommended):**
- `RESEND_API_KEY` - For email functionality
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - Spam protection
- `TURNSTILE_SECRET_KEY` - Spam protection
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - If using Sanity CMS
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset name
- `SANITY_API_TOKEN` - Sanity write token

**Optional (advanced):**
- `NEXT_PUBLIC_SUPABASE_URL` - For lead storage
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase access
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase admin access
- `SLACK_WEBHOOK_URL` - For Slack notifications
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` - Analytics domain

### 4. Deploy

1. Click "Deploy"
2. Wait for build to complete (2-3 minutes)
3. Your site will be live at `https://your-project.vercel.app`

### 5. Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain: `dandelionsandgrace.fr`
3. Follow DNS configuration instructions
4. Add these DNS records:
   ```
   A Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```

### 6. Enable Analytics

**Option 1: Vercel Analytics (Recommended)**
1. Go to Project Settings → Analytics
2. Enable "Web Analytics"
3. Enable "Speed Insights"

**Option 2: Plausible Analytics**
1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain
3. Add Plausible script to `app/layout.tsx`:
```tsx
<Script
  defer
  data-domain="dandelionsandgrace.fr"
  src="https://plausible.io/js/script.js"
/>
```

### 7. Set Up Email Service (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain
3. Get API key
4. Add `RESEND_API_KEY` to Vercel environment variables
5. Update `app/api/contact/route.ts` to use Resend:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'noreply@dandelionsandgrace.fr',
  to: process.env.CONTACT_EMAIL,
  subject: `New ${data.enquiryType} Enquiry`,
  html: emailData.html,
});
```

### 8. Optional: Set Up Spam Protection

1. Go to [Cloudflare Turnstile](https://dash.cloudflare.com)
2. Create a new site
3. Get Site Key and Secret Key
4. Add to Vercel environment variables
5. Add Turnstile widget to form (see docs)

### 9. Optional: Set Up Lead Storage

**Using Supabase:**
1. Create project at [supabase.com](https://supabase.com)
2. Create `enquiries` table:
```sql
CREATE TABLE enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP DEFAULT NOW(),
  name TEXT,
  email TEXT,
  phone TEXT,
  enquiry_type TEXT,
  event_date DATE,
  location TEXT,
  message TEXT,
  budget TEXT,
  style TEXT
);
```
3. Get API credentials
4. Add to Vercel environment variables

### 10. Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Forms submit successfully
- [ ] Email notifications working
- [ ] Custom domain configured
- [ ] SSL certificate active (automatic)
- [ ] Analytics tracking
- [ ] Mobile responsive
- [ ] Core Web Vitals passing (check Vercel Analytics)
- [ ] SEO metadata correct (check view-source)
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`

### 11. Monitoring

**Vercel Dashboard:**
- Monitor deployments
- Check analytics
- View function logs
- Monitor performance

**Useful Commands:**
```bash
# Deploy from CLI
vercel

# Deploy to production
vercel --prod

# View logs
vercel logs

# Check environment variables
vercel env ls
```

### 12. Continuous Deployment

Vercel automatically deploys when you push to GitHub:
- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment
- Pull requests → Automatic preview URLs

### Troubleshooting

**Build fails:**
- Check build logs in Vercel dashboard
- Verify all required dependencies are in `package.json`
- Check for TypeScript errors locally: `npm run build`

**Forms not working:**
- Verify `CONTACT_EMAIL` is set
- Check function logs for errors
- Test locally first: `npm run dev`

**Images not loading:**
- Check image paths are correct
- Verify images exist in `public/` directory
- Check Next.js image configuration

## Support

For issues specific to this deployment, contact: info@dandelionsandgrace.fr

For Vercel support: https://vercel.com/support
