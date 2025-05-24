import React from 'react';
import './testimonialCard.scss';


const TestimonialCard = () => {
    return (
        <div>
            <div className="testimonial-card">
                <div className="testimonial-card__content">
                    <p className="testimonial-text">"This is a great service! Highly recommend. This is a great service! Highly recommend. This is a great service! Highly recommend."</p>
                </div>
                <div className="testimonial-card__image">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" alt="Testimonial" />
                    <h3 className="testimonial-author">John Doe</h3>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
