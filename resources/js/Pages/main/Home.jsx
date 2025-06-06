import React from 'react'
import Navbar from '../../components/Navbar'
import { Hero } from '../../components/ui/Hero'
import { Footer } from '../../components/ui/Footer'
import { NewsletterSection } from '../../components/NewsLetter'
import Carousel from '../../components/Carousel'
import Destination from '../../components/Destination'
import { TravelStoriesSection } from '../../components/TravelBlogs'
import AboutMe from '../../components/aboutSection'

export default function Index({about, destinations, blogs}) {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <Hero data={about?.coverImage}/>

      {/* Destination Section */}
      <Destination destination={destinations}/>

      <NewsletterSection />
      {/* <Carousel /> */}

      {/* featured blogs */}
      <TravelStoriesSection destination={destinations}/>

      {}
      <AboutMe about={about}/>
      <Footer />
    </>
  )
}
