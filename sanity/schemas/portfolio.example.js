/**
 * Example Sanity Schema for Portfolio Items
 * 
 * To use this schema:
 * 1. Set up Sanity Studio in your project
 * 2. Copy this file to your Sanity schemas directory
 * 3. Import in your schema index file
 * 
 * For TypeScript support, install @sanity/types
 */

export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Wedding', value: 'wedding' },
          { title: 'Yacht', value: 'yacht' },
          { title: 'Corporate', value: 'corporate' },
          { title: 'Private Party', value: 'private' },
        ],
      },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., Cannes, Monaco, Nice',
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
