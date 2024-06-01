import React from "react";
import './intro.css';
import bg from '../../assets/profile.png';
import btnImg from '../../assets/hire.png';
import { Link } from 'react-scroll';

const Intro = () =>{
    return(
        <section id='intro' >
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I'm <span className="introName">Diyana</span> <br/> Software Developer</span>
                <p className="introPara">Graduate with a degree in Science Computer and <br/> a strong
                foundation in software development. </p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" />Hire Me</button></Link>
                

            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;