import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

export default function AdminLayout({ children }) {
    return (
        <>
            <div className='bg-gray-200 min-h-[100vh]'>
                <Sidebar />
                <Topbar />
                <main className='ml-[180px] '>
                    {children}
                </main>
            </div>
        </>
    )
}
