import React, { useEffect } from 'react';
import './DarkMode.css'

const DarkMode = () => {
    let clickedClass = "clicked";
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme = "light";

    useEffect(() => {
        const body = document.body;

        const savedTheme = localStorage?.getItem("theme");
        const initialTheme = savedTheme === "dark" ? darkTheme : lightTheme;
        theme = initialTheme;

        body.classList.toggle(darkTheme, initialTheme === darkTheme);
        body.classList.toggle(lightTheme, initialTheme === lightTheme);

        const btn = document.getElementById("darkMode");
        if (btn) {
            btn.classList.toggle(clickedClass, initialTheme === darkTheme);
        }
    }, []);

    const switchTheme = (e) => {
        const body = document.body;

        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    };
    return (
        <div>
            <div
                    className={theme === "dark" ? clickedClass : ""}
                    id="darkMode"
                    onClick={(e) => switchTheme(e)}
                >
                <span><i className="fas fa-sun"></i></span>
                <span><i className="fas fa-moon"></i></span>
            </div>
        </div>
    );
};

export default DarkMode;