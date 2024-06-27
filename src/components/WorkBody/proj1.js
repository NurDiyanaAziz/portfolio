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
  const images = importAll(require.context('../../assets/portfolio/alfateh', false, /\.(png|jpe?g|svg)$/));


const Proj1 = () => {
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
        <h2 className='textTitle'>Mobile App for Guardian Segment of 'Cilik Al Fateh'</h2>
        <span className='text'>Develop a mobile application tailored specifically for guardians associated with the 'Cilik Al Fateh' website, focusing on key functionalities to streamline payments and access to academic details.</span>
        <span className='text'>This mobile app aims to provide a user-friendly interface to enhance the overall experience for guardians, making it easier to manage their child's educational journey.</span>
        <span className='text'>Technologies Used:</span>
       <ul className='list1'>
       <li>Flutter Framework</li>
        <li>Dart</li>
        <li>Firebase Database</li>
               
        </ul>
       
        
        </div>
        <div className='imgslide'>
            <p className='textImage'>User Interface</p>
            
        <Slider {...settings}>
      {Object.keys(images).map((key) => (
        <div key={key}>
        <img className='img1' src={images[key]} alt={key} />
        <p>{key.split('.')[0]}</p> {/* Display the file name */}
      </div>
      ))}
    </Slider>
        </div>
            
    </section>
   
  );
};

export default Proj1;
