import React from 'react';
import './navbar.css';
import logo from '../../assets/D.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import Toggle from "../Toggle/toggle";

const Navbar = () =>{
    return(
       
        <nav className="navbar">
            <div className="logoleft">
            <Link to="intro" spy={true} smooth={true} offset={-199} duration={500}><img src={logo} alt="" className='logo' /></Link>
            <Toggle />
            </div>
            
            <div className="desktopMenu">
                <Link to="intro" spy={true} smooth={true} offset={-199} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link to="skills" spy={true} smooth={true} offset={10} duration={500} className='desktopMenuListItem'>About</Link>
                <Link to="works" spy={true} smooth={true} offset={-90} duration={500} className='desktopMenuListItem'>Portfolio</Link>
               

            </div>
            <Link to="contact" spy={true} smooth={true} offset={-90} duration={500}><button className='desktopMenuBtn'>
                <img src={contactImg} alt='' className='desktopMenuImg'/> Contact Me
            </button>
            </Link>
            

        </nav>
       
    )
}

export default Navbar;