import React from 'react';
import './styles/cart.css';

function Cart({ cart }) {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <section id="cart">
      <h2>Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>{product.name} - ${product.price}</li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
        </div>
      )}
    </section>
  );
}

export default Cart;
