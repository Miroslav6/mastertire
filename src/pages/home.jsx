import React, { useEffect } from 'react';
import Slideshow from "../Components/Slideshow"

const Home = (props) => {


  useEffect(() => {
    document.body.classList.toggle('home-page');
    document.title = "Начало | Гуми за мотор | Master Tire";
  },[])
  
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