import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/swastha-mitra-logo2.png';
import './header.scss';

const Header = () => {

    const location = useLocation();

    const isHashActive = (hash) => location.hash === hash;

    const dropdownPaths = ['/ourcompany', '/ourapproach', '/healthimpact'];

    // Check if current location starts with any dropdown path
    const isDropdownActive = dropdownPaths.some((path) => location.pathname.startsWith(path));

    const toggleMobileNav = () => {
        document.body.classList.toggle('mobile-nav-active');
    };

    const toggleDropdown = (e) => {
        e.preventDefault();

        const parentLi = e.currentTarget.parentElement;
        parentLi.classList.toggle('dropdown-active');
    };

    const closeMobileNav = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.classList.remove('mobile-nav-active');
    };


    const handleNavClick = (e) => {
        if (e.currentTarget.closest('.dropdown')) return; // avoid closing on dropdown parent click
        window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll top on menu click
        closeMobileNav(); // close mobile nav if open
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
                <NavLink to="/" className="logo d-flex align-items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src={logo} alt="Logo" />
                </NavLink>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) => {
                                    // If it's "/" exactly, or if none of the known routes match
                                    const knownRoutes = [
                                        '/ourcompany',
                                        '/ourapproach',
                                        '/healthimpact',
                                        '/inquery',
                                        '/login',
                                    ];

                                    const isKnown = knownRoutes.some((path) =>
                                        location.pathname.startsWith(path)
                                    );

                                    return location.pathname === '/' || !isKnown ? 'active' : '';
                                }}
                                onClick={handleNavClick}
                            >
                                Home
                            </NavLink>
                        </li>


                        <li className={`dropdown ${isDropdownActive ? 'dropdown-active' : ''}`}>
                            <a href="#" onClick={toggleDropdown}>
                                <span>Company Overview</span> <i className={`bi bi-chevron-down toggle-dropdown  rotated}`}></i>
                            </a>
                            <ul>
                                <li><NavLink to="/ourcompany" onClick={closeMobileNav}>Our Company</NavLink></li>
                                <li><NavLink to="/ourapproach" onClick={closeMobileNav}>Our Approach</NavLink></li>
                                <li><NavLink to="/healthimpact" onClick={closeMobileNav}>Our Health Impact</NavLink></li>
                            </ul>
                        </li>

                        <li><NavLink to="/#services" className={() => (location.hash === '#services' ? 'active' : '')} onClick={handleNavClick}>Plans & Pricing</NavLink></li>
                        <li><NavLink to="/#team" className={() => (location.hash === '#team' ? 'active' : '')} onClick={handleNavClick}>Blogs</NavLink></li>
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
