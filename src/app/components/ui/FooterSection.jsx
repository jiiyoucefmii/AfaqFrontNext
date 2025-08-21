import React from 'react'

const FooterSection = ({ title, children, className = '' }) => {
  return (
    <div className={`footer-section ${className}`}>
      <h3 className="footer-title">{title}</h3>
      {children}
    </div>
  )
}

export default FooterSection