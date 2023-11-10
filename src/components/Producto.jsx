import React from 'react';

const Producto = ({producto}) => {
  console.log(producto);
  const {title, description, price, image} = producto
  return (
    <div className='card'>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <strong>$ {price}</strong>
      <p>{description.slice(0, 50)}...</p>
      <button onClick={() => alert('Añadir al carrito...')}>Añadir al carrito</button>
    </div>
  );
}

export default Producto;