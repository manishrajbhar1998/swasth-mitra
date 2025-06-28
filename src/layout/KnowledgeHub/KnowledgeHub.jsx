// KnowledgeHub.jsx
import React from 'react';
import './knowledgeHub.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/blogs/blogs-01.png'
import img2 from '../../assets/img/blogs/blogs-02.png'
import img3 from '../../assets/img/blogs/blogs-03.png'


const blogData = [
    {
        title: 'Is Swasth Mitra Beneficial for Me?',
        image: img1,
        link: 'blogDetails?blog=swasth-mitra-benefits',
    },
    {
        title: 'Get Connected, Stay Protected: Start with Swasth Mitra Today',
        image: img2,
        link: 'blogDetails?blog=get-connected-swasth-mitra',
    },
    {
        title: 'Preventive Healthcare Made Easy with Swasth Mitra: Stay Healthy, Stay Prepared',
        image: img3,
        link: 'blogDetails?blog=preventive-healthcare-swasth-mitra',
    },
];

const KnowledgeHub = () => {
    return (
        <section id="team" className="team-section">
            <Container className="section-title" data-aos="fade-up">
                <div>
                    <span className="description-title">Swasth Mitra</span><br />
                    <span className="description-subtitle">Knowledge Hub</span>
                </div>
            </Container>

            <Container className="py-5">
                <Row xs={1} md={3} className="g-4">
                    {blogData.map((item, idx) => (
                        <Col key={idx}>
                            <div className="knowledge-card" style={{ backgroundImage: `url(${item.image})` }}>
                                <span className="badge-top"></span>
                                <div className="content-bottom">
                                    <h5>{item.title}</h5>
                                    <Link to={item.link} className="read-more-btn">Read More</Link>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default KnowledgeHub;
