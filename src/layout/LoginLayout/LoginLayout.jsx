import React from 'react';
import './loginLayout.scss';
import login from './../../assets/images/login-register.jpg';
import { Box } from '@mui/material';




const LoginLayout = ({children}) => {


    return (
        <Box className='login-wrapper'>
            <Box className="login-image" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} >
                <img src={login} alt="" />
            </Box>
            <Box className="login-form" sx={{ flexBasis: { xs: '95%', sm: '90%', md: '30%' } }} >
                {children}
            </Box>
        </Box>
    );
};

export default LoginLayout;
