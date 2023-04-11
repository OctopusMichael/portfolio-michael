import React from "react";
import egg  from  "../images/certificados/certificadoEgg.png"
import udemyJs  from  "../images/certificados/ggwp.jpg"


const Certificate = () => {
  return (
    <section className=" container-fluid section-certificate">
      <div className="row ">
        <div className="col-12 ">
          <h1> Certificados </h1>
          <hr />
          <p>
            Estos son unos certificados que he adquirido recientemente
          </p>
        
        </div>
        <div className="col-12 certificado">
         
          <img  className="img-fluid" src={egg} />
        </div>
        <div className="col-12 certificado">
         
          <img className="img-fluid" src={udemyJs} />
        </div>
      </div>
    </section>
  );
};

export default Certificate;
