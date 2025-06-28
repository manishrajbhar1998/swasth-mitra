import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/swastha-mitra-logo2.png';
import './header.scss';

const Header = () => {
    const toggleMobileNav = () => {
        document.body.classList.toggle('mobile-nav-active');
    };

    const toggleDropdown = (e) => {
        e.preventDefault();

        const parentLi = e.currentTarget.parentElement;
        parentLi.classList.toggle('dropdown-active');
    };

    const closeMobileNav = () => {
        document.body.classList.remove('mobile-nav-active');
    };

    const handleNavClick = (e) => {
        if (e.currentTarget.closest('.dropdown')) return;
        closeMobileNav();
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
                        <li><NavLink to="/" className="active" onClick={handleNavClick}>Home</NavLink></li>

                        <li className="dropdown">
                            <a href="#" onClick={toggleDropdown}>
                                <span>Company Overview</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                            </a>
                            <ul>
                                <li><NavLink to="/ourcompany" onClick={closeMobileNav}>Our Company</NavLink></li>
                                <li><NavLink to="/ourapproach" onClick={closeMobileNav}>Our Approach</NavLink></li>
                                <li><NavLink to="/healthimpact" onClick={closeMobileNav}>Our Health Impact</NavLink></li>
                            </ul>
                        </li>

                        <li><a href="#services" onClick={handleNavClick}>Plans & Pricing</a></li>
                        <li><a href="#team" onClick={handleNavClick}>Blogs</a></li>
                        <li><NavLink to="/inquery" onClick={handleNavClick}>Inquery</NavLink></li>
                        <li><NavLink to="/login" onClick={handleNavClick}>Login</NavLink></li>
                    </ul>


                    {/* Mobile nav toggle icon */}
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>
            </div>
        </header>
    );
};

export default Header;
