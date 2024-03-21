export default {
  name: 'Offer',
  type: 'document',
  title: 'Offer',
  fields: [
    {name: 'sectionTitle', type: 'string', title: 'Section Title'},
    {
      name: 'offerTitle',
      type: 'text',
      title: 'Offer Title',
    },
    {
      name: 'offerItems',
      type: 'array',
      title: 'Offer Items',
      of: [
        {
          name: 'offerItem',
          type: 'object',
          title: 'Offer Item',
          fields: [
            {name: 'offerName', type: 'string', title: 'Offer Name'},
            {name: 'offerText', type: 'text', title: 'Offer Text'},
            {name: 'offerPrice', type: 'string', title: 'Offer Price'},
          ],
        },
      ],
    },
    {
      title: 'RichTextBlock',
      name: 'richTextBlock',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
