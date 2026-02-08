import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description: "Cookie policy for Dandelions & Grace website.",
};

export default function CookiesPage() {
  return (
    <>
      <div className="pt-32 pb-16 bg-stone-50">
        <Container size="narrow">
          <h1 className="text-4xl md:text-5xl font-display text-stone-900 mb-4">
            Cookies Policy
          </h1>
          <p className="text-stone-600">Last updated: February 2024</p>
        </Container>
      </div>

      <Section spacing="large">
        <Container size="narrow">
          <div className="prose prose-stone max-w-none">
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit our website. They help
              us provide you with a better experience and understand how our site is used.
            </p>

            <h2>How We Use Cookies</h2>
            <p>
              We use cookies for:
            </p>
            <ul>
              <li>
                <strong>Essential cookies:</strong> Required for the website to function properly
              </li>
              <li>
                <strong>Analytics cookies:</strong> Help us understand how visitors interact with our
                website (via Plausible or Vercel Analytics)
              </li>
            </ul>

            <h2>Third-Party Cookies</h2>
            <p>
              We may use privacy-focused analytics tools like Plausible Analytics or Vercel Analytics,
              which do not use cookies that track you across websites.
            </p>

            <h2>Managing Cookies</h2>
            <p>
              You can control cookies through your browser settings. Note that disabling cookies may
              affect your experience on our website.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at{" "}
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
