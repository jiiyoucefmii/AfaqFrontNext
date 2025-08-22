"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash, FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import "../../assets/styles/InputField.css";

// Define prop types with TypeScript
interface InputFieldProps {
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
  showPasswordToggle?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  className = "",
  showPasswordToggle = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getIcon = () => {
    switch (name) {
      case "email":
        return <FaEnvelope className="input-icon" />;
      case "phone":
        return <FaPhone className="input-icon" />;
      case "firstName":
      case "lastName":
        return <FaUser className="input-icon" />;
      case "password":
      case "confirmPassword":
        return null;
      default:
        return null;
    }
  };

  const errorId = error ? `${name}-error` : undefined;

  return (
    <div className={`input-field ${className} ${error ? "has-error" : ""}`}>
      <div className="input-wrapper">
        <input
          type={isPassword && showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`input ${error ? "error" : ""}`}
          aria-describedby={errorId}
          {...props}
        />
        {getIcon()}
        {isPassword && showPasswordToggle && (
          <button
            type="button"
            className="password-toggle"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      {error && (
        <span id={errorId} className="error-text">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;