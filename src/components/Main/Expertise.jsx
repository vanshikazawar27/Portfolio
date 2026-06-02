import React from 'react';
import './Expertise.css';

const Expertise = () => (
    <section className="sobre-mi" id="servicios">
        <h2 className="heading">Skills</h2>
        <div className="container">
            <div className="exp-block" data-aos="fade-up" data-aos-delay="100">
                <div className="exp-card-grid">
                    <div className="exp-skill-card">
                        <img alt="HTML" className="exp-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h4 className="exp-card-name">HTML</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="CSS" className="exp-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h4 className="exp-card-name">CSS</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="Js" className="exp-card-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
                        <h4 className="exp-card-name">JavaScript</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="Bootstrap" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        <h4 className="exp-card-name">Bootstrap</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="React" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h4 className="exp-card-name">React</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="Typescript" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                        <h4 className="exp-card-name">TypeScript</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="Tailwind" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
                        <h4 className="exp-card-name">Tailwind</h4>
                    </div>

                    <div className="exp-skill-card">
                        <img alt="Nodejs" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicons@latest/icons/nodejs/nodejs-original.svg" />
                        <h4 className="exp-card-name">NodeJs</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="Java" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                        <h4 className="exp-card-name">Java</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="PHP" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                        <h4 className="exp-card-name">PHP</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="MySQL" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                        <h4 className="exp-card-name">MySQL</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="PostgreSQL" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                        <h4 className="exp-card-name">PostgreSQL</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="MongoDB" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h4 className="exp-card-name">MongoDB</h4>
                    </div>

                    <div className="exp-skill-card">
                        <img alt="Figma" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                        <h4 className="exp-card-name">Figma</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="Photoshop" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" />
                        <h4 className="exp-card-name">Photoshop</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="VS Code" className="exp-card-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" />
                        <h4 className="exp-card-name">VS Code</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="Git" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                        <h4 className="exp-card-name">Git</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="GitHub" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                        <h4 className="exp-card-name">GitHub</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="Vercel" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" />
                        <h4 className="exp-card-name">Vercel</h4>
                    </div>
                    <div className="exp-skill-card">
                        <img alt="Netlify" className="exp-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original-wordmark.svg" />
                        <h4 className="exp-card-name">Netlify</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(Expertise);

