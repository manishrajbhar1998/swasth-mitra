import React from 'react';
import './services.scss';
import { Button } from '@mui/material';
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Services = ({ type }) => {

    const navigate = useNavigate();

    const handlePlan = (plan, amount) => {
        if (type == "registed") {

            navigate("/purchase", { state: { plan, amount } })
        } else {
            navigate("/register")
        }
    }

    return (
        <Element name="services">
            <div className='services-wrapper'>
                <div className='header'>
                    <p className='liner'></p>
                    <h3 className='title'> Our Health Support Plans</h3>
                    <p className='text'>Choose the right support for you and your loved ones.</p>
                </div>
                <div className="body">
                    {/* Individual Plan */}
                    <div className="product">
                        <div className="pro-header">
                            <h3>👤 Individual Plan <span>₹299 / yearly</span></h3>
                        </div>
                        <div className="pro-body">
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
                        </div>
                        <div className="pro-act">
                            <Button fullWidth onClick={() => handlePlan("Individual Plan", "299")}>Purchase Plan</Button>
                        </div>
                    </div>

                    {/* Family Plan */}
                    <div className="product">
                        <div className="pro-header">
                            <h3>👨‍👩‍👧‍👦 Family Plan <span>₹499 / yearly</span></h3>
                        </div>
                        <div className="pro-body">
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
                        </div>
                        <div className="pro-act">
                            <Button fullWidth variant="text" onClick={() => handlePlan("Family Plan ", 499)}>Purchase Plan</Button>
                        </div>
                    </div>

                    {/* Gold Plan */}
                    <div className="product gold">
                        <div className="pro-header">
                            <h3>🌟 Gold Plan <span>₹799 / yearly</span></h3>
                        </div>
                        <div className="pro-body">
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
                        </div>
                        <div className="pro-act">
                            <Button fullWidth variant="outlined" onClick={() => handlePlan("Gold Plan", 799)}>Purchase Plan</Button>
                        </div>
                    </div>
                </div>


            </div>
        </Element>
    )
}

export default Services
