import React, { useContext } from "react";
import './Header.css';
/* ReactScroll */
import { Link } from 'react-scroll';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

/* Language */



const Header = () => {
    // Buttom language
   // const idioma = useContext(langContext);
    // Menu desplegable
    const menuDesplegable = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("activar");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".site-header").classList.add("activar")
            } else document.querySelector(".site-header").classList.remove("activar")

            navbar.classList.remove("activar")
        }
    }

    return (
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={menuDesplegable}></div>

            <NavLink className="logo" to="/">
                <p>=(<span>Vanshika</span>)=</p>
            </NavLink>

            <nav className="navbar">
                <Link to="inicio" spy={true} offset={-150} href="#inicio">
                    Home
                </Link>
                <Link to="sobre-mi" spy={true} offset={-150} href="#sobre-mi">
                    About me
                </Link>
                <Link to="education" spy={true} offset={-150} href="#education">
                    Education
                </Link>
                <Link to="servicios" spy={true} offset={-150} href="#servicios">
                    Expertise
                </Link>
                <Link to="proyectos" spy={true} offset={-150} href="#proyectos">
                    Projects
                </Link>
                <Link to="contactos" spy={true} offset={-150} href="#contactos">
                    Contact
                </Link>
                {/* <div id="buttons">
                    <img onClick={() => idioma.selectLanguage('en-US')} src="https://nahuel61920.github.io/Portafoliovirtual/img/en.png" alt="EEUU" />
                    <img onClick={() => idioma.selectLanguage('es-ES')} src="https://nahuel61920.github.io/Portafoliovirtual/img/es.png" alt="España" />
                </div> */}
            </nav>
            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(Header);