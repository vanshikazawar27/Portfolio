import React from "react";
import "./Header.css";

/* React Router */
import { NavLink } from "react-router-dom";

const HeaderPage = () => {
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

            <NavLink className="logo" to="/">
                <p>
                    =(<span>Vanshika</span>)=
                </p>
            </NavLink>

            <nav className="navbar">
                <NavLink to="/">
                    Home
                </NavLink>

                <NavLink to="/about">
                    About me
                </NavLink>

                <NavLink to="/service">
                    Expertise
                </NavLink>

                <NavLink to="/project">
                    Projects
                </NavLink>
            </nav>
        </header>
    );
};

export default React.memo(HeaderPage);