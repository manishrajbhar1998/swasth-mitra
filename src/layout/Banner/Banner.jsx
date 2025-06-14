import React from 'react';
import './banner.scss';
import { Button } from '@mui/material';
// import banner from './../../assets/images/hospital.png';
// import banner1 from './../../assets/images/banner-10.jpg';
import banner1 from './../../assets/images/care.jpg';
import { Link } from 'react-scroll';
import slide1 from '../../assets/img/hero-carousel/2.jpg';
import slide2 from '../../assets/img/hero-carousel/1.jpg';
import slide3 from '../../assets/img/hero-carousel/3.jpg';

const Banner = () => {
  return (

    <div id="carouselExampleFade hero" className="carousel slide carousel-fade hero section dark-background" data-bs-ride="carousel">
      <div
        className="carousel-inner carousel slide carousel-fade"
        id="hero-carousel"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="Slide 1" />
          <div class="carousel-container">
            <h2>SWASTH MITRA<br /></h2>
            <p>Your health partner, just a call away</p>
            <a href="company.php" class="btn-get-started">Learn More</a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="Slide 2" />
          <div class="carousel-container">
            <h2>YOUR TRUSTED HEALTH ALY</h2>
            <p>Wherever You Are, Whenever You Need</p>
            <a href="company.php" class="btn-get-started">Learn More</a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="Slide 3" />
          <div class="carousel-container">
            <h2>FROM ADVICE TO RECOVERY</h2>
            <p>Swasth Mitra is always With You</p>
            <a href="company.php" class="btn-get-started">Learn More</a>
          </div>
        </div>
      </div>

      <a
        class="carousel-control-prev"
        href="#hero-carousel"
        role="button"
        data-bs-slide="prev">
        <span
          class="carousel-control-prev-icon bi bi-chevron-left"
          aria-hidden="true"></span>
      </a>

      <a
        class="carousel-control-next"
        href="#hero-carousel"
        role="button"
        data-bs-slide="next">
        <span
          class="carousel-control-next-icon bi bi-chevron-right"
          aria-hidden="true"></span>
      </a>

      <ol class="carousel-indicators"></ol>
    </div>

  );



}

export default Banner