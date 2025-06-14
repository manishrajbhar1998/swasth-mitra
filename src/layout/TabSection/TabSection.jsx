import React, { useState } from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import './tabSection.scss';
import img1 from '../../assets/img/DHA.png';
import img2 from '../../assets/img/ERS.png';
import img3 from '../../assets/img/PHE.png';




const tabData = [
    {
        key: 'tab1',
        title: 'Digital Hospital Access',
        content: `Our digital platform bridges the gap between patients and healthcare providers. Users can easily access a wide range of medical services — from booking doctor appointments and diagnostic tests to consulting specialists — all without the hassle of long queues or paperwork. Whether you're in a metro city or a rural village, healthcare is now just a few taps away.`,
        img: img1,
    },
    {
        key: 'tab2',
        title: 'Emergency Response System',
        content: `When emergencies strike, every second counts. Our 24x7 support system ensures rapid response and coordination — whether you're in the neighborhood or across state lines. Through our trained support team and integrated network of hospitals, we provide immediate guidance, on call first aid support, and hospital referrals, ensuring critical care reaches the patient without delay.`,
        img: img2,
    },
    {
        key: 'tab3',
        title: 'Preventive Health Education',
        content: `Our goal is not only to treat illness but to prevent it. We run awareness campaigns and share reliable information, ensuring people understand how to maintain their health, detect early symptoms, and know when to seek medical help.`,
        img: img3,
    },
];

const TabSection = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [transition, setTransition] = useState('');

    const handleSelect = (newTabKey) => {
        if (newTabKey === activeTab) return;
        const isNext = tabData.findIndex(tab => tab.key === newTabKey) > tabData.findIndex(tab => tab.key === activeTab);
        setTransition(isNext ? 'slide-left' : 'slide-right');
        setTimeout(() => {
            setActiveTab(newTabKey);
        }, 300);
    };

    const activeContent = tabData.find(tab => tab.key === activeTab);

    return (
        <Container fluid className="rounded p-0 tab-wrapper">
            <Nav variant="tabs" className="justify-content-center gap-3 p-3 fw-bold" activeKey={activeTab}>
                {tabData.map(tab => (
                    <Nav.Item key={tab.key}>
                        <Nav.Link
                            eventKey={tab.key}
                            className="tab-btn px-4"
                            onClick={() => handleSelect(tab.key)}

                        >
                            {tab.title}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>

            <Container className={`tab-content-container ${transition}`}>
                <Row className="align-items-center justify-content-center">
                    <Col lg={5}>
                        <p className="fs-5 text-justify content">{activeContent.content}</p>
                        <Button
                            className="check-plan"
                            onClick={() => {
                                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            CHECK PLANS
                        </Button>
                    </Col>
                    <Col lg={5}>
                        <img src={activeContent.img} alt={activeContent.title} className="img-fluid rounded" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default TabSection;
