import React from 'react';
import './about.scss';
import banner from './../../assets/images/hospital.png';
import { Element } from 'react-scroll';
import aboutImage from '../../assets/img/about.png';
import { NavLink } from 'react-router-dom';


const About = () => {
  return (
    <Element name="about">
      <section id="about" className="about section">
        <div className="container">
          <h1 className="mb-4 heading-text text-center fw-bold">
            Bridging the Gap Between You and Quality Healthcare
          </h1>
          <div className="row gy-4 align-items-center about-content">
            <div
              className="col-lg-5 position-relative"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={aboutImage} alt="" />

            </div>

            <div
              className="col-lg-4 content ps-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1 className="fw-light heading-text">Your health our priority</h1>
              <p className="fw-light fs-5 p-2" style={{ textAlign: "justify" }}>
                <b style={{ color: "#0a5247" }}>
                  We empower every citizen with 24x7 support during medical emergencies —
                </b>{" "}
                bridging the gap between individuals and healthcare providers through
                intelligent, real-time digital solutions. <br />
                Whether you're in a metro city or a remote village, we ensure that
                critical medical assistance is just a tap away. <br />
                With a vision to make healthcare accessible, timely, and efficient for
                all, your health isn’t just our priority — it’s our unwavering mission.
              </p>
              <NavLink to="/ourcompany" className="btn-get-started">
                <i className="bi bi-arrow-right-circle me-2"></i> <span>Learn More</span>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

    </Element>
  )
}

export default About
