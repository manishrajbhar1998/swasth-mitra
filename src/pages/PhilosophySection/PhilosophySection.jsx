import React from "react";
import './philosophySection.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import AOS from "aos";
import img from '../../assets/img/philosipy.png';

export default function PhilosophySection() {
    React.useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <section id="portfolio" className="portfolio section bg-color">
            <div className="container section-title" data-aos="fade-up">
                <div>
                    <span style={{ color: "#193440" }}>Our Philosophy</span>
                    <p className="fs-5 fw-medium" style={{ color: "#225450" }}>
                        Bridging Gaps, Saving Lives
                    </p>
                </div>
            </div>

            <div className="container">
                <div
                    className="row position-relative align-items-center"
                    data-aos="fade-up"
                >
                    <div className="col-lg-7">
                        <img
                            src={img}
                            alt="philosophy"
                            className="img-fluid"
                        />
                    </div>

                    <div className="col-lg-6 position-absolute philisophy-text">
                        <div className="content-text">
                            <Swiper
                                modules={[Pagination]}
                                pagination={{ clickable: true }}
                                className="philosophy-swiper-1"
                            >
                                <SwiperSlide>
                                    At Swasth Mitra, we believe in building a digitally connected
                                    healthcare ecosystem where timely care is a right, not a
                                    privilege. We envision a system where every individual—from
                                    urban centers to remote villages—can access life-saving
                                    support whenever they need it. By uniting communities,
                                    hospitals, and trusted healthcare professionals through a
                                    seamless digital platform, we ensure that no call for help
                                    goes unanswered.
                                </SwiperSlide>
                                <SwiperSlide>
                                    Our mission is to prioritize life-saving responses during
                                    emergencies, mobilizing trained volunteers, medical staff, and
                                    technology to reach those in need rapidly. We are committed to
                                    delivering continuous support and preventive health guidance,
                                    empowering people to lead healthier lives long before
                                    emergencies strike. In every situation, Swasth Mitra stands
                                    ready—ensuring medical help is accessible, proactive, and
                                    personal.
                                </SwiperSlide>
                                <SwiperSlide>
                                    By leveraging technology for timely access to medical services
                                    and collaborating with trusted hospitals and healthcare
                                    professionals, we strive to create a system where care is
                                    accessible, proactive, and personal—for everyone, everywhere.
                                    Our goal is to empower individuals with preventive guidance
                                    and community support, making healthcare inclusive and
                                    responsive across all regions.
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
