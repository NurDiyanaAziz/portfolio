import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/D.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Adds a background when scrolling down
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="logoleft">
                <Link to="intro" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setMenuOpen(false)}>
                    <img src={logo} alt="Logo" className='logo' />
                </Link>
               
            </div>

            <div className={`desktopMenu ${menuOpen ? 'open' : ''}`}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={() => setMenuOpen(false)}>Home</Link>
                <Link 
                    activeClass="active" 
                    to="skills" 
                    spy={true} 
                    smooth={true} 
                    offset={-80} // This accounts for the navbar height
                    duration={500} 
                    className='desktopMenuListItem'
                >
                    About
                </Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem' onClick={() => setMenuOpen(false)}>Portfolio</Link>
            </div>

            <button className="contactBtn" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
                Contact Me
            </button>

            <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;