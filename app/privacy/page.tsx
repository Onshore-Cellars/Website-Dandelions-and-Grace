import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Dandelions & Grace luxury floral design studio.",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="pt-32 pb-16 bg-stone-50">
        <Container size="narrow">
          <h1 className="text-4xl md:text-5xl font-display text-stone-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-stone-600">Last updated: February 2024</p>
        </Container>
      </div>

      <Section spacing="large">
        <Container size="narrow">
          <div className="prose prose-stone max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              When you contact us through our enquiry form or email, we collect personal information
              including your name, email address, phone number, and details about your event.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use your information to:
            </p>
            <ul>
              <li>Respond to your enquiries and provide quotes</li>
              <li>Communicate about your event and floral services</li>
              <li>Send updates about our services (with your consent)</li>
              <li>Improve our website and services</li>
            </ul>

            <h2>3. Data Protection</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your
              personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>4. Sharing Your Information</h2>
            <p>
              We do not sell or share your personal information with third parties except as necessary
              to provide our services (e.g., with venues or vendors directly related to your event)
              or as required by law.
            </p>

            <h2>5. Your Rights (GDPR)</h2>
            <p>
              Under GDPR, you have the right to:
            </p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>

            <h2>6. Cookies</h2>
            <p>
              We use minimal cookies for analytics purposes. See our{" "}
              <a href="/cookies" className="underline">Cookies Policy</a> for more information.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              For any privacy-related questions or to exercise your rights, please contact us at{" "}
              <a href="mailto:info@dandelionsandgrace.fr" className="underline">
                info@dandelionsandgrace.fr
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
