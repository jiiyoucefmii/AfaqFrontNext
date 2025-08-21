import React, { useState } from 'react';
import '../../assets/styles/RangeSlider.css';


function RangeSlider() {
  const [value, setValue] = useState(2500); // default to 50%

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  const getBackgroundSize = () => {
    return {
      background: `linear-gradient(to left, #03FFF7 ${value/100}%, #ffffff ${value/100}%)`
    };
  };

  return (
    <div className="slider">
      <input
        className="input-slider"
        type="range"
        min="0"
        max="10000"
        value={value}
        onChange={handleChange}
        style={getBackgroundSize()}
      />
      <p>{value} DA</p>
    </div>
  );
}

export default RangeSlider;
