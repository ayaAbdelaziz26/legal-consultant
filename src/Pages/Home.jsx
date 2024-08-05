import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Why from '../Components/Why/Why'
import Count from '../Components/Count/Count'
import Testmonial from '../Components/Testmonial/Testmonial'
import Questions from '../Components/Questions/Questions'
import Footer from '../Components/Footer/Footer'
import LinksFooter from '../Components/LinksFooter/LinksFooter'
import SideMenue from '../Components/SideMenue/SideMenue'

const Home = () => {
  
  return (
    <div>
      <Hero/>
      <Why/>
      <Count/>
      <Testmonial/>
      <Questions/>
    </div>
  )
}

export default Home
