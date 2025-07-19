import React from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import './testimonial.scss';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonialVideos = [
    {
        id: 1,
        videoId: 'G3qnhJJRwY4',
    },
    {
        id: 2,
        videoId: 'fbJfeIcDR_0',
    },
    {
        id: 3,
        videoId: 'TFFgbvn2rPI',
    },
    {
        id: 4,
        videoId: 'TFFgbvn2rPI',
    },
    {
        id: 5,
        videoId: 'TFFgbvn2rPI',
    },
];

// Custom Arrow components
const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-prev" onClick={onClick}>
        <ArrowBackIosIcon />
    </div>
);

const NextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-next" onClick={onClick}>
        <ArrowForwardIosIcon />
    </div>
);

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials section">
            <Container className="section-title" data-aos="fade-up">
                <span className="description-title" style={{ color: '#0a5247' }}>
                    Testimonials
                </span>
            </Container>

            <Container>
                <Slider {...sliderSettings}>
                    {testimonialVideos.map((video) => (
                        <div key={video.id} className="testimonial-item d-flex justify-content-center p-3">
                            <iframe
                                width="100%"
                                height="400"
                                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&loop=1&playlist=${video.videoId}`}
                                title={`Testimonial Video ${video.id}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                        </div>
                    ))}
                </Slider>
            </Container>
        </section>
    );
};

export default Testimonials;
