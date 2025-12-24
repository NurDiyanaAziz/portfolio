import React from 'react';
import './skills.css';
import webDev from'../../assets/7.png';
import appDev from'../../assets/3.png';
import des from'../../assets/design.png';


const Skills = () => {
    return (
        <section id='skills'>
            <h2 className='skillTitle'>What I do</h2>
            <p className='skillDesc'>
                Software Developer dedicated to building high-performance web and mobile solutions. With a degree in Computer Science and a passion for modern frameworks, I focus on creating seamless digital experiences through collaborative innovation and disciplined development. </p>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={webDev} alt='Web Development' className='skillBarImg'/>
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p>Experienced in building responsive applications using React, Angular, Spring Boot, and Python. I focus on high-performance code and seamless user experiences.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={appDev} alt='App Development' className='skillBarImg'/>
                    <div className="skillBarText">
                        <h2>App Development</h2>
                        <p>Proficient in Flutter and Dart for creating cross-platform mobile experiences that look and feel native on both iOS and Android.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={des} alt='Design' className='skillBarImg'/>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Skilled in Figma for prototyping and designing clean, modern interfaces that prioritize accessibility and visual impact.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;