import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {name,job,image,text} = people[index];

  const checkNumber  = (number) => {
    if (number > people.length-1){
      return 0 }
    if (number < 0){
      return people.length -1
    }
    return number;   
  };

  const randomPerson = () => {
    let random = Math.floor(Math.random() * 5)
    if (random === index){
      random = random -1
    }
    setIndex(checkNumber(random))
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={() =>setIndex(checkNumber( index-1))}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={() => setIndex(checkNumber( index+1))}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
