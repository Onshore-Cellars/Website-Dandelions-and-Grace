import { Metadata } from 'next';
import { services } from '@/lib/data/services';
import ServicePage from '@/components/services/ServicePage';

const service = services.seasonal;

export const metadata: Metadata = {
  title: service.name,
  description: service.description,
  openGraph: {
    title: `${service.name} | Dandelions & Grace`,
    description: service.description,
  },
};

export default function SeasonalPage() {
  return <ServicePage service={service} />;
}
