import React from 'react';
import '../styles/menu.css';
import burger from '../assets/burger.jpg'; // Podés duplicar esta imagen con diferentes nombres si querés más variedad

const menuItems = [
  {
    id: 1,
    name: 'Retro Classic',
    description: 'Doble carne, cheddar, panceta y salsa secreta.',
    price: '$2.500',
    image: burger,
  },
  {
    id: 2,
    name: 'Cheddar Lover',
    description: 'Triple cheddar, cebolla crispy y pan brioche.',
    price: '$2.800',
    image: burger,
  },
  {
    id: 3,
    name: 'Veggie Vibes',
    description: 'Hamburguesa de lentejas con palta y tomate cherry.',
    price: '$2.400',
    image: burger,
  },
];

const Menu = () => {
  return (
    <section className="menu-section">
      <h2 className="menu-title">🍔 Nuestro Menú Retro</h2>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-img" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="menu-price">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
