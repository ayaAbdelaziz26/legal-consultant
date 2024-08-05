import React from 'react'
import './add.css'
import { useState } from 'react';

const TestUpdate = ({setCancel}) => {    
    
  return (
    <div className='add'>
        <div className="add-container">
        <h1>Add Testmonial</h1>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

            <label>Job Title:</label>
            <input type="text" value={job} onChange={(e)=>setJob(e.target.value)}/>

            <label>Image src:</label>
            <input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>

            <label>Title:</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>

            <label>Content:</label>
            <input type="text" value={content} onChange={(e)=>setContent(e.target.value)}/>

            <label>Rate:</label>
            <input type="number" value={rate} onChange={(e)=>setRate(e.target.value)}/>

            <div className="add-container-btns">
            <button>Update</button>
            <button onClick={()=>setCancel(false)}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default TestUpdate