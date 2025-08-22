"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../assets/styles/Layout.css';

const Layout = ({ children }) => {
  const pathname = usePathname();
  const isAfaqPlus = pathname === '/afaq-plus';

  return (
    <div className={`layout ${isAfaqPlus ? 'afaq-layout-bg' : ''}`}>
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
