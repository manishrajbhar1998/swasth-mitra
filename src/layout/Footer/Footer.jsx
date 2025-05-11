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
                    <p>78965412365 / 78965412365</p>
                    <p>swastha.mitra@gmail.com</p>
                </div>
                <div className='links'>
                    <p className='column-title'>Socail Links</p>
                    <div>
                        <a href="#" ><XIcon /></a>
                        <a href="#"><FacebookIcon /></a>
                        <a href="#"><YouTubeIcon /></a>
                    </div>

                </div>
            </div>
            <div className='copyright'>
                <p>C 2025 All right reserved</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer
