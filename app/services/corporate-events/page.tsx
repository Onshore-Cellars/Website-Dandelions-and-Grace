import { Metadata } from 'next';
import { services } from '@/lib/data/services';
import ServicePage from '@/components/services/ServicePage';

const service = services['corporate-events'];

export const metadata: Metadata = {
  title: service.name,
  description: service.description,
  openGraph: {
    title: `${service.name} | Dandelions & Grace`,
    description: service.description,
  },
};

export default function CorporateEventsPage() {
  return <ServicePage service={service} />;
}
