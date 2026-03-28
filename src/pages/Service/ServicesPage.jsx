import React from 'react';
import './ServicesPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Accordion from './Accordion'


/* Multi idioma */


const Services = () => {
  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main className="service-page">
      <section className="servicios" id="servicios">
        <h2 className="heading">
            Expertise
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-drafting-compass"></i>
                <h3>
                    ADesign UX/UIboult me
                </h3>
                <p>
                    Design of attractive interfaces for both web and mobile users, making the most of the brand or product that the client wishes to exploit on their website
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-laptop"></i>
                <h3>
                    Web development
                </h3>
                <p>
                    Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website.
                </p>
            </div>
            {/* <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-chart-line"></i>
                <h3>
                    Digital marketing
                </h3>
                <p>
                    Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions, etc.
                </p>
            </div> */}
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i className="fas fa-wrench"></i>
                <h3>
                    Web maintenance
                </h3>
                <p>
                    Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions, etc.
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <i className="fas fa-search"></i>
                <h3>
                    Web positioning (SEO)
                </h3>
                <p>
                    Web positioning through SEO, so your website appears in the main search results according to your business, both in Google, Bing, or other internet search engines
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <i className="fas fa-tachometer-alt"></i>
                <h3>
                    Website optimization
                </h3>
                <p>
                    Complete optimization of your web page, improving loading speed, using optimized images, a good URL, to give a better experience to users who visit the website
                </p>
            </div>
        </div>
    </section>

  
      </main>


      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default Services;