import React, {useEffect} from 'react';
import Slideshow from "../Components/Slideshow"

const Home = () => {
  const addBodyClass = className => document.body.classList.add('home-page');
  const removeBodyClass = className => document.body.classList.remove('home-page');
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