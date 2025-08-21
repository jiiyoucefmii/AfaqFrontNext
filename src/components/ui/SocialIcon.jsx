import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTelegramPlane, FaTiktok } from 'react-icons/fa'

const SocialIcon = ({ platform, url }) => {
  const getSocialIcon = (platform) => {
    const iconMap = {
      facebook: <FaFacebookF />,
      instagram: <FaInstagram />,
      whatsapp: <FaWhatsapp />,
      telegram: <FaTelegramPlane />,
      tiktok: <FaTiktok />
    }
    return iconMap[platform] || <FaFacebookF />
  }

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`social-icon social-icon--${platform}`}
      aria-label={`Follow us on ${platform}`}
    >
      <div className="social-icon-content">
        {getSocialIcon(platform)}
      </div>
    </a>
  )
}

export default SocialIcon