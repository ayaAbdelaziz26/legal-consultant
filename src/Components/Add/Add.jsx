import React from 'react'
import './add.css'
import { useState } from 'react';
import { useEffect } from 'react';

const Add = ({setCancel,setHead,head,setID,ID,data,setData,element}) => {
    const[name,setName]=useState('');
    const[image,setImage]=useState('');
    const[job,setJob]=useState('');
    const[title,setTitle]=useState('');
    const[content,setContent]=useState('');
    const[rate,setRate]=useState();

    const fetchData = async () => {
      const response = await fetch('https://669fe609b132e2c136ff7dea.mockapi.io/testmonial/comments');
      const jsonData = await response.json();
      setData(jsonData);
  };

    useEffect(() => {
      fetchData();
  }, []);

  const handleUpdate = async () => {
    const formData={
      name,
      image,
      job,
      title,
      content,
      rate
    };

    try {
      const response = await fetch(`https://669fe609b132e2c136ff7dea.mockapi.io/testmonial/comments/${ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await fetchData();
      } else {
        console.error('Error deleting item:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
      
    const confirmEdit=()=>{
      handleUpdate();
      closeFunc();
    }
  
      const handleSubmit = async (event) => {
        const formData={
            name,
            image,
            job,
            title,
            content,
            rate
          };
        try {
          const response = await fetch('https://669fe609b132e2c136ff7dea.mockapi.io/testmonial/comments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            await fetchData();
          }

          } catch (error) {
          console.error('Error:', error);
        }
      };

      const closeFunc=()=>{
        setCancel(false);
      }

      const confirmAdd=()=>{
        handleSubmit();
        closeFunc();
      }
    
  return (
    <div className='add'>
        <div className="add-container">
          {head==="Add"?
          <h1>Add Testmonial</h1>
          :<h1>Edit Testmonial</h1>}
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
              {head==="Add"?<button onClick={confirmAdd}>Confirm Addition</button>:
              <button onClick={confirmEdit}>Confirm Edit</button>}
            <button onClick={()=>setCancel(false)}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Add
