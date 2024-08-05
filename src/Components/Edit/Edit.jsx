import React from 'react'

const Edit = () => {
  return (
    <div className='edit'>
      <h1>Add Testmonial</h1>
            <label>Name:</label>
            <input type="text" />

            <label>Job Title:</label>
            <input type="text"/>

            <label>Image src:</label>
            <input type="text"/>

            <label>Title:</label>
            <input type="text"/>

            <label>Content:</label>
            <input type="text"/>

            <label>Rate:</label>
            <input type="number"/>

            <div className="add-container-btns">
            <button>Confirm</button>
            <button>Cancel</button>
            </div>
    </div>
  )
}

export default Edit
