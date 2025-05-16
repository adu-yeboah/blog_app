export const blogColumn = [
//   {
//     name: 'Image',
//     selector: (row) => row.image,
//     cell: (row) => <img src={row.image} alt={row.name} className="w-36 h-11 object-cover" />,
//     width: '80px',
//   },
  {
    name: 'title',
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: 'location',
    selector: (row) => row.location,
    sortable: true,
  },
  {
    name: 'category',
    selector: (row) => row.category,
    sortable: true,
  },
  {
    name: 'rate',
    selector: (row) => row.rating,
    sortable: true,
  },
  {
    name: 'date',
    selector: (row) => row.date,
    sortable: true,
  },
];