import React from "react";
import './intro.css';
import bg from '../../assets/profile5.png';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import Resume from '../../assets/RESUME_NUR_DIYANA_122025.pdf';

const Intro = () => {
    return (
        <section id='intro'>
            <div className="introContent">
                <span className="hello">Hello, </span>
                <h1 className="introText">
                    I'm <span className="gradient-text">Diyana</span> <br /> 
                    <span className="jobTitle">Software Developer</span>
                </h1>
                <p className="introPara">
                    Graduate with a degree in Computer Science and a strong 
                    foundation in building digital experiences.
                </p>
                <div className="btnGroup">
                    <a href={Resume} download className="download-link">
                        <button className="btn">Download CV</button>
                    </a>
                    <div className="socialLinks">
                        <a href="https://github.com/NurDiyanaAziz" target="_blank" rel="noopener noreferrer">
                            <img src={Github} alt="github" className="socialIcon" />
                        </a>
                        <a href="https://www.linkedin.com/in/nurdiyanaabaziz/" target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} alt="linkedin" className="socialIcon" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="imageContainer">
                <img src={bg} alt="Profile" className="bg" />
            </div>
        </section>
    );
}

export default Intro;