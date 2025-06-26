import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './testimonial.scss';

const testimonialVideos = [
    {
        id: 1,
        src: 'https://www.youtube.com/embed/G3qnhJJRwY4?si=CgiIdTHUokzRe_o7',
        delay: 100,
    },
    {
        id: 2,
        src: 'https://www.youtube.com/embed/fbJfeIcDR_0?si=M-91M1I05FV9DCUc',
        delay: 200,
    },
    {
        id: 3,
        src: 'https://www.youtube.com/embed/TFFgbvn2rPI?si=HqG90JQST7FfPJmv',
        delay: 300,
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials section">
            <Container className="section-title" data-aos="fade-up">
                <div>
                    <span className="description-title" style={{ color: '#0a5247' }}>Testimonials</span>
                </div>
            </Container>

            <Container>
                <Row className="gy-4">
                    {testimonialVideos.map((video) => (
                        <Col lg={4} key={video.id} data-aos="fade-up" data-aos-delay={video.delay}>
                            <div className="testimonial-item d-flex justify-content-center">
                                <iframe
                                    width="100%"
                                    height="400"
                                    src={video.src}
                                    title={`Testimonial Video ${video.id}`}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
