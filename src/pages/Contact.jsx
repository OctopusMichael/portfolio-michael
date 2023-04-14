import React, { useState } from "react";
import Form from "../components/Form";
import Thanks from "../components/Thanks";
import { motion } from "framer-motion";

const Contact = () => {
  const [completed, setCompleted] = useState(false);
  const [datos, setDatos] = useState(null)
  /* console.log(datos) */

  return (
    <motion.section 
    className="container-fluid  section-contact"
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row">
        <div className={completed ? "col-12 contact-oculto" : "col-12 "}>
          <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut" },
          }}
          >Contactame</motion.h1>
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
            Si te gusto mi trabajo o tienes alguna duda sobre algo en
            especifico, contactame.
          </motion.p>
        </div>
        <div className="col-12">
          {/* <Form setCompleted={setCompleted} completed={completed}/> */}

          {completed ? (
            <Thanks datos={datos}/>
          ) : (
            <Form setCompleted={setCompleted} completed={completed} setDatos={setDatos} />
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
