import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ourApproach.scss'; // optional for custom styling
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import img1 from '../../assets/img/about/our_company/our_approach-01.png';
import img2 from '../../assets/img/about/our_company/our_approach-02.png';
import img3 from '../../assets/img/about/our_company/our_approach-03.png';
import img4 from '../../assets/img/about/our_company/our_approach-04.png';



const OurApproach = () => {
    return (
        <>
            <Header />
            <main className="main">
                <section id="portfolio" className="portfolio section mt-5">
                    <Container className="section-title" data-aos="fade-up">
                        <div className="mt-5">
                            <span style={{ color: '#193440' }}>Our Approach</span>
                        </div>
                        <p className="fw-light fs-5">
                            At Swasth Mitra, we combine cutting-edge technology with human compassion to build an effective emergency response network. Our approach centers on three key pillars:
                        </p>
                    </Container>

                    <Container>
                        <Row className="gy-4 align-items-center about-content" style={{ gap: '2rem' }}>
                            {/* Community-Centric Network */}
                            <Col lg={5} data-aos="fade-up" data-aos-delay="200">
                                <img
                                    src={img1}
                                    className="img-fluid"
                                    alt="Community-Centric Network"
                                />
                            </Col>
                            <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                                <h3>Community-Centric Network</h3>
                                <p className="fw-light fs-5">
                                    We cultivate a local ecosystem of trained volunteers (“Swasth Mitras”), community health workers, and partner organizations. By empowering residents to assist one another, we create resilient support systems. Swasth Mitras conduct regular health workshops and awareness programs, fostering a culture of preparedness and mutual aid within neighborhoods.
                                </p>
                            </Col>

                            {/* Innovative Technology Platform */}
                            <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                                <h3>Innovative Technology Platform</h3>
                                <p className="fw-light fs-5">
                                    Our mobile platform and helpline are the backbone of fast response. The Swasth Mitra app uses real-time geolocation to identify nearby volunteers and medical facilities when an emergency is reported. Notifications are sent instantly, enabling our network to spring into action. We also maintain a database of local healthcare resources (ambulances, blood banks, hospitals) accessible through the app, ensuring quick coordination.
                                </p>
                            </Col>
                            <Col lg={5} data-aos="fade-up" data-aos-delay="200">
                                <img
                                    src={img2}
                                    className="img-fluid"
                                    alt="Innovative Technology"
                                />
                            </Col>

                            {/* Coordinated Emergency Response */}
                            <Col lg={5} data-aos="fade-up" data-aos-delay="200">
                                <img
                                    src={img3}
                                    className="img-fluid"
                                    alt="Coordinated Emergency Response"
                                />
                            </Col>
                            <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                                <h3>Coordinated Emergency Response</h3>
                                <p className="fw-light fs-5">
                                    We integrate with local emergency services to streamline aid. When a request comes in, our system automatically alerts the nearest ambulance units and medical teams, while dispatching Swasth Mitas en route. Communication channels keep patients, families, and responders informed. This synchronized effort dramatically reduces response times. In addition, we operate a 24/7 command center that monitors active cases and provides guidance to Swasth Mitras in the field.
                                </p>
                            </Col>

                            {/* Continuous Improvement */}
                            <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                                <h3>Continuous Improvement</h3>
                                <p className="fw-light fs-5">
                                    Feedback from every incident is collected to refine our processes. We analyze response data to identify gaps and optimize our network. Regular training sessions and simulations with volunteers and emergency personnel ensure readiness. By harnessing data and community input, we evolve our services to meet real needs more effectively.
                                </p>
                            </Col>
                            <Col lg={5} data-aos="fade-up" data-aos-delay="200">
                                <img
                                    src={img4}
                                    className="img-fluid"
                                    alt="Continuous Improvement"
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default OurApproach;
