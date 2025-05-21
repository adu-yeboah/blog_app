import { Link, router, useForm } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

export default function Table({ columns, data, title }) {
    // State to manage table data (since props are immutable)
    const { get, setData, delete: destory, } = useForm({
        ids: []
    });
    const [_data, set_Data] = useState(data);
    const [selectedRows, setSelectedRows] = useState([]);
    const [clearSelectedRows, setClearSelectedRows] = useState(false);

    const customStyles = {
        table: {
            style: {
                borderCollapse: 'collapse',
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

    // Handle row click to navigate to show page
    const handleRowClick = (row) => {
        get(`/admin/${title}/${row.id}`);
    };

    // Handle row selection
    const handleRowSelection = ({ selectedRows }) => {
        setSelectedRows(selectedRows);
    };

    useEffect(() => {
        setData('ids', [selectedRows.map((row) => row.id)])
    }, [selectedRows])

    // Handle delete functionality
    const handleDelete = () => {
        if (selectedRows.length === 0) {
            alert('Please select at least one row to delete.');
            return;
        }

        destory(`/${title}/bulk`, {
            onSuccess: () => {
                set_Data((prevData) => prevData.filter((row) => !selectedRowIds.includes(row.id)));
                setClearSelectedRows(!clearSelectedRows);
                setSelectedRows([]);
                alert(`Selected ${title} posts deleted successfully!`);
            },
            onError: (errors) => {
                console.log('Delete error:', errors);
                alert(`Failed to delete ${title} posts. Please try again.`);
            },
        });
    };

    return (
        <div className="p-4">
            {/* Delete Button */}
            <div className="mb-4 flex flex-row gap-5 items-center">
                <button
                    onClick={handleDelete}
                    disabled={selectedRows.length === 0}
                    className={`px-4 py-2 rounded-md text-white font-medium ${selectedRows.length === 0
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-red-600 hover:bg-red-700'
                        }`}
                >
                    Delete Selected ({selectedRows.length})
                </button>

                {title ? (
                    <Link
                        href={`/admin/${title}/add`}
                        className="px-4 py-2 rounded-md text-white font-medium bg-green-900"
                    >
                        Create
                    </Link>
                ) : (
                    ''
                )}
            </div>

            {/* DataTable */}
            <DataTable
                columns={columns}
                data={_data}
                pagination
                paginationPerPage={10}
                paginationRowsPerPageOptions={[5]}
                customStyles={customStyles}
                responsive
                selectableRows
                onSelectedRowsChange={handleRowSelection}
                clearSelectedRows={clearSelectedRows}
                onRowClicked={handleRowClick}
                pointerOnHover
            />
        </div>
    );
}