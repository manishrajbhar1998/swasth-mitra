import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/swastha-mitra-logo2.png';
import './header.scss';

const Header = () => {
    const toggleMobileNav = () => {
        document.body.classList.toggle('mobile-nav-active');
    };

    const toggleDropdown = (e) => {
        // Prevent default link click
        e.preventDefault();

        // Toggle dropdown-active on the clicked parent <li>
        const parentLi = e.currentTarget.parentElement;
        parentLi.classList.toggle('dropdown-active');
    };

    useEffect(() => {
        const toggleBtn = document.querySelector('.mobile-nav-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleMobileNav);
        }
        return () => {
            if (toggleBtn) {
                toggleBtn.removeEventListener('click', toggleMobileNav);
            }
        };
    }, []);

    return (
        <header className="header d-flex align-items-center fixed-top" id="header">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <NavLink to="/" className="logo d-flex align-items-center">
                    <img src={logo} alt="Logo" />
                </NavLink>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        {/* <li><a href="#hero" className="active">Home</a></li> */}
                        <li><NavLink to="/" className="active">Home</NavLink></li>

                        {/* Dropdown */}
                        <li className="dropdown">
                            <a href="#" onClick={toggleDropdown}>
                                <span>Company Overview</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                            </a>
                            <ul>
                                <li><NavLink to="/ourcompany">Our Company</NavLink></li>
                                <li><NavLink to="/ourapproach">Our Approach</NavLink></li>
                                <li><NavLink to="/healthimpact">Our Health Impact</NavLink></li>
                            </ul>
                        </li>

                        <li><a href="#services">Plans & Pricing</a></li>
                        <li><a href="#team">Blogs</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>

                    {/* Mobile nav toggle icon */}
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>
            </div>
        </header>
    );
};

export default Header;
