
import React, { useState, useEffect } from 'react';
import Loading from "../components/Loading";


const Home = () => {
  const [loader, setloader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloader(false)
      
    }, 1000);
 
    
  }, [ ])

 


  return (
    <>

      { loader ? (
          <Loading/>
      ):(
      <section className="container-fluid section-home ">
        <h1>Michael Diaz</h1>
        <span>Front-End Developer</span>
      </section>
)
    } 
    </>
  );
};

export default Home;
