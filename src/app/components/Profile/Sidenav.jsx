import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import '../../assets/styles/Sidenav.css'
import QuizImg from "../icons/QuizImg";
import SettingsImg from '../icons/SettingsImg';
import ProfileImg from '../icons/ProfileImg'
import OverviewImg from '../icons/OverviewImg';
import LogOut from '../icons/LogOut'
import logo from '../../assets/images/LogoW.svg'

const Sidenav = () => {
    const location = useLocation();
    const isOverview = location.pathname.includes("/overview");
    const isSettings = location.pathname.includes("/settings");
    const isQuiz = location.pathname.includes("/quiz");

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }
    return (
        <>
            {/* Hamburger button */}
            <button className="hamburger" onClick={toggleSidebar}>
                &#9776;
            </button>

            <div className="sidenav">
                <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                    <div className="top">
                        <Link to="/"><img src={logo} alt="" className='logo-afaq' /></Link>
                        
                        <hr className='hr-logo' />
                    </div>

                    <nav>
                        <ul className='barr'>
                            <li className={`nav-icon ${!isOverview && !isSettings && !isQuiz ? "active" : ""}`}>
                                <Link to="/profile-teacher">
                                    <ProfileImg className='iconii' color={!isOverview && !isSettings && !isQuiz ? "#FFC800" : "white"} />
                                    <p style={{ color: !isOverview && !isSettings && !isQuiz ? "#FFC800" : "white" }}>Profile</p>
                                </Link>
                            </li>
                            <li className={`nav-icon ${isOverview ? "active" : ""}`}>
                                <Link to="/profile-teacher/overview-teacher">
                                    <OverviewImg className='iconii' color={isOverview ? "#FFC800" : "white"} />
                                    <p style={{ color: isOverview ? "#FFC800" : "white" }}>Overview & Statistics</p>
                                </Link>
                            </li>
                            <li className={`nav-icon ${isQuiz ? "active" : ""}`}>
                                <Link to="/profile-teacher/quiz-teacher">
                                    <QuizImg className='iconii' color={isQuiz ? "#FFC800" : "white"} />
                                    <p style={{ color: isQuiz ? "#FFC800" : "white" }}>Quizes</p>
                                </Link>
                            </li>
                            <li className={`nav-icon ${isSettings ? "active" : ""}`}>
                                <Link to="/profile-teacher/settings-teacher">
                                    <SettingsImg className='iconii' color={isSettings ? "#FFC800" : "white"} />
                                    <p style={{ color: isSettings ? "#FFC800" : "white" }}>Settings</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="log-out">
                        <Link to="/profile">
                            <LogOut className='iconii' color="white" />
                            <p>Log out</p>
                        </Link>
                    </div>
                </aside>

                <main className="content">
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Sidenav
