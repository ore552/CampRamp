import React from 'react'
import Services from './Services'
import Hero from './Hero'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'

const Homepage = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <Portfolio/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Homepage