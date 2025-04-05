import React, { useState } from 'react';
import './styles/game.css';

function Game() {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const move = (direction) => {
    const step = 50;
    setPosition((prev) => {
      let { top, left } = prev;
      if (direction === 'up' && top > 0) top -= step;
      if (direction === 'down' && top < 200) top += step;
      if (direction === 'left' && left > 0) left -= step;
      if (direction === 'right' && left < 200) left += step;
      return { top, left };
    });
  };

  return (
    <div className="game-container">
      <h2>¡Llegá a la hamburguesa! 🍔</h2>
      <div className="maze">
        <div className="player" style={{ top: position.top, left: position.left }}></div>
        <div className="burger"></div>
      </div>
      <div className="controls">
        <button onClick={() => move('up')}>⬆️</button>
        <button onClick={() => move('left')}>⬅️</button>
        <button onClick={() => move('down')}>⬇️</button>
        <button onClick={() => move('right')}>➡️</button>
      </div>
    </div>
  );
}

export default Game;
