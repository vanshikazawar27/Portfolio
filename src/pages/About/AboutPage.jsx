import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/cv.pdf';

/* Multi idioma */


/* Img */
import imgabout from '../../img/me.jpeg';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />
              
              <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
                  Download CV
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                Hi, I'm Vanshika Zawar
              </p>

              <div className="hide parrafo-active">
                <p>
                 I’m a Computer Science student with a strong curiosity for how technology shapes the world around us. I enjoy breaking down complex problems and turning ideas into practical, efficient solutions through code.                </p>

                <p>
                 I’m particularly interested in building projects that combine creativity with functionality—whether that’s developing web applications, exploring algorithms, or experimenting with new technologies. I’m always looking for opportunities to learn, improve, and collaborate with others who share a passion for innovation.                </p>
                <p>Beyond technical skills, I value consistency, problem-solving, and continuous growth. I believe in writing clean, maintainable code and approaching every project with attention to detail and a willingness to iterate.</p>
                <p> As I continue my journey in computer science, I aim to contribute to impactful projects and grow into a developer who not only builds solutions but also understands the people who use them.</p>
              
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>

          </div>

        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;