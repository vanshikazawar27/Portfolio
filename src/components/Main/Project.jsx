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
const proyectImg = require.context('../../img', true);

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
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./quickcart.png`)}
                            alt='QuickCart'

                        />
                        <div className="content">
                            <h3>QuickCart</h3>
                            <p>
                                Modern E-Commerce Platform
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Next.js
                                <span> -</span> Tailwind CSS
                                <span> -</span> MongoDB
                            </p>
                            <a href="https://quickcart-tau-ten.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/vanshikazawar27/QuickCart" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Resolvelt.png`)}
                            alt='ResolveIt'

                        />
                        <div className="content">
                            <h3>ResolveIt</h3>
                            <p>
                                Complaint Management System
                            </p>
                            <p className="tecnologias">
                                Java
                                <span> -</span> MySQL
                                <span> -</span> Bootstrap
                                <span> -</span> Maven
                                <span> -</span> Chart.js
                            </p>
                            <a href="https://quickcart-tau-ten.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/vanshikazawar27/ResolveIt" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                More projects
            </Link> */}
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);
