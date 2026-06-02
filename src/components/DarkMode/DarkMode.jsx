import React, { useEffect, useState } from "react";
import "./DarkMode.css";

const DarkMode = () => {
    const clickedClass = "clicked";
    const lightTheme = "light";
    const darkTheme = "dark";

    const [theme, setTheme] = useState(lightTheme);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const initialTheme =
            savedTheme === darkTheme ? darkTheme : lightTheme;

        setTheme(initialTheme);

        document.body.classList.remove(lightTheme, darkTheme);
        document.body.classList.add(initialTheme);
    }, []);

    const switchTheme = () => {
        const newTheme =
            theme === darkTheme ? lightTheme : darkTheme;

        document.body.classList.remove(lightTheme, darkTheme);
        document.body.classList.add(newTheme);

        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return (
        <div>
            <div
                id="darkMode"
                className={theme === darkTheme ? clickedClass : ""}
                onClick={switchTheme}
            >
                <span>
                    <i className="fas fa-sun"></i>
                </span>
                <span>
                    <i className="fas fa-moon"></i>
                </span>
            </div>
        </div>
    );
};

export default DarkMode;