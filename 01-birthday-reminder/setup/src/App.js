import React, { useState } from 'react';
import data from './data';
import MyList from './List';
function App() {
      const [people, setpeople] = useState (data)
      const [count, setCount] = useState (0)
return (
    <main>
      <section className='container'>
          <h3>{people.length} bds today</h3>
          <MyList people={people} />
          <button onClick={() => {setCount( count => count+1)}}>you clicked me {count} times</button>
          <button onClick={() => setpeople([])}>clear all</button>
           
      </section>
        
    </main>
  
  )
}

export default App;
