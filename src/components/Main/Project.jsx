import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */


/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
import quickcartImg from '../../img/quickcart.png';
import wandergoImg from '../../img/wandergo.png';
import FitFlowImg from "../../img/FitFlow.png";

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                Projects
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
    spaceBetween={30}
    loop={true}
    grabCursor={true}
    centeredSlides={true}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
    }}
    pagination={{
        clickable: true,
    }}
    modules={[Pagination, Autoplay]}
    breakpoints={{
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }}
    className="proyectos-slider mySwiper"
>
    {/* QuickCart */}
    <SwiperSlide className="caja">
        <img
            src={quickcartImg}
            alt="QuickCart"
        />

        <div className="content">
            <h3>QuickCart</h3>

            <p>
                Modern E-Commerce Platform
            </p>

            <p className="tecnologias">
                Next.js
                <span> - </span>
                React
                <span> - </span>
                Tailwind CSS
                <span> - </span>
                MongoDB
            </p>

            <a
                href="https://quickcart-tau-ten.vercel.app/"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>Demo</span>
            </a>

            <a
                href="https://github.com/vanshikazawar27/QuickCart"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer"
            >
                Repository
            </a>
            <a
                href="https://www.youtube.com/watch?v=-BSN9hWajEY"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer"
            >
                Video
            </a>
        </div>
    </SwiperSlide>

    {/* Wandergo AI */}
    <SwiperSlide className="caja">
        <img
            src={wandergoImg}
            alt="Wandergo-AI"
        />

        <div className="content">
            <h3>Wandergo-AI</h3>

            <p>
                AI-Powered Travel Planner
            </p>

            <p className="tecnologias">
                React
                <span> - </span>
                Node.js
                <span> - </span>
                Express.js
                <span> - </span>
                MongoDB
                <span> - </span>
                OpenRouter AI
            </p>

            <a
                href="https://wandergo-ai.vercel.app/"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>Demo</span>
            </a>

            <a
                href="https://github.com/vanshikazawar27/Wandergo-ai"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer"
            >
                Repository
            </a>
            <a
                href="https://www.youtube.com/watch?v=Eoz4yrEq2G8"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer"
            >
                Video
            </a>
        </div>
    </SwiperSlide>

    {/* FitFlow AI */}
    <SwiperSlide className="caja">
        <img
            src={FitFlowImg}
            alt="FitFlow"
        />

        <div className="content">
            <h3>FitFlow</h3>

            <p>
                AI Personal Fitness Coach
            </p>

            <p className="tecnologias">
                React
                <span> - </span>
                Node.js
                <span> - </span>
                Express.js
                <span> - </span>
                MongoDB
                <span> - </span>
                OpenRouter AI
                 <span> - </span>
                Google Gemini
            </p>

            <a
                href="https://fittfloww.vercel.app/"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>Demo</span>
            </a>

            <a
                href="https://github.com/vanshikazawar27/FitFlow"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer"
            >
                Repository
            </a>
            <a
                href="https://www.youtube.com/watch?v=KFe6IazGmoc"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer"
            >
                Video
            </a>
        </div>
    </SwiperSlide>
</Swiper>
                <div className="swiper-pagination"></div>
            </div>
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);
