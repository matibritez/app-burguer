import React from 'react';
import './styles/menu.css';
import burger1 from '../assets/burger1.png';
import burger2 from '../assets/burger2.png';
import burger3 from '../assets/burger3.png';

function Menu() {
  const burgers = [
    { name: 'Clásica', price: '$1200', image: burger1 },
    { name: 'Cheddar Bacon', price: '$1400', image: burger2 },
    { name: 'Veggie Deluxe', price: '$1300', image: burger3 },
  ];

  return (
    <div className="menu-container">
      {burgers.map((burger, index) => (
        <div key={index} className="burger-card">
          <img src={burger.image} alt={burger.name} className="burger-image" />
          <h3>{burger.name}</h3>
          <p>{burger.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Menu;
