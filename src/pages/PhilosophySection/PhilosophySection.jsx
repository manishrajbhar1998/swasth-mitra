import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./philosophySection.scss";
import img1 from './../../assets/img/our-philosophy/1.png';
import img2 from './../../assets/img/our-philosophy/2.png';
import img3 from './../../assets/img/our-philosophy/3.png';


const PhilosophySection = () => {
    return (
        <section className="slider-section">
            <div className="container section-title" data-aos="fade-up">
                <div>
                    <span style={{ color: "#193440" }}>Our Philosophy</span>
                    <p className="fw-medium" style={{ color: "#225450", padding: "0 10px", fontSize: "24px", textAlign: "center" }}>
                        Bridging Gaps, Saving Lives
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    {/* Image Slider */}
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="image-slider-container">
                            <Swiper
                                modules={[Autoplay]}
                                pagination={{ clickable: false }}
                                autoplay={{ delay: 4000 }}
                                loop
                                className="image-slider"
                            >
                                <SwiperSlide>
                                    <img
                                        src={img1}
                                        alt="Healthcare Ecosystem"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={img2}
                                        alt="Emergency Response"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={img3}
                                        alt="Technology in Healthcare"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                    {/* Content Slider */}
                    <div className="col-lg-6">
                        <div className="content-slider-container">
                            <Swiper
                                modules={[Autoplay]}
                                pagination={{ clickable: false }}
                                autoplay={{ delay: 4000 }}
                                loop
                                className="content-slider"
                            >
                                <SwiperSlide>
                                    <div className="content-slide">
                                        <h3>From Prevention to Action, We Stand By You</h3>
                                        <p>
                                            At Swasth Mitra, we believe in building a digitally connected healthcare
                                            ecosystem where timely care is a right, not a privilege. We envision a
                                            system where every individual—from urban centers to remote villages—can
                                            access life-saving support whenever they need it. By uniting communities,
                                            hospitals, and trusted healthcare professionals through a seamless digital
                                            platform, we ensure that no call for help goes unanswered.
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="content-slide">
                                        <h3>Every Life Counts. Every Second Matters</h3>
                                        <p>
                                            Our mission is to prioritize life-saving responses during emergencies,
                                            mobilizing trained volunteers, medical staff, and technology to reach
                                            those in need rapidly. We are committed to delivering continuous support
                                            and preventive health guidance, empowering people to lead healthier lives
                                            long before emergencies strike. In every situation, Swasth Mitra stands
                                            ready—ensuring medical help is accessible, proactive, and personal.
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="content-slide">
                                        <h3>Your Emergency Partner, Always Ready</h3>
                                        <p>
                                            By leveraging technology for timely access to medical services and
                                            collaborating with trusted hospitals and healthcare professionals, we
                                            strive to create a system where care is accessible, proactive, and
                                            personal—for everyone, everywhere. Our goal is to empower individuals with
                                            preventive guidance and community support, making healthcare inclusive and
                                            responsive across all regions.
                                        </p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
