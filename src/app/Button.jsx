import React from 'react';

export const Button = ({ onClick, title, color = 'primary' }) => (
  <div className="button-wrapper" style={{ marginTop: '5px' }}>
    <button className={`button is-${color}`} onClick={onClick}>
      {title}
    </button>
  </div>
);
