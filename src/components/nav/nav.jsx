import React from 'react';
import Item from './Item';
import './nav.css';

const Nav = () => {
  const itemsNav = ['Home', 'Skills', 'Projects'];

  const socialMediaIcons = [
    { name: 'LinkedIn', icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/Mariana-Velázquez' },
    { name: 'GitHub', icon: 'fa-github', url: 'https://github.com/28999Mariana' }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '+543363645916';
    const message = encodeURIComponent('Hola, estoy conectando desde tu sitio web.');
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <nav>
      <ul>
        {itemsNav.map((item, i) => (
          <Item key={i} item={item} />
        ))}
        {socialMediaIcons.map((icon, i) => (
          <li key={i}>
            <a href={icon.url} target="_blank" rel="noopener noreferrer">
              <i className={`fab ${icon.icon}`}></i>
            </a>
          </li>
        ))}
        <li>
          <button className="connect-button" onClick={handleWhatsAppClick}>
            Let’s Connect
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;