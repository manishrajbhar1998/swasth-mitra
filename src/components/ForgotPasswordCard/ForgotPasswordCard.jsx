import React from 'react';
import { useForm } from 'react-hook-form';
import './forgotpasswordCard.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import forgotPassword from './../../assets/images/login-register.jpg';
import logo from './../../assets/images/swastha-mitra-logo2.png';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { api } from '../../apis/api';
import { POST_FORGOT_PASSWORD } from '../../constant/config';
import { useLoading } from '../../context/LoadingContext/LoadingContext';
import { toast } from 'react-toastify';


const LoginSchema = Yup.object().shape({

    email: Yup.string()
        .required('Email is required')
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Invalid email format'
        ),
    // password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
    // confirmPassword: Yup.string().required('Confirm Password is required').min(6, 'Confirm Password must be at least 6 characters long').oneOf([Yup.ref('password'), null], 'Password and Confirm Password do not match'),
});

const ForgotPasswordCard = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(LoginSchema),
    });

    const { loading, setLoading } = useLoading();

    const onSubmit = async (data) => {
        console.log(data);
        debugger

        const reqBody = {
            email: data.email,
        };

        try {
            setLoading(true)
            const response = await api.post(POST_FORGOT_PASSWORD, reqBody);
            if (response?.data) {
                toast.success(response.data.data.message);
                setLoading(false)
            }
        } catch (error) {
            setLoading(false);
            console.error("invalid userid ", error);
            // toast.error(error?.response?.data?.errors[0])
        }
    };

    // const navigate = useNavigate()

    return (
        <Box>
            <Box className="forgotPassword-form-header">
                <img src={logo} alt="" />
                <Box className="forgotPassword-form-header-text">
                    <Typography variant="h5">
                        Swasth Mitra
                    </Typography>
                    <Typography variant="h6" >
                        Your Health, Our Priority
                    </Typography>
                </Box>
            </Box>
            <Typography className='welcome-text'>
                {/* <Typography component="span">Set Your Password, </Typography> */}
                {/* Please create a strong password to secure your account. */}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    label="Enter Register Email Id"
                    type="email"
                    margin="normal"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                {/* <TextField
                    fullWidth
                    label="Password"
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
                    {...register('confirmPassword')}
                    error={!!errors.password}
                    helperText={errors.confirmPassword?.message}
                /> */}

                <Button fullWidth variant="contained" color="primary" type="submit" sx={{ marginTop: "10px" }}>
                    Submit
                </Button>

            </form>
        </Box>
    );
};

export default ForgotPasswordCard;
