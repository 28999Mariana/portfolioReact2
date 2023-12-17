// Importa React y el "hook useState" desde la biblioteca React
import React, { useState } from "react";
// Importa el hook useForm y ValidationError de formspree/react
import { useForm, ValidationError } from "@formspree/react";

// Importa el archivo de estilos ContactForm.css
import "./ContactForm.css";

// Define el componente ContactForm que recibe la prop onSubmit
const ContactForm = () => {
  // Define el estado formData con los campos name, email y message, inician a cadena vacía
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Define la función handleChange que actualiza el estado formData cuando cambian los campos del formulario
  const handleChange = (e) => {
    // Toma el nombre y el valor del campo del evento
    const { name, value } = e.target;
    // Actualiza el estado formData usando el operador spread "..." para mantener los valores anteriores.
    // Con spread creo una copia del objeto formData y actualizo con un nuevo valor.
    setFormData({ ...formData, [name]: value });
  };

  // Utiliza el hook useForm de Formspree con el id del formulario
  const [state, handleSubmit] = useForm("xoqgaqwz");

  // Si el estado succeeded es true, muestra un mensaje de agradecimiento
  if (state.succeeded) {
    return <p className="custom-toast">Thanks for joining!</p>;
  }
    
  

  // Renderizo el formulario
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* Etiqueta y campo de entrada para el nombre */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        {/* Etiqueta y campo de entrada para el correo electrónico */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        {/* Componente ValidationError para manejar errores en el campo de correo electrónico */}
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <div>
        {/* Etiqueta y área de texto para el mensaje */}
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
        />
        {/* Componente ValidationError para manejar errores en el campo de mensaje */}
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      {/* Botón para enviar el formulario */}
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
};

// Exporta el componente ContactForm para que se use en otros archivos
export default ContactForm;

//Operador de propagación u operador spread (...), característica de JavaScript que permite expandir elementos de un iterable, como un array o un objeto, en lugares donde se esperan múltiples elementos. 

//.e :abreviatura de evento en JS, p/ el objeto evento (event object). Cuando se trata del método preventDefault() 