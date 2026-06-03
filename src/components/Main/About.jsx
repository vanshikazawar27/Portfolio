import React from 'react';
import '../../pages/About/AboutPage.css'


import cv from '../../cv/cv.pdf';

/* Multi idioma */


const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            About me
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    who I am
                </h3>
                <p>
                    My name is Vanshika Zawar, and I am a 3rd year B.Tech Computer Science Engineering student and a Full Stack Developer. I have a strong interest in software development and a deep curiosity for how technology can solve real-world problems.                </p>

                <p>
                    I enjoy building web applications that combine creativity with functionality, and I am passionate about turning ideas into efficient, scalable, and user-friendly solutions. My work mainly focuses on full stack development using technologies like React, Node.js, Express, and MongoDB.                </p>
                <p>
                    I am continuously learning and exploring new technologies, with a particular interest in AI integration, system design, and problem-solving. I believe in writing clean, maintainable code and improving through consistent practice and real project experience.                </p>
                <p>
                    My goal is to grow as a developer who not only builds impactful applications but also understands user needs and delivers meaningful digital experiences.                </p>
                {/* <p>
                    As I continue my journey in computer science, I aim to contribute to impactful projects and grow into a developer who not only builds solutions but also understands the people who use them.
                </p> */}

                

                <div className="mas-info">
                    
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo  buttonDownload">
                         Download CV
                     </a>
                </div>
            </div>


        </div>
    </section>
);

export default React.memo(About);
