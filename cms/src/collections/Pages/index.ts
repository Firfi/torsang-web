import { CollectionConfig } from 'payload/types'
import richText from '../../fields/richText'
import { loggedIn } from '../access/loggedIn'
import { publishedOrLoggedIn } from '../access/publishedOrLoggedIn'
import formatSlug from './hooks/formatSlug'
import { formatAppURL, revalidatePage } from './hooks/revalidatePage'
import { defaultAccess } from '../access/default';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: doc =>
      `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/preview?url=${formatAppURL({ doc })}`,
  },
  versions: {
    drafts: true,
  },
  access: defaultAccess,
  hooks: {
    afterChange: [revalidatePage],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      index: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
    richText(),
  ],
}
