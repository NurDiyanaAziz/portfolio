import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/D.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import Toggle from "../Toggle/toggle";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="logoleft">
                <Link  to="intro" spy={true} smooth={true} offset={-199} duration={500} onClick={closeMenu}>
                    <img src={logo} alt="Logo" className='logo' />
                </Link>
                <Toggle />
            </div>

            <div className={`desktopMenu ${menuOpen ? 'open' : ''}`}>
                <Link to="intro" spy={true} smooth={true} offset={-199} duration={500} className='desktopMenuListItem' onClick={closeMenu}>
                    Home
                </Link>
                <Link to="skills" spy={true} smooth={true} offset={-90} duration={500} className='desktopMenuListItem' onClick={closeMenu}>
                    About
                </Link>
                <Link to="works" spy={true} smooth={true} offset={-90} duration={500} className='desktopMenuListItem' onClick={closeMenu}>
                    Portfolio
                </Link>
                <Link to="contact" spy={true} smooth={true} offset={-90} duration={500} className='desktopMenuListItem' onClick={closeMenu}>
                    <button className='desktopMenuBtn'>
                        <img src={contactImg} alt='Contact' className='desktopMenuImg'/> Contact Me
                    </button>
                </Link>
            </div>

            <div className="menuButton" onClick={toggleMenu}>
                &#9776;
            </div>
        </nav>
    );
};

export default Navbar;
