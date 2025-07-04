import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './customerDashboardHeader.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from './../../assets/images/swastha-mitra-logo2.png'
import { Button } from '@mui/material';
import { Link } from 'react-scroll';
import { CustomerConext } from '../../context/CustomerContext/CustomerContext';
import { FaCog } from "react-icons/fa";
import { api } from '../../apis/api';
import { useLoading } from '../../context/LoadingContext/LoadingContext';
import { LOGOUT_API } from '../../constant/config';


const CustomerDashboardHeader = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const navigate = useNavigate()
    const { state } = useContext(CustomerConext);
    const { login } = state;
    const { loading, setLoading } = useLoading();

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = () => {


        localStorage.removeItem("accessToken");
        sessionStorage.removeItem("appData");
        navigate("/login");
    }


    return (
        <div className='header-wrapper'>
            <div className="logo">
                <img src={logo} alt="Swastha Mitra Logo" />
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="services" smooth={true} duration={500} >Welcome {login?.firstName}</Link></li>
                    <li style={{ position: "relative" }}>
                        <FaCog
                            size={20}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            style={{ cursor: "pointer" }}
                        />
                        {dropdownOpen && (
                            <ul
                                style={{
                                    position: "absolute",
                                    top: "41px",
                                    right: "-5px",
                                    background: "#fff",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    zIndex: 1000,
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >
                                <li style={{ padding: "5px 10px", cursor: "pointer" }} onClick={() => navigate("/profile")}>
                                    Profile
                                </li>
                                <li style={{ padding: "5px 10px", cursor: "pointer" }} onClick={handleLogout}>
                                    Logout
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <div className="login-btn">
                <div className='show-menu'>
                    {
                        showMobileMenu ?
                            <CloseIcon onClick={() => setShowMobileMenu(prev => !prev)} />
                            :
                            <MenuIcon onClick={() => setShowMobileMenu(prev => !prev)} />
                    }

                </div>
                {
                    showMobileMenu &&
                    <div className="mobile-menu">
                        <ul>
                            <li><Link to="services" smooth={true} duration={500} >Welcome {login?.firstName}</Link></li>
                            <li style={{ padding: "5px 10px", cursor: "pointer" }} onClick={() => navigate("/profile")}>
                                Profile
                            </li>
                            <li style={{ padding: "5px 10px", cursor: "pointer" }} onClick={handleLogout}>
                                Logout
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default CustomerDashboardHeader;
