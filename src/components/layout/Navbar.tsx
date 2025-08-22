'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import HamburgerIcon from '../ui/HamburgerIcon'
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest('.nav-menu') && !target.closest('.hamburger-button')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
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

        <HamburgerIcon 
          isOpen={isMenuOpen} 
          onClick={toggleMenu}
          className={isAfaqPlus ? 'afaqplus' : ''}
        />

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link href="/" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={closeMenu}>
              الرئيسية
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/afaq-plus" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={closeMenu}>
              AFAQ+
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/courses" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={closeMenu}>
              الدورات
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/teachers" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={closeMenu}>
              أساتذتنا
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={closeMenu}>
              عن المنصة
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={closeMenu}>
              تواصلو معنا
            </Link>
          </li>
          
          {/* Mobile Auth Buttons */}
          <div className="mobile-auth-buttons">
            <Link href="/login" className={`register-button ${isAfaqPlus ? "afaqplus-register-button" : ""}`} onClick={closeMenu}>
              تسجيل الدخول
            </Link>
            <Link href="/signup" className={`login-button ${isAfaqPlus ? "afaqplus-login-button" : ""}`} onClick={closeMenu}>
              إنشاء حساب
            </Link>
          </div>
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