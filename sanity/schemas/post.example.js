/**
 * Example Sanity Schema for Journal Posts
 * 
 * To use this schema:
 * 1. Set up Sanity Studio in your project
 * 2. Copy this file to your Sanity schemas directory
 * 3. Import in your schema index file
 * 
 * For TypeScript support, install @sanity/types
 */

export default {
  name: 'post',
  title: 'Journal Post',
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
          { title: 'Real Weddings', value: 'real-weddings' },
          { title: 'Editorial', value: 'editorial' },
          { title: 'Advice', value: 'advice' },
        ],
      },
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
