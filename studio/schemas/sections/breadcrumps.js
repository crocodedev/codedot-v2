export default {
  name: 'Breadcrumps',
  type: 'document',
  title: 'Breadcrumps',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'breadcrumpsItems',
      type: 'array',
      title: 'Breadcrumps Items',
      of: [
        {
          name: 'BreadcrumpsItem',
          type: 'object',
          title: 'BreadcrumpsItem',
          fields: [
            {name: 'linkText', type: 'string', title: 'Link Text'},
            {name: 'linkTo', type: 'slug', title: 'Link to'},
          ],
        },
      ],
    },
  ],
}
