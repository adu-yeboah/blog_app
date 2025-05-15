import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

export default function AdminLayout({ children }) {
    return (
        <>
          <Sidebar/>
            <Topbar />
            <main className='ml-[180px] bg-gray-200 h-full'>
                {children}
            </main>
        </>
    )
}
