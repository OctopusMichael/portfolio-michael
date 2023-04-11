import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { IoClipboard, IoClose, IoReorderThree } from "react-icons/io5";

const Layout = () => {
  const [buttonLayout, setButtonLayout] = useState(false);

  const handleButton = () => {
    setButtonLayout(!buttonLayout);
  };

  return (
    <>
      <div className="container-fluid g-0">
        <div className="row g-0">
          <div className="col-12 section-layout">
            {buttonLayout ? (
              <button className="button-open" onClick={handleButton}>
                <IoClose/>
              </button>
            ) : (
              <button className="button-close" onClick={handleButton}>
                <IoReorderThree />
              </button>
            )}
            <Navbar buttonLayout={buttonLayout} handleButton={handleButton}  />
            <Outlet />
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </>
  );
};

export default Layout;
