'use server';

import { ContactFormData, contactFormSchema } from '@/lib/validations/contact';
import { headers } from 'next/headers';

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return true;
  }

  if (limit.count >= 5) {
    return false;
  }

  limit.count += 1;
  return true;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate data
    const validatedData = contactFormSchema.parse(data);

    // Check honeypot
    if (validatedData.honeypot) {
      return { success: false, error: 'Invalid submission' };
    }

    // Rate limiting
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown';

    if (!checkRateLimit(ip)) {
      return { success: false, error: 'Rate limit exceeded. Please try again later.' };
    }

    // Here you would integrate with your email service
    // For now, we'll just log the submission
    console.log('Contact form submission:', {
      ...validatedData,
      ip,
      timestamp: new Date().toISOString(),
    });

    // Extensibility points:
    // 1. Send email via Resend
    // if (process.env.RESEND_API_KEY) {
    //   await resend.emails.send({
    //     from: 'contact@dandelionsandgrace.com',
    //     to: process.env.CONTACT_EMAIL!,
    //     subject: `New Enquiry from ${validatedData.name}`,
    //     html: generateEmailHtml(validatedData),
    //   });
    // }

    // 2. Save to Supabase
    // if (process.env.SUPABASE_URL) {
    //   await supabase.from('enquiries').insert({
    //     ...validatedData,
    //     created_at: new Date().toISOString(),
    //   });
    // }

    // 3. Send Slack notification
    // if (process.env.SLACK_WEBHOOK_URL) {
    //   await fetch(process.env.SLACK_WEBHOOK_URL, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       text: `New enquiry from ${validatedData.name} for ${validatedData.eventType}`,
    //     }),
    //   });
    // }

    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, error: 'Failed to submit form' };
  }
}
