import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Dandelions & Grace. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="mb-6">Privacy Policy</h1>
            <p className="text-stone-600 mb-12">
              Last updated: February 9, 2026
            </p>

            <div className="prose prose-stone max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-display mb-4">Introduction</h2>
                <p className="text-stone-600">
                  Dandelions & Grace (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is
                  committed to protecting your personal data. This privacy policy explains how we
                  collect, use, and safeguard your information when you visit our website or use our
                  services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">Information We Collect</h2>
                <p className="text-stone-600 mb-4">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2 text-stone-600">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Event details (date, location, type of celebration)</li>
                  <li>Style preferences and budget information</li>
                  <li>Communication history and preferences</li>
                  <li>Website usage data and analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">How We Use Your Information</h2>
                <p className="text-stone-600 mb-4">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2 text-stone-600">
                  <li>Respond to your enquiries and provide our services</li>
                  <li>Create custom floral proposals and designs</li>
                  <li>Communicate about your event and coordinate logistics</li>
                  <li>Send relevant updates and inspiration (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">Data Protection</h2>
                <p className="text-stone-600">
                  We implement appropriate security measures to protect your personal information
                  from unauthorized access, alteration, disclosure, or destruction. We limit access
                  to your personal data to employees and partners who need it to provide our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">Sharing Your Information</h2>
                <p className="text-stone-600 mb-4">
                  We do not sell your personal information. We may share your data with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-stone-600">
                  <li>Venues and vendors involved in your event (with your consent)</li>
                  <li>Service providers who assist our business operations</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">Your Rights</h2>
                <p className="text-stone-600 mb-4">Under GDPR, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-stone-600">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">Cookies</h2>
                <p className="text-stone-600">
                  We use cookies to improve your browsing experience. See our{' '}
                  <Link href="/cookies" className="text-stone-800 hover:text-stone-600 underline">
                    Cookie Policy
                  </Link>{' '}
                  for details.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">Contact Us</h2>
                <p className="text-stone-600">
                  If you have questions about this privacy policy or wish to exercise your rights,
                  please contact us at:
                </p>
                <p className="text-stone-600 mt-4">
                  Email: hello@dandelionsandgrace.com<br />
                  Phone: +33 6 XX XX XX XX
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
