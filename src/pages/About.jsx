import React from "react";
import html from "../images/tecnologies/html.svg";
import css from "../images/tecnologies/css.svg";
import js from "../images/tecnologies/js.svg";
import bs from "../images/tecnologies/bootstrap.svg";
import reac from "../images/tecnologies/react.svg";
import vite from "../images/tecnologies/vite.svg";
import git from "../images/tecnologies/git.svg";
import github from "../images/tecnologies/github.svg";
import { motion } from "framer-motion";


const About = () => {
  return (
    <>
    
      <motion.section
        className=" container-fluid section-about-me"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="row ">
          <div className="col-12 ">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, ease: "easeInOut" },
              }}
            >
              Sobre Mí
            </motion.h1>
            <motion.hr
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, ease: "easeInOut" },
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
              Ingeniero Mecanico apasionado por el diseño y la programación web.
              Me considero una persona proactiva, creativa y siempre dispuesto a
              aprender nuevas habilidades. Llevo aproximadamente 1 año
              estudiando de forma autodidacta todo lo relacionado con el
              desarrollo Front-End. Me gustaria medir mis conocimientos y
              conseguir mi primer empleo como desarrollador Junior especialmente
              utilizando REACT.js.
            </motion.p>
          </div>
          <div className="col-12 ">
            <div className="skills">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x : 0,
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
              >
                Tecnologías
              </motion.h1>
              <motion.hr
                initial={{ x : -100, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
              />

              <div className="row">
                <motion.div
                  className="col-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1.2, ease: "easeInOut" },
                  }}
                >
                  <img src={html} alt="html" />
                </motion.div>
                <motion.div
                  className="col-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1.4, ease: "easeInOut" },
                  }}
                >
               
                  <img src={css} alt="css" />
                </motion.div>
                <motion.div
                  className="col-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1.6, ease: "easeInOut" },
                  }}
                >
                  <img src={js} alt="js" />
                </motion.div>
                <motion.div
                  className="col-4"
                  initial={{  opacity: 0 }}
                  animate={{
                    
                    opacity: 1,
                    transition: { duration: 1.8, ease: "easeInOut" },
                  }}
                >
                  <img src={bs} alt="bs" />
                </motion.div>
                <motion.div
                  className="col-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    
                    opacity: 1,
                    transition: { duration: 2, ease: "easeInOut" },
                  }}
                >
                  <img src={reac} alt="react" />
                </motion.div>
                <motion.div
                  className="col-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 2.2, ease: "easeInOut" },
                  }}
                >
                  <img src={vite} alt="vite" />
                </motion.div>
                <motion.div
                  className="col-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 2.4, ease: "easeInOut" },
                  }}
                >
                  <img src={git} alt="git" />
                </motion.div>
                <motion.div
                  className="col-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 2.6, ease: "easeInOut" },
                  }}
                >
                  <img src={github} alt="github" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
