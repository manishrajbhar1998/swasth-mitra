import React from 'react';
import './HealthCard.scss';
import logo from '../../../assets/images/swastha-mitra-logo2.png';

const HealthCard = ({ profilePhoto, name, memberId, plan, validity, familyMembers }) => {
    // console.log("plan :: ", plan)
    return (
        <div className="health-card-wrapper" >
            {/* Front: Main Member Info */}
            <div className="card card-front" style={{ border: `2px solid ${plan == "Family Plan" ? "#ffee8c" : plan == "Individual Plan" ? "#00b894" : "#d3af37"}` }}>
                {/* <div className="health-card-header">
                    <img src={logo} alt="Swasth Mitra Logo" className="main-logo" />
                    <h1 className="main-title">Swasth Mitra</h1>
                    <p className="tagline">Your Health, Our Priority</p>
                </div> */}

                <div className="health-card-header" style={{ backgroundColor: plan == "Family Plan" ? "#ffee8c" : plan == "Individual Plan" ? "#00b894" : "#d3af37" }}>
                    <img src={logo} alt="Swasth Mitra Logo" className="main-logo" />
                    <p style={{ color: plan == "Family Plan" ? "#000" : "#fff" }}>
                        <span className="main-title">Swasth Mithra</span>
                        <p className="tagline">Your Health, Our Priority</p>
                    </p>
                </div>
                <div className="card-body">
                    <div className="user-info">
                        <img
                            src={profilePhoto}
                            alt="Health"
                            className="health-icon"
                        />
                        <div className="name">{name}</div>
                    </div>
                    <div className="info-row">
                        <span className="label">Member Id:</span>
                        <span className="value">{memberId}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">Plan:</span>
                        <span className="value">{plan}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">Validity:</span>
                        <span className="value">{validity}</span>
                    </div>

                </div>
                {/* <div className="card-footer" style={{ backgroundColor: plan == "Family Plan" ? "#ffee8c" : plan == "Individual Plan" ? "#00b894" : "#d3af37" }}>
                    <img src={logo} alt="Swasth Mitra Logo" className="logo" />
                    <span style={{ color: plan == "Family Plan" ? "#000" : "#fff" }}>Swasth Mithra</span>
                </div> */}
            </div>

            {/* {Object.keys(familyMembers).length > 0 && ( */}
            <div className="card card-back" style={{ border: `2px solid ${plan == "Family Plan" ? "#ffee8c" : plan == "Individual Plan" ? "#00b894" : "#d3af37"}` }}>
                {/* <div className="card-header">
                        <img src={logo} alt="Swasth Mitra Logo" className="logo" />
                        <span>Family Members</span>
                    </div> */}
                {/* <div className="card-body">
                        <ul className="family-list">
                            {Object.entries(familyMembers).map(([relation, details]) => (
                                <li key={relation}>
                                    <strong>{relation.charAt(0).toUpperCase() + relation.slice(1)}:</strong><br />
                                    {details.name} (DOB: {details.dob})
                                </li>
                            ))}
                        </ul>
                    </div> */}

                <div className="card-back-header" style={{ backgroundColor: plan == "Family Plan" ? "#ffee8c" : plan == "Individual Plan" ? "#00b894" : "#d3af37" }}>
                    <img src={logo} alt="Swasth Mitra Logo" className="main-logo" />
                    <p style={{ color: plan == "Family Plan" ? "#000" : "#fff" }}>
                        <span className="main-title">{plan}</span>
                    </p>
                </div>
                <div className="contact-info">
                    <div className="phone"> <span>📞</span> <span>+91 8886815815</span></div>
                    <div className="email"><span>✉️</span> <span>swastha.mitra@gmail.com</span></div>
                    <div className="address">
                        <span>🏠</span> <span>Swasth Mitra Next to paperbox company,<br />
                            Mahakali Caves Roads, Andheri East, Mumbai – 400093
                        </span>
                    </div>
                </div>

                <div className="card-footer">
                    Powered by <strong style={{ color: "#57a585" }}>Swasth Mithra</strong>
                </div>
            </div>
            {/* )} */}

        </div>
    );
};

export default HealthCard;
