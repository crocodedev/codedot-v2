export default {
  name: 'OurTeam',
  type: 'document',
  title: 'Our Team',
  fields: [
    {name: 'sectionTitle', type: 'string', title: 'Section Title'},
    {
      name: 'ourTeamTitle',
      type: 'text',
      title: 'Our Team Title',
    },
    {
      name: 'ourTeamImages',
      type: 'array',
      title: 'Our Team Images',
      of: [
        {
          name: 'teamImage',
          type: 'image',
          title: 'Image',
        },
      ],
    },
  ],
}
