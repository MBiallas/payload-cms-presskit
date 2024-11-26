import type { CollectionConfig } from 'payload'
import path from 'path';

const PressKit: CollectionConfig = {
  slug: 'presskit',
  access: {
    read: () => true, // Allow public read access
    create: () => true, // Optional: restrict to authenticated users
    update: () => true, // Optional: restrict to authenticated users
    delete: () => true, // Optional: restrict to authenticated users
  },
  labels: {
    singular: 'Press Kit',
    plural: 'Press Kits',
  },
  fields: [
    // Basic Information
    {
      name: 'profileImage',
      label: 'Profile Image',
      type: 'upload',
      required: true,
      admin: {
        description: 'Main profile image displayed at the top (recommended size: 300x275px)'
      },
      relationTo: 'media', // Assuming you have a media collection
    },
    {
      name: 'artistName',
      label: 'Artist Name',
      type: 'text',
      required: true,
    },
    {
      name: 'djInfo',
      label: 'DJ Info',
      type: 'group',
      fields: [
        { name: 'contactName', type: 'text', label: 'Contact Name' },
        { name: 'email', type: 'email', label: 'Email' },
        { name: 'phone', type: 'text', label: 'Phone' },
        { name: 'website', type: 'text', label: 'Website' },
        { name: 'location', type: 'text', label: 'Location' },
        { name: 'bookingFee', type: 'text', label: 'Booking Fee' },
        { name: 'taxId', type: 'text', label: 'Tax ID' },
        { name: 'genre', type: 'text', label: 'Genre' },
        { name: 'labelAffiliation', type: 'text', label: 'Label Affiliation' },
      ],
    },
    {
      name: 'bookingAgency',
      label: 'Booking Agency',
      type: 'group',
      fields: [
        { name: 'name', type: 'text', label: 'Agency Name' },
        { name: 'contact', type: 'text', label: 'Contact Person' },
        { name: 'email', type: 'email', label: 'Email' },
        { name: 'phone', type: 'text', label: 'Phone' },
        { name: 'website', type: 'text', label: 'Website' },
      ],
    },

    // Social Media
    {
      name: 'socialLinks',
      label: 'Social Media Links',
      type: 'group',
      fields: [
        { name: 'spotify', type: 'text', label: 'Spotify URL' },
        { name: 'instagram', type: 'text', label: 'Instagram URL' },
        { name: 'facebook', type: 'text', label: 'Facebook URL' },
        { name: 'soundcloud', type: 'text', label: 'Soundcloud URL' },
        { name: 'beatport', type: 'text', label: 'Beatport URL' },
        { name: 'residentAdvisor', type: 'text', label: 'Resident Advisor URL' },
        { name: 'bandcamp', type: 'text', label: 'Bandcamp URL' },
        { name: 'mixcloud', type: 'text', label: 'Mixcloud URL' },
      ],
    },

    // Media
    {
      name: 'bio',
      label: 'Biography',
      type: 'textarea',
    },
    {
      name: 'pressPhotos',
      label: 'Press Photos',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
      ],
    },
    {
      name: 'performancePhotos',
      label: 'Performance Photos',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'videos',
      label: 'Video Gallery',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'videoFile', type: 'upload', relationTo: 'media' },
        { name: 'thumbnail', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'logos',
      label: 'Logos',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'visuals',
      label: 'Visuals',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'videoFile', type: 'upload', relationTo: 'media' },
        { name: 'thumbnail', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'epCovers',
      label: 'EP Covers',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },

    // Riders
    {
      name: 'techRider',
      label: 'Technical Rider',
      type: 'group',
      fields: [
        { name: 'description', type: 'textarea', label: 'Technical Requirements' },
        {
          name: 'images',
          type: 'array',
          fields: [
            { name: 'title', type: 'text', label: 'Title' },
            { name: 'image', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },
    {
      name: 'hospitalityRider',
      label: 'Hospitality Rider',
      type: 'textarea',
    },

    // Music
    {
      name: 'promoTracks',
      label: 'Promo Tracks',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'audioUrl', type: 'upload', relationTo: 'media' },
        { name: 'coverImage', type: 'upload', relationTo: 'media', required: true },
      ],
    },

    // Additional Info
    {
      name: 'additionalInfo',
      label: 'Additional Info',
      type: 'textarea',
    },
  ],
  upload: {
    staticDir: '/media',
    mimeTypes: ['image/*', 'video/*', 'audio/*'],
  },
};

export default PressKit; 