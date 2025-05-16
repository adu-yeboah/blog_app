import React from 'react'
import DataTable from 'react-data-table-component'

export default function Table({ columns, data }) {

    const customStyles = {
        table: {
            style: {
                borderCollapse: 'collapse',
                // margin: "20px",
            },
        },
        headRow: {
            style: {
                backgroundColor: '#f3f4f6',
            },
        },
        headCells: {
            style: {
                border: '1px solid #e5e7eb',
                padding: '0.5rem 1rem',
                color: '#6b7280',
                fontWeight: 'bold',
            },
        },
        cells: {
            style: {
                border: '1px solid #e5e7eb',
                padding: '0.5rem 1rem',
            },
        },
        rows: {
            style: {
                '&:hover': {
                    backgroundColor: '#f9fafb',
                },
            },
        },
        pagination: {
            style: {
                border: 'none',
                padding: '0.5rem 0',
            },
            pageButtonsStyle: {
                backgroundColor: '#528265',
                color: '#FFFFFF',
                borderRadius: '0.375rem',
                padding: '0.25rem 0.75rem',
                margin: '0 0.25rem',
                '&:hover:not(:disabled)': {
                    backgroundColor: '#C9EFC7',
                },
                '&:disabled': {
                    opacity: 0.5,
                },
            },
        },
    };

    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                pagination
                paginationPerPage={10}
                paginationRowsPerPageOptions={[5]}
                // onRowClicked={handleRowClick}
                customStyles={customStyles}
                responsive
            />
        </>
    )
}
