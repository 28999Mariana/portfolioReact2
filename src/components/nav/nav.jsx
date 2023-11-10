import React from 'react';
import Item from './Item';

const Nav = () => {

  const itemsNav = ['Home', 'Skills', 'Projects'];

  const socialMediaIcons = [
    { name: 'LinkedIn', icon: 'fa-linkedin', url: 'https://www.linkedin.com/' },
    { name: 'Facebook', icon: 'fa-facebook', url: 'https://www.facebook.com/' },
    { name: 'Instagram', icon: 'fa-instagram', url: 'https://www.instagram.com/' }
  ];

  return (
    <nav>
      <ul>
        {
          itemsNav.map((item, i) => <Item key={i} item={item} />)
        }
        {
          socialMediaIcons.map((icon, i) => (
            <li key={i}>
              <a href={icon.url} target="_blank" rel="noopener noreferrer">
                <i className={`fab ${icon.icon}`}></i>
              </a>
            </li>
          ))
        }
        <li>
          <button className="connect-button">Let’s Connect</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;