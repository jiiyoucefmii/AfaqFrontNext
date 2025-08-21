"use client"

import { useState } from "react"
import { FaEye, FaEyeSlash, FaEnvelope, FaPhone, FaUser } from "react-icons/fa"
import "../../assets/styles/InputField.css"

const InputField = ({ type, name, placeholder, value, onChange, error, className = "", ...props }) => {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === "password"

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const getIcon = () => {
    switch (name) {
      case "email":
        return <FaEnvelope className="input-icon" />
      case "phone":
        return <FaPhone className="input-icon" />
      case "firstName":
      case "lastName":
        return <FaUser className="input-icon" />
      case "password":
      case "confirmPassword":
        return null // Password fields don't need icons since they have toggle buttons
      default:
        return null
    }
  }

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
          {...props}
        />
        {getIcon()}
        {isPassword && (
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
      {error && <span className="error-text">{error}</span>}
    </div>
  )
}

export default InputField
