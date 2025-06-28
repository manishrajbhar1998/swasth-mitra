import React from 'react';
import { useForm } from 'react-hook-form';
import './login.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import login from './../../assets/images/login-register.jpg';
import logo from './../../assets/images/swastha-mitra-logo2.png';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { api } from '../../apis/api';
import { LOGIN_API } from '../../constant/config';
import { useLoading } from '../../context/LoadingContext/LoadingContext';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';


const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Minimum 6 characters')
        .required('Password is required'),
});

const Login = () => {
    const { loading, setLoading } = useLoading();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(LoginSchema),
    });

    const onSubmit = async (data) => {
        const reqBody = {
            userName: data.email,
            password: data.password
        };
        try {
            setLoading(true)
            const response = await api.post(LOGIN_API, reqBody);
            if (response?.data) {
                localStorage.setItem("accessToken", response.data.data.accessToken);
                setLoading(false)
                navigate("/dashboard");
            }
        } catch (error) {
            setLoading(false)

            console.error("invalid userid and password ", error);
            toast.error(error?.response?.data?.errors[0])
        }
    };

    const navigate = useNavigate()

    return (
        <>
            <Header />
            <Box className='login-wrapper'>

                <Box className="login-form" sx={{ flexBasis: { xs: '95%', sm: '90%', md: '30%' } }} >
                    <Box className="login-form-header">
                        <img src={logo} alt="" />
                        <Box className="login-form-header-text">
                            <Typography variant="h5">
                                Welcome to Swasth Mitra
                            </Typography>
                            <Typography variant="h6" >
                                Your Health, Our Priority
                            </Typography>
                        </Box>
                    </Box>
                    <Typography className='welcome-text'>
                        Please login to your account.
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            margin="normal"
                            {...register('email')}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <Box>
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                margin="normal"
                                {...register('password')}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />

                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                                <Typography
                                    variant="body2"
                                    color="primary"
                                    sx={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        navigate("/forgotpass")
                                    }}
                                >
                                    Forgot Password?
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Button fullWidth variant="contained" color="primary" type="submit">
                                Login
                            </Button>
                            <p className='register-link'>
                                Don't have an account?{' '}
                                <span onClick={() => navigate("/register")}> Click here to register</span>.
                            </p>
                        </Box>
                    </form>
                </Box >
            </Box >
            <Footer />
        </>
    );
};

export default Login;
