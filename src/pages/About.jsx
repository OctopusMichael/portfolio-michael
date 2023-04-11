import React from "react";
import me from "../images/me.png";
import html from "../images/tecnologies/html.svg";
import css from "../images/tecnologies/css.svg";
import js from "../images/tecnologies/js.svg";
import bs from "../images/tecnologies/bootstrap.svg";
import reac from "../images/tecnologies/react.svg";
import vite from "../images/tecnologies/vite.svg";
import git from "../images/tecnologies/git.svg";
import github from "../images/tecnologies/github.svg";

const About = () => {
  return (
    <>
      <section className=" container-fluid section-about-me">
        <div className="row ">
          <div className="col-12 ">
            <h1>Sobre Mi</h1>
            <h3></h3>
            <hr />
            <p>
              Ingeniero Mecanico apasionado por el diseño y la programación web. Me considero una persona proactiva,
              creativa y siempre dispuesta a aprender nuevas habilidades, llevo aproximadament 8 meses estudiando de forma autodidacta todo lo que tiene que ver con el desarrollo Front-End, me gustaria medir mis conocimientos y poder conseguir mi primer empleo como desarrollador Junior especialmente utilizando REACT.js.
            </p>
          </div>
          <div className="col-12 ">
            <div className="skills">
              <h1>Tecnologias</h1>
              <hr />

              <div className="row">
                <div className="col-4">
                  <img src={html} alt="html" />
                </div>
                <div className="col-4">
                  {" "}
                  <img src={css} alt="css" />
                </div>
                <div className="col-4">
                  <img src={js} alt="js" />
                </div>
                <div className="col-4">
                  <img src={bs} alt="bs" />
                </div>
                <div className="col-4">
                  <img src={reac} alt="react" />
                </div>
                <div className="col-4">
                  <img src={vite} alt="vite" />
                </div>
                <div className="col-4">
                  <img src={git} alt="git" />
                </div>
                <div className="col-4">
                  <img src={github} alt="github" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
