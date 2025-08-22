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

  return (
    <html lang="ar" dir="rtl" >
      <body className={`layout ${isAfaqPlus ? 'afaq-layout-bg' : ''}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}




