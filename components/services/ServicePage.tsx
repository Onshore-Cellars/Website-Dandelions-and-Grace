import { ServiceData } from '@/lib/data/services';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

interface ServicePageProps {
  service: ServiceData;
}

export default function ServicePage({ service }: ServicePageProps) {
  return (
    <>
      <Section background="white" className="pt-32">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-6">{service.name}</h1>
            <p className="text-2xl font-display text-stone-600 mb-6">{service.tagline}</p>
            <p className="text-xl text-stone-600 leading-relaxed">{service.description}</p>
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <h2 className="mb-12 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.services.map((item, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-stone-200 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-stone-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-stone-700">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <h2 className="mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-stone-800 text-white rounded-full flex items-center justify-center text-2xl font-display mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl mb-3">{step.title}</h3>
                <p className="text-stone-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="stone">
        <Container>
          <h2 className="mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {service.faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-medium text-stone-900 mb-3">{faq.question}</h3>
                <p className="text-stone-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Let&apos;s Create Something Beautiful</h2>
            <p className="text-xl text-stone-600 mb-8">
              Ready to discuss your {service.name.toLowerCase()} needs? Get in touch to start
              planning.
            </p>
            <Button href="/contact">Start Your Enquiry</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
