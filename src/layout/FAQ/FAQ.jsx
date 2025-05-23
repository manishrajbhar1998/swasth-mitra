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
        <div className="faq-wrapper">
            <div className='header'>
                <p className='liner'></p>
                <h3 className='title'>Frequently Asked Questions</h3>

            </div>
            <div className="faq-list">
                {faqData.map((item, index) => (
                    <FAQItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
