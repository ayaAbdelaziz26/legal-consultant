import React from 'react'
import airbnb from '../../Assets/Airbnb Logo.png'
import google from '../../Assets/Google Logo.png'
import microsoft from '../../Assets/Microsoft Logo.png'
import hubspot from '../../Assets/Hubspot Logo.png'
import hero from '../../Assets/Hero Image.png'
import './hero.css'

const Hero = () => {
  return (
    <div className="container">
    <div className='hero'>
    <div className='hero-left'>
        <div className="hero-new">
            <span className='hero-new-span'>New</span>
            <span className='hero-new-recent'>Stay connected to the upcoming & Recent jobs</span>
        </div>
      <h1>Your Solution<br/>Legal Consultacy</h1>

      <p className='hero-new-help'>We are here to help you take care of your legality with the best service especially for you.</p>

      <button>GET STARTED</button>

      <p className='hero-new-trust'>Trusted by 10+ companies in indonesia</p>

      <div className="hero-logos1">
        <img src={airbnb} alt="" />
        <img src={hubspot} alt="" />
      </div>

      <div className="hero-logos2">
        <img src={microsoft} alt="" />
        <img src={google} alt="" />
      </div>
    </div>

    <div className="hero-right">
      <img src={hero} alt="" />
      <div>
        <p>Tiara Andini</p>
        <span>-Lawyer</span>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Hero
