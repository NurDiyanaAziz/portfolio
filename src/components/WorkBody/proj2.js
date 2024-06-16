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
  const images = importAll(require.context('../../assets/portfolio/colipid', false, /\.(png|jpe?g|svg)$/));


const Proj2 = () => {
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
        <h2 className='textTitle'>Co-lipid diary: health tracking lipid level and fitness advisor application using recommender technique</h2>
        <span className='text'>An app called Co-Lipid Diary that tracks health, lipid levels, and offers fitness advice using a recommender system.</span>
        <span className='text'>The project aims to create a self-monitoring app for lipid levels, including treatment and recommendations for diet and exercise. It also involves developing a recommender system for diet and exercise, evaluating system efficiency through testing.</span>
        
        <span className='text'>Technologies Used:</span>
       <ul>
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
    </div> ))}
    </Slider>
        </div>
            
    </section>
   
  );
};

export default Proj2;
