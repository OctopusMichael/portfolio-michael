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
import { motion } from "framer-motion";

const Projects = () => {
  const [data, setData] = useState(datos);

  return (
    <>
      <motion.section
        className=" container-fluid section-projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="row">
          <div className="col-12">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, ease: "easeInOut" },
              }}
            >
              {" "}
              Proyectos
            </motion.h1>
            <motion.hr
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1.5, ease: "easeInOut" },
              }}
            />
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, ease: "easeInOut" },
              }}
            >
             Estos son mis proyectos más recientes, me gusta crear soluciones únicas y atractivas que
              cumplan con las necesidades de mis clientes y mejoren la
              experiencia del usuario. Estoy emocionado de compartir mis
              proyectos contigo y espero que puedas evaluar mis habilidades y
              conocimientos como desarrollador Front-End. {" "}

            </motion.p>
          </div>
          {data &&
            data.map((element) => {
              return (
                <motion.div
                  key={element.id}
                  className="col-12 col-lg-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                >
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
                </motion.div>
              );
            })}
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
