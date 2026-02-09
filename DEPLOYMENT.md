# Deployment Guide

This guide covers deploying the Dandelions & Grace website to Vercel with optional service integrations.

## Prerequisites

- GitHub account
- Vercel account
- Domain name (optional but recommended)

## Basic Deployment (Vercel)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/dandelions-and-grace.git
git push -u origin main
```

### 2. Connect to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js configuration

### 3. Configure Environment Variables

In Vercel project settings → Environment Variables, add:

**Required:**
```
CONTACT_EMAIL=hello@dandelionsandgrace.com
```

### 4. Deploy

Click "Deploy" - your site will be live in ~2 minutes at `your-project.vercel.app`

## Custom Domain

### Setup

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `dandelionsandgrace.com`)
3. Follow Vercel's DNS instructions

### Recommended DNS Records

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

## Email Integration (Resend)

### Why Resend?
- 3,000 emails/month free tier
- Excellent deliverability
- Simple API
- Next.js optimized

### Setup

1. **Create Resend Account**
   - Visit [resend.com](https://resend.com)
   - Verify your domain

2. **Get API Key**
   - Dashboard → API Keys → Create
   - Copy the key starting with `re_...`

3. **Add to Vercel**
   ```
   RESEND_API_KEY=re_...
   ```

4. **Update Contact Action**
   
   Edit `lib/actions/contact.ts`:
   ```typescript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   // Inside submitContactForm:
   await resend.emails.send({
     from: 'contact@dandelionsandgrace.com',
     to: process.env.CONTACT_EMAIL!,
     subject: `New Enquiry from ${validatedData.name}`,
     html: `
       <h2>New Wedding Enquiry</h2>
       <p><strong>Name:</strong> ${validatedData.name}</p>
       <p><strong>Email:</strong> ${validatedData.email}</p>
       <p><strong>Phone:</strong> ${validatedData.phone}</p>
       <p><strong>Event Type:</strong> ${validatedData.eventType}</p>
       <p><strong>Event Date:</strong> ${validatedData.eventDate}</p>
       <p><strong>Location:</strong> ${validatedData.location}</p>
       <p><strong>Guest Count:</strong> ${validatedData.guestCount}</p>
       <p><strong>Budget:</strong> ${validatedData.budget}</p>
       <p><strong>Style:</strong> ${validatedData.style}</p>
       <p><strong>Message:</strong> ${validatedData.message}</p>
       ${validatedData.inspiration ? `<p><strong>Inspiration:</strong> ${validatedData.inspiration}</p>` : ''}
     `,
   });
   ```

5. **Install Package**
   ```bash
   npm install resend
   ```

## Spam Protection (Cloudflare Turnstile)

### Why Turnstile?
- Free forever
- Privacy-first (no data tracking)
- Better UX than reCAPTCHA
- Invisible challenge for most users

### Setup

1. **Create Turnstile Site**
   - Visit [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Turnstile → Create Site
   - Domain: `dandelionsandgrace.com`
   - Widget Mode: Invisible

2. **Get Keys**
   - Site Key (public)
   - Secret Key (private)

3. **Add to Vercel**
   ```
   NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAA...
   TURNSTILE_SECRET_KEY=0x4BBB...
   ```

4. **Update Form Component**
   
   Install Turnstile React:
   ```bash
   npm install @marsidev/react-turnstile
   ```
   
   In `components/forms/EnquiryForm.tsx`:
   ```typescript
   import Turnstile from '@marsidev/react-turnstile';
   
   // Add state:
   const [turnstileToken, setTurnstileToken] = useState('');
   
   // Add before submit button:
   <Turnstile
     siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
     onSuccess={setTurnstileToken}
   />
   ```

## Database Storage (Supabase)

### Why Supabase?
- 500MB database free tier
- PostgreSQL-based
- Real-time capabilities
- Easy API

### Setup

1. **Create Project**
   - Visit [supabase.com](https://supabase.com)
   - New Project → Choose region (Europe West for French Riviera)

2. **Create Table**
   ```sql
   create table enquiries (
     id uuid default gen_random_uuid() primary key,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null,
     name text not null,
     email text not null,
     phone text not null,
     event_type text not null,
     event_date date not null,
     location text not null,
     guest_count integer,
     style text,
     budget text,
     inspiration text,
     message text not null,
     status text default 'new'
   );
   ```

3. **Get Credentials**
   - Settings → API
   - Copy URL and anon key

4. **Add to Vercel**
   ```
   SUPABASE_URL=https://xxx.supabase.co
   SUPABASE_ANON_KEY=eyJ...
   ```

5. **Update Contact Action**
   ```bash
   npm install @supabase/supabase-js
   ```
   
   ```typescript
   import { createClient } from '@supabase/supabase-js';
   
   const supabase = createClient(
     process.env.SUPABASE_URL!,
     process.env.SUPABASE_ANON_KEY!
   );
   
   // Inside submitContactForm:
   await supabase.from('enquiries').insert({
     name: validatedData.name,
     email: validatedData.email,
     phone: validatedData.phone,
     event_type: validatedData.eventType,
     event_date: validatedData.eventDate,
     location: validatedData.location,
     guest_count: parseInt(validatedData.guestCount),
     style: validatedData.style,
     budget: validatedData.budget,
     inspiration: validatedData.inspiration,
     message: validatedData.message,
   });
   ```

## Sanity CMS (Optional)

### Setup

1. **Create Sanity Project**
   ```bash
   npm create sanity@latest
   ```
   
   Follow prompts to create project

2. **Deploy Studio**
   ```bash
   cd sanity-studio
   npm run deploy
   ```

3. **Add Schemas**
   - Copy schemas from `lib/sanity/schemas/*.example.js`
   - Add to Sanity Studio configuration

4. **Configure Client**
   Add to Vercel:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=sk...
   ```

## Slack Notifications (Optional)

1. **Create Webhook**
   - Slack App → Incoming Webhooks
   - Add to workspace
   - Copy webhook URL

2. **Add to Vercel**
   ```
   SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
   ```

3. **Update Contact Action**
   ```typescript
   if (process.env.SLACK_WEBHOOK_URL) {
     await fetch(process.env.SLACK_WEBHOOK_URL, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
         text: `🌸 New Wedding Enquiry`,
         blocks: [
           {
             type: 'section',
             text: {
               type: 'mrkdwn',
               text: `*${validatedData.name}* submitted an enquiry for a ${validatedData.eventType} in ${validatedData.location}`,
             },
           },
           {
             type: 'section',
             fields: [
               { type: 'mrkdwn', text: `*Email:*\n${validatedData.email}` },
               { type: 'mrkdwn', text: `*Phone:*\n${validatedData.phone}` },
               { type: 'mrkdwn', text: `*Date:*\n${validatedData.eventDate}` },
               { type: 'mrkdwn', text: `*Budget:*\n${validatedData.budget}` },
             ],
           },
         ],
       }),
     });
   }
   ```

## Performance Optimization

### Image Optimization

1. **Use Next.js Image Component**
   ```typescript
   import Image from 'next/image';
   
   <Image
     src="/images/hero.jpg"
     alt="Wedding flowers"
     width={1920}
     height={1080}
     priority
   />
   ```

2. **Compress Images**
   - Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
   - Target: < 200KB per image

### Caching

Already configured in `vercel.json`:
- Static assets: 1 year
- API routes: No cache
- Pages: Static generation

## Monitoring

### Vercel Analytics

1. Project Settings → Analytics
2. Enable Web Analytics (free)
3. View in real-time dashboard

### Error Tracking (Optional)

Consider:
- [Sentry](https://sentry.io) - Error tracking
- [LogRocket](https://logrocket.com) - Session replay
- [PostHog](https://posthog.com) - Product analytics

## Post-Deployment Checklist

- [ ] Custom domain configured
- [ ] SSL certificate active (automatic via Vercel)
- [ ] Contact form tested
- [ ] Email notifications working
- [ ] All environment variables set
- [ ] Google Search Console verified
- [ ] Google Analytics configured (if desired)
- [ ] Social media meta tags verified
- [ ] Mobile responsiveness checked
- [ ] Core Web Vitals passing

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Form Not Submitting
1. Check browser console for errors
2. Verify `CONTACT_EMAIL` is set
3. Check Vercel function logs

### Images Not Loading
1. Verify image paths
2. Check `next.config.ts` remote patterns
3. Ensure Sanity domain is whitelisted

## Support

For deployment issues:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Discord](https://discord.gg/vercel)

---

Your site is production-ready! 🚀
