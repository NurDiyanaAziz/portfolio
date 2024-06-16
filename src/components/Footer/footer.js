import React from "react";
import "./footer.css";
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';


const Footer = () => {
  return (
    <div className="footer">
      
      <div className="f-content">
        <p>
        <span className="textemails">&copy; 2024 </span>
        </p>
        <p>
          
        <span className="textemail"><a  href="mailto:nurdiyanaabaziz26@gmail.com">nurdiyanaabaziz26@gmail.com</a></span>
        </p>
        <p>
        <span> <a href="https://github.com/NurDiyanaAziz"  target="_blank" rel="noopener noreferrer"><button className="btn2"><img src={Github} alt="github" className="btnImg2" /></button></a>
        <a href="https://www.linkedin.com/in/nurdiyanaabaziz/"  target="_blank" rel="noopener noreferrer"><button className="btn2"><img src={Linkedin} alt="linkedin" className="btnImg2" /></button></a>
      </span>
            </p>
  
        
      
     
       
       
      </div>
    </div>
  );
};

export default Footer;