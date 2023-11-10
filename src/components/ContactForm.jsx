// importo React y el "hook useState" desde la biblioteca React
import React, { useState } from "react";
import "./ContactForm.css";


// defino el "componente ContactForm" que recibe la "prop onSubmit"
const ContactForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({ // defino el "estado formData" con los campos name, email y message, inician a cadena vacía
      name: "",
      email: "",
      message: "",
    });

// defino la "función handleChange" que actualiza el estado formData cuando cambian los campos del formulario 
    const handleChange = (e) => {
      const { name, value } = e.target;//tomo el nombre y el valor del campo del evento
      setFormData({ ...formData, [name]: value });//actualizo el estado formData usando el operador spread: "..." para mantener los valores anteriores. Con spread creo una copia del objeto formData y actualizo con un nuevo valor.
    };
  
    const handleSubmit = (e) => {//defino la función handleSubmit para enviar el formulario

      e.preventDefault(); //prevengo la recarga de la página, lo que hace el formulario x defecto

      onSubmit(formData);// llamo a la función onSubmit pasando el estado formData como argumento

      setFormData({ name: "", email: "", message: "" });//vuelvo el estado formData a su estado de cadenas vacías inicial
    };
  
    return (     // renderizo el formulario
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default ContactForm;// exporto el componente ContactForm para que se use en otros archivos


//Operador de propagación u operador spread (...), característica de JavaScript que permite expandir elementos de un iterable, como un array o un objeto, en lugares donde se esperan múltiples elementos. 

//.e :abreviatura de evento en JS, p/ el objeto evento (event object). Cuando se trata del método preventDefault() 