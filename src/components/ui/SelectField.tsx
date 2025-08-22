"use client";

import "../../assets/styles/Auth.css";

// Define prop types with TypeScript
interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  options: Option[];
  className?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  placeholder,
  value,
  onChange,
  error,
  options,
  className = "",
  ...props
}) => {
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div className={`select-field ${className} ${error ? "has-error" : ""}`}>
      <div className="select-wrapper">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`select ${error ? "error" : ""}`}
          aria-describedby={errorId}
          {...props}
        >
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
      {error && (
        <span id={errorId} className="error-text">
          {error}
        </span>
      )}
    </div>
  );
};

export default SelectField;