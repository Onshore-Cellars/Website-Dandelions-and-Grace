"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const enquirySchema = z.object({
  // Step 1: Basic Info
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  whatsapp: z.string().optional(),
  
  // Step 2: Event Details
  enquiryType: z.enum(["wedding", "yacht", "corporate", "private", "other"]),
  eventDate: z.string().min(1, "Please select a date"),
  location: z.string().min(2, "Please specify the location"),
  venue: z.string().optional(),
  guestCount: z.string().optional(),
  
  // Step 3: Style & Budget
  budget: z.string().optional(),
  style: z.string().optional(),
  colorPalette: z.string().optional(),
  inspirationLinks: z.string().optional(),
  
  // Step 4: Additional Info
  hearAboutUs: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your event"),
  consent: z.boolean().refine((val) => val === true, "You must agree to the privacy policy"),
  
  // Honeypot
  _honeypot: z.string().optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

const steps = [
  { id: 1, name: "Contact Info" },
  { id: 2, name: "Event Details" },
  { id: 3, name: "Style & Budget" },
  { id: 4, name: "Additional Info" },
];

export const EnquiryForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = async (data: EnquiryFormData) => {
    // Check honeypot
    if (data._honeypot) {
      return; // Silent fail for bots
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await trigger(fieldsToValidate);
    if (isValid && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getFieldsForStep = (step: number): (keyof EnquiryFormData)[] => {
    switch (step) {
      case 1:
        return ["name", "email", "phone"];
      case 2:
        return ["enquiryType", "eventDate", "location"];
      case 3:
        return [];
      case 4:
        return ["message", "consent"];
      default:
        return [];
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-white p-8 md:p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-display text-stone-900 mb-4">
            Thank You!
          </h2>
          <p className="text-lg text-stone-600 mb-6">
            We've received your enquiry and will be in touch within 24 hours.
          </p>
          <p className="text-stone-600">
            Check your inbox for a confirmation email.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 md:p-12">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                    currentStep >= step.id
                      ? "bg-stone-900 text-white"
                      : "bg-stone-200 text-stone-600"
                  )}
                >
                  {step.id}
                </div>
                <div className="text-xs mt-2 text-center hidden md:block">
                  {step.name}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "h-1 flex-1 mx-2 transition-colors",
                    currentStep > step.id ? "bg-stone-900" : "bg-stone-200"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Contact Info */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-display text-stone-900 mb-6">
            Let's Get Started
          </h2>
          
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              {...register("name")}
              className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              {...register("phone")}
              className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              WhatsApp Number (Optional)
            </label>
            <input
              type="tel"
              {...register("whatsapp")}
              className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
            />
          </div>

          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            {...register("_honeypot")}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      )}

      {/* Step 2: Event Details */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-display text-stone-900 mb-6">
            Tell Us About Your Event
          </h2>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              What are you enquiring about? *
            </label>
            <select
              {...register("enquiryType")}
              className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
            >
              <option value="">Select an option</option>
              <option value="wedding">Wedding</option>
              <option value="yacht">Yacht Floristry</option>
              <option value="corporate">Corporate Event</option>
              <option value="private">Private Party</option>
              <option value="other">Other</option>
            </select>
            {errors.enquiryType && (
              <p className="text-red-600 text-sm mt-1">{errors.enquiryType.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Event Date *
            </label>
            <input
              type="date"
              {...register("eventDate")}
              className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
            />
            {errors.eventDate && (
              <p className="text-red-600 text-sm mt-1">{errors.eventDate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Location *
            </label>
            <input
              type="text"
              {...register("location")}
              placeholder="e.g., Cannes, Monaco, Nice"
              className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
            />
            {errors.location && (
              <p className="text-red-600 text-sm mt-1">{errors.location.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Venue (if known)
            </label>
            <input
              type="text"
              {...register("venue")}
              className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Guest Count (approximate)
            </label>
            <input
              type="text"
              {...register("guestCount")}
              placeholder="e.g., 50-100"
              className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
            />
          </div>
        </div>
      )}

      {/* Step 3: Style & Budget */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-display text-stone-900 mb-6">
            Your Vision
          </h2>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Estimated Budget Range
            </label>
            <select
              {...register("budget")}
              className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
            >
              <option value="">Select a range</option>
              <option value="<5k">Under €5,000</option>
              <option value="5k-10k">€5,000 - €10,000</option>
              <option value="10k-20k">€10,000 - €20,000</option>
              <option value="20k-50k">€20,000 - €50,000</option>
              <option value="50k+">€50,000+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Style Preference
            </label>
            <select
              {...register("style")}
              className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
            >
              <option value="">Select a style</option>
              <option value="minimal">Minimal & Modern</option>
              <option value="lush">Lush & Romantic</option>
              <option value="classic">Classic & Elegant</option>
              <option value="wildflower">Wildflower & Natural</option>
              <option value="bold">Bold & Dramatic</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Color Palette
            </label>
            <input
              type="text"
              {...register("colorPalette")}
              placeholder="e.g., Soft pastels, burgundy and gold, all white"
              className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Inspiration Links (Pinterest, Instagram)
            </label>
            <textarea
              {...register("inspirationLinks")}
              rows={3}
              placeholder="Paste any Pinterest boards or Instagram posts that inspire you"
              className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
            />
          </div>
        </div>
      )}

      {/* Step 4: Additional Info */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-display text-stone-900 mb-6">
            Final Details
          </h2>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              How did you hear about us?
            </label>
            <select
              {...register("hearAboutUs")}
              className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
            >
              <option value="">Select an option</option>
              <option value="wedding-planner">Wedding Planner</option>
              <option value="venue">Venue Recommendation</option>
              <option value="referral">Friend/Referral</option>
              <option value="instagram">Instagram</option>
              <option value="google">Google Search</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Tell us more about your event *
            </label>
            <textarea
              {...register("message")}
              rows={6}
              placeholder="Share your vision, any specific requests, or questions you have..."
              className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              {...register("consent")}
              className="mt-1 mr-3"
            />
            <label className="text-sm text-stone-600">
              I agree to the{" "}
              <a href="/privacy" className="underline hover:text-stone-900">
                privacy policy
              </a>{" "}
              and consent to be contacted about my enquiry. *
            </label>
          </div>
          {errors.consent && (
            <p className="text-red-600 text-sm">{errors.consent.message}</p>
          )}
        </div>
      )}

      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mt-6">
          {submitError}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8 pt-6 border-t border-stone-200">
        {currentStep > 1 && (
          <Button type="button" variant="outline" onClick={prevStep}>
            Previous
          </Button>
        )}
        {currentStep < 4 ? (
          <Button type="button" onClick={nextStep} className="ml-auto">
            Next Step
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={isSubmitting}
            className="ml-auto"
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </Button>
        )}
      </div>
    </form>
  );
};
