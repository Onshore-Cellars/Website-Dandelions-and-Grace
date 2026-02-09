import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy for Dandelions & Grace. Learn about the cookies we use and how to manage them.',
};

export default function CookiesPage() {
  return (
    <>
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="mb-6">Cookie Policy</h1>
            <p className="text-stone-600 mb-12">
              Last updated: February 9, 2026
            </p>

            <div className="prose prose-stone max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-display mb-4">What Are Cookies</h2>
                <p className="text-stone-600">
                  Cookies are small text files stored on your device when you visit our website. They
                  help us provide you with a better experience by remembering your preferences and
                  understanding how you use our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
                    <p className="text-stone-600">
                      These cookies are necessary for the website to function properly. They enable
                      basic features like page navigation and access to secure areas. The website
                      cannot function properly without these cookies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-2">Analytics Cookies</h3>
                    <p className="text-stone-600">
                      These cookies help us understand how visitors interact with our website by
                      collecting and reporting information anonymously. This helps us improve our
                      website and services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-2">Functionality Cookies</h3>
                    <p className="text-stone-600">
                      These cookies enable the website to remember choices you make (such as your
                      language preference) and provide enhanced, more personal features.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">Third-Party Cookies</h2>
                <p className="text-stone-600 mb-4">
                  We may use third-party services that set their own cookies, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-stone-600">
                  <li>Google Analytics - for website analytics and performance measurement</li>
                  <li>Social media platforms - if you interact with embedded social content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">Managing Cookies</h2>
                <p className="text-stone-600 mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-stone-600">
                  <li>
                    <strong>Browser Settings:</strong> Most browsers allow you to refuse or accept
                    cookies, delete existing cookies, and set preferences for certain websites.
                  </li>
                  <li>
                    <strong>Opt-Out Tools:</strong> You can opt out of certain third-party cookies
                    through industry opt-out programs.
                  </li>
                </ul>
                <p className="text-stone-600 mt-4">
                  Please note that blocking all cookies may impact your experience on our website and
                  limit the functionality available to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">Changes to This Policy</h2>
                <p className="text-stone-600">
                  We may update this cookie policy from time to time. We will notify you of any
                  changes by posting the new policy on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display mb-4">Contact Us</h2>
                <p className="text-stone-600">
                  If you have questions about our use of cookies, please contact us at:
                </p>
                <p className="text-stone-600 mt-4">
                  Email: hello@dandelionsandgrace.com
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
