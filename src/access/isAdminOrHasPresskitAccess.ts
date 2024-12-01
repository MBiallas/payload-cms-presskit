import { Access } from "payload/types";

export const isAdminOrHasPresskitAccess: Access = ({ req: { user } }) => {
  if (!user) return false;

  // If user has role of 'admin'
  if (user.roles?.includes('admin')) return true;

  // If user has role of 'artist' and has access to presskits
  if (user.roles?.includes('artist')) {
    return {
      createdBy: {
        equals: user.id
      }
    };
  }

  return false;
};
