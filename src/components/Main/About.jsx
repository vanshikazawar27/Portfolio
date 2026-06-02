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
                <h4>
                    My name is Vanshika Zawar and I am a full stack developer.
                </h4>

                <p>
                    I’m a Computer Science student with a strong curiosity for how technology shapes the world around us. I enjoy breaking down complex problems and turning ideas into practical, efficient solutions through code.
                </p>
                <p>
                    I’m particularly interested in building projects that combine creativity with functionality—whether that’s developing web applications, exploring algorithms, or experimenting with new technologies. I’m always looking for opportunities to learn, improve, and collaborate with others who share a passion for innovation.
                </p>
                <p>
                    Beyond technical skills, I value consistency, problem-solving, and continuous growth. I believe in writing clean, maintainable code and approaching every project with attention to detail and a willingness to iterate.
                </p>
                <p>
                    As I continue my journey in computer science, I aim to contribute to impactful projects and grow into a developer who not only builds solutions but also understands the people who use them.
                </p>

                

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
