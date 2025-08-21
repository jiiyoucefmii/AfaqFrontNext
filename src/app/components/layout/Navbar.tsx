'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import '../../assets/styles/Navbar.css'
import logo from '../../assets/images/LogoFrameBlack.svg'
import afaqPlus_logo from '../../assets/images/afaqplus_logo.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isAfaqPlus = pathname === '/afaq-plus'
  const [scrolled, setScrolled] = useState(false)

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`navbar 
        ${isAfaqPlus ? 'afaqplus-navbar' : ''} 
        ${isAfaqPlus && scrolled ? 'blurred' : ''}`}>
      <div className="navbar-container">
        <div className="auth-buttons">
          <Link href="/login" className={`register-button ${isAfaqPlus ? "afaqplus-register-button" : ""}`}>
            تسجيل الدخول
          </Link>
          <Link href="/signup" className={`login-button ${isAfaqPlus ? "afaqplus-login-button" : ""}`}>
            إنشاء حساب
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link href="/" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={() => setIsMenuOpen(false)}>
              الرئيسية
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/afaq-plus" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={() => setIsMenuOpen(false)}>
              AFAQ+
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/courses" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={() => setIsMenuOpen(false)}>
              الدورات
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/teachers" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={() => setIsMenuOpen(false)}>
              أساتذتنا
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={() => setIsMenuOpen(false)}>
              عن المنصة
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={() => setIsMenuOpen(false)}>
              تواصلو معنا
            </Link>
          </li>
        </ul>
        <Link href={isAfaqPlus ? "/afaq-plus" : "/"} className="navbar-logo">
          <Image 
            src={isAfaqPlus ? afaqPlus_logo : logo} 
            alt="logo" 
            className="logo-image"
            width={120}
            height={40}
          /> 
        </Link>
      </div>
    </nav>
  )
}

export default Navbar