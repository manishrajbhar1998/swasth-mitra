import React from 'react';
import logo from './../../assets/images/swastha-mitra-logo2.png';
import './footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='content'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                    <p className='logo-title'>Swastha Mitra</p>
                    <p>Your Health, Our Priority</p>
                </div>
                <div className='contact'>
                    <p className='column-title'>Contact Details</p>
                    <p>+91 8886815815</p>
                    <p>swastha.mitra@gmail.com</p>
                </div>
                <div className='address'>
                    <p className='column-title'>Address</p>
                    <p>Swasth Mitra Next to paperbox company,</p>
                    <p>Mahakali caves roads, Andheri east, Mumbai-400093.</p>
                </div>
                <div className='links'>
                    <p className='column-title'>Socail Links</p>
                    <div>
                        <a href="#" ><XIcon color='' /></a>
                        <a href="#"><FacebookIcon style={{ color: '#0879e6' }} /></a>
                        <a href="#"><YouTubeIcon style={{ color: '#f70000' }} /></a>
                    </div>

                </div>
            </div>
            <div className='copyright'>
                <p> Copyright &copy; 2025 swasthmitra.org All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
