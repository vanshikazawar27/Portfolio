import React from 'react'
import './ProjectPage.css';

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

function ProjectApp() {
    return (
        <div>
            <HeaderPage />
            <ParticleBackground />
            <main>
                <section className="proyectos mas-proyect" id="proyectos">
                    <h1 className="heading">
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
                <section className="projects__grid apps" style={{ display: 'block', textAlign: 'center', minHeight: '30vh' }}>
                    <div style={{ marginTop: '5rem', color: 'var(--light-color-white)', fontSize: '2rem', fontWeight: 'bold' }}>
                        No apps currently available.
                    </div>
                </section>
            </main>
            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default ProjectApp;
