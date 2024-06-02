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
            <img src={logo} alt="" className='logo'/>
            <Toggle />
            </div>
            
            <div className="desktopMenu">
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>About</Link>
                <Link className='desktopMenuListItem'>Portfolio</Link>
               

            </div>
            <button className='desktopMenuBtn'>
                <img src={contactImg} alt='' className='desktopMenuImg'/> Contact Me
            </button>
            

        </nav>
    )
}

export default Navbar;