import React from 'react';
import './footer.scss';
import footerBg from '../../assets/img/footer.png';
import logo from '../../assets/img/real-logo.svg';
import xLogo from '../../assets/img/footer/icons8-x-logo-50.png';
import fbLogo from '../../assets/img/footer/icons8-facebook-logo-48.png';
import ytLogo from '../../assets/img/footer/icons8-youtube-logo-48.png';
const images = {
    footerBg,
    logo,
    xLogo,
    fbLogo,
    ytLogo,
};
import pdf1 from '../../assets/policies/Terms_and_Conditions_SM.pdf';
import pdf2 from '../../assets/policies/Cancellation_and_Refund_SM.pdf';
import pdf3 from '../../assets/policies/Shipping_and_Delivery_SM.pdf';
import pdf4 from '../../assets/policies/Shipping_and_Delivery_SM.pdf';




const Footer = () => {



    return (
        <>
            <div className="container-fluid p-0">
                <div className="row align-items-center g-0 footer-wrapper">
                    <div
                        className="col-12 col-md-6 mb-4 mb-md-0 footer-bg"
                    ></div>

                    <div className="col-12 col-md-6">
                        <div className="contact-section py-5">
                            <div className="logo-1">
                                <img
                                    src={images.logo}
                                    alt="Swasth Mitra Logo"
                                    className="img-fluid rounded-circle"
                                    style={{ width: '200px' }}
                                />
                            </div>

                            <p className="fs-3 fw-bold">Your Health, Our Priority</p>
                            <h4 className="contact-heading fw-lighter">Get in touch</h4>

                            <div className='more-info'>
                                <div className="contact-info">
                                    <h3>Contact Details</h3>
                                    <p>+91 8886815815</p>
                                    <p>swastha.mitra@gmail.com</p>
                                    <p>
                                        Swasth Mitra
                                        <br />
                                        Next to paperbox company
                                        <br />
                                        Mahakali caves road Andheri east
                                        <br />
                                        Mumbai 400093
                                        <br />
                                        <span style={{ visibility: 'hidden' }}>gffgfd</span>
                                    </p>
                                </div>
                                <div className="links">
                                    <h3>Consumer Policy</h3>

                                    <p>
                                        <a
                                            href={pdf1}
                                            target="_blank"
                                            rel="noopener noreferrer"

                                        >
                                            Cancellation & Returns
                                        </a>
                                    </p>

                                    <p>
                                        <a
                                            href={pdf2}
                                            target="_blank"
                                            rel="noopener noreferrer"

                                        >
                                            Terms Of Use
                                        </a>
                                    </p>

                                    <p>
                                        <a
                                            href={pdf3}
                                            target="_blank"
                                            rel="noopener noreferrer"

                                        >
                                            Security
                                        </a>
                                    </p>

                                    <p>
                                        <a
                                            href={pdf4}
                                            target="_blank"
                                            rel="noopener noreferrer"

                                        >
                                            Privacy
                                        </a>
                                    </p>
                                </div>

                            </div>

                            <div className="social-icons">
                                <span>FOLLOW US</span>
                                <a href="#" aria-label="Follow us on X">
                                    <img src={images.xLogo} alt="X" />
                                </a>
                                <a href="#" aria-label="Follow us on Facebook">
                                    <img src={images.fbLogo} alt="Facebook" />
                                </a>
                                <a href="#" aria-label="Follow us on YouTube">
                                    <img src={images.ytLogo} alt="YouTube" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <a
                href="#"
                id="scroll-top"
                className="scroll-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </>
    );
};

export default Footer;
