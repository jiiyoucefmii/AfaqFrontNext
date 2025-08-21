"use client"

import "../../assets/styles/Auth.css"

const SelectField = ({ name, placeholder, value, onChange, error, options, className = "", ...props }) => {
  return (
    <div className={`select-field ${className} ${error ? "has-error" : ""}`}>
      <div className="select-wrapper">
        <select name={name} value={value} onChange={onChange} className={`select ${error ? "error" : ""}`} {...props}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="select-arrow">▼</span>
      </div>
      {error && <span className="error-text">{error}</span>}
    </div>
  )
}

export default SelectField
