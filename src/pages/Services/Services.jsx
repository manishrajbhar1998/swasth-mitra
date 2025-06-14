import React, { useState } from 'react';
import './services.scss';
import { Button } from '@mui/material';
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Services = ({ type }) => {

    const [open, setOpen] = useState(false);

    const toggleAccordion1 = () => setOpen(!open);
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion2 = () => setIsOpen((prev) => !prev);

    const navigate = useNavigate();

    const handlePlan = (plan, amount) => {
        if (type == "registed") {

            navigate("/purchase", { state: { plan, amount } })
        } else {
            navigate("/register")
        }
    }

    const toggleAccordion = (button) => {
        const content = button.nextElementSibling;
        const iconClose = button.querySelector('.icon-close');
        const iconOpen = button.querySelector('.icon-open');

        const isOpen = content.style.display === 'block';
        content.style.display = isOpen ? 'none' : 'block';
        iconClose.style.display = isOpen ? 'block' : 'none';
        iconOpen.style.display = isOpen ? 'none' : 'block';
    };


    return (
        <section id="services" className="services section bg-color-2">
            <div className="container section-title" data-aos="fade-up">
                <div>
                    <span>Our Plans</span>
                    <p className="fs-5 fw-medium">
                        We offer thoughtfully articulated plans for everyone
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* Individual Plan */}
                    <div className="col">
                        <div className="card">
                            <span className="checkmark my-3">
                                {/* Checkmark Icon */}
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <rect width="50" height="50" rx="25" fill="white" />
                                    <path
                                        d="M38.5512 10.0706L38.4503 10.179L20.9257 31.9752L10.3644 21.6608C9.64703 21.0082 8.69816 20.653 7.71772 20.6699C6.73728 20.6867 5.80183 21.0744 5.10845 21.7513C4.41507 22.4282 4.01789 23.3413 4.00059 24.2984C3.98329 25.2555 4.34722 26.1817 5.01571 26.882L18.3674 39.9204C18.727 40.2708 19.1554 40.547 19.6267 40.7324C20.0981 40.9178 20.603 41.0086 21.1111 40.9994C21.6192 40.9902 22.1202 40.8812 22.5843 40.6789C23.0483 40.4766 23.4658 40.1851 23.812 39.8218L43.9555 15.2426C44.6414 14.5398 45.0164 13.6018 44.9995 12.6313C44.9825 11.6608 44.575 10.7358 43.8649 10.0563C43.1549 9.37677 42.1994 8.99734 41.2051 9.00001C40.2107 9.00269 39.2574 9.38727 38.5512 10.0706Z"
                                        fill="#FFC643"
                                    />
                                </svg>
                            </span>
                            <h3>Individual Plan</h3>
                            <div className="price">299/-</div>
                            <ul>
                                <li>Instant help on mobile</li>
                                <li>Chat help during emergencies</li>
                                <li>Support in maintaining medical documents</li>
                                <li>Guidance to avail government schemes like Ayushman Bharat</li>
                            </ul>

                            <button className="accordion-toggle mt-3" onClick={(e) => toggleAccordion(e.currentTarget)}>
                                <span className="icon">
                                    {/* Down Arrow */}
                                    <svg className="icon-close" width="46" height="41" viewBox="0 0 46 41" fill="none">
                                        <path d="M1.31151 5.16703L20.7915 24.537C21.2668 24.9953 21.9013 25.2514 22.5615 25.2514C23.2217 25.2514 23.8562 24.9953 24.3315 24.537L44.4115 5.04703C46.7315 2.80703 43.1915 -0.732969 40.8815 1.51703L20.7915 20.997H24.3315L4.8415 1.62703C2.5615 -0.642969 -0.978494 2.88703 1.31151 5.16703Z" fill="#0C5247" />
                                        <path d="M1.35838 20.28L20.8384 39.6601C21.3137 40.1183 21.9482 40.3744 22.6084 40.3744C23.2686 40.3744 23.9031 40.1183 24.3784 39.6601C31.045 33.1601 37.7384 26.6634 44.4584 20.17C46.7684 17.92 43.2284 14.39 40.9184 16.63L20.8384 36.1201H24.3784L4.88838 16.7501C2.60838 14.4801 -0.931619 18.01 1.35838 20.28Z" fill="#0C5247" />
                                    </svg>

                                    {/* Up Arrow */}
                                    <svg className="icon-open" width="46" height="41" viewBox="0 0 46 41" fill="none" style={{ display: 'none' }}>
                                        <path d="M44.6885 35.833L25.2085 16.463C24.7332 16.0047 24.0987 15.7486 23.4385 15.7486C22.7783 15.7486 22.1438 16.0047 21.6685 16.463L1.58849 35.953C-0.731507 38.193 2.80849 41.733 5.11849 39.483L25.2085 20.003H21.6685L41.1585 39.373C43.4385 41.643 46.9785 38.113 44.6885 35.833Z" fill="#0C5247" />
                                    </svg>
                                </span>
                            </button>

                            <div className="accordion-content" style={{ display: 'none', marginTop: '10px' }}>
                                <p>Key Features:</p>
                                <ul>
                                    <li>Instant help on mobile</li>
                                    <li>Chat help during emergencies</li>
                                    <li>Support in maintaining patient medical documents</li>
                                    <li>Guidance to avail government schemes like Ayushman Bharat</li>
                                    <li>Emergency attendant in hospital</li>
                                    <li>24x7 hospital assistance</li>
                                    <li>24x7 call and chat support</li>
                                    <li>Dedicated person available in-state hospitals</li>
                                    <li>Emergency help for patients outside the state via call/chat (24x7)</li>
                                    <li>Awareness campaigns and health tips</li>
                                    <li>Help with stay needs like government/private guest houses</li>
                                </ul>
                                <p>💡 Ideal for individuals: students, professionals, or seniors.</p>
                                <a href="registration.php" className="check-plan">Choose Plan</a>
                            </div>
                        </div>
                    </div>

                    {/* Family Plan */}
                    <div className="col">
                        <div className="card">
                            <span className="checkmark my-3">
                                <svg
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="50" height="50" rx="25" fill="white" />
                                    <path
                                        d="M38.5512 10.0706L38.4503 10.179L20.9257 31.9752L10.3644 21.6608C9.64703 21.0082 8.69816 20.653 7.71772 20.6699C6.73728 20.6867 5.80183 21.0744 5.10845 21.7513C4.41507 22.4282 4.01789 23.3413 4.00059 24.2984C3.98329 25.2555 4.34722 26.1817 5.01571 26.882L18.3674 39.9204C18.727 40.2708 19.1554 40.547 19.6267 40.7324C20.0981 40.9178 20.603 41.0086 21.1111 40.9994C21.6192 40.9902 22.1202 40.8812 22.5843 40.6789C23.0483 40.4766 23.4658 40.1851 23.812 39.8218L43.9555 15.2426C44.6414 14.5398 45.0164 13.6018 44.9995 12.6313C44.9825 11.6608 44.575 10.7358 43.8649 10.0563C43.1549 9.37677 42.1994 8.99734 41.2051 9.00001C40.2107 9.00269 39.2574 9.38727 38.5512 10.0706Z"
                                        fill="#FFC643"
                                    />
                                </svg>
                            </span>
                            <h3>Family Plan</h3>
                            <div className="price">749/-</div>
                            <ul>
                                <li>Instant help on mobile</li>
                                <li>Chat help during emergencies</li>
                                <li>Support in maintaining medical documents</li>
                                <li>Guidance to avail government schemes like Ayushman Bharat</li>
                            </ul>

                            {/* Accordion Toggle Button */}
                            <button className="accordion-toggle mt-3" onClick={toggleAccordion1}>
                                <span className="icon">
                                    {/* Show down arrow when closed */}
                                    {!open && (
                                        <svg
                                            className="icon-close"
                                            width="46"
                                            height="41"
                                            viewBox="0 0 46 41"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1.31151 5.16703L20.7915 24.537C21.2668 24.9953 21.9013 25.2514 22.5615 25.2514C23.2217 25.2514 23.8562 24.9953 24.3315 24.537L44.4115 5.04703C46.7315 2.80703 43.1915 -0.732969 40.8815 1.51703L20.7915 20.997H24.3315L4.8415 1.62703C2.5615 -0.642969 -0.978494 2.88703 1.31151 5.16703Z"
                                                fill="#0C5247"
                                            />
                                            <path
                                                d="M1.35838 20.28L20.8384 39.6601C21.3137 40.1183 21.9482 40.3744 22.6084 40.3744C23.2686 40.3744 23.9031 40.1183 24.3784 39.6601C31.045 33.1601 37.7384 26.6634 44.4584 20.17C46.7684 17.92 43.2284 14.39 40.9184 16.63L20.8384 36.1201H24.3784L4.88838 16.7501C2.60838 14.4801 -0.931619 18.01 1.35838 20.28Z"
                                                fill="#0C5247"
                                            />
                                        </svg>
                                    )}
                                    {/* Show up arrow when open */}
                                    {open && (
                                        <svg
                                            className="icon-open"
                                            width="46"
                                            height="41"
                                            viewBox="0 0 46 41"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M44.6885 35.833L25.2085 16.463C24.7332 16.0047 24.0987 15.7486 23.4385 15.7486C22.7783 15.7486 22.1438 16.0047 21.6685 16.463L1.58849 35.953C-0.731507 38.193 2.80849 41.733 5.11849 39.483L25.2085 20.003H21.6685L41.1585 39.373C43.4385 41.643 46.9785 38.113 44.6885 35.833Z"
                                                fill="#0C5247"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </button>

                            {/* Accordion Content */}
                            {open && (
                                <div className="accordion-content" style={{ marginTop: '10px' }}>
                                    <p>Key Features:</p>
                                    <ul>
                                        <li>Instant help on mobile</li>
                                        <li>Chat help during emergencies</li>
                                        <li>Support in maintaining patient medical documents</li>
                                        <li>Guidance to avail government schemes like Ayushman Bharat</li>
                                        <li>Emergency attendant in hospital</li>
                                        <li>24x7 hospital assistance</li>
                                        <li>24x7 call and chat support</li>
                                        <li>Dedicated person available in-state hospitals</li>
                                        <li>Emergency help for patients outside the state via call/chat (24x7)</li>
                                        <li>Awareness campaigns and health tips</li>
                                        <li>Help with stay needs like government/private guest houses</li>
                                    </ul>
                                    <p>💡 Ideal for families: kids, elders, and dependents.</p>
                                    <a href="registration.php" className="check-plan">
                                        Choose Plan
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* for gold plan */}
                    <div className="col">
                        <div className="card">
                            <span className="checkmark my-3">
                                <svg
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="50" height="50" rx="25" fill="white" />
                                    <path
                                        d="M38.5512 10.0706L38.4503 10.179L20.9257 31.9752L10.3644 21.6608C9.64703 21.0082 8.69816 20.653 7.71772 20.6699C6.73728 20.6867 5.80183 21.0744 5.10845 21.7513C4.41507 22.4282 4.01789 23.3413 4.00059 24.2984C3.98329 25.2555 4.34722 26.1817 5.01571 26.882L18.3674 39.9204C18.727 40.2708 19.1554 40.547 19.6267 40.7324C20.0981 40.9178 20.603 41.0086 21.1111 40.9994C21.6192 40.9902 22.1202 40.8812 22.5843 40.6789C23.0483 40.4766 23.4658 40.1851 23.812 39.8218L43.9555 15.2426C44.6414 14.5398 45.0164 13.6018 44.9995 12.6313C44.9825 11.6608 44.575 10.7358 43.8649 10.0563C43.1549 9.37677 42.1994 8.99734 41.2051 9.00001C40.2107 9.00269 39.2574 9.38727 38.5512 10.0706Z"
                                        fill="#FFC643"
                                    />
                                </svg>
                            </span>
                            <h3>Gold Plan</h3>
                            <div className="price">1499/-</div>
                            <ul>
                                <li>Instant help on mobile</li>
                                <li>Chat help during emergencies</li>
                                <li>Support in maintaining medical documents</li>
                                <li>Guidance to avail government schemes like Ayushman Bharat</li>
                            </ul>

                            {/* Accordion Toggle Button */}
                            <button className="accordion-toggle mt-3" onClick={toggleAccordion2}>
                                <span className="icon">
                                    {!isOpen ? (
                                        // Down arrow icon
                                        <svg
                                            className="icon-close"
                                            width="46"
                                            height="41"
                                            viewBox="0 0 46 41"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1.31151 5.16703L20.7915 24.537C21.2668 24.9953 21.9013 25.2514 22.5615 25.2514C23.2217 25.2514 23.8562 24.9953 24.3315 24.537L44.4115 5.04703C46.7315 2.80703 43.1915 -0.732969 40.8815 1.51703L20.7915 20.997H24.3315L4.8415 1.62703C2.5615 -0.642969 -0.978494 2.88703 1.31151 5.16703Z"
                                                fill="#0C5247"
                                            />
                                            <path
                                                d="M1.35838 20.28L20.8384 39.6601C21.3137 40.1183 21.9482 40.3744 22.6084 40.3744C23.2686 40.3744 23.9031 40.1183 24.3784 39.6601C31.045 33.1601 37.7384 26.6634 44.4584 20.17C46.7684 17.92 43.2284 14.39 40.9184 16.63L20.8384 36.1201H24.3784L4.88838 16.7501C2.60838 14.4801 -0.931619 18.01 1.35838 20.28Z"
                                                fill="#0C5247"
                                            />
                                        </svg>
                                    ) : (
                                        // Up arrow icon
                                        <svg
                                            className="icon-open"
                                            width="46"
                                            height="41"
                                            viewBox="0 0 46 41"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M44.6885 35.833L25.2085 16.463C24.7332 16.0047 24.0987 15.7486 23.4385 15.7486C22.7783 15.7486 22.1438 16.0047 21.6685 16.463L1.58849 35.953C-0.731507 38.193 2.80849 41.733 5.11849 39.483L25.2085 20.003H21.6685L41.1585 39.373C43.4385 41.643 46.9785 38.113 44.6885 35.833Z"
                                                fill="#0C5247"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </button>

                            {/* Accordion Content */}
                            {isOpen && (
                                <div className="accordion-content" style={{ marginTop: "10px" }}>
                                    <p>Key Features:</p>
                                    <ul>
                                        <li>Instant help on mobile</li>
                                        <li>Chat help during emergencies</li>
                                        <li>Support in maintaining patient medical documents</li>
                                        <li>Guidance to avail government schemes like Ayushman Bharat</li>
                                        <li>Emergency attendant in hospital</li>
                                        <li>24x7 hospital assistance</li>
                                        <li>24x7 call and chat support</li>
                                        <li>Dedicated person available in-state hospitals</li>
                                        <li>Emergency help for patients outside the state via call/chat (24x7)</li>
                                        <li>Awareness campaigns and health tips</li>
                                        <li>Help with stay needs like government/private guest houses</li>
                                        <li>Dedicated support person in any state hospital</li>
                                        <li>Emergency help for out-of-state patients (on-site, call, chat)</li>
                                        <li>Discount on lab tests</li>
                                        <li>Assistance with discounted generic medicines</li>
                                        <li>Highest priority 24x7 support and emergency handling</li>
                                        <li>Personalized health awareness and follow-ups</li>
                                    </ul>
                                    <p>💡 Ideal for premium users: full service and nationwide support.</p>
                                    <a href="registration.php" className="check-plan">
                                        Choose Plan
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
