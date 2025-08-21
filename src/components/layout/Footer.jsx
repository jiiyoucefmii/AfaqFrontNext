import React from 'react'
import { Link } from 'react-router-dom'
import SocialIcon from '../ui/SocialIcon'
import FooterSection from '../ui/FooterSection'
import logo from '../../assets/images/LogoFrame.svg'
import '../../assets/styles/Footer.css'

const Footer = () => {
  const socialLinks = [
    { platform: 'facebook', url: 'https://facebook.com', icon: '📘' },
    { platform: 'instagram', url: 'https://instagram.com', icon: '📷' },
    { platform: 'whatsapp', url: 'https://whatsapp.com', icon: '💬' },
    { platform: 'telegram', url: 'https://telegram.org', icon: '✈️' },
    { platform: 'tiktok', url: 'https://tiktok.com', icon: '🎵' }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <FooterSection title="الرئيسية" className="footer-main">
          <ul className="footer-links">
            <li><Link to="/">عن المنصة</Link></li>
            <li><Link to="/instructors">أساتذتنا</Link></li>
          </ul>
        </FooterSection>

        <FooterSection title="الدورات" className="footer-courses">
          <ul className="footer-links">
            <li><Link to="/courses">تواصل معنا</Link></li>
          </ul>
        </FooterSection>

        <div className="footer-center">
          <div className="footer-brand">
            <img src={logo} alt="AFAQ Logo" className="footer-logo" /> 
          </div>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <SocialIcon
                key={index}
                platform={social.platform}
                url={social.url}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>أكاديمية آفاق © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer