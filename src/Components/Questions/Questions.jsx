import React from 'react'
import call from '../../Assets/Call.png'
import lawyer from '../../Assets/lawyer-2.png'
import './questions.css'

const Questions = () => {
  return (
    <div className='questions'>
      <div className="container questions-sections">
      <div className="questions-left">
            <h1>Complex Questions?</h1>
            <p>Request for a personalized budget for your legal problem. We will<br/> send you a coupe options in 24 hours. You can have free consult ,<br/> if a our first customer</p>
            <button><img src={call} alt="" /> Call now</button>
        </div>

        <div className="questions-right">
            <img src={lawyer} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Questions
