import React from 'react';
import './skills.css';
import webDev from'../../assets/7.png';
import appDev from'../../assets/3.png';
import des from'../../assets/design.png';


const Skills = () =>{
    return(
       <section id='skills'>
        <span className='bounce-text'>What I do </span>
        <span className='skillDesc'>I graduated with a degree in Computer Science, equipped with a solid background in software development. I thrive in collaborative team projects and am dedicated to continuous learning and embracing new technologies. I am enthusiastic about applying my academic knowledge and coding passion in a dynamic professional setting. Currently seeking an entry-level position in software development to actively contribute to cutting-edge projects and enhance my technical skills.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={webDev} alt='webDev' className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Web Development</h2>
                    <p>Experienced web developer with a strong background in frontend and backend technologies, including Java, CSS, JavaScript, Python, Spring Boot, React and Angular. Skilled in developing responsive websites and web applications, with a focus on user experience and performance optimization. Strong problem-solving and analytical skills, with a passion for staying updated with the latest web development trends and technologies.</p>

                </div>
            </div>
            <div className="skillBar">
                <img src={appDev} alt='appDev' className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>App Development</h2>
                    <p>Experienced mobile app developer with expertise in Flutter and Dart, proficient in creating cross-platform mobile applications. Skilled in developing user-friendly interfaces and implementing complex functionalities. Proven ability to collaborate in cross-functional teams to deliver high-quality mobile apps.</p>

                </div>
            </div>
            <div className="skillBar">
                <img src={des} alt='des' className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Designs</h2>
                    <p>Experienced web and app designer using Figma. Skilled in creating visually appealing and user-friendly interfaces for web and mobile applications. Passionate about staying updated with the latest design trends and technologies.</p>

                </div>
            </div>
        </div>
       
       </section>
    )
}

export default Skills;