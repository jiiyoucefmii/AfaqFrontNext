import React from 'react';
import '../../assets/styles/CardOverS.css';

interface CardOverSProps {
  number?: number | string; // Allow number or string for flexibility
  percent?: number; // Optional, as it's conditionally checked
  text: string; // Required, as it's always rendered
}

const CardOverS: React.FC<CardOverSProps> = ({ number, percent, text }) => {
  const displayValue = percent !== undefined ? `${percent}%` : number;

  return (
    <div className="card-over">
      <p className="num">{displayValue}</p>
      <p className="txt">{text}</p>
    </div>
  );
};

export default CardOverS;