import React from "react";

import { IoHomeSharp } from "react-icons/io5";

const NotFound = () => {
  return (
    <>
      <div>
        <div className="container-fluid section-notfound">
          <div className="section-error">
  
            <h1 className=" text-center error 404 bg-black text-white p-5 ">
              <h1>404 Not Found</h1>
              <p>The requested URL was not found on this server.</p>
              <p>
                Please check the URL for errors and try again, or go to the{" "}
                <a href="/demo-router/">
                  {" "}
                  HomePage
                  <IoHomeSharp />
                </a>
              </p>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
