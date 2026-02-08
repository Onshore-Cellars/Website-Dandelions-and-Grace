import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.dandelionsandgrace.fr';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/services/weddings',
    '/services/yacht-floristry',
    '/services/corporate-events',
    '/services/private-parties',
    '/services/seasonal',
    '/portfolio',
    '/journal',
    '/contact',
    '/locations/cannes',
    '/locations/monaco',
    '/locations/antibes',
    '/locations/nice',
    '/locations/saint-tropez',
    '/locations/mougins',
    '/events/cannes-film-festival',
    '/events/monaco-grand-prix',
    '/privacy',
    '/cookies',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.includes('/services/') ? 0.9 : 0.8,
  }));
}
