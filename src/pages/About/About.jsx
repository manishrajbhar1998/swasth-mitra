import React from 'react';
import './about.scss';
import banner from './../../assets/images/hospital.png';
import { Element } from 'react-scroll';


const About = () => {
    return (
        <Element name="about">
            <div className='about-wrapper'>
                <div className='header'>
                    <p className='liner'></p>
                    <h3 className='title'>ABOUT COMPANY</h3>
                    <div className='header-inner-content'>
                        <div>

                            <h4 className='sub-title'>Who We Are</h4>
                            <p className='text'>Swasth Mitra is committed to supporting the nation's healthcare system by acting as a reliable backbone during medical challenges. In today’s fast-paced world, many individuals face health issues due to a lack of awareness, delayed treatments, overcrowded hospitals, and limited resources like funds and timely medical support.</p>
                        </div>
                        <div>
                            <h4 className='sub-title'>Our Mission</h4>
                            <p className='text'>Our mission is to ensure every citizen in India has access to timely and reliable healthcare support. Whether you're in a metro city or a remote village, our platform bridges the gap between people and hospitals using modern digital technologies. We are available 24x7 to assist during medical emergencies — whether it's a minor health issue or a life-threatening situation.</p>
                        </div>
                    </div>
                </div>

                <div className='body'>
                    <div className="img">
                        <img src={banner} alt="about company" />
                    </div>
                    <div className="content">
                        <div className="sec-one">
                            {/* <p className='liner'></p> */}
                            <h3 className='sub-title'>What We Do</h3>
                            <div>
                                <h4>Connect Patients to Hospitals Digitally</h4>
                                <p className='text'>Using our platform, users can access healthcare services, book appointments, and seek emergency support without standing in long queues.</p>
                            </div>
                            <div>
                                <h4>Real-Time Emergency Support</h4>
                                <p className='text'>Our dedicated team responds promptly during emergencies — locally or even across state boundaries — ensuring health conditions are addressed immediately.</p>
                            </div>
                            <div>
                                <h4>Health Awareness & Guidance</h4>
                                <p className='text'>We educate individuals on preventive care, early symptoms, and health checkups to reduce complications due to delayed treatment.

                                </p>
                            </div>
                        </div>

                        <div className="sec-three">
                            <h3 className='sub-title'>Our Impact</h3>

                            <div className='sub-sec-one'>
                                <p className='title'>
                                    ✅ 300+ Medical Collaborations
                                </p>
                                <p className='text'>Partnered with trusted hospitals, clinics, and health professionals nationwide.</p>
                            </div>
                            <hr />
                            <div className='sub-sec-one'>
                                <p className='title'>
                                    ✅ 5000K+ Users Supported
                                </p>
                                <p className='text'>Reaching millions of citizens with timely healthcare services and support.
                                </p>
                            </div>
                            <hr />

                            <div className='sub-sec-one'>
                                <p className='title'>
                                    ✅ Across Cities & Countryside
                                </p>
                                <p className='text'>Empowering both urban and rural populations with equal access to medical assistance.


                                </p>
                            </div>
                        </div>

                        <div className="sec-two">
                            <h3 className='sub-title'>We Believe In</h3>
                            <ul>
                                <li>Building a digitally connected healthcare ecosystem</li>
                                <li>Prioritizing life-saving response during emergencies</li>
                                <li>Offering continuous support and guidance for healthier living</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default About
