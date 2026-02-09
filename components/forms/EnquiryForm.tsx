'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormData, contactFormSchema } from '@/lib/validations/contact';
import { submitContactForm } from '@/lib/actions/contact';
import Button from '@/components/ui/Button';

const steps = ['Contact', 'Event Details', 'Style & Budget', 'Confirmation'];

export default function EnquiryForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof ContactFormData)[] = [];

    switch (currentStep) {
      case 0:
        fieldsToValidate = ['name', 'email', 'phone'];
        break;
      case 1:
        fieldsToValidate = ['eventType', 'eventDate', 'location', 'guestCount'];
        break;
      case 2:
        fieldsToValidate = ['style', 'budget', 'message'];
        break;
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await submitContactForm(data);

      if (result.success) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="card text-center">
        <div className="mb-6">
          <svg
            className="w-16 h-16 mx-auto text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-display mb-4">Thank You!</h3>
        <p className="text-stone-600 mb-6">
          We&apos;ve received your enquiry and will get back to you within 24 hours.
        </p>
        <Button onClick={() => window.location.reload()}>Submit Another Enquiry</Button>
      </div>
    );
  }

  return (
    <div className="card">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div key={step} className="flex-1 flex items-center">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    index <= currentStep
                      ? 'bg-stone-800 text-white'
                      : 'bg-stone-200 text-stone-500'
                  }`}
                >
                  {index + 1}
                </div>
                <span className="text-xs mt-2 text-center hidden sm:block">{step}</span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-1 flex-1 mx-2 transition-colors ${
                    index < currentStep ? 'bg-stone-800' : 'bg-stone-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Honeypot field for spam protection */}
        <input
          type="text"
          {...register('honeypot')}
          style={{ position: 'absolute', left: '-9999px' }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Step 1: Contact Information */}
        {currentStep === 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-display mb-6">Contact Information</h3>

            <div>
              <label htmlFor="name" className="label">
                Full Name *
              </label>
              <input
                {...register('name')}
                id="name"
                type="text"
                className="input"
                placeholder="Jane Doe"
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="label">
                Email Address *
              </label>
              <input
                {...register('email')}
                id="email"
                type="email"
                className="input"
                placeholder="jane@example.com"
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="label">
                Phone Number *
              </label>
              <input
                {...register('phone')}
                id="phone"
                type="tel"
                className="input"
                placeholder="+33 6 12 34 56 78"
              />
              {errors.phone && <p className="error">{errors.phone.message}</p>}
            </div>
          </div>
        )}

        {/* Step 2: Event Details */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-display mb-6">Event Details</h3>

            <div>
              <label htmlFor="eventType" className="label">
                Event Type *
              </label>
              <select {...register('eventType')} id="eventType" className="input">
                <option value="">Select event type</option>
                <option value="wedding">Wedding</option>
                <option value="yacht">Yacht Event</option>
                <option value="corporate">Corporate Event</option>
                <option value="private">Private Party</option>
                <option value="other">Other</option>
              </select>
              {errors.eventType && <p className="error">{errors.eventType.message}</p>}
            </div>

            <div>
              <label htmlFor="eventDate" className="label">
                Event Date *
              </label>
              <input
                {...register('eventDate')}
                id="eventDate"
                type="date"
                className="input"
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.eventDate && <p className="error">{errors.eventDate.message}</p>}
            </div>

            <div>
              <label htmlFor="location" className="label">
                Location *
              </label>
              <select {...register('location')} id="location" className="input">
                <option value="">Select location</option>
                <option value="cannes">Cannes</option>
                <option value="monaco">Monaco</option>
                <option value="antibes">Antibes</option>
                <option value="nice">Nice</option>
                <option value="saint-tropez">Saint-Tropez</option>
                <option value="mougins">Mougins</option>
                <option value="other">Other French Riviera Location</option>
              </select>
              {errors.location && <p className="error">{errors.location.message}</p>}
            </div>

            <div>
              <label htmlFor="guestCount" className="label">
                Estimated Guest Count *
              </label>
              <input
                {...register('guestCount')}
                id="guestCount"
                type="number"
                className="input"
                placeholder="100"
                min="1"
              />
              {errors.guestCount && <p className="error">{errors.guestCount.message}</p>}
            </div>
          </div>
        )}

        {/* Step 3: Style & Budget */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-display mb-6">Style & Budget</h3>

            <div>
              <label htmlFor="style" className="label">
                Preferred Style *
              </label>
              <textarea
                {...register('style')}
                id="style"
                className="input min-h-[100px]"
                placeholder="Describe your aesthetic preferences (elegant, romantic, modern, classic, etc.)"
              />
              {errors.style && <p className="error">{errors.style.message}</p>}
            </div>

            <div>
              <label htmlFor="budget" className="label">
                Budget Range *
              </label>
              <select {...register('budget')} id="budget" className="input">
                <option value="">Select budget range</option>
                <option value="luxury">€10,000 - €25,000</option>
                <option value="premium">€25,000 - €50,000</option>
                <option value="bespoke">€50,000+</option>
                <option value="flexible">Flexible / To Discuss</option>
              </select>
              {errors.budget && <p className="error">{errors.budget.message}</p>}
            </div>

            <div>
              <label htmlFor="inspiration" className="label">
                Inspiration Links (Optional)
              </label>
              <input
                {...register('inspiration')}
                id="inspiration"
                type="url"
                className="input"
                placeholder="Pinterest board or Instagram link"
              />
            </div>

            <div>
              <label htmlFor="message" className="label">
                Additional Details *
              </label>
              <textarea
                {...register('message')}
                id="message"
                className="input min-h-[150px]"
                placeholder="Tell us more about your vision, specific requirements, or any questions you have..."
              />
              {errors.message && <p className="error">{errors.message.message}</p>}
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-display mb-6">Review & Submit</h3>
            <p className="text-stone-600">
              Please review your information. Click submit to send your enquiry, or go back to
              make any changes.
            </p>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded">
            <p className="text-red-800 text-sm">
              There was an error submitting your enquiry. Please try again or contact us directly.
            </p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between gap-4">
          {currentStep > 0 && (
            <Button type="button" variant="secondary" onClick={prevStep}>
              Previous
            </Button>
          )}
          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={nextStep} className="ml-auto">
              Next Step
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting} className="ml-auto">
              {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
