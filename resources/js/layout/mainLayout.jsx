import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/ui/Footer'
// import { Footer } from '../components/ui/Footer'

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className='pt-[50px]'>
        {children}
      </main>
      <Footer />
    </>

  )
}
