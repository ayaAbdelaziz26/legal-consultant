import React from 'react'
import { Link } from 'react-router-dom';
import search from '../../Assets/search.png'
import logo from '../../Assets/Logo blue-bg.png'
import menue from '../../Assets/menue2.png'
import './navbar.css'

const Navbar = ({close,setClose}) => {
  return (
    <div className='navbar container'>
        <div className="navbar-logo">
           <img src={logo} alt="" />
           <p>Lawliet</p>
        </div>

        <div className="navbar-options">
            <p>CONTACT</p>
            <p>TESTMONIALS</p>
            <p>ABOUT</p>
            <p>TERMS</p>
            <Link to='/dashbored' style={{textDecoration:'none'}}><p>DASHBORED</p></Link>
        </div>

        
        <div className="navbar-search">
            <img src={search} alt="" />
            <img src={menue} alt="" className='navbar-menue' onClick={()=>setClose(true)}/>
        </div>
    </div>
  )
}

export default Navbar
