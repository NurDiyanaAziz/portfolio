import React from "react";
import "./footer.css";
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import Email from '../../assets/9.png';


const Footer = () => {
  return (
    <div className="footer">
      
      <div className="f-content">
        <p>
        <span className="textemails">&copy; 2024 Yana Aziz. All rights reserved. </span>
        </p>
        <p>

        <span className="icon2">
        <a  href="mailto:nurdiyanaabaziz26@gmail.com"><img src={Email} alt="Email Icon" className="btnImg2"/></a>
           <a href="https://github.com/NurDiyanaAziz"  target="_blank" rel="noopener noreferrer"><button className="btn2"><img src={Github} alt="github" className="btnImg2" /></button></a>
        <a href="https://www.linkedin.com/in/nurdiyanaabaziz/"  target="_blank" rel="noopener noreferrer"><button className="btn2"><img src={Linkedin} alt="linkedin" className="btnImg2" /></button></a>
      </span>
            </p>
  
        
      
     
       
       
      </div>
    </div>
  );
};

export default Footer;