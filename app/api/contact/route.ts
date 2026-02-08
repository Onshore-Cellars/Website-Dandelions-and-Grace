import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  whatsapp: z.string().optional(),
  enquiryType: z.enum(["wedding", "yacht", "corporate", "private", "other"]),
  eventDate: z.string(),
  location: z.string(),
  venue: z.string().optional(),
  guestCount: z.string().optional(),
  budget: z.string().optional(),
  style: z.string().optional(),
  colorPalette: z.string().optional(),
  inspirationLinks: z.string().optional(),
  hearAboutUs: z.string().optional(),
  message: z.string().min(10),
  consent: z.boolean().refine((val) => val === true),
  _honeypot: z.string().optional(),
});

// Simple rate limiting (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimit.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + 60 * 60 * 1000 }); // 1 hour
    return true;
  }

  if (limit.count >= 5) {
    return false;
  }

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check honeypot
    if (body._honeypot) {
      return NextResponse.json({ success: true }); // Silent success for bots
    }

    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Validate data
    const data = enquirySchema.parse(body);

    // In production, you would:
    // 1. Send email using Resend, SendGrid, or similar
    // 2. Store in Supabase or database
    // 3. Send Slack notification
    // 4. Send confirmation email to customer

    // For now, log the data
    console.log("Enquiry received:", {
      name: data.name,
      email: data.email,
      enquiryType: data.enquiryType,
      eventDate: data.eventDate,
      location: data.location,
    });

    // Simulate email sending
    const emailData = {
      to: process.env.CONTACT_EMAIL || "info@dandelionsandgrace.fr",
      from: "noreply@dandelionsandgrace.fr",
      subject: `New ${data.enquiryType} Enquiry from ${data.name}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Type:</strong> ${data.enquiryType}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        ${data.whatsapp ? `<p><strong>WhatsApp:</strong> ${data.whatsapp}</p>` : ""}
        <p><strong>Event Date:</strong> ${data.eventDate}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        ${data.venue ? `<p><strong>Venue:</strong> ${data.venue}</p>` : ""}
        ${data.guestCount ? `<p><strong>Guest Count:</strong> ${data.guestCount}</p>` : ""}
        ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ""}
        ${data.style ? `<p><strong>Style:</strong> ${data.style}</p>` : ""}
        ${data.colorPalette ? `<p><strong>Color Palette:</strong> ${data.colorPalette}</p>` : ""}
        ${data.inspirationLinks ? `<p><strong>Inspiration:</strong> ${data.inspirationLinks}</p>` : ""}
        ${data.hearAboutUs ? `<p><strong>Heard About Us:</strong> ${data.hearAboutUs}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    };

    console.log("Email would be sent:", emailData);

    // Send confirmation email to customer
    const confirmationEmail = {
      to: data.email,
      from: "info@dandelionsandgrace.fr",
      subject: "Thank You for Your Enquiry - Dandelions & Grace",
      html: `
        <h2>Thank You, ${data.name}!</h2>
        <p>We've received your enquiry for your ${data.enquiryType} on ${data.eventDate} in ${data.location}.</p>
        <p>We'll review your information and get back to you within 24 hours.</p>
        <p>In the meantime, feel free to explore our portfolio and follow us on Instagram @dandelionsandgrace.</p>
        <p>Best regards,<br>Dandelions & Grace</p>
      `,
    };

    console.log("Confirmation email would be sent:", confirmationEmail);

    // TODO: Integrate actual email service (Resend recommended)
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send(emailData);
    // await resend.emails.send(confirmationEmail);

    // TODO: Store in Supabase
    // const { error } = await supabase.from('enquiries').insert([data]);

    // TODO: Send Slack notification
    // if (process.env.SLACK_WEBHOOK_URL) {
    //   await fetch(process.env.SLACK_WEBHOOK_URL, {
    //     method: 'POST',
    //     body: JSON.stringify({ text: `New enquiry from ${data.name}` })
    //   });
    // }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing enquiry:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}
