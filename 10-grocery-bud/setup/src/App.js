import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
const [name,setName] = useState ('');
const [list,setList] = useState ([]);
const [isEditing, setisEditing] = useState (false);
const [editID, setEditID] = useState (null);
const [alert, setAlert] = useState ({show:true, msg:'', type:''});
const handleSubmit = (e) => {
  e.preventDefault()
  console.log('hello')
}

  return <section className='section-center'>
    <form className='grocery-form' onSubmit = {handleSubmit}>
          {alert.show && <Alert/>}
          <h3> grocery bud</h3>
    </form>
    <div className='grocery-container'>
      <List/>
      <button className='clear-btn'> clear all items</button>
    </div>
  </section>
}

export default App
