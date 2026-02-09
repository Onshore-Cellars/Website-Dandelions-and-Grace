import { Metadata } from 'next';
import { locations } from '@/lib/data/locations';
import LocationPage from '@/components/locations/LocationPage';

const location = locations.cannes;

export const metadata: Metadata = {
  title: `Wedding Florist ${location.name}`,
  description: location.description,
  openGraph: {
    title: `Wedding Florist ${location.name} | Dandelions & Grace`,
    description: location.description,
  },
};

export default function CannesPage() {
  return <LocationPage location={location} />;
}
