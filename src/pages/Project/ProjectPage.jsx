import React, { useState } from 'react';
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Img */
const proyectsImg = require.context('../../img', false);

// Ensure webpack includes both images used by this page
proyectsImg.keys().forEach(() => {});

const Project = () => {
    const [estadoModal18, cambiarEstadoModal18] = useState(false);
    const [estadoModal19, cambiarEstadoModal19] = useState(false);

    return (
        <div>
            <HeaderPage />
            <ParticleBackground />
            <main>
                <section className="proyectos mas-proyect" id="proyectos">
                    <h1 className="heading" data-section="Nav" data-value="projects">
                        Projects
                    </h1>
                    <nav className="navbar nav-proj">
                        <NavLink to="/project" offset={-150} duration={500}>
                            websites
                        </NavLink>
                        <NavLink to="/project/app" offset={-150} duration={500}>
                            Apps
                        </NavLink>
                    </nav>
                </section>

                <section className="projects__grid paginas-web">
                    <div className="projects__item">
                        <button type="button" onClick={() => cambiarEstadoModal18(!estadoModal18)}>
                            <img src={proyectsImg(`./quickcart.png`)} alt="QuickCart" className="projects__img" />
                        </button>
                    </div>

                    <div className="projects__item">
                        <button type="button" onClick={() => cambiarEstadoModal19(!estadoModal19)}>
                            <img src={proyectsImg(`./wandergo.png`)} alt="Wandergo-AI" className="projects__img" />
                        </button>
                    </div>
                </section>

            </main>

            <Modal
                estado={estadoModal18}
                cambiarEstado={cambiarEstadoModal18}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImg(`./quickcart.png`)} alt="QuickCart" /></div>
                        <div className="eins-modal-text">
                            <p>
                                QuickCart - Modern E-Commerce Platform
                            </p>
                            <p>
                                A full-stack, modern e-commerce platform built with Next.js 15, featuring user authentication, product management, shopping cart, wishlist functionality, and seller dashboard.
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Repo:</span> <a href="https://github.com/vanshikazawar27/QuickCart" target="_blank" rel="noreferrer">https://github.com/vanshikazawar27/QuickCart</a><br/>
                                <span>Live:</span> <a href="https://quickcart-tau-ten.vercel.app/" target="_blank" rel="noreferrer">https://quickcart-tau-ten.vercel.app/</a>
                                <span>Demo:</span>{" "}
                    <a
                        href="https://www.youtube.com/watch?v=-BSN9hWajEY"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Demo
                    </a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>Used technology:</span>
                                <div className="eins-modal-tec">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="Tailwind CSS" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
    estado={estadoModal19}
    cambiarEstado={cambiarEstadoModal19}
>
    <div className="content-modal">
        <div className="pw-content">
            <div className="eins-modal-preview">
                <img
                    src={proyectsImg(`./wandergo.png`)}
                    alt="Wandergo-AI"
                />
            </div>

            <div className="eins-modal-text">
                <p>
                    Wandergo-AI – AI Travel Planner
                </p>

                <p>
                    An AI-powered travel planning platform that generates
                    personalized itineraries based on destination, budget,
                    trip duration, and user preferences. The application
                    features AI-generated travel recommendations, interactive
                    maps, secure authentication, PDF itinerary export, trip
                    saving, and shareable travel plans.
                </p>

                <div className="eins-modal-text-2">
                    <span>Repo:</span>{" "}
                    <a
                        href="https://github.com/vanshikazawar27/Wandergo-ai"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub Repository
                    </a>
                    <br />

                    <span>Live:</span>{" "}
                    <a
                        href="https://wandergo-ai.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live 
                    </a>

                    <span>Demo:</span>{" "}
                    <a
                        href="https://youtu.be/Eoz4yrEq2G8"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Demo
                    </a>
                </div>

                <div className="eins-modal-text-3">
                    <span>Tech Stack:</span>

                    <div className="eins-modal-tec">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                            alt="React"
                        />

                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                            alt="Node.js"
                        />

                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                            alt="Express.js"
                        />

                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
                            alt="MongoDB"
                        />

                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                            alt="Tailwind CSS"
                        />
                    </div>

                    <p className="tech-summary">
                        React • Node.js • Express.js • MongoDB • Tailwind CSS • JWT Authentication • OpenRouter AI • Google Maps API
                    </p>
                </div>
            </div>
        </div>
    </div>
</Modal>




            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default Project;

