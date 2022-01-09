import React, { useState, useEffect } from 'react';
import Slideshow from "../Components/Slideshow"

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('home-page', isOpen);
  },[isOpen])
  
  return (
    <>
      <Slideshow />
      <div className='container'>
        <h1>Защо да изберете нас?</h1>
      </div>
    </>
  )
};

export default Home;