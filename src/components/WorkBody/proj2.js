import './proj.css';
import React, { useState } from 'react';

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../assets/portfolio/colipid', false, /\.(png|jpe?g|svg)$/));

const Proj2 = () => {
    const imageKeys = Object.keys(images);
    const [activeImg, setActiveImg] = useState(imageKeys[0]);

    return (
        <section className='sect reversed'>
            <div className='imgslide'>
                <div className="main-mobile-display">
                    <div className="phone-case">
                        <img src={images[activeImg]} alt="Health App Screen" className="display-img" />
                    </div>
                </div>
                
                {/* Updated to a Grid Layout */}
                <div className="thumb-grid">
                    {imageKeys.map((key) => (
                        <div 
                            key={key} 
                            className={`thumb-box ${activeImg === key ? 'active' : ''}`}
                            onMouseEnter={() => setActiveImg(key)}
                        >
                            <img src={images[key]} alt="preview" />
                        </div>
                    ))}
                </div>
            </div>

            <div className='textdesc'>
                <h2 className='textTitle'>Co-Lipid Diary & Fitness Advisor</h2>
                <p className='text'>
                    An app called Co-Lipid Diary that tracks health, lipid levels, and offers fitness advice using a recommender system.
                    The project aims to create a self-monitoring app for lipid levels, including treatment and recommendations for diet and exercise. It also involves developing a recommender system for diet and exercise, evaluating system efficiency through testing.
                </p>
                <p style={{color: 'var(--accent)', fontWeight: '600', marginTop: '1rem'}}>Stack:</p>
                <ul className='list1'>
                    <li>Flutter</li>
                    <li>Firebase</li>
                    <li>Recommender System</li>
                </ul>
            </div>
        </section>
    );
};

export default Proj2;