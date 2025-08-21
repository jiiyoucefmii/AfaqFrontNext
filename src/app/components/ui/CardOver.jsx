// CardOver.jsx
import React from 'react';
import '../../assets/styles/CardOver.css';

const CardOver = ({ number, text }) => {
  return (
    <div className='card-over'>
        <p className='num'>{number}</p>
        <p className='txt'>{text}</p>
    </div>
  );
};

export default CardOver;
