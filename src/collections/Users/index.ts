import { CollectionConfig } from 'payload';
import { isAdmin, isAdminFieldLevel } from '../../access/isAdmin';
import { isAdminOrSelf } from '../../access/isAdminOrSelf';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    // This enables authentication for this collection
    tokenExpiration: 7200,
    verify: false, // Set to true if you want email verification
    maxLoginAttempts: 5,
    lockTime: 600000, // Lock for 10 minutes
    // Add any additional auth options here
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    // Only admins can create users
    create: () => true,
    // Admins can read all, but any other logged in user can only read themselves
    read: isAdminOrSelf,
    // Admins can update all, but any other logged in user can only update themselves
    update: isAdminOrSelf,
    // Only admins can delete
    delete: isAdmin,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          required: true,
        },
        {
          name: 'lastName',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'roles',
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type: 'select',
      hasMany: true,
      defaultValue: ['artist'],
      access: {
        // Only admins can create or update a value for this field
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Artist',
          value: 'artist',
        },
      ]
    },
    {
      name: 'presskits',
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type: 'relationship',
      relationTo: 'presskit',
      hasMany: true,
      access: {
        create: ({ req: { user } }) => Boolean(user),
        update: ({ req: { user } }) => Boolean(user),
      },
      admin: {
        description: 'Presskits associated with this user'
      }
    },
  ],
}

export default Users;
