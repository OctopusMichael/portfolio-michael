import React from "react";
import { motion } from "framer-motion"


const Loading = () => {
  return (
    <>
      <section
      className="container-fluid section-loading"
      
      >
      
          <motion.div className="box"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 360, 360, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}

          >
              
            </motion.div> 

      </section>


   
    </>
  );
};

export default Loading;
/* 

import { motion } from "framer-motion"

export const MyComponent = () => (
  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  />
) */