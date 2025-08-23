"use client";
import React from 'react';
import '../../assets/styles/RangeSlider.css';

interface RangeSliderProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
  min?: number;
  max?: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ value, onChange, min = 0, max = 10000 }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Number(event.target.value);
    onChange([min, newMax]);
  };

  const getBackgroundSize = () => {
    const percent = ((value[1] - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(to left, #03FFF7 ${percent}%, #ffffff ${percent}%)`
    };
  };

  return (
    <div className="slider">
      <input
        className="input-slider"
        type="range"
        min={min}
        max={max}
        value={value[1]}
        onChange={handleChange}
        style={getBackgroundSize()}
      />
      <p> {value[1]} DA</p>
    </div>
  );
};

export default RangeSlider;
