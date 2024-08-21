import React from 'react'
import HeroPage from './HeroSection/HeroPage'

import LandingFeatures from './features/LandingFeatures'
import Testimonial from './testimonial/Testimonial'
import Price from './priceSection/Price'
import FAQ from './FAQ/fyq'
import Footer from './Footer/footer'

const Landing = () => {
  return (
    <>
    <HeroPage/>
    <LandingFeatures/>
    <Testimonial/>
    <Price/>
    <FAQ/>
    <Footer/>
    
  </>
  )
}

export default Landing
