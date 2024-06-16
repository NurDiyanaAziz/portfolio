import React  from 'react';
import './works.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Proj1 from '../WorkBody/proj1';
import Proj2 from '../WorkBody/proj2';
import Proj3 from '../WorkBody/proj3';




const Works = () =>{

   
    return(
        <section id='works'>
            <h2 className='bounce-text'>My Portfolio</h2>
            <span className='workDesc'>Here's a selection of project that I've worked on. Most of them were built completely from scratch and some redesign of old website. </span>
        
            <span ></span>
            
            <div className='worksBar'>
            <Proj2 />
               
            </div>
            <div className='worksBar'>
            <Proj3 />
               
            </div>
            <div className='worksBar'>
            <Proj1 />
               
            </div>
            
        </section>
    );
}

export default Works