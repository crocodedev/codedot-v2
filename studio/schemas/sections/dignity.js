export default {
  name: 'Dignity',
  type: 'document',
  title: 'Dignity',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'dignityItems',
      type: 'array',
      title: 'DignityItems',
      of: [
        {
          title: 'Item',
          name: 'Item',
          type: 'object',
          fields: [
            {name: 'Name', type: 'string', title: 'Item name'},
            {name: 'Text', type: 'string', title: 'Item text'},
          ],
        },
      ],
    },
    {
      name: 'countersItems',
      type: 'array',
      title: 'CountersItems',
      of: [
        {
          title: 'Item',
          name: 'Item',
          type: 'object',
          fields: [
            {name: 'number', type: 'string', title: 'Item number'},
            {name: 'text', type: 'string', title: 'Item text'},
          ],
        },
      ],
    },
    {
      name: 'wantTitle',
      type: 'text',
      title: 'Want Title',
    },
  ],
}
