import React from "react";
export const messageColumn = [
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
    name: 'email',
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: 'message',
    selector: (row) => row.message,
    cell: (row) => <p className="line-clamp-1">{row.message}</p>,
    sortable: true,
  }
];