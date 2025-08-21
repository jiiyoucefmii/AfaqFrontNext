import React from 'react'

interface FooterSectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`footer-section ${className}`}>
      <h3 className="footer-title">{title}</h3>
      {children}
    </div>
  )
}

export default FooterSection