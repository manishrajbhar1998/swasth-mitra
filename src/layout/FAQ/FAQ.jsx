import React, { useState } from "react";
import './faq.scss';

const faqData = [
    {
        question: "What is your return policy?",
        answer: "You can return any item within 30 days of purchase for a full refund."
    },
    {
        question: "Is Swasth Mitra available in rural areas?",
        answer: "Yes, Swasth Mitra is committed to reaching both urban and rural areas."
    },
    {
        question: "Does Swasth Mitra provide medical advice or replace doctors?",
        answer: "Swasth Mitra does not replace doctors. It supports users with health insights and connects them with professionals."
    },
    {
        question: "How can I change my plan?",
        answer: "You can change your plan anytime from your account dashboard under the 'Subscription' section."
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <div id="faq-wrapper" className="bg-color-2">
            <p className="faq-heading">FAQ’s</p>
            <div className="container">
                <div className="accordion">
                    {faqData.map((item, index) => (
                        <div className="accordion-item custom" key={index}>
                            <div
                                className="accordion-header"
                                onClick={() => toggleAccordion(index)}
                            >
                                <button className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}>
                                    {item.question}
                                </button>
                            </div>
                            {activeIndex === index && (
                                <div className="accordion-body">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
