import React from 'react'
import logo from '../../Assets/Logo bg-white.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container footer-sections">
        <div className="footer-left">
            <img src={logo} alt="" />
            <h1>Lawliet</h1>
        </div>

        <div className="footer-right">
            <div className="footer-right-product">
                <h1>Product</h1>
                <p>Overview</p>
                <p>Features</p>
                <p>Tutorials</p>
                <p>Pricing</p>
                <p>Releases</p>
            </div>

            <div className="footer-right-company">
                <h1>Company</h1>
                <p>About</p>
                <p>Press</p>
                <p>Careers</p>
                <p>Contact</p>
                <p>Partners</p>
            </div>

            <div className="footer-right-support">
                <h1>Support</h1>
                <p>Help center</p>
                <p>Terms of service</p>
                <p>Lega</p>
                <p>Pivacy policy</p>
                <p>Status</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
