import React from 'react'
import iconCheked from '../images/icon-complete.svg'
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const Thanks = ({datos}) => {
 /*  const handleClick = () =>{
    location.reload()
  } */
  return (
    <>
      <motion.div 
      className='container section-checked'
      initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
      
      >
        <img  src={iconCheked}/>
        <h1 className='mt-4 text-center'>Enviado</h1>
        <h3>{datos.name} {datos.lastName}</h3>
        <h5 className='text-center'>Te contactare lo mas pronto posible.</h5>
        <NavLink to={"/"} className='btn '> continue </NavLink>
      
      </motion.div>
    </>
  )
}

export default Thanks