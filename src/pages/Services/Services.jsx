import React from 'react';
import './services.scss';
import { Button } from '@mui/material';
import { Element } from 'react-scroll';

const Services = () => {
    return (
        <Element name="services">
            <div className='services-wrapper'>
                <div className='header'>
                    <p className='liner'></p>
                    <h3 className='title'> Our Health Support Plans</h3>
                    <p className='text'>Choose the right support for you and your loved ones.</p>
                </div>
                <div className="body">
                    <div className='product'>
                        <div className="pro-header">
                            <h3>👤 Individual Plan</h3>
                        </div>
                        <div className="pro-body">
                            <p>Personal health security, anytime, anywhere.</p>
                            <p>
                                Key Features:</p>
                            <ul>
                                <li>24x7 emergency medical support</li>
                                <li>Direct digital connection with nearby hospitals</li>
                                <li>Real-time guidance in case of medical emergencies</li>
                                <li>Personalized health alerts and updates</li>
                                <li>Easy access to health records and reports</li>
                            </ul>
                            <p>💡 Perfect for students, working professionals, and senior citizens living alone.</p>
                        </div>
                        <div className='pro-act'>
                            <Button fullWidth>Go for</Button>
                        </div>

                    </div>
                    <div className='product gold'>
                        <div className="pro-header">
                            <h3>‍👩‍👧‍👦 Family Plan</h3>
                        </div>
                        <div className="pro-body">
                            <p>One plan to protect your whole family.</p>
                            <p>
                                Key Features:</p>
                            <ul>
                                <li>24x7 emergency medical support</li>
                                <li>Coverage for all family members under one plan</li>
                                <li>Priority assistance in emergencies (state & out-of-state)</li>
                                <li>Dedicated health coordinator for your family</li>
                                <li>Home care guidance & emergency ambulance help</li>
                                <li>Secure family health data management</li>
                            </ul>
                            <p>💡 Ideal for families with kids, elders, and dependents.</p>
                        </div>
                        <div className='pro-act'>
                            <Button fullWidth variant="text" sx={{}}>Go for</Button>
                        </div>

                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Services
