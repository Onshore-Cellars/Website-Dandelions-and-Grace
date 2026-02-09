import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './client';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function getImageUrl(
  source: SanityImageSource,
  width?: number,
  height?: number
) {
  if (!source) return '';
  
  let image = urlFor(source);

  if (width) {
    image = image.width(width);
  }

  if (height) {
    image = image.height(height);
  }

  return image.url();
}
