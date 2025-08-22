"use client";
import React, { useState } from 'react';
import '../../assets/styles/RangeSlider.css';

function RangeSlider() {
  const [value, setValue] = useState(2500); // valeur initiale

  const min = 0;
  const max = 10000;

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  // calcule le pourcentage rempli
  const getBackgroundSize = () => {
    const percent = ((value - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(to right, #03FFF7 ${percent}%, #ffffff ${percent}%)`
    };
  };

  return (
    <div className="slider">
      <input
        className="input-slider"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        style={getBackgroundSize()}
      />
      <p>{value} DA</p>
    </div>
  );
}

export default RangeSlider;
