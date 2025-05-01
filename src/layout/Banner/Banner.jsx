import React from 'react';
import './banner.scss';
import { Button } from '@mui/material';
import banner from './../../assets/images/hospital.png';

const Banner = () => {
  return (
    <div className='banner-wrapper'>
      <div className='image'>
        <img src={banner} alt="" />
      </div>
        <div className="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi soluta officia hic fuga cumque cupiditate, adipisci quis velit deleniti eum. Velit reprehenderit, ut aut explicabo ab debitis adipisci labore.</p>
            <Button sx={{marginTop:"20px"}}>Click here</Button>
        </div>
    </div>
  )
}

export default Banner