import React, {useState} from "react";
import Form from "../components/Form";
import Thanks from "../components/Thanks";



const Contact = () => {
   const [completed, setCompleted] = useState(false)

   /*  const handleCompleted = ()=> {
      setCompleted(!completed)
    }
 */
 
  

  return (
    <section className="container-fluid  section-contact">
      <div className="row">

        
        <div className={completed ? "col-12 contact-oculto" : "col-12 "}>
          <h1 >Contact</h1>
          <hr />
          <p>
            Si te gusto mi trabajo o tienes alguna duda sobre algo en especifico, contactame. 
          </p>
        </div>
        <div className="col-12">
          {/* <Form setCompleted={setCompleted} completed={completed}/> */}

          { completed ? <Thanks/> : 
          
          <Form setCompleted={setCompleted} completed={completed}/>


          }
         



        </div>
      </div>
    </section>
  );
};

export default Contact;
