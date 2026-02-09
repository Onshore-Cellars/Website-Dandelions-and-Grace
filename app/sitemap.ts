import { MetadataRoute } from 'next';

const baseUrl = 'https://dandelionsandgrace.com';

// Location pages
const locations = ['cannes', 'monaco', 'antibes', 'nice', 'saint-tropez', 'mougins'];

// Service pages
const services = ['weddings', 'yacht-floristry', 'corporate-events', 'private-parties', 'seasonal'];

// Event pages
const events = ['cannes-film-festival', 'monaco-grand-prix', 'summer-season'];

// Helper function to create sitemap entries
function createUrl(path: string, priority: number = 0.7): MetadataRoute.Sitemap[0] {
  return {
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    createUrl('/', 1.0),
    createUrl('/about', 0.9),
    createUrl('/contact', 0.9),
    createUrl('/portfolio', 0.8),
    createUrl('/journal', 0.7),
    
    // Service pages
    ...services.map(service => createUrl(`/services/${service}`, 0.8)),
    
    // Location pages
    ...locations.map(location => createUrl(`/locations/${location}`, 0.8)),
    
    // Event pages
    ...events.map(event => createUrl(`/events/${event}`, 0.7)),
    
    // Legal pages
    createUrl('/privacy', 0.3),
    createUrl('/cookies', 0.3),
  ];
}
