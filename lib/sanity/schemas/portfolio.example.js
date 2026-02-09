// Example Sanity schema for portfolio items
// This file should be used in your Sanity Studio project

export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: unknown) => (Rule as { required: () => unknown }).required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: unknown) => (Rule as { required: () => unknown }).required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Wedding', value: 'wedding' },
          { title: 'Yacht Event', value: 'yacht' },
          { title: 'Corporate', value: 'corporate' },
          { title: 'Private Party', value: 'private' },
          { title: 'Other', value: 'other' },
        ],
      },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: [
          { title: 'Cannes', value: 'cannes' },
          { title: 'Monaco', value: 'monaco' },
          { title: 'Antibes', value: 'antibes' },
          { title: 'Nice', value: 'nice' },
          { title: 'Saint-Tropez', value: 'saint-tropez' },
          { title: 'Mougins', value: 'mougins' },
          { title: 'Other', value: 'other' },
        ],
      },
    },
    {
      name: 'date',
      title: 'Event Date',
      type: 'date',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Display on homepage',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'location',
    },
  },
};
