import React from 'react'
import { Outlet,useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import '../../assets/styles/Layout.css'

const Layout = () => {

  
  const location = useLocation();
  const isAfaqPlus = location.pathname === '/afaq-plus';

  return (
    <div className={`layout ${isAfaqPlus ? 'afaq-layout-bg' : ''}`}>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout