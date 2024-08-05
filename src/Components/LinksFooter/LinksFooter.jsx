import React from 'react'
import instagram from '../../Assets/instagram.png'
import twitter from '../../Assets/twitter.png'
import web from '../../Assets/web.png'
import youtube from '../../Assets/youtube.png'
import './linksFooter.css'

const LinksFooter = () => {
  return (
    <div className='linksFooter'>
      <div className="linksFooter-section container">
      <div className="linksFooter-copy">
        <span>© 2021 Lawliet. All rights reserved</span>
      </div>

      <div className="linksFooter-social">
        <img src={instagram} alt="" />
        <img src={web} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>
      </div>
    </div>
  )
}

export default LinksFooter 
