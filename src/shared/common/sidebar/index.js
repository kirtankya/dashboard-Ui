import React, { useEffect, useRef, useState } from 'react';
import './sidebar.scss';
import logo from '../../../assets/images/logo.webp';
import profile from '../../../assets/icons/profile.jpg';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);

    const sidebarRef = useRef(null);
    useEffect(() => {
        const mode = localStorage.getItem('mode');
        const status = localStorage.getItem('status');
        setIsDarkMode(mode === 'dark');
        setIsSidebarClosed(status === 'close');
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('mode', isDarkMode ? 'light' : 'dark');
    };

    const toggleSidebar = () => {
        setIsSidebarClosed(!isSidebarClosed);
        localStorage.setItem('status', isSidebarClosed ? 'open' : 'close');
    };

    return (
        <>
            <nav ref={sidebarRef} className={isSidebarClosed ? 'close' : ''}>
                <div className="logo-name">
                    <div className="logo-image">
                        <img src={logo} alt="" />
                    </div>
                    <span className="logo_name">Sidebar</span>
                </div>
                <div className="menu-items">
                    <ul className="nav-links">
                        <li>
                            <Link to={'/home'}>
                                <i className="uil uil-estate" />
                                <span className="link-name">Dahsboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/todo'}>
                                <i className="uil uil-files-landscapes" />
                                <span className="link-name">Content</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/calculator'}>
                                <i className="uil uil-chart" />
                                <span className="link-name">Calculator</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/order'}>
                                <i className="uil uil-thumbs-up" />
                                <span className="link-name">Like</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#">
                                <i className="uil uil-comments" />
                                <span className="link-name">Comment</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="uil uil-share" />
                                <span className="link-name">Share</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="logout-mode">
                        <li>
                            <a href="#">
                                <i className="uil uil-signout" />
                                <span className="link-name">Logout</span>
                            </a>
                        </li>
                        <li className="mode">
                            <a href="#">
                                <i className="uil uil-moon" />
                                <span className="link-name">Dark Mode</span>
                            </a>
                            <div className="mode-toggle">
                                <span onClick={toggleDarkMode} className="switch" />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="dashboard">
                <div className="top">
                    <i onClick={toggleSidebar} className="uil uil-bars sidebar-toggle" />
                    <div className="search-box">
                        <i className="uil uil-search" />
                        <input type="text" placeholder="Search here..." />
                    </div>
                    <img src={profile} alt="" />
                </div>
            </section>
        </>
    );
}
