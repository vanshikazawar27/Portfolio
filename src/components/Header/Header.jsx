import React from "react";
import "./Header.css";

/* ReactScroll */
import { Link } from "react-scroll";

/* DarkMode */
import DarkMode from "../DarkMode/DarkMode";

const Header = () => {
    const menuDesplegable = () => {
        let navbar = document.querySelector(".navbar");
        navbar.classList.toggle("activar");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document
                    .querySelector(".site-header")
                    .classList.add("activar");
            } else {
                document
                    .querySelector(".site-header")
                    .classList.remove("activar");
            }

            navbar.classList.remove("activar");
        };
    };

    return (
        <header className="site-header">
            <div
                id="menu-btn"
                className="fas fa-bars"
                onClick={menuDesplegable}
            ></div>

            <nav className="navbar">
                <Link to="inicio" spy={true} offset={-150}>
                    Home
                </Link>

                <Link to="sobre-mi" spy={true} offset={-150}>
                    About me
                </Link>

                <Link to="education" spy={true} offset={-150}>
                    Education
                </Link>

                <Link to="servicios" spy={true} offset={-150}>
                    Skills
                </Link>

                <Link to="proyectos" spy={true} offset={-150}>
                    Projects
                </Link>

                <Link to="certificates" spy={true} offset={-150}>
                    Certificates
                </Link>

                <Link to="contactos" spy={true} offset={-150}>
                    Contact
                </Link>

                <div className="dark-mode-container">
                    <DarkMode />
                </div>
            </nav>
        </header>
    );
};

export default React.memo(Header);