import React from "react";
import "./footer.css";
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import Email from '../../assets/9.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="f-content">
                <div className="f-left">
                    <span className="text-copyright">
                        &copy; 2026 Yana Aziz. All rights reserved.
                    </span>
                </div>

                <div className="f-right">
                    <div className="social-icons-footer">
                        <a href="mailto:nurdiyanaabaziz26@gmail.com" className="footer-link">
                            <img src={Email} alt="Email" className="footer-icon"/>
                        </a>
                        <a href="https://github.com/NurDiyanaAziz" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <img src={Github} alt="Github" className="footer-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/nurdiyanaabaziz/" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <img src={Linkedin} alt="Linkedin" className="footer-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;