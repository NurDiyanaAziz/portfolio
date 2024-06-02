import React from 'react';
import './works.css';
import { Swiper,SwiperSlide } from 'swiper/react';



const Works = () =>{
    return(
        <section id='works'>
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className='worksDesc'></span>
            <div className=''>
                <img src="" alt="" className='workImg' />
                <img src="" alt="" className='workImg' />
                <img src="" alt="" className='workImg' />
                <img src="" alt="" className='workImg' />
                <img src="" alt="" className='workImg' />
                <img src="" alt="" className='workImg' />
            </div>
        </section>
    );
}

export default Works