import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  // const [id, title, info] = data ([index]);




  return (
   <main>
    <div className='container'>
      <h3> question and answers about login</h3>
     <section className='info'>
     {questions.map((questions) => {
        return <SingleQuestion  key={questions.id} title = {questions.title} info = {questions.info}/>;
     })} 
     </section>
    </div>
    </main>
)}

export default App;
