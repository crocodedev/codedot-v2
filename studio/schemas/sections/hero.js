export default {
  preview: {
    select: {
      title: 'sectionTitle',
    },
  },

  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'Text',
      type: 'text',
      title: 'Text',
    },
    {
      title: 'TagList',
      name: 'taglist',
      type: 'array',
      of: [{type: 'string', name: 'tagname'}],
    },
    {
      title: 'BackgroundImage',
      name: 'backgroundImage',
      type: 'image',
    },
  ],
}
