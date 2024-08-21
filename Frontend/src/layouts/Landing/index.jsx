import React from 'react'
import HeroPage from './HeroSection/HeroPage'

import LandingFeatures from './features/LandingFeatures'
import Testimonial from './testimonial/Testimonial'
import Price from './priceSection/Price'

const Landing = () => {
  return (
    <>
    <HeroPage/>
    <LandingFeatures/>
    <Testimonial/>
    <Price/>
    
  </>
  )
}

export default Landing
