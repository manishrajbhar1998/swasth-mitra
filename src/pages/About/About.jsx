import React from 'react';
import './about.scss';
import banner from './../../assets/images/hospital.png';
import { Element } from 'react-scroll';
import aboutImage from '../../assets/img/about.png';


const About = () => {
    return (
        <Element name="about">
            <section id="about" className="about section bg-color">
                <div className="container">
                    <h1 className="mb-4 display-2 fw-bold heading-text">
                        Bridging the Gap Between You and Quality Healthcare
                    </h1>
                    <div className="row gy-4 align-items-center about-content">
                        <div
                            className="col-lg-5 position-relative"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <img src={aboutImage} className="img-fluid" alt="About Us" />
                            {/* 
            <a
              href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
              className="glightbox pulsating-play-btn"
            ></a> 
            */}
                        </div>

                        <div
                            className="col-lg-4 content ps-lg-4"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <p className="fw-light fs-5">
                                We empower every citizen with 24x7 support during medical
                                emergencies — seamlessly connecting hospitals and individuals
                                through digital solutions, whether in cities or remote villages.
                                Your health is our mission.
                            </p>
                            <a
                                href="/company"
                                className="btn-get-started"
                                style={{ backgroundColor: '#ffc643', color: '#193440' }}
                            >
                                Learn More
                            </a>

                            {/* Future content blocks (optional):
            <ul>
              <li>
                <i className="bi bi-diagram-3"></i>
                <div>
                  <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                  <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                </div>
              </li>
              ...
            </ul>
            */}
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default About
