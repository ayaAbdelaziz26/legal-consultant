import React, { useEffect, useState } from 'react'
import './dashbored.css'

const Dashbored = ({setCancel,setHead,head,setID,data,setData,element,setElement}) => {
    // const [data,setData]=useState([]);

    const fetchData = async () => {
      const response = await fetch('https://669fe609b132e2c136ff7dea.mockapi.io/testmonial/comments');
      const jsonData = await response.json();
      setData(jsonData);
  };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
      try {
        const response = await fetch(`https://669fe609b132e2c136ff7dea.mockapi.io/testmonial/comments/${id}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          console.log('Item deleted successfully');
          // Update the state to remove the deleted item from the list
          setData((prevItems) => prevItems.filter(item => item.id !== id));
        } else {
          console.error('Error deleting item:', response.statusText);
        }
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    };

    const fun=()=>{
      setCancel(true)
      setHead("Add")
    }

    const fun2=(item)=>{
      setCancel(true)
      setHead("Edit")
      setID(item.id)
      setElement(item)
    }

  return (
    <>
    <div className='container'>
    <button onClick={fun} className='add-btn'>Add</button>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Rate</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
              {data.map((item)=>{
                return(
                <tr key={item.id}>
                   <td>{item.name}</td>
                   <td>{item.job}</td>
                   <td><img src={item.image} alt="" className='my-img'/></td>
                   <td>{item.title}</td>
                   <td>{item.content}</td>
                   <td>{item.rate}</td>
                   <td className='upd-btn' onClick={()=>fun2(item)}>Edit</td>
                   <td onClick={()=>handleDelete(item.id)} className='del-btn'>Delete</td>
               </tr>
                )
              })}
            </tbody>
        </table>
    </div>
    </div>
    </>
  )
}

export default Dashbored
