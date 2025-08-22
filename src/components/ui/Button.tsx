"use client";

import "../../assets/styles/Button.css";

// Define prop types with TypeScript
interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  isAfaqPlus?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | string; // Add more variants as needed

}

const Button: React.FC<ButtonProps> = ({
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
      aria-busy={isLoading}
      {...props}
    >
      {isLoading && <div className="btn-spinner"></div>}
      <span className={isLoading ? "btn-text-hidden" : ""}>{children}</span>
    </button>
  );
};

export default Button;