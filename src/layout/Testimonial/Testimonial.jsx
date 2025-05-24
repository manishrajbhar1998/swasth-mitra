import React from 'react';
import './testimonial.scss';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import Slider from 'react-slick';

const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200, // screens <= 1200px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992, // screens <= 992px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600, // screens <= 600px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div className='testimonial-wrapper'>
            <div className='header'>
                <p className='liner'></p>
                <h3 className='title'>Testimonial</h3>
            </div>
            <Slider {...settings} className='testimonial-slider'>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </Slider>
        </div>
    )
}

export default Testimonial
