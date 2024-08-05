import React from 'react'
import './sideMenue.css'
import closeicon from '../../Assets/close.png'
import { Link } from 'react-router-dom';

const SideMenue = ({close,setClose}) => {
  return (
    <div className='side-menue'>
        <div className="side-menue-top">
        <h1>Menue</h1>
        <img src={closeicon} alt="" onClick={()=>setClose(false)}/>
        </div>
        <div className="side-menue-list">
            <p>CONTACT</p>
            <hr />
            <p>TESTMONIALS</p>
            <hr />
            <p>ABOUT</p>
            <hr />
            <p>TERMS</p>
            <hr />
            <Link to='/dashbored' style={{textDecoration:'none',color:'white'}}><p onClick={()=>setClose(false)}>DASHBORED</p></Link>
        </div>
      
    </div>
  )
}

export default SideMenue
