import React from "react";
import ReactHowler from "react-howler";
import bro from "../music/Brooo.ogg";

const Home = () => {
  return (
    <>
      <section className="  container-fluid section-home ">
        <ReactHowler src={bro} playing={true} loop={true} />

        <h1>Michael Diaz</h1>
        <span>Front-End Developer</span>
      </section>
    </>
  );
};

export default Home;
