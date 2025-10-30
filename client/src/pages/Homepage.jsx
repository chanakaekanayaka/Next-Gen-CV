import React from 'react'
import Banner from '../components/home/Banner'
import Hero from '../components/home/Hero'
import Footer from '../components/home/Footer'
import Features from '../components/home/Features'
import Feedback from '../components/home/Feedback'
import Contact from '../components/home/Contact'

const Homepage = () => {
  return (
    <div className='bg-gradient-to-r from-[#99F6E4] to-[#C7D2FE]'>
        <Hero></Hero>
        <Features/>
        <Feedback/>
        <Contact/>
        <Footer/>
      
    </div>
  )
}

export default Homepage
