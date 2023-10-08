import React, { useState } from 'react';
import {Avatar, Link} from '../';
import Logo from '../../assets/websitelogo.png';
import {GrMenu} from "react-icons/gr"
import './Navbar.css';
import {useLocation} from "react-router-dom"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    console.log(location.pathname)
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav>
            <button
                className="menu-toggle"
                onClick={toggleMobileMenu}
                aria-label="Toggle Menu"
            >
                <GrMenu size={30} />
            </button>
            <img className="logo" src={Logo} alt="logo" />
            <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
                <li className={location.pathname === "/" ? "selected" : ""}>
                    <Link to={'/'}>HOME</Link>
                </li>
                <li className={location.pathname === "/journey" ? "selected" : ""}>
                    <Link to={'/journey'}>THE JOURNEY</Link>
                </li>
                <li className={location.pathname === "/team" ? "selected" : ""}>
                    <Link to={'/team'}>TEAM</Link>
                </li>
                <li className={location.pathname === "/store" ? "selected" : ""}>
                    <Link to={'/store'}>STORE</Link>
                </li>
                <li className={location.pathname === "/contact" ? "selected" : ""}>
                    <Link to={'/contact'}>CONTACT</Link>
                </li>
            </ul>
            <div className="avatar">
                <Avatar size={50} />
                <span>GAGAN</span>
            </div>
        </nav>
    );
};

export { Navbar };
