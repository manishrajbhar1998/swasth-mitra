import React from 'react';
import './loginLayout.scss';
import login from './../../assets/images/login-register.jpg';
import { Box } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';




const LoginLayout = ({ children }) => {


    return (
        <>
            <Header />
            <Box className='login-wrapper'>
                <Box className="login-form" sx={{ flexBasis: { xs: '95%', sm: '90%', md: '30%' } }} >
                    {children}
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default LoginLayout;
