import React, { useState, useRef, useEffect } from "react";
import "./services.scss";
import { useLocation, useNavigate } from "react-router-dom";

const plans = [
    {
        title: "Individual Plan",
        price: "299/-",
        className: "individual_plan",
        id: "individual",
        shortFeatures: [
            "Instant help on mobile",
            "Chat help during emergencies",
            "Support in maintaining medical documents",
            "Guidance to avail government schemes like Ayushman Bharat",
        ],
        longFeatures: [
            "Support in maintaining patient medical documents",
            "Emergency attendant in hospital",
            "24x7 hospital assistance",
            "24x7 call and chat support",
            "Dedicated person available in-state hospitals",
            "Emergency help for patients outside the state via call/chat (24x7)",
            "Awareness campaigns and health tips",
            "Help with stay needs like government/private guest houses",
        ],
        note: "💡 Ideal for individuals: students, professionals, or seniors.",
    },
    {
        title: "Family Plan",
        price: "549/-",
        className: "family_plan",
        id: "family",
        shortFeatures: [
            "Instant help on mobile",
            "Chat help during emergencies",
            "Support in maintaining medical documents",
            "Guidance to avail government schemes like Ayushman Bharat",
        ],
        longFeatures: [
            "Support in maintaining patient medical documents",
            "Emergency attendant in hospital",
            "24x7 hospital assistance",
            "24x7 call and chat support",
            "Dedicated person available in-state hospitals",
            "Emergency help for patients outside the state via call/chat (24x7)",
            "Awareness campaigns and health tips",
            "Help with stay needs like government/private guest houses",
        ],
        note: "💡 Ideal for families: kids, elders, and dependents.",
    },
    {
        title: "Gold Plan",
        price: "1499/-",
        className: "gold_plan",
        id: "gold",
        shortFeatures: [
            "Instant help on mobile",
            "Chat help during emergencies",
            "Support in maintaining medical documents",
            "Guidance to avail government schemes like Ayushman Bharat",
        ],
        longFeatures: [
            "Support in maintaining patient medical documents",
            "Emergency attendant in hospital",
            "24x7 hospital assistance",
            "24x7 call and chat support",
            "Dedicated person available in-state hospitals",
            "Emergency help for patients outside the state via call/chat (24x7)",
            "Awareness campaigns and health tips",
            "Help with stay needs like government/private guest houses",
            "Dedicated support person in any state hospital",
            "Emergency help for out-of-state patients (on-site, call, chat)",
            "Discount on lab tests",
            "Assistance with discounted generic medicines",
            "Highest priority 24x7 support and emergency handling",
            "Personalized health awareness and follow-ups",
        ],
        note: "💡Ideal for premium users: full service and nationwide support.",
    },
];

const PlanCard = ({ plan, isOpen, onToggle }) => {
    const contentRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleChoosePlan = (title, price) => {
        const currentPath = location.pathname;

        if (currentPath.startsWith("/dashboard")) {
            navigate("/purchase", { state: { plan: title, amount: price } });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate("/login");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (isOpen && contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [isOpen]);

    return (
        <div className="col">
            <div className={`card ${plan.className}`}>
                <span className="checkmark my-3">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <rect width="50" height="50" rx="25" fill="white" />
                        <path
                            d="M38.55 10.07L20.93 31.97L10.36 21.66C8.7 20.65 6.73 20.68 5.11 21.75C3.98 22.86 4 24.29 5.01 26.88L18.37 39.92C20.1 41 22.11 41 23.81 39.82L43.95 15.24C45.02 13.6 44.98 11.66 43.86 10.06C42.2 9 40.21 9 38.55 10.07Z"
                            fill="#FFC643"
                        />
                    </svg>
                </span>

                <h3>{plan.title}</h3>
                <div className="price">{plan.price}</div>
                <ul>
                    {plan.shortFeatures.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                {!isOpen && (
                    <button className="accordion-toggle show-toggler mt-3" onClick={() => onToggle(plan.id)}>
                        <p className="icon-close fw-bold">See More</p>
                    </button>
                )}

                {isOpen && (
                    <div className="accordion-content" ref={contentRef}>
                        <ul>
                            {plan.longFeatures.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <p>{plan.note}</p>
                        <button
                            className="btn-get-started"
                            onClick={() => handleChoosePlan(plan?.title, plan?.price)}
                        >
                            <i className="bi bi-arrow-right-circle me-2"></i> <span>Choose Plan</span>
                        </button>

                        {/* Close Button at Bottom */}
                        <button
                            className="accordion-toggle mt-3"
                            style={{
                                display: "flex", width: "fit-content", alignItems: "center", margin: "0px auto"
                            }}
                            onClick={() => onToggle(null)}
                        >
                            <span className="icon">
                                <p className="icon-close fw-bold">
                                    <svg
                                        className="icon-open"
                                        width="30"
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
                                </p>
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const Services = () => {
    const [openPlanId, setOpenPlanId] = useState(null);

    const handleToggle = (id) => {
        setOpenPlanId((prevId) => (prevId === id ? null : id));
    };

    return (
        <section id="services" className="services section bg-color-2">
            <div className="container section-title" data-aos="fade-up">
                <div>
                    <span>Our Plans</span>
                    <p className="fs-5 fw-medium px-3">We offer thoughtfully articulated plans for everyone</p>
                </div>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {plans.map((plan) => (
                        <PlanCard
                            key={plan.id}
                            plan={plan}
                            isOpen={openPlanId === plan.id}
                            onToggle={handleToggle}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
