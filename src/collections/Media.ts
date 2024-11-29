import { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: '/media',
    mimeTypes: ['image/*', 'video/*', 'audio/*'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
      },
      {
        name: 'desktop',
        width: 1920,
        height: 1080,
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
    },
  ],
};
