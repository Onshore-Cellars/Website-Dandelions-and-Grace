import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Get in Touch",
  description: "Contact Dandelions & Grace for luxury floral design in the South of France. Available for weddings, yachts, and events.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get in Touch"
        subtitle="Contact"
        description="We'd love to hear about your upcoming event and discuss how we can bring your vision to life."
        image="/images/hero/main-hero.svg"
        imageAlt="Contact us"
        height="default"
      />

      <Section spacing="large">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-display text-stone-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-stone-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-stone-900">Email</p>
                      <a
                        href="mailto:info@dandelionsandgrace.fr"
                        className="text-stone-600 hover:text-stone-900"
                      >
                        info@dandelionsandgrace.fr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-stone-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-stone-900">Phone</p>
                      <a
                        href="tel:+33000000000"
                        className="text-stone-600 hover:text-stone-900"
                      >
                        +33 (0) 00 00 00 00
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-stone-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-stone-900">Service Area</p>
                      <p className="text-stone-600">
                        Cannes, Monaco, Antibes,<br />
                        Nice, Saint-Tropez, Mougins<br />
                        & surrounding areas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-stone-100 p-6">
                <h3 className="font-display text-lg text-stone-900 mb-3">
                  Response Time
                </h3>
                <p className="text-stone-600 text-sm">
                  We typically respond to all enquiries within 24 hours during business hours.
                  For urgent requests, please call us directly.
                </p>
              </div>

              <div className="bg-stone-100 p-6">
                <h3 className="font-display text-lg text-stone-900 mb-3">
                  Showroom Visits
                </h3>
                <p className="text-stone-600 text-sm">
                  In-person consultations are available by appointment. We're happy to meet at our
                  studio or your venue.
                </p>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-2">
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="muted" spacing="large">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display text-stone-900 mb-6">
              Prefer a Quick Call?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Sometimes it's easier to discuss your vision over the phone. We're always happy to chat.
            </p>
            <a
              href="tel:+33000000000"
              className="inline-block px-8 py-4 bg-stone-900 text-white hover:bg-stone-800 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
