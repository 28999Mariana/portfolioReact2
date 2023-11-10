import React, { useState } from "react";
import "./main.css";

const Section2 = () => {
  // Estado para controlar si el modal está abierto o cerrado
  const [modalOpen, setModalOpen] = useState(false);
  // Estado para almacenar la descripción de la habilidad seleccionada
  const [selectedSkill, setSelectedSkill] = useState("");

  // Función para abrir el modal y establecer la descripción de la habilidad
  const openModal = (description) => {
    setSelectedSkill(description);
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="section-2">
      <div className="carousel-habilidades">
        <h2>SKILLS</h2>
        <img
          src="/assets/meter1.svg"
          alt="Meter 1"
          onClick={() =>
            openModal(
              " Intuitive User Interface: Drive user interaction with intuitive and visually appealing interfaces. Every design element is thoughtfully crafted to guide users through your application or website efficiently and engagingly. A smooth and enjoyable experience is key to online success."
            )
              
          }
        />
        <img
          src="/assets/meter2.svg"
          alt="Meter 2"
          onClick={() =>
            openModal(
              "Responsive Web Design: Elevate your online presence with fully responsive web designs that seamlessly adapt to any device. From sleek landing pages to intuitive user interfaces, my skills in responsive web design ensure a flawless experience for every visitor."
            )
          }
        />
        <img
          src="/assets/meter3.svg"
          alt="Meter 3"
          onClick={() =>
            openModal(
              "Performance Optimization: Ensure outstanding performance for your applications and websites. My optimization skills guarantee swift load times and a seamless user experience, translating to higher retention and conversion rates. I am committed to excellence in every line of code."
            )
          }
        />
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>SKILL:</h3>
            <p>{selectedSkill}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Section2;