import React from 'react'
import Header from '../components/Header'
import AboutUs from '../components/About'
import Gallery from '../components/Gallery'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Hero from '../components/Hero'

export default function HomePage() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutUs/>
      <Gallery/>
      <Services/>
      <Pricing/>
      <Footer/>
    </div>
  )
}
