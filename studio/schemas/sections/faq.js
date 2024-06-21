export default {
  name: 'Faq',
  type: 'document',
  title: 'Faq',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Faq Title',
    },
    {
      name: 'faqList',
      type: 'array',
      title: 'Faq List',
      of: [
        {
          name: 'faqItem',
          type: 'object',
          title: 'Faq Item',
          fields: [
            {
              name: 'question',
              type: 'string',
              title: 'Faq question',
            },
            {
              name: 'Answer',
              type: 'string',
              title: 'Faq Answer',
            },
          ],
        },
      ],
    },
  ],
}
