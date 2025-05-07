import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import logo from './../../assets/images/swastha-mitra-logo2.png';
import { TextField, Button, Box, Typography } from '@mui/material';
import './adminLoginCard.scss';


const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Invalid email format'
        ),
    password: Yup.string()
        .min(6, 'Minimum 6 characters')
        .required('Password is required'),
});

const AdminLoginCard = () => {

    const navigate = useNavigate()


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(LoginSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
        // eslint-disable-next-line no-debugger
        debugger
        navigate("/admin/dashboard")
    };


    return (
        <Box>
            <Box className="login-form-header">
                <img src={logo} alt="" />
                <Box className="login-form-header-text">
                    <Typography variant="h5">
                        Welcome to Swasth Mitra
                    </Typography>
                    <Typography variant="h6" >
                        Admin Login
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

                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                    <Button fullWidth variant="contained" color="primary" type="submit">
                        Login
                    </Button>
                    {/* <Button fullWidth variant="contained" color="primary" onClick={() => navigate("/register")}>
                        Sign up
                    </Button> */}
                </Box>
            </form>
        </Box>
    )
}

export default AdminLoginCard
