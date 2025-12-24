import React from 'react';
import './works.css';
import Proj1 from '../WorkBody/proj1';
import Proj2 from '../WorkBody/proj2';
import Proj3 from '../WorkBody/proj3';

const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>My Portfolio</h2>
            <p className='workDesc'>
                Here's a selection of projects that I've developed. Most were built 
                from scratch, focusing on clean architecture and intuitive user interfaces.
            </p>
        
            <div className='worksContainer'>
                <div className='projectWrapper'>
                    <Proj1 />
                </div>
                <div className='projectWrapper'>
                    <Proj2 />
                </div>
                <div className='projectWrapper'>
                    <Proj3 />
                </div>
            </div>
        </section>
    );
}

export default Works;