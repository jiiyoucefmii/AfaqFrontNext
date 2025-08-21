import { useLocation } from "react-router-dom"
import "../../assets/styles/AuthLayout.css"
// Import your logo - adjust the path according to your logo location
import logo from "../../assets/images/LogoFrame.svg"

const AuthLayout = ({ children, title, subtitle, pageType = "default" }) => {
  const location = useLocation()

  const getPageClass = () => {
    if (pageType === "forgot-password") return "forgot-password"
    if (pageType === "verify-email") return "verify-email"
    return ""
  }

  const isFullWidth =
    location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/register"

  return (
    <div className={`auth-page ${getPageClass()}`}>
      <div className={`auth-container ${isFullWidth ? "full-width" : ""}`}>
        <div className="auth-content">
          <div className="auth-header">
            <img src={logo || "/placeholder.svg"} alt="AFAQ Logo" className="auth-logo" />
            <h1 className="auth-title">{title}</h1>
            {subtitle && <p className="auth-subtitle">{subtitle}</p>}
          </div>

          <div className="auth-form-container">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
