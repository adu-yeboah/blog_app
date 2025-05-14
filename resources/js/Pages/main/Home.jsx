import React from 'react'
import Navbar from '../../components/Navbar'
import { Hero } from '../../components/ui/Hero'
import { Footer } from '../../components/ui/Footer'
import { NewsletterSection } from '../../components/NewsLetter'

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewsletterSection />
      <Footer />
    </>
  )
}
