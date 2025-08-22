"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import '../assets/styles/Layout.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isAfaqPlus = pathname === '/afaqplus';
  
  // Check if current page should hide navbar/footer (for profile routes)
  const isProfileRoute = pathname.startsWith('/profile-teacher');

  return (
    <html lang="ar" dir="rtl">
      <body className={`layout ${isAfaqPlus ? 'afaq-layout-bg' : ''}`}>
        {/* Only show Navbar for non-profile routes */}
        {!isProfileRoute && <Navbar />}
        
        <main>{children}</main>
        
        {/* Only show Footer for non-profile routes */}
        {!isProfileRoute && <Footer />}
      </body>
    </html>
  );
}