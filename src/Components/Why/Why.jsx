import React from 'react'
import './why.css'
import rocket from '../../Assets/Rocket.png'
import arrows from '../../Assets/User Arrows.png'
import circle from '../../Assets/Circle Layer.png'
import bag from '../../Assets/Bag.png'

const Why = () => {
  return (
    <div className='why'>
      <div className="container why-sections">
      <div className="why-left">
        <h1>Why do we help<br/> with legalization?</h1>
        <p>We are here for UMKM in Indonesia<br/> to carry out the legalization process,<br/> which is sometimes complicated.</p>
      </div>

      <div className="why-right">
        <div>
            <img src={circle} alt="" />
            <h2>Enviromental Law</h2>
            <p>Environmental legal issues might occur since the planned business activities are designed</p>
        </div>

        <div>
            <img src={bag} alt="" />
            <h2>Corporate and Commercial</h2>
            <p>We provide a complete range of services for the continuity of your business activities.</p>
        </div>

        <div>
            <img src={rocket} alt="" />
            <h2>Information and Technology</h2>
            <p>IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty.</p>
        </div>

        <div>
            <img src={arrows} alt="" />
            <h2>Other Services</h2>
            <p>In dealing with disruptive economic and legal challenge, our firm also provide various legal services.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Why
