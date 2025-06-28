import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './healthImpact.scss';
import img1 from '../../assets/img/about/our_company/healthImpact-01.png';
import img2 from '../../assets/img/about/our_company/healthImpact-02.png';
import img3 from '../../assets/img/about/our_company/healthImpact-03.png';
import img4 from '../../assets/img/about/our_company/healthImpact-04.png';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';


const HealthImpact = () => {
    return (
        <>
            <Header />
            <main className="main">
                <section id="portfolio" className="portfolio section mt-5">
                    <Container className="section-title" data-aos="fade-up">
                        <div className="mt-5">
                            <span style={{ color: '#193440' }}>Our Health Impact</span>
                        </div>
                        <p className="fw-light fs-5">
                            Swasth Mitra’s work has translated into tangible improvements in community health and emergency care access:
                        </p>
                    </Container>

                    <Container>
                        <Row className="gy-4 align-items-center about-content" style={{ gap: '2rem' }}>
                            {/* Strengthening Community Health */}
                            <Col lg={5} data-aos="fade-up" data-aos-delay="200">
                                <img
                                    src={img1}
                                    className="img-fluid"
                                    alt="Strengthening Community Health"
                                />
                            </Col>
                            <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                                <h3>Strengthening Community Health</h3>
                                <p className="fw-light fs-5">
                                    Through free health camps, first-aid training workshops, and awareness drives, we reached over 10,000 people in 2024. These initiatives raised awareness of emergency preparedness and basic care, equipping citizens with life-saving skills and knowledge. For example, in Pune district we partnered with local schools to train students and teachers in emergency response, creating a multiplier effect of health awareness.
                                </p>
                            </Col>

                            {/* Lives Saved in Emergencies */}
                            <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                                <h3>Lives Saved in Emergencies</h3>
                                <p className="fw-light fs-5">
                                    Our rapid response network has been instrumental in critical situations. One notable case involved a heart attack patient in a rural village; a nearby Swasth Mitra volunteer provided CPR and coordinated an ambulance, saving the patient’s life. Stories like this—numerous across our service areas—underscore our impact. To date, over 2,000 emergency patients have received timely assistance through our coordination, with follow-up care support provided by partner hospitals.
                                </p>
                            </Col>
                            <Col lg={5} data-aos="fade-up" data-aos-delay="200">
                                <img
                                    src={img2}
                                    className="img-fluid"
                                    alt="Lives Saved in Emergencies"
                                />
                            </Col>

                            {/* Partnerships for Greater Reach */}
                            <Col lg={5} data-aos="fade-up" data-aos-delay="200">
                                <img
                                    src={img3}
                                    className="img-fluid"
                                    alt="Partnerships for Greater Reach"
                                />
                            </Col>
                            <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                                <h3>Partnerships for Greater Reach</h3>
                                <p className="fw-light fs-5">
                                    Collaborating with 30+ hospitals, NGOs, and government health departments has expanded our footprint. These partnerships allow Swasth Mitra to integrate emergency contact numbers, blood banks, and specialty care into our platform. In one initiative, our alliance with a regional ambulance service reduced average ambulance arrival time by 20% in participating districts.
                                </p>
                            </Col>

                            {/* Healthcare Accessibility */}
                            <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                                <h3>Healthcare Accessibility</h3>
                                <p className="fw-light fs-5">
                                    By bridging gaps between remote communities and medical facilities, we have improved access significantly. Surveys of Swasth Mitra users report over 80% satisfaction with the promptness and effectiveness of the assistance received. In underserved areas, our volunteers often act as the first point of contact, guiding patients through the healthcare system and overcoming language or mobility barriers.
                                    <br /><br />
                                    <strong>Volunteer and Social Impact:</strong> Beyond emergencies, Swasth Mitra volunteers contribute to social well-being. They regularly check on the elderly and chronically ill in their communities, ensuring ongoing support. Families often tell us they feel more secure knowing help is just a call away. This sense of communal care has strengthened social bonds and trust.
                                </p>
                            </Col>
                            <Col lg={5} data-aos="fade-up" data-aos-delay="200">
                                <img
                                    src={img4}
                                    className="img-fluid"
                                    alt="Healthcare Accessibility"
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

export default HealthImpact;
