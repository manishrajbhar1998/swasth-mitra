import FAQItem from "../../components/FAQItem/FAQItem";
import './faq.scss';



const FAQ = () => {
    const faqData = [
        {
            question: "What is your return policy?",
            answer: "You can return any item within 30 days of purchase for a full refund."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to over 50 countries around the world."
        },
        {
            question: "How can I track my order?",
            answer: "You’ll receive a tracking link via email once your order has shipped."
        },
    ];

    return (
        <div id="faq-wrapper" className="bg-color-2">
            <div className="container section-title" data-aos="fade-up">
                <div>
                    <span>FAQ’s</span>
                </div>
            </div>

            <div className="container">
                <div className="accordion" id="faqAccordion">
                    {/* FAQ 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                            >
                                What is your return policy?
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingOne"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Placeholder for return policy details.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Is Swasth Mitra available in rural areas?
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Placeholder for rural availability details.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Does Swasth Mitra provide medical advice or replace doctors?
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Placeholder for medical advice details.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >
                                How can I change my plan?
                            </button>
                        </h2>
                        <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Placeholder for plan change details.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
