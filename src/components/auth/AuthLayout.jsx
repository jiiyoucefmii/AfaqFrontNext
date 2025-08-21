"use client"

import { usePathname } from "next/navigation"
import Image from "next/image"
import "../../assets/styles/AuthLayout.css"
import logo from "../../assets/images/LogoFrame.svg"

const AuthLayout = ({ children, title, subtitle, pageType = "default" }) => {
  const pathname = usePathname()

  const getPageClass = () => {
    if (pageType === "forgot-password") return "forgot-password"
    if (pageType === "verify-email") return "verify-email"
    return ""
  }

  const isFullWidth =
    pathname === "/auth/login" || pathname === "/auth/signup" || pathname === "/auth/register"

  return (
    <div className={`auth-page ${getPageClass()}`}>
      <div className={`auth-container ${isFullWidth ? "full-width" : ""}`}>
        <div className="auth-content">
          <div className="auth-header">
            <Image src={logo} alt="AFAQ Logo" className="auth-logo" width={120} height={40} />
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
