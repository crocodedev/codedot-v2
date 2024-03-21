export default {
  name: 'OfferWorks',
  type: 'document',
  title: 'Offer Works',
  fields: [
    {name: 'sectionTitle', type: 'string', title: 'Section Title'},
    {
      name: 'offerWorksTitle',
      type: 'string',
      title: 'Offer Works Title',
    },
    {
      name: 'offerWorksItems',
      type: 'array',
      title: 'Offer Works Items',
      of: [
        {
          name: 'offerItem',
          type: 'object',
          title: 'Offer Item',
          fields: [
            {name: 'projectName', type: 'string', title: 'Project Name'},
            {name: 'projectCategory', type: 'string', title: 'Project Text Category'},
            {name: 'projectDescription', type: 'text', title: 'Project Description'},
            {
              name: 'projectImage',
              type: 'image',
              title: 'Project Image',
            },
            {
              name: 'projectTagsList',
              type: 'array',
              title: 'Project Tags',
              of: [{name: 'tagName', type: 'string', title: 'Tag Name'}],
            },
          ],
        },
      ],
    },
  ],
}
