import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './TabSection.scss';
import DHA from '../../assets/img/DHA.png';
import ERS from '../../assets/img/emergency response system-01.png';
import PHE from '../../assets/img/PHE.png';

const tabData = [
    {
        key: 'tab1',
        title: 'Digital Hospital Access',
        heading: 'Your Health, One Tap Away.',
        content: `Our digital platform bridges the gap between patients and healthcare providers. Users can easily access a wide range of medical services — from booking doctor appointments and diagnostic tests to consulting specialists — all without the hassle of long queues or paperwork. Whether you're in a metro city or a rural village, healthcare is now just a few taps away.`,
        img: DHA,
    },
    {
        key: 'tab2',
        title: 'Emergency Response System',
        heading: '24x7 Emergency Care, Wherever You Are.',
        content: `When emergencies strike, every second counts. Our 24x7 support system ensures rapid response and coordination — whether you're in the neighborhood or across state lines. Through our trained support team and integrated network of hospitals, we provide immediate guidance, on call first aid support, and hospital referrals, ensuring critical care reaches the patient without delay.`,
        img: ERS,
    },
    {
        key: 'tab3',
        title: 'Preventive Health Education',
        heading: 'Awareness Today, Wellness Tomorrow.',
        content: `Preventive health education is at the heart of our mission. We conduct awareness drives, community health camps, and local workshops to educate individuals about basic hygiene. Using digital platforms, videos, and expert webinars, we make health education easy, engaging, and accessible. Our goal is to create awareness among youth and families about lifestyle diseases, mental health, and preventive habits we help individuals take charge of their well-being before illness strikes.`,
        img: PHE,
    },
];

const TabSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [transition, setTransition] = useState('');
    const [fadeIn, setFadeIn] = useState(true);


    // const handleTabClick = (newIndex) => {
    //     if (newIndex === activeTab) return;
    //     const direction = newIndex > activeTab ? 'slide-in-right' : 'slide-in-left';
    //     setTransition(direction);

    //     // setTimeout(() => {
    //     //     setActiveTab(newIndex);
    //     // }, 10);

    //     setTimeout(() => {
    //         setActiveTab(newIndex);
    //         setTransition('');
    //     }, 200);
    // };
    const handleTabClick = (newIndex) => {
        if (newIndex === activeTab) return;

        setFadeIn(false); // reset animation
        setTimeout(() => {
            setActiveTab(newIndex);
            setFadeIn(true); // trigger animation again
        }, 500); // short delay to retrigger transition
    };

    const scrollToServices = (e) => {
        e.preventDefault();
        const section = document.querySelector('#services');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Container fluid className="tab-section-container rounded p-0">
            <Nav variant="tabs" className="nav-tabs-custom justify-content-center slider_content fw-bold" activeKey={tabData[activeTab].key}>
                {tabData.map((tab, index) => (
                    <Nav.Item key={tab.key}>
                        <Nav.Link
                            className={`tab-btn px-4 ${index === activeTab ? 'active' : ''}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab.title}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>

            <div className="tab-content-container container">
                {tabData.map((tab, index) => (
                    <div
                        key={tab.key}
                        // className={`tab-pane ${index === activeTab ? 'active-content' : 'd-none'} ${index !== activeTab ? '' : transition}`}
                        // className={`tab-pane ${index === activeTab ? 'active-content' : 'd-none'}`}
                        className={`tab-pane ${index === activeTab ? 'active-content fade-in' : 'd-none'}`}
                    >
                        <Row className="align-items-center justify-content-center">
                            <Col lg={6}>
                                <h2 className="h4 fw-bold mb-3" style={{ color: '#0a5247' }}>{tab.heading}</h2>
                                <p className="fs-5 fw-light text-justify">{tab.content}</p>
                                <a href="#services" className="btn-get-started tab-btn" onClick={scrollToServices}>
                                    <i className="bi bi-arrow-right-circle me-2"></i> <span>Check Plans</span>
                                </a>
                            </Col>
                            <Col lg={6}>
                                <img src={tab.img} alt={tab.title} className="img-fluid rounded" />
                            </Col>
                        </Row>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default TabSection;
