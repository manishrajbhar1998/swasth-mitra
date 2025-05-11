import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from './../../assets/images/swastha-mitra-logo2.png'
import { Button } from '@mui/material';
import { Link } from 'react-scroll';


const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const navigate = useNavigate()



    return (
        <div className='header-wrapper'>
            <div className="logo">
                <img src={logo} alt="Swastha Mitra Logo" />
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="about" smooth={true} duration={500}>About Us</Link></li>
                    <li><Link to="services" smooth={true} duration={500} >Services</Link></li>
                    <li><NavLink to="/contact-us" >Contact Us</NavLink></li>
                    <li><NavLink to="/inquery" >Inquery</NavLink></li>
                </ul>
            </div>
            <div className="login-btn">
                {

                    <Button sx={{
                        display: {
                            xs: 'none',
                            sm: 'none',
                            md: 'inline-flex',
                        },
                    }} onClick={() => navigate('/login')}>
                        Login/Register
                    </Button>
                }

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
                            <li><Link to="about" onClick={()=>setShowMobileMenu((prev)=>!prev)} smooth={true} duration={500}>About Us</Link></li>
                            <li><Link to="services" onClick={()=>setShowMobileMenu((prev)=>!prev)} smooth={true} duration={500} >Services</Link></li>
                            <li><NavLink to="/contact-us" >Contact Us</NavLink></li>
                            <li><NavLink to="/inquery" >Inquery</NavLink></li>
                            <Button onClick={() => navigate('/login')} >
                                Login/Register
                            </Button>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;
