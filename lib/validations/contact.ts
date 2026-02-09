import { z } from 'zod';

export const contactFormSchema = z.object({
  // Step 1: Contact Information
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number'),

  // Step 2: Event Details
  eventType: z.enum(['wedding', 'yacht', 'corporate', 'private', 'other'], {
    errorMap: () => ({ message: 'Please select an event type' }),
  }),
  eventDate: z.string().min(1, 'Please select an event date'),
  location: z.enum(
    ['cannes', 'monaco', 'antibes', 'nice', 'saint-tropez', 'mougins', 'other'],
    {
      errorMap: () => ({ message: 'Please select a location' }),
    }
  ),
  guestCount: z.string().min(1, 'Please enter estimated guest count'),

  // Step 3: Style & Budget
  style: z.string().min(10, 'Please describe your preferred style'),
  budget: z.enum(['luxury', 'premium', 'bespoke', 'flexible'], {
    errorMap: () => ({ message: 'Please select a budget range' }),
  }),
  inspiration: z.string().optional(),

  // Additional
  message: z.string().min(20, 'Please provide more details (minimum 20 characters)'),

  // Spam Protection
  honeypot: z.string().max(0, 'Invalid submission'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
