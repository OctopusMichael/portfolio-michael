import React from "react";
import { useForm } from "react-hook-form";

const Form = ({setCompleted, completed}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
    setCompleted(!completed)
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input
          className="form-control"
          placeholder="Michael"
          type="text"
          {...register("name", {
            required: true,
          })}
        />
        {errors.name?.type === "required" && <p> EL nombre no puede faltar </p>}

        <label>Apellido</label>
        <input
          className="form-control"
          placeholder="Diaz"
          type="text"
          {...register("lastName", {
            required: true,
          })}
        />
        {errors.lastName?.type === "required" && (
          <p> El apellido no puede faltar </p>
        )}
        <label>Correo</label>
        <input
          className="form-control"
          placeholder="michaeldiazcampo@gmail.com"
          {...register("email", {
            required: true,
            pattern:
              /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i,
          })}
        />
        {errors.email?.type === "required" && <p> El correo es requerido </p>}
        {errors.email?.type === "pattern" && <p> Esto no parece un correo </p>}
        <label>Mensaje</label>
        <textarea
          className="form-control"
          placeholder="Deja tu mensaje aqui"
          {...register("texto", {
            required: true,
          })}
        />
        {errors.texto?.type === "required" && (
          <p> Esto no puedo quedar vacio </p>
        )}

        <button> Enviar </button>
      </form>
    </>
  );
};

export default Form;
