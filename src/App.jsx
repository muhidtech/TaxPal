import React from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Features from './components/Features/Features.jsx'
import SecondFeatures from './components/SecondFeatures/SecondFeatures.jsx'
import GetStartedToday from './components/GetStartedToday/GetStartedToday.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import Faq from './components/Faq/Faq.jsx'

const App = () => {
  return (
    <div >
      <NavBar />
      <Hero />
      <Features />
      <SecondFeatures />
      <GetStartedToday />
      <Testimonials />
      <Pricing />
      <Faq />
    </div>
  )
}

export default App
