import './proj.css';
import React, { useState } from 'react';

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../assets/portfolio/winkel', false, /\.(png|jpe?g|svg)$/));

const Proj3 = () => {
    const imageKeys = Object.keys(images);
    const [activeImg, setActiveImg] = useState(imageKeys[0]);

    return (
        <section className='sect'> {/* Normal layout to alternate with Proj2 */}
            <div className='imgslide'>
                <div className="main-web-display">
                    <div className="browser-case">
                        <div className="browser-header">
                            <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                        </div>
                        <img src={images[activeImg]} alt="Website Screen" className="display-img" />
                    </div>
                </div>
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
                <h2 className='textTitle'>Winkel - E-Commerce</h2>
                <p className='text'>
                    Developing an e-commerce website for selling men's clothing involves conducting market research to understand the target audience and competition, selecting a suitable platform, designing an attractive and user-friendly interface.
Creating a comprehensive product catalog with easy navigation, integrating secure payment gateways such as PayPal, implementing inventory management systems, setting up shipping options, ensuring website security and compliance with data protection regulations.
                </p>
                <p style={{color: 'var(--accent)', fontWeight: '600', marginTop: '1rem'}}>Stack:</p>
                <ul className='list1'>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>Angular Framework</li>
                    <li>TypeScript</li>
                    <li>MySQL</li>
                    <li>PayPal API</li>
                </ul>
            </div>
        </section>
    );
};

export default Proj3;