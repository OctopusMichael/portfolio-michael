import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/old-octopus-logo.svg";
import {
  IoBookOutline,
  IoHome,
  IoHomeOutline,
  IoLogoDiscord,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMailOutline,
  IoPersonOutline,
  IoReaderOutline,
} from "react-icons/io5";

const Navbar = ({buttonLayout, handleButton}) => {
  return (
    <>
      <nav className={buttonLayout ? "n-active" : "n-off"}>
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo-navbar" />
          </NavLink>
        </div>
          <div className="name">
          <h3>Michael Diaz</h3>

          </div>
        
        <div className="redes-list">
          <a href="#"><IoLogoLinkedin/></a>
          <a href="#"><IoLogoGithub/></a>
          <a href="#"><IoLogoDiscord/></a>
          <a href="#"><IoLogoTwitter/></a>
        </div>

        <div className="menu-list">
          <NavLink onClick={handleButton} to="/"> <IoHomeOutline className="home"/>Inicio</NavLink>
          <NavLink onClick={handleButton} to="/about"> <IoPersonOutline className="person"/> Sobre mi </NavLink>
          <NavLink  onClick={handleButton} to="/projects"> <IoReaderOutline className="proyectos"/> Proyectos </NavLink>
          <NavLink onClick={handleButton} to="/certificate"> <IoBookOutline className="certificate"/> Certificados </NavLink>
          <NavLink onClick={handleButton} to="/contacto"><IoMailOutline className="contacto"/> Contacto </NavLink>
          <NavLink></NavLink>
        </div>
        <div className="footer">
          <p>© 2023 <a href="#">Michael Diaz</a>. Todos los derechos reservados.</p>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
