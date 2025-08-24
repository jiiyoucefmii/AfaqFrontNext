'use client'
import React, { useState, ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import '../../assets/styles/SidenavS.css'
import SettingsImg from '../icons/SettingsImg';
import ProfileImg from '../icons/ProfileImg'
import OverviewImg from '../icons/OverviewImg';
import LogOut from '../icons/LogOut'
import logo from '../../assets/images/LogoW.svg'

interface SidenavProps {
    children: ReactNode;
}

const SidenavS: React.FC<SidenavProps> = ({ children }) => {
    const pathname = usePathname();
    
    // Fixed: Single declaration of path checks using consistent patterns
    const isOverview = pathname.includes("/OverviewS");
    const isSettings = pathname.includes("/SettingsS");
    const isProfile = !isOverview && !isSettings; // More readable
    
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }
    
    return (
        <>
            <button className={sidebarOpen ? "exxi" : "hamburger"} onClick={toggleSidebar}>
                {sidebarOpen ? "✖" : "☰"}
            </button>
            
            <div className="sidenav">
                <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                    <div className={`top ${sidebarOpen ? 'barOpen' : ''}`}>
                        <Link href="/">
                            <Image src={logo} alt="Logo" className='logo-afaq' />
                        </Link>
                        <hr className='hr-logo' />
                    </div>
                    
                    <nav>
                        <ul className='barr'>
                            <li className={`nav-icon ${isProfile ? "active" : ""}`}>
                                <Link href="/profile-student">
                                    <ProfileImg color={isProfile ? "#FFC800" : "white"} />
                                    <p style={{ color: isProfile ? "#FFC800" : "white" }}>الملف الشخصي</p>
                                </Link>
                            </li>
                            <li className={`nav-icon ${isOverview ? "active" : ""}`}>
                                <Link href="/profile-student/OverviewS">
                                    <OverviewImg color={isOverview ? "#FFC800" : "white"} />
                                    <p style={{ color: isOverview ? "#FFC800" : "white" }}>نظرة عامة والإحصائيات</p>
                                </Link>
                            </li>
                            <li className={`nav-icon ${isSettings ? "active" : ""}`}>
                                <Link href="/profile-student/SettingsS">
                                    <SettingsImg color={isSettings ? "#FFC800" : "white"} />
                                    <p style={{ color: isSettings ? "#FFC800" : "white" }}>الإعدادات</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="log-out">
                        <Link href="/profile-student/Logout">
                            <LogOut color="white" />
                            <p>تسجيل الخروج</p>
                        </Link>
                    </div>
                </aside>
                
                <main className="content">
                    {children}
                </main>
            </div>
        </>
    )
}

export default SidenavS;