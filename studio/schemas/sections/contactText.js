export default {
  name: 'ContactText',
  type: 'document',
  title: 'ContactText',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section title',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'cellNumber',
      type: 'string',
      title: 'Cell Number',
    },

    {
      name: 'coordinatesList',
      type: 'array',
      title: 'Coordinates List',
      of: [
        {
          name: 'coordinatesItem',
          type: 'object',
          title: 'Coordinates Item',
          fields: [
            {name: 'placemarkText', type: 'string', title: 'Placemark Text'},
            {name: 'coordinates', type: 'string', title: 'Coordinates'},
          ],
        },
      ],
    },
  ],
}
