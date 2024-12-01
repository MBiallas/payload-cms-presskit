import type { CollectionConfig } from 'payload'
import { isAdminOrHasPresskitAccess } from '../access/isAdminOrHasPresskitAccess'
import { mainCategories, parentGenres, subGenres } from '../fields/genreOptions'
import { isLoggedIn } from '@/access/isLoggedIn';

const PressKit: CollectionConfig = {
  slug: 'presskit',
  access: {
    read: () => true, // Allow public read access
    create: isLoggedIn, // Only logged in users can create
    update: isLoggedIn, // Reuse existing access control
    delete: isLoggedIn, // Reuse existing access control
  },
  admin: {
    useAsTitle: 'artistName',
    defaultColumns: ['artistName', 'profileImage', 'updatedAt'],
  },
  labels: {
    singular: 'Press Kit',
    plural: 'Press Kits',
  },
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        console.log('📝 Before Change - Setting createdBy:', {
          userId: req?.user?.id,
          data
        });
        if (req.user) {
          data.createdBy = req.user.id;
        }
        return data;
      }
    ],
    afterChange: [
      async ({ req, operation, doc }) => {
        if (operation === 'create' && req.user) {
          try {
            console.log('🔄 Starting user presskit update:', {
              userId: req.user.id,
              presskitId: doc.id,
            });

            // Use payload's update method with the correct parameters
            const result = await req.payload.update({
              collection: 'users',
              id: req.user.id,
              data: {
                presskits: [
                  ...(req.user.presskits || []),
                  doc.id,
                ],
              },
              depth: 0,
              user: req.user,
              overrideAccess: true,
              req, // Include the request object
            });

            console.log('✅ User update complete:');

          } catch (err) {
            console.error('❌ Error updating user presskits:', {
              error: err.message,
              stack: err.stack,
              userId: req.user.id,
              presskitId: doc.id,
              user: req.user,
            });
          }
        }
        return doc;
      }
    ],
  },
  fields: [
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      required: false,
      admin: {
        readOnly: false,
        position: 'sidebar',
      },
    },
    {
      name: 'profileImage',
      label: 'Profile Image',
      type: 'upload',
      required: true,
      admin: {
        description: 'Main profile image displayed at the top (recommended size: 300x275px)'
      },
      relationTo: 'media',
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
        { name: 'labelAffiliation', type: 'text', label: 'Label Affiliation' },
      ],
    },
     // Genre Tags - First Set
     {
      name: 'genreSet1',
      type: 'group',
      label: 'Primary Genre',
      fields: [
        {
          name: 'mainGenre',
          label: 'Main Genre',
          type: 'select',
          required: false,
          options: mainCategories,
        },
        {
          name: 'parentGenre',
          label: 'Parent Genre',
          type: 'select',
          required: false,
          options: Object.values(parentGenres).flat(),
        },
        {
          name: 'subGenre',
          label: 'Sub Genre',
          type: 'select',
          required: false,
          options: Object.values(subGenres).flat(),
        },
      ],
    },

    // Genre Tags - Second Set
    {
      name: 'genreSet2',
      type: 'group',
      label: 'Secondary Genre',
      fields: [
        {
          name: 'mainGenre',
          label: 'Main Genre',
          type: 'select',
          required: false,
          options: mainCategories,
        },
        {
          name: 'parentGenre',
          label: 'Parent Genre',
          type: 'select',
          required: false,
          options: Object.values(parentGenres).flat(),
        },
        {
          name: 'subGenre',
          label: 'Sub Genre',
          type: 'select',
          required: false,
          options: Object.values(subGenres).flat(),
        },
      ],
    },

    // Genre Tags - Third Set
    {
      name: 'genreSet3',
      type: 'group',
      label: 'Tertiary Genre',
      fields: [
        {
          name: 'mainGenre',
          label: 'Main Genre',
          type: 'select',
          required: false,
          options: mainCategories,
        },
        {
          name: 'parentGenre',
          label: 'Parent Genre',
          type: 'select',
          required: false,
          options: Object.values(parentGenres).flat(),
        },
        {
          name: 'subGenre',
          label: 'Sub Genre',
          type: 'select',
          required: false,
          options: Object.values(subGenres).flat(),
        },
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
        { name: 'tiktok', type: 'text', label: 'TikTok URL' },
        { name: 'youtube', type: 'text', label: 'YouTube URL' },
        { name: 'X', type: 'text', label: 'X URL' },
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
        { name: 'image', type: 'upload', relationTo: 'media', required: false },
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
        { name: 'coverImage', type: 'upload', relationTo: 'media', required: false },
      ],
    },

    // Additional Info
    {
      name: 'additionalInfo',
      label: 'Additional Info',
      type: 'textarea',
    },
  ],
};

export default PressKit 