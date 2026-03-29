import React from 'react';
import './Expertise.css';

const Expertise = () => (
    <section className="sobre-mi" id="servicios">
        <h2 className="heading">Expertise</h2>
        <div className="container">
            <div className="exp-block" data-aos="fade-up" data-aos-delay="100">
                <div className="exp-card-grid">
                    <div className="exp-skill-card">
                        <img alt="HTML" className="exp-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h4 className="exp-card-name">HTML</h4>
                        <p className="exp-card-info">More than a year of professional experience in this language, allows me to perform without problems in the industry.</p>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="CSS" className="exp-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h4 className="exp-card-name">CSS</h4>
                        <p className="exp-card-info">More than a year of work experience in this language, I use it daily to develop web designs and interfaces.</p>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="Javascript" className="exp-card-img" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" />
                        <h4 className="exp-card-name">Javascript</h4>
                        <p className="exp-card-info">A year of experience using it in the front-end and back-end branch, allowed me to familiarize myself with the language.</p>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="Bootstrap" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        <h4 className="exp-card-name">Bootstrap</h4>
                        <p className="exp-card-info">Less than a year using this framework, even so, I used it in countless work projects, which allowed me to get to know it for the most part.</p>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="NextJs" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                        <h4 className="exp-card-name">NextJs</h4>
                        <p className="exp-card-info">I have hands-on experience building modern web applications using Next.js, focusing on performance, scalability, and clean architecture.</p>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="ReactJs" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h4 className="exp-card-name">ReactJs</h4>
                        <p className="exp-card-info">More than a year using this JavaScript framework, carrying out multiple personal and work projects.</p>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="NodeJs" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <h4 className="exp-card-name">NodeJs</h4>
                        <p className="exp-card-info">It is the cross-platform runtime environment that I use to make my web applications scalable.</p>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="Express" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                        <h4 className="exp-card-name">Express</h4>
                        <p className="exp-card-info">It is a framework that I use mostly to be able to manage my APIs in the best way and my http execution model.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(Expertise);
