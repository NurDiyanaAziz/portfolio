import React from "react";
import './intro.css';
import bg from '../../assets/profile.png';
import { Link } from 'react-scroll';

import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import Resume from '../../assets/RESUME_NUR DIYANA AB AZIZ.pdf';

const Intro = () =>{
    return(
        <section id='intro' >
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I'm <span className="introName">Diyana</span> <br/> Software Developer</span>
                <p className="introPara">Graduate with a degree in Science Computer and <br/> a strong
                foundation in software development. </p>
                <a href={Resume} download><button className="btn">Download CV</button></a>
                <Link><button className="btn1"><img src={Github} alt="github" className="btnImg1" /></button>
                <button className="btn1"><img src={Linkedin} alt="linkedin" className="btnImg1" /></button></Link>
               

            </div>

          

            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;