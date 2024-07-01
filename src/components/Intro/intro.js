import React from "react";
import './intro.css';
import bg from '../../assets/profile5.png';

import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import Resume from '../../assets/Nur Diyana Ab Aziz_2024_Resume.pdf';

const Intro = () =>{
    return(
        <section id='intro' >
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I'm <span className="gradient-text">Diyana</span> <br/> Software Developer</span>
                <p className="introPara">Graduate with a degree in Science Computer and <br/> a strong
                foundation in software development. </p>
                <a href={Resume} download><button className="btn">Download CV</button></a>
                <row>
                <a href="https://github.com/NurDiyanaAziz"  target="_blank" rel="noopener noreferrer"><button className="btn1"><img src={Github} alt="github" className="btnImg1" /></button></a>
                <a href="https://www.linkedin.com/in/nurdiyanaabaziz/"  target="_blank" rel="noopener noreferrer"><button className="btn1"><img src={Linkedin} alt="linkedin" className="btnImg1" /></button></a>
                </row>
                
               

            </div>

          

            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;