import React from 'react';
import './ourCompany.scss';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsEyeFill, BsBullseye, BsStars } from 'react-icons/bs';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import img1 from '../../assets/img/about/our_company/our_company-01.png'
import img2 from '../../assets/img/about/our_company/our_company-02.png'
import img3 from '../../assets/img/about/our_company/our_company-03.png'


const OurCompany = () => {
    return (
        <>
            <Header />
            <div className="main" style={{ marginTop: '120px' }}>
                <Container className="section-title" data-aos="fade-up">
                    <div className="my-2">
                        <span style={{ color: '#193440' }}>Our Company</span>
                    </div>
                </Container>

                <section id="about" className="about section">
                    <Container>
                        <Row className="gy-4 align-items-center about-content" style={{ gap: '2rem' }}>
                            <Col lg={5} data-aos="fade-up" data-aos-delay="200">
                                <img
                                    src={img1}
                                    className="img-fluid"
                                    alt=""
                                />
                            </Col>

                            <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                                <h3>Your Lifeline for Every Medical Emergency.</h3>
                                <p className="fw-light fs-5">
                                    Swasth Mitra is a community-driven health support platform dedicated to making quality medical care accessible to everyone, especially during urgent situations. We empower individuals in need by connecting them instantly with nearby medical resources, volunteer first-responders, and emergency services. Our mission is to leverage technology and a vast volunteer network to ensure no one faces a medical emergency alone. Through partnerships with local hospitals, clinics, and NGOs, we amplify community support and responsiveness across regions.
                                </p>
                            </Col>

                            <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                                <h3>2024 at a Glance</h3>
                                <p className="fw-light fs-5">
                                    Community Reach: Operating in 50+ cities across the region, serving diverse urban and rural populations.
                                </p>
                                <p className="fw-light fs-5">
                                    Member Engagement: Supporting a growing network of 20,000+ registered users, including patients, caretakers, and volunteers.
                                </p>
                                <p className="fw-light fs-5">
                                    Emergency Responses: Coordinated over 5,000 emergency requests this year, connecting individuals with prompt medical assistance.
                                </p>
                                <p className="fw-light fs-5">
                                    Volunteer Network: Energized 2,000+ active volunteers trained in first aid and crisis response, ready to assist communities.
                                </p>
                                <p className="fw-light fs-5">
                                    Partner Organizations: Collaborated with 30+ healthcare partners, including hospitals and NGOs, to expand our impact.
                                </p>
                            </Col>

                            <Col lg={5} data-aos="fade-up" data-aos-delay="200">
                                <img
                                    src={img2}
                                    className="img-fluid"
                                    alt=""
                                />
                            </Col>

                            <Col lg={5} data-aos="fade-up" data-aos-delay="200">
                                <img
                                    src={img3}
                                    className="img-fluid"
                                    alt=""
                                />
                            </Col>

                            <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                                <h3>Impact Numbers</h3>
                                <p className="fw-light fs-5">
                                    Cities Served: 50+ cities and towns, across multiple states.
                                </p>
                                <p className="fw-light fs-5">
                                    Emergency Responses Coordinated: 5,000+ urgent medical assistance requests managed swiftly.
                                </p>
                                <p className="fw-light fs-5">
                                    Partner Organizations: 30+ trusted healthcare institutions and community groups.
                                </p>
                                <p className="fw-light fs-5">
                                    Community Volunteers: 2,000+ trained Swasth Mitras actively supporting their neighborhoods.
                                </p>
                                <p className="fw-light fs-5">
                                    Monthly Growth: User registrations and volunteer sign-ups growing by 10–15% each month.
                                </p>
                            </Col>
                        </Row>

                        <Container className="my-5">
                            <Row className="g-4">
                                {/* Vision */}
                                <Col md={4}>
                                    <Card className="h-100 border-0 shadow-lg bg-blue-gradient text-center">
                                        <Card.Body>
                                            <div className="icon-circle bg-primary bg-opacity-25">
                                                <BsEyeFill className="fs-3 text-primary" />
                                            </div>
                                            <h5 className="fw-bold text-primary">Vision</h5>
                                            <p className="mt-3 text-dark">
                                                Empower every community with the ability to respond effectively to medical emergencies, ensuring no life is lost due to lack of timely care.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Mission */}
                                <Col md={4}>
                                    <Card className="h-100 border-0 shadow-lg bg-green-gradient text-center">
                                        <Card.Body>
                                            <div className="icon-circle bg-success bg-opacity-25">
                                                <BsBullseye className="fs-3 text-success" />
                                            </div>
                                            <h5 className="fw-bold text-success">Mission</h5>
                                            <p className="mt-3 text-dark">
                                                To leverage innovative technology and a community-centric model to deliver immediate, accessible health assistance. We connect those in need with local Swasth Mitras, healthcare professionals, and emergency services 24/7.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Values */}
                                <Col md={4}>
                                    <Card className="h-100 border-0 shadow-lg bg-yellow-gradient">
                                        <Card.Body>
                                            <div className="text-center mb-3">
                                                <div className="icon-circle bg-warning bg-opacity-25">
                                                    <BsStars className="fs-3 text-warning" />
                                                </div>
                                            </div>
                                            <h5 className="card-title text-center fw-bold text-warning">Values</h5>
                                            <p><strong>Compassion:</strong> We put people’s health and well-being first.</p>
                                            <p><strong>Accessibility:</strong> Quality healthcare support is within everyone’s reach.</p>
                                            <p><strong>Collaboration:</strong> We build strong partnerships across communities and institutions.</p>
                                            <p><strong>Innovation:</strong> We embrace technology to enhance emergency response and care.</p>
                                            <p><strong>Integrity:</strong> We operate transparently and responsibly in all our efforts.</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default OurCompany;
