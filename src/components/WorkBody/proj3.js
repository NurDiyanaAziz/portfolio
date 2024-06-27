// src/components/ImageSlider.js
import './proj.css';
import React from 'react';
import Slider from 'react-slick';

function importAll(r) {
    let images = {};
    // eslint-disable-next-line array-callback-return
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('../../assets/portfolio/winkel', false, /\.(png|jpe?g|svg)$/));


const Proj3 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        autoplay: true,
        autoplaySpeed: 2500,
        
      };
      

  return (
    <section className='sect'>
        <div className='textdesc'>
        <h2 className='textTitle'>Winkel E-Commerce Website</h2>
        <span className='text'>Developing an e-commerce website for selling men's clothing involves conducting market research to understand the target audience and competition, selecting a suitable platform, designing an attractive and user-friendly interface.</span>
        <span className='text'>Creating a comprehensive product catalog with easy navigation, integrating secure payment gateways such as PayPal, implementing inventory management systems, setting up shipping options, ensuring website security and compliance with data protection regulations.</span>
        <span className='text'>Technologies Used:</span>
       <ul className='list1'>
       <li>Spring Boot</li>
        <li>Angular Framework</li>
        <li>Java</li>
        <li>TypeScript</li>
        <li>MySQL Database</li>
        <li>PayPal API</li>
        
        </ul>

        </div>
        <div className='imgslide'>
            <p className='textImage'>User Interface</p>
            
        <Slider {...settings}>
      {Object.keys(images).map((key) => (
      <div key={key}>
      <img className='img1' src={images[key]} alt={key} />
      <p>{key.split('.')[0]}</p> {/* Display the file name */}
    </div>))}
    </Slider>
        </div>
            
    </section>
   
  );
};

export default Proj3;
