import React, { useState } from "react";
import datos from "../json/data.json";

import {
  IoCreateOutline,
  IoGitBranch,
  IoLogoCss3,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";

const Projects = () => {
  const [data, setData] = useState(datos);

  return (
    <>
      <section className=" container-fluid section-projects">
        <div className="row">
          <div className="col-12">
            <h1>Proyectos</h1>
            <hr />
            <p>
            <b>¡Bienvenido! </b><br/> Estos son mis proyectos más recientes como desarrollador Front-End. Me gusta crear soluciones únicas y atractivas que cumplan con las necesidades de mis clientes y mejoren la experiencia del usuario. Estoy emocionado de compartir mis proyectos contigo y espero que puedas evaluar mis habilidades y conocimientos como Desarrollador Front-End. <br/> <b>¡Gracias por visitar mi portafolio!</b>
            </p>
          </div>
          {data &&
            data.map((element) => {
              return (
                <>
                <div key={element.id} className="col-12 col-lg-4">
                  <div className="section-card">
                    <div className="containerr">
                      <div className="newCard">
                        <div className="face face1">
                          <div className={element.img}></div>
                        </div>
                        <div className="face face2">
                          <div className="content">
                            <h3>{element.name}</h3>
                            <div className="tecnologies">
                              <div className="react">
                                <IoLogoReact />
                              </div>
                              <div className="css">
                                <IoLogoCss3 />
                              </div>
                              <div className="html">
                                <IoLogoHtml5 />
                              </div>
                              <div className="js">
                                <IoLogoJavascript />
                              </div>
                              <div className="bs">
                                <FaBootstrap />
                              </div>
                            </div>
                            <div className="buttons">
                              <a href={element.site} target="_blank">
                                Demo <IoCreateOutline />
                              </a>
                              <a href={element.code} target="_blank">
                                Codigo <IoLogoGithub />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                  </div>

                </div>
                </div>
               
                </>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Projects;
