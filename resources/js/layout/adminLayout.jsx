import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

export default function AdminLayout({ children }) {
    return (
        <>
            <div className='bg-gray-200 min-h-[110vh]'>
                <Sidebar />
                <Topbar />
                <main className='ml-[220px] '>
                    {children}
                </main>
            </div>
        </>
    )
}
