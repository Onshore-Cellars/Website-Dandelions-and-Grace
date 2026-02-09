import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations/contact';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // Check honeypot
    if (validatedData.honeypot) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    // Rate limiting check (simplified)
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Log the submission (replace with actual email/database integration)
    console.log('API Contact submission:', {
      ...validatedData,
      ip,
      timestamp: new Date().toISOString(),
    });

    // Here you would integrate with your preferred service:
    // - Resend for emails
    // - Supabase for database storage
    // - Slack for notifications

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
