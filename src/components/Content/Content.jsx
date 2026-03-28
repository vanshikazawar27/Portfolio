import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';

/* ReactScroll */
import { Link } from 'react-scroll';

/* Multi idioma */


const Content = () => (
    <div className="contenido">
        <ParticleHeaderBg/>
        <section className="inicio" id="inicio">
        
            <div className="titulo">
            
                <p data-aos="fade-up" data-aos-delay="600">
                    Hello
                </p>
                <h1 data-aos="fade-up" data-aos-delay="800">
                    I am Vanshika Zawar
                </h1>
                <p data-aos="fade-up" data-aos-delay="1000">
                    Full-stack developer
                </p>

                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/vanshikazawar/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/vanshikazawar27" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400"><i className="fab fa-github"></i></a>
                    {/* <a href="https://www.instagram.com/nahuelcarrizolc/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600"><i className="fab fa-instagram"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=5493815360966" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800"><i className="fab fa-whatsapp"></i></a> */}
                </div>
                <div className="wrapper">
                    <a className="button" href="https://www.linkedin.com/in/vanshikazawar/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200">
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <span>Linkedin</span>
                    </a>
                    <a className="button" href="https://github.com/vanshikazawar27" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400">
                        <div className="icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <span>Github</span>
                    </a>
                    <a className="button" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200">
                        <div className="icon">
                            <i className="fab fa-gmail"></i>
                        </div>
                        <span>Gmail</span>
                    </a>
                    {/* <a className="button" href="https://www.instagram.com/nahuelcarrizolc/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600">
                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <span>Instagram</span>
                    </a>
                    <a className="button" href="https://api.whatsapp.com/send?phone=5493815360966" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800">
                        <div className="icon">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <span>Whatsapp</span>
                    </a> */}
                </div>

                <Link to="sobre-mi" href="#sobre-mi">
                    <div className="scroll-down"></div>
                </Link>
            </div>
        </section>
    </div>
);

export default Content;