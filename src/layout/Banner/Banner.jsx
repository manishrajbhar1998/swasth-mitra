import React from 'react';
import './banner.scss';
import { Button } from '@mui/material';
import banner from './../../assets/images/hospital.png';
import banner1 from './../../assets/images/banner-10.jpg';
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <div className='banner-wrapper'>
      <div className='image'>
        <img src={banner1} alt="" /> 
      </div>
      <div className="content">
        <p className='icon'>🩺</p>
        <h1> Swasth Mitra – Your Health Ally, Always On Call</h1>
        <h2>Bridging the Gap Between You and Quality Healthcare</h2>
        <p>We empower every citizen with 24x7 support in medical emergencies—connecting hospitals and people through digital solutions, whether in cities or villages. Your health is our mission.</p>
        <p>👉 Because every life matters.</p>
        <Link to="services" smooth={true} duration={500}><Button sx={{ marginTop: "20px" }}>Check Plans</Button></Link>

      </div>
    </div>
  )
}

export default Banner