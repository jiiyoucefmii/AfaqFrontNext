
"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '../assets/styles/Layout.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAfaqPlus = pathname === '/afaqplus';
  
  // Hide Navbar/Footer for profile routes
  const isProfileRoute = pathname.startsWith('/profile-teacher') || pathname.startsWith('/profile-student') ||  pathname.startsWith('/Dashboard');

  return (
    <html lang="ar" dir="rtl">
      <body className={`layout ${isAfaqPlus ? 'afaq-layout-bg' : ''}`}>
        {!isProfileRoute && <Navbar />}
        <main>{children}</main>
        {!isProfileRoute && <Footer />}
      </body>
    </html>
  );
}
