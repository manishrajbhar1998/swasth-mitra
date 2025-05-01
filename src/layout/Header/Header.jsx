import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from './../../assets/images/swastha-mitra-logo2.png'
import { Button } from '@mui/material';


const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)



    return (
        <div className='header-wrapper'>
            <div className="logo">
                <img src={logo} alt="Swastha Mitra Logo" />
            </div>
            <div className="menu">
                <ul>
                    <li><NavLink to="/about-us" >About Us</NavLink></li>
                    <li><NavLink to="/services" >Services</NavLink></li>
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
                    }}>
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
                            <li><NavLink to="/about-us" >About Us</NavLink></li>
                            <li><NavLink to="/services" >Services</NavLink></li>
                            <li><NavLink to="/contact-us" >Contact Us</NavLink></li>
                                <li><NavLink to="/inquery" >Inquery</NavLink></li>
                            <Button>
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
