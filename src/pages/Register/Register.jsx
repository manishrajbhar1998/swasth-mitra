import React from 'react';
import { useForm } from 'react-hook-form';
import './register.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import registerImg from './../../assets/images/login-register.jpg';
import logo from './../../assets/images/swastha-mitra-logo2.png';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const LoginSchema = Yup.object().shape({
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Minimum 6 characters')
        .required('Password is required'),
});

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(LoginSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const navigate = useNavigate()

    return (
        <Box className='register-wrapper'>
            <Box className="register-image" sx={{display: { xs: 'none', sm: 'none', md: 'block' }}}>
                <img src={registerImg} alt="" />
            </Box>

            <Box className="register-form" sx={{flexBasis: { xs: '95%', sm: '90%', md: '30%' }}}>
                <Box className="register-form-header">
                    <img src={logo} alt="" />
                    <Box className="register-form-header-text">
                        <Typography variant="h5">
                            Swasth Mitra
                        </Typography>
                        <Typography variant="h6" >
                            Your Health, Our Priority
                        </Typography>
                    </Box>
                </Box>
                <Typography className='welcome-text'>
                    <Typography component="span">Welcome Back, </Typography>
                    Please register to your account.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        fullWidth
                        label="Phone Number"
                        margin="normal"
                        {...register('phone')}
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        margin="normal"
                        {...register('email')}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                  
                        <TextField
                            fullWidth
                            label="Set Password"
                            type="password"
                            margin="normal"
                            {...register('password')}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                         <TextField
                            fullWidth
                            label="Confirm Password"
                            type="password"
                            margin="normal"
                            {...register('password')}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />

                        
                 

                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2,marginTop:"20px" }}>
                        <Button fullWidth variant="contained" color="primary" type="submit" >
                            Sign up
                        </Button>
                        <Button fullWidth variant="contained" color="primary" onClick={() => navigate("/login")}>
                            Login
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default Register;
