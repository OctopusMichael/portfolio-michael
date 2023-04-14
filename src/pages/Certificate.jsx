import React from "react";
import egg from "../images/certificados/certificadoEgg.png";
import udemyJs from "../images/certificados/ggwp.jpg";
import { motion } from "framer-motion";

const Certificate = () => {
  return (
    <motion.section
      className=" container-fluid section-certificate"
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
            {" "}
            Certificados{" "}
          </motion.h1>
          <motion.hr
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1.5, ease: "easeInOut" },
              }}
            />
        </div>
        <motion.div
         className="col-12 certificado"
         initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
         >
          <img className="img-fluid" src={egg} />
        </motion.div>
        <motion.div 
        className="col-12 certificado"
        initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
        >
          <img className="img-fluid" src={udemyJs} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Certificate;
