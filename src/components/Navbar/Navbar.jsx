import React, { useState } from 'react';
import Avatar from '../Avatar/Avatar';
import { Link } from '../Link/Link';
import Logo from '../../assets/websitelogo.png';
import {GrMenu} from "react-icons/gr"
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                <li>
                    <Link to={'/'}>HOME</Link>
                </li>
                <li>
                    <Link to={'/journey'}>THE JOURNEY</Link>
                </li>
                <li>
                    <Link to={'/team'}>TEAM</Link>
                </li>
                <li>
                    <Link to={'/store'}>STORE</Link>
                </li>
                <li>
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
