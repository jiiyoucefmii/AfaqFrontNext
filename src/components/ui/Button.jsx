"use client"
import "../../assets/styles/Button.css"

const Button = ({
  children,
  type = "button",
  onClick,
  isLoading = false,
  disabled = false,
  isAfaqPlus = false,
  className = "",
  variant = "primary",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`btn btn-${variant} ${isAfaqPlus ? "afaqplus-btn" : ""} ${className} ${isLoading ? "loading" : ""}`}
      {...props}
    >
      {isLoading && <div className="btn-spinner"></div>}
      <span className={isLoading ? "btn-text-hidden" : ""}>{children}</span>
    </button>
  )
}

export default Button