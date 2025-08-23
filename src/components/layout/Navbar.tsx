'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import '../../assets/styles/Navbar.css';
import logo from '../../assets/images/LogoFrameBlack.svg';
import afaqPlus_logo from '../../assets/images/afaqplus_logo.svg';

interface User {
  name: string;
  role: 'student' | 'teacher';
  avatar: string | null;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  const pathname = usePathname();
  const router = useRouter();
  const isAfaqPlus: boolean = pathname === "/afaqplus";
  
  // Mock user data for testing
  const mockUser: User = {
    name: 'أحمد محمد',
    role: 'student', // Change to 'teacher' to test teacher profile
    avatar: null
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as Element;
      if (!target.closest('.nav-menu') && !target.closest('.menu-icon')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  // TEST FUNCTION - Toggle authentication state
  const toggleAuthState = (): void => {
    setIsAuthenticated(!isAuthenticated);
  };

  // Direct profile click - no dropdown
  const handleProfileClick = (): void => {
    const profilePath = mockUser.role === 'teacher' ? '/profile-teacher' : '/profile-student';
    console.log(`Navigating directly to: ${profilePath}`);
    router.push(profilePath);
  };

  const getInitials = (name: string): string => {
    if (!name) return 'U';
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  const handleMenuItemClick = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar 
           ${isAfaqPlus ? 'afaqplus-navbar' : ''}
           ${isAfaqPlus && scrolled ? 'blurred' : ''}`}>
        <div className="navbar-container">
          
          {/* Conditional rendering based on authentication state */}
          {!isAuthenticated ? (
            // BEFORE LOGIN - Show auth buttons
            <div className="auth-buttons">
              <Link 
                href="/auth/login" 
                className={`register-button ${isAfaqPlus ? "afaqplus-register-button" : ""}`}
              >
                تسجيل الدخول
              </Link>
              <Link 
                href="/auth/signup" 
                className={`login-button ${isAfaqPlus ? "afaqplus-login-button" : ""}`}
              >
                إنشاء حساب
              </Link>
            </div>
          ) : (
            // AFTER LOGIN - Show profile circle (direct click)
            <div className="auth-buttons"> {/* Using same container for consistent positioning */}
              <div 
                className={`profile-circle ${isAfaqPlus ? 'afaqplus-profile' : ''}`}
                onClick={handleProfileClick}
                title={`الذهاب إلى الملف الشخصي - ${mockUser.role === 'teacher' ? 'أستاذ' : 'طالب'}`}
              >
                {mockUser.avatar ? (
                  <img src={mockUser.avatar} alt="Profile" className="profile-avatar" />
                ) : (
                  <span className="profile-initials">{getInitials(mockUser.name)}</span>
                )}
              </div>
            </div>
          )}

          <div className="menu-icon" onClick={toggleMenu}>
            <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link 
                href="/" 
                className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} 
                onClick={handleMenuItemClick}
              >
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/afaqplus" 
                className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} 
                onClick={handleMenuItemClick}
              >
                AFAQ+
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/courses" 
                className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} 
                onClick={handleMenuItemClick}
              >
                الدورات
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/teachers" 
                className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} 
                onClick={handleMenuItemClick}
              >
                أساتذتنا
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/about" 
                className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} 
                onClick={handleMenuItemClick}
              >
                عن المنصة
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/contact" 
                className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} 
                onClick={handleMenuItemClick}
              >
                تواصلو معنا
              </Link>
            </li>
          </ul>

          <Link href={isAfaqPlus ? "/afaqplus" : "/"} className="navbar-logo">
            <img src={isAfaqPlus ? afaqPlus_logo : logo} alt="logo" className="logo-image" />
          </Link>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;