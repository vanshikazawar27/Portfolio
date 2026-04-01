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
const proyectsImg = require.context('../../img', true);

const Project = () => {
    const [estadoModal18, cambiarEstadoModal18] = useState(false);

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
                        <a onClick={() => cambiarEstadoModal18(!estadoModal18)}>
                            <img src={proyectsImg(`./quickcart.png`)} alt="QuickCart" className="projects__img" />
                        </a>
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
                                <span>Demo:</span> <a href="https://quickcart-tau-ten.vercel.app/" target="_blank" rel="noreferrer">https://quickcart-tau-ten.vercel.app/</a>
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



            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default Project;

