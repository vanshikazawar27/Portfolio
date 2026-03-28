// import React, { useState } from 'react'
// import './ProjectPage.css';

// /* Modal */
// import Modal from "./Modal";

// /* React router */
// import { NavLink } from 'react-router-dom';

// /* Componet */
// import HeaderPage from '../../components/Header/HeaderPage';
// import Footer from '../../components/Footer/Footer';
// import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
// import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

// /* Multi idioma */


// /* Img */
// const proyectsImg = require.context('../../img', true);

// const ProjectGame = () => {
//     const [estadoModal4, cambiarEstadoModal4] = useState(false);
//     const [estadoModal3, cambiarEstadoModal3] = useState(false);
//     const [estadoModal2, cambiarEstadoModal2] = useState(false);
//     const [estadoModal1, cambiarEstadoModal1] = useState(false);


//     return (
//         <div>

//             <HeaderPage />

//             <ParticleBackground />

//             <main>
//                 <section className="proyectos mas-proyect" id="proyectos">
//                     <h1 className="heading">
//                         Projects
//                     </h1>
//                     <nav className="navbar nav-proj">
//                         <NavLink to="/project/" offset={-150} duration={500}>
//                             websites
//                         </NavLink>
//                         <NavLink to="/project/app" offset={-150} duration={500}>
//                             Apps
//                         </NavLink>
//                         {/* <NavLink to="/project/game" offset={-150} duration={500}>
//                             games
//                         </NavLink> */}
//                     </nav>
//                 </section>

//                 <section className="projects__grid games">
//                     <div className="projects__item">
//                         <a onClick={() => cambiarEstadoModal4(!estadoModal4)}>
//                             <img src={proyectsImg(`./proyecto-game-4.jpg`)} alt="" className="projects__img" />
//                         </a>
//                     </div>
//                     <div className="projects__item">
//                         <a onClick={() => cambiarEstadoModal3(!estadoModal3)}>
//                             <img src={proyectsImg(`./proyecto-game-3.jpg`)} alt="" className="projects__img" />
//                         </a>
//                     </div>
//                     <div className="projects__item">
//                         <a onClick={() => cambiarEstadoModal2(!estadoModal2)}>
//                             <img src={proyectsImg(`./proyecto-game-2.jpg`)} alt="" className="projects__img" />
//                         </a>
//                     </div>
//                     <div className="projects__item">
//                         <a onClick={() => cambiarEstadoModal1(!estadoModal1)}>
//                             <img src={proyectsImg(`./proyecto-game-1.jpg`)} alt="" className="projects__img" />
//                         </a>
//                     </div>
//                 </section>
//             </main>

//             <Modal
//                 estado={estadoModal4}
//                 cambiarEstado={cambiarEstadoModal4}
//             >
//                 <div className="content-modal">
//                     <div className="pw-content">
//                         <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-game-4.jpg`)} alt="" /></div>
//                         <div className="eins-modal-text">
//                             <p>
//                                 Memorama
//                             </p>
//                             <p>
//                                 You must guess the 2 pairs of cards in the shortest time and with fewer clicks.
//                             </p>
//                             <div className="eins-modal-text-2">
//                                 <span>Link:</span> <a href="https://nahuel61920.github.io/Memorama" target="_blank">https://nahuel61920.github.io/Memorama</a>
//                             </div>
//                             <div className="eins-modal-text-3">
//                                 <span>
//                                     Used technology:
//                                 </span>
//                                 <div className="eins-modal-tec">
//                                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
//                                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
//                                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
//                                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Modal>

//             <Modal
//                 estado={estadoModal3}
//                 cambiarEstado={cambiarEstadoModal3}
//             >
//                 <div className="content-modal">
//                     <div className="pw-content">
//                         <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-game-3.jpg`)} alt="" /></div>
//                         <div className="eins-modal-text">
//                             <p>
//                                 Chess game
//                             </p>
//                             <p>
//                                 A chess game that allows you to play against another user.
//                             </p>
//                             <div className="eins-modal-text-2">
//                                 <span>Link:</span> <a href="https://https://nahuel61920.github.io/Ajedrez2.0/" target="_blank">https://https://nahuel61920.github.io/Ajedrez</a>
//                             </div>
//                             <div className="eins-modal-text-3">
//                                 <span>
//                                     Used technology:
//                                 </span>
//                                 <div className="eins-modal-tec">
//                                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
//                                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
//                                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
//                                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Modal>

//             <Modal
//                 estado={estadoModal2}
//                 cambiarEstado={cambiarEstadoModal2}
//             >
//                 <div className="content-modal">
//                     <div className="pw-content">
//                         <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-game-2.jpg`)} alt="" /></div>
//                         <div className="eins-modal-text">
//                             <p>
//                                 Snake game
//                             </p>
//                             <p>
//                                 Inspired by the classic 90
//                             </p>
//                             <div className="eins-modal-text-2">
//                                 <span>Link:</span> <a href="https://nahuel61920.github.io/Juego-de-la-Serpiente/" target="_blank">https://nahuel61920.github.io/Juego-de-la-Serpiente/</a>
//                             </div>
//                             <div className="eins-modal-text-3">
//                                 <span>
//                                     Used technology:
//                                 </span>
//                                 <div className="eins-modal-tec">
//                                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
//                                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
//                                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Modal>

//             <Modal
//                 estado={estadoModal1}
//                 cambiarEstado={cambiarEstadoModal1}
//             >
//                 <div className="content-modal">
//                     <div className="pw-content">
//                         <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-game-1.jpg`)} alt="" /></div>
//                         <div className="eins-modal-text">
//                             <p>
//                                 Questions and answers
//                             </p>
//                             <p>
//                                 It has more than 400 questions with multiple options to answer.
//                             </p>
//                             <div className="eins-modal-text-2">
//                                 <span>Link:</span> <a href="https://nahuel61920.github.io/Preguntas-y-Respuestas/" target="_blank">https://nahuel61920.github.io/Preguntas-y-Respuestas/</a>
//                             </div>
//                             <div className="eins-modal-text-3">
//                                 <span>
//                                     Used technology:
//                                 </span>
//                                 <div className="eins-modal-tec">
//                                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
//                                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
//                                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Modal>

//             <ScrollToTop />

//             <Footer />
//         </div>
//     )
// }
// export default ProjectGame;
