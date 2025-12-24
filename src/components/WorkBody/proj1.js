import './proj.css';
import React, { useState } from 'react';

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../assets/portfolio/alfateh', false, /\.(png|jpe?g|svg)$/));

const Proj1 = () => {
    const imageKeys = Object.keys(images);
    const [activeImg, setActiveImg] = useState(imageKeys[0]);

    return (
        <section className='sect reversed'>
            <div className='imgslide'>
                <div className="main-mobile-display">
                    <div className="phone-case">
                        <img src={images[activeImg]} alt="App Screen" className="display-img" />
                    </div>
                </div>
                {/* Thumbnails in a grid for consistency */}
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
                <h2 className='textTitle'>Cilik Al Fateh</h2>
                <p className='text'>
                   Develop a mobile application tailored specifically for guardians associated with the 'Cilik Al Fateh' website, focusing on key functionalities to streamline payments and access to academic details.
                    This mobile app aims to provide a user-friendly interface to enhance the overall experience for guardians, making it easier to manage their child's educational journey.</p>
                <p style={{color: 'var(--accent)', fontWeight: '600', marginTop: '1rem'}}>Stack:</p>
                <ul className='list1'>
                    <li>Flutter</li>
                    <li>Dart</li>
                    <li>Firebase</li>
                </ul>
            </div>
        </section>
    );
};

export default Proj1;