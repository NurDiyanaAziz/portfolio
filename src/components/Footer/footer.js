import React from "react";
import "./footer.css";
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="footer">
      
      <div className="f-content">
        <p>
        <span>@2024</span>
        </p>
        <p>
          
        <span>nurdiyanaabaziz26@gmail.com</span>
        </p>
        <p>
        <span> <Link><button className="btn2"><img src={Github} alt="github" className="btnImg2" /></button>
                <button className="btn2"><img src={Linkedin} alt="linkedin" className="btnImg2" /></button></Link>
      </span>
            </p>
  
        
      
     
       
       
      </div>
    </div>
  );
};

export default Footer;