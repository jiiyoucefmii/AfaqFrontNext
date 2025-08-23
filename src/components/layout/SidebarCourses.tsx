'use client'
import React, { useState, ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import '../../assets/styles/SidebarCourse.css'
import QuizImg from "../icons/QuizImg";
import SettingsImg from '../icons/SettingsImg';
import ProfileImg from '../icons/ProfileImg'
import OverviewImg from '../icons/OverviewImg';
import LogOut from '../icons/LogOut'
import logo from '../../assets/images/LogoW.svg'
import VideoIcon from '../icons/VideoIcon'
import ChatbotIcon from '../icons/ChatbotIcon'
import backarr from '../../assets/images/gobackarr.svg'
import { useRouter } from 'next/navigation';

interface SidenavProps {
    children: ReactNode;
}

const Sidenav: React.FC<SidenavProps> = ({ children }) => {
    const pathname = usePathname();
    const isChatbot = pathname.includes("/chatbot");
    const isCourseQuiz = pathname.includes("/course-quiz");
    const router = useRouter();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    const handleCancel = (): void => {
    router.back(); //previous page
  };

    return (
        <>
            {/* Bouton Hamburger / X */}
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
                            <li className={`nav-icon ${!isChatbot && isCourseQuiz  ? "active" : ""}`}>
                                <Link href="/course-reader">
                                    <VideoIcon color={!isChatbot && !isCourseQuiz ? "#FFC800" : "white"} />
                                    <p style={{ color: !isChatbot && !isCourseQuiz ? "#FFC800" : "white" }}>الفيديو</p>
                                </Link>
                            </li>
                            
                            <li className={`nav-icon ${isCourseQuiz ? "active" : ""}`}>
                                <Link href="/course-reader/course-quiz">
                                    <QuizImg color={isCourseQuiz ? "#FFC800" : "white"} />
                                    <p style={{ color: isCourseQuiz ? "#FFC800" : "white" }}>الاختبارات</p>
                                </Link>
                            </li>
                            <li className={`nav-icon ${isChatbot ? "active" : ""}`}>
                                <Link href="/course-reader/chatbot">
                                    <ChatbotIcon color={isChatbot ? "#FFC800" : "white"} />
                                    <p style={{ color: isChatbot ? "#FFC800" : "white" }}>المساعد</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                   
                        <Link href="/profile" className="go-back"  onClick={handleCancel}
>
                            <Image src={backarr} alt={"back"} />
                           <p>الرجوع</p>
                        </Link>
                    
                </aside>

                <main className="content">
                    {children}
                </main>
            </div>
        </>
    )
}

export default Sidenav
