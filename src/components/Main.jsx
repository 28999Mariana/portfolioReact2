import React, { useState, useEffect } from "react"; 
//importo React, useState y useEffect desde la biblioteca de React
import "./main.css";
import Section2 from "./Section2"; // importo el componente creado Section2(era código html)
import CardsSection from "./CardsSection";
import ContactForm from "./ContactForm";


export const Main = () => {
  // estado para mantener el índice del slide actual
  const [indice, setIndice] = useState(0);
  //defino el estado "indice" y la función "setIndice"p/ mantener estado del índice actual
  
  const handleFormSubmit = (formData) => {
    console.log("Form Data:", formData);
};

  // creo el arreglo p/ las img
  const rutas = [
    "/assets/plantilla1.jpg",
    "/assets/plantilla2.jpg",
    "/assets/plantilla3.jpg",
    "/assets/plantilla4.jpg",
    "/assets/plantilla5.jpg",
    "/assets/plantilla6.jpg",
    "/assets/plantilla7.jpg",
    "/assets/plantilla8.jpg",
    "/assets/plantilla9.jpg",
    "/assets/plantilla10.jpg",
    "/assets/plantilla11.jpg",
    "/assets/plantilla12.jpg"
  ];

  // uso "useEffect": efecto p/ manejar el cambio de slides
  useEffect(() => {
    // intervalo p/ cambiar de slide automáticamente
    const interval = setInterval(() => {
      // incremento el slide actual, p/que el slider sea infinito
      setIndice((prevSlide) => (prevSlide + 1) % rutas.length);
      //uso la función "setIndice"p/que el slider sea infinito,usando el operador %
    }, 3000); //velocidad del slider c/3 segundos

    // limpio el intervalo cuando el componente se barre
    return () => clearInterval(interval);
  }, [rutas.length]);

  // renderizo el componente Main
  return (
    <main>
      {/*Introducción */}
      <section className="intro-section">
        <h3 className="typewriter-text">Welcome to my Portfolio.</h3>
        <h1 className="typewriter-text">Hi! I'm Mariana!</h1>
        <h1 className="typewriter-text">Web Developer</h1>
        <div className="circle">
          <div className="dots"></div>
        </div>
        <p>
          I'm a seasoned Frontend Developer. My approach combines technical
          prowess with a creative eye, resulting in captivating digital
          experiences. With a track record of pushing boundaries and a passion
          for innovation, I'm dedicated to creating websites and applications
          that not only look exceptional but also function flawlessly. Let's
          work together to bring your vision to life and set new standards in
          user experience.
        </p>
        <button>Let´s Connect</button>
        <img src="/assets/astronauta.svg" alt="Astronauta" />
      </section>



      {/* sección de habilidades- uso el componente section2 en vez del codigo anterior en html*/}
      <Section2 />
      
      

      {/* sección del slider */}
      <section className="section-plantillas">
      <div className="linea1"></div><h2>LOOK AT SOME OF MY PROJECTS</h2><div className="linea2" ></div>
        
        <div className="slider">
          <div className="slide-track">
            {rutas.map((slide, index) => (//se itera a través del arreglo"rutas" uso .map() para renderizar c/ slide.
              <div
              // doy una clase 'slide' y 'active' si el índice coincide con el slide actual
                className={`slide ${index === indice ? "active" : ""}`}//
                key={index}//le doy una clave única a cada slide. Muy importante en React porque ayuda a identificar los elementos durante las actualizaciones.
              >
                <img src={slide} alt={`Slide ${index + 1}`} /> {/*pongo la img en el slide*/}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* sección de las cards */}
      <CardsSection />

      <section className="contact-section">
      
        <div className="glassmorphism-form">
          <ContactForm onSubmit={handleFormSubmit} />
        </div>

      </section>
    </main>
  );
}; 