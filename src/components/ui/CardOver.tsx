'use client'

import React from 'react';
import '../../assets/styles/CardOver.css';

interface CardOverProps {
  number: number;
  text: string;
}

const CardOver: React.FC<CardOverProps> = ({ number, text }) => {
  return (
    <div className='card-over'>
      <p className='num'>{number}</p>
      <p className='txt'>{text}</p>
    </div>
  );
};

export default CardOver;
