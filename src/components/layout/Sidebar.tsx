'use client'
import React, { useState, ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import '../../assets/styles/Sidenav.css'
import QuizImg from "../icons/QuizImg";
import SettingsImg from '../icons/SettingsImg';
import ProfileImg from '../icons/ProfileImg'
import OverviewImg from '../icons/OverviewImg';
import LogOut from '../icons/LogOut'
import logo from '../../assets/images/LogoW.svg'

interface SidenavProps {
    children: ReactNode;
}

const Sidenav: React.FC<SidenavProps> = ({ children }) => {
    const pathname = usePathname();
    const isOverview = pathname.includes("/overview");
    const isSettings = pathname.includes("/settings");
    const isQuiz = pathname.includes("/quiz");

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <>
            {/* Bouton Hamburger / X */}
            <button className={sidebarOpen ? "exxi" : "hamburger"} onClick={toggleSidebar}>
                {sidebarOpen ? "✖" : "☰"}
            </button>

            <div className="sidenav">
                <aside className={`sidebar1 ${sidebarOpen ? "open" : ""}`}>
                    <div className={`top ${sidebarOpen ? 'barOpen' : ''}`}>
                        <Link href="/">
                            <Image src={logo} alt="Logo" className='logo-afaq' />
                        </Link>
                        <hr className='hr-logo' />
                    </div>

                    <nav>
                        <ul className='barr'>
                            <li className={`nav-icon ${!isOverview && !isSettings && !isQuiz ? "active" : ""}`}>
                                <Link href="/profile-teacher">
                                    <ProfileImg color={!isOverview && !isSettings && !isQuiz ? "#FFC800" : "white"} />
                                    <p style={{ color: !isOverview && !isSettings && !isQuiz ? "#FFC800" : "white" }}>الملف الشخصي</p>
                                </Link>
                            </li>
                            <li className={`nav-icon ${isOverview ? "active" : ""}`}>
                                <Link href="/profile-teacher/overview-teacher">
                                    <OverviewImg color={isOverview ? "#FFC800" : "white"} />
                                    <p style={{ color: isOverview ? "#FFC800" : "white" }}>نظرة عامة والإحصائيات</p>
                                </Link>
                            </li>
                            <li className={`nav-icon ${isQuiz ? "active" : ""}`}>
                                <Link href="/profile-teacher/quiz-teacher">
                                    <QuizImg color={isQuiz ? "#FFC800" : "white"} />
                                    <p style={{ color: isQuiz ? "#FFC800" : "white" }}>الاختبارات</p>
                                </Link>
                            </li>
                            <li className={`nav-icon ${isSettings ? "active" : ""}`}>
                                <Link href="/profile-teacher/settings-teacher">
                                    <SettingsImg color={isSettings ? "#FFC800" : "white"} />
                                    <p style={{ color: isSettings ? "#FFC800" : "white" }}>الإعدادات</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="log-out">
                        <Link href="/profile-teacher/Log-out">
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

export default Sidenav
