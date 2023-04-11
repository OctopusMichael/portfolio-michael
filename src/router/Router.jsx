import React from 'react'
import { createHashRouter } from 'react-router-dom'
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import "../style/App.css"
import "../style/projects.css"
import "../style/About.css"
import "../style/home.css"
import "../style/certificate.css"
import "../style/contact.css"
import "../style/notFound.css"
import Projects from '../pages/Projects';
import About from '../pages/About';
import Certificate from '../pages/Certificate';
import NotFound from '../pages/NotFound';
import "../style/loading.css"



const Router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/projects",
          element: <Projects/>,
        },
        {
          path: "/certificate",
          element: <Certificate/>,
        },
        {
          path: "/contacto",
          element: <Contact/>,
        },
        {
          path : "*" ,
          element :<NotFound/>,
        },
        
      ],
    },
  ]);

export default Router