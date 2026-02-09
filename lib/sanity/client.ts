import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

export async function getPortfolioItems() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return [];
  }

  try {
    return await sanityClient.fetch(`
      *[_type == "portfolio"] | order(date desc) {
        _id,
        title,
        slug,
        description,
        location,
        eventType,
        date,
        "imageUrl": mainImage.asset->url,
        images[] {
          "url": asset->url,
          alt
        }
      }
    `);
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return [];
  }
}

export async function getJournalPosts() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return [];
  }

  try {
    return await sanityClient.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        category,
        publishedAt,
        "imageUrl": mainImage.asset->url,
        body
      }
    `);
  } catch (error) {
    console.error('Error fetching journal posts:', error);
    return [];
  }
}
