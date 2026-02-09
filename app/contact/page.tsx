import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import EnquiryForm from '@/components/forms/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Dandelions & Grace to discuss your French Riviera wedding or event. We\'re here to help bring your floral vision to life.',
};

export default function ContactPage() {
  return (
    <>
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="mb-6">Let&apos;s Start Planning</h1>
            <p className="text-xl text-stone-600">
              Share your vision with us and we&apos;ll create a bespoke floral experience for your
              French Riviera celebration. Typically responding within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {[
              {
                title: 'Email',
                content: 'hello@dandelionsandgrace.com',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Phone',
                content: '+33 6 XX XX XX XX',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Location',
                content: 'Serving the French Riviera',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
              },
            ].map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-700">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{contact.title}</h3>
                <p className="text-stone-600">{contact.content}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Enquiry Form</h2>
              <p className="text-stone-600">
                Complete the form below and we&apos;ll get back to you within 24 hours
              </p>
            </div>
            <EnquiryForm />
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'How far in advance should I contact you?',
                  a: '12-18 months for weddings during peak season (May-October), 6-12 months for other events. However, we\'ll always try to accommodate shorter timelines when possible.',
                },
                {
                  q: 'Do you travel outside the French Riviera?',
                  a: 'Yes, we travel throughout France and internationally for destination events. Travel fees apply for locations beyond our core service area.',
                },
                {
                  q: 'What is your minimum investment?',
                  a: 'Wedding floristry typically starts at €5,000-€8,000. Other events have a minimum of €500-€1,000 depending on location and services required.',
                },
              ].map((faq, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-medium mb-2">{faq.q}</h3>
                  <p className="text-stone-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
