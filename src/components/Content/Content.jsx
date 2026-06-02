import React from 'react';
import './Content.css';
import Typical from 'react-typical';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';

/* ReactScroll */
import { Link } from 'react-scroll';

/* Image */
import meImg from '../../img/me.jpeg';

/* CV */
import cv from '../../cv/cv.pdf';

const Content = () => (
    <div className="contenido">
        <ParticleHeaderBg />
        <section className="inicio" id="inicio">

            <div className="hero-container">
                {/* ── Left Column: Text ── */}
                <div className="hero-text" data-aos="fade-right" data-aos-delay="400">
                    <p className="hero-greeting">Hello, I'm</p>

                    <h1 className="hero-name">
                        Vanshika Zawar
                    </h1>

                    <h2 className="hero-role">
                        And I'm a{' '}
                        <span className="typed-role">
                            <Typical
                                steps={[
                                    'Full-stack Developer', 2000,
                                    'Web Designer', 2000,
                                    'React Developer', 2000,
                                    'Problem Solver', 2000,
                                ]}
                                loop={Infinity}
                                wrapper="span"
                            />
                        </span>
                    </h2>

                    <p className="hero-description">
                        I have been working on web designing and web development. Constantly updating
                        the technologies I already learned, but also looking to learn new technologies
                        to enrich my skills and improve my good practices as a developer.
                    </p>

                    {/* Social Icons */}
                    <div className="hero-socials">
                        <a href="https://www.linkedin.com/in/vanshikazawar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/vanshikazawar27" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noopener noreferrer" aria-label="Email">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a href="https://x.com/vanshikazawar" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hero-buttons">
                        <a href={cv} target="_blank" rel="noopener noreferrer" download="Vanshika_Zawar_CV.pdf" className="btn-hire">
                            Download CV
                        </a>
                        <Link to="contactos" spy={true} offset={-150} href="#contactos" className="btn-contact">
                            Contact Me
                        </Link>
                    </div>
                </div>

                {/* ── Right Column: Profile Image ── */}
                <div className="hero-image-wrapper" data-aos="fade-left" data-aos-delay="600">
                    <div className="hero-image-ring">
                        <div className="hero-image-inner">
                            <img src={meImg} alt="Vanshika Zawar" className="hero-photo" />
                        </div>
                    </div>
                </div>
            </div>



            {/* Scroll down indicator */}
            <Link to="sobre-mi" href="#sobre-mi">
                <div className="scroll-down"></div>
            </Link>
        </section>
    </div>
);

export default Content;

