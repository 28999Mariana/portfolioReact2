import React from "react";
import "./CardsSection.css";

// defino el componente CardsSection
const CardsSection = () => {
  // array de proyectos 
  const projects = [
    {
      id: 1,
      imageSrc: '../../public/assets/plantilla1.jpg',
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.",
    },
    {
      id: 2,
      imageSrc: '../../public/assets/plantilla2.jpg',
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.",
    },
    {
      id: 3,
      imageSrc: '../../public/assets/plantilla3.jpg',
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.",
    },
    {
      id: 4,
      imageSrc: '../../public/assets/plantilla4.jpg',
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.",
    },
  ];

  return (

    <section className="cards-section">
      <div className="box-container">

        {/* mapeo sobre el array de proyectos para renderizar cada tarjeta */}
        {projects.map((project) => (
          <div className="box" key={project.id}>
           
            <img src={project.imageSrc} alt={`Project ${project.id}`} />
            <div className="content">
              
              <h3>{project.title}</h3>
              
              <p>{project.description}</p>
              
              <a href="#" className="btn">
                see more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// exporto el componente CardsSection para que pueda usarse en otros archivos
export default CardsSection;