import { yupResolver } from '@hookform/resolvers/yup';
import React, { use } from 'react'
import { set, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import logo from './../../assets/images/swastha-mitra-logo2.png';
import { TextField, Button, Box, Typography } from '@mui/material';
import './adminLoginCard.scss';
import { api } from '../../apis/api';
import { LOGIN_API } from '../../constant/config';
import { useLoadingAdminDeatils } from "../../context/AdminContext/AdminContext";
import { toast } from 'react-toastify';
import { useLoading } from '../../context/LoadingContext/LoadingContext';





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
    const { state, dispatch } = useLoadingAdminDeatils();
    const { setLoading } = useLoading();

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
            setLoading(true);
            const response = await api.post(LOGIN_API, reqBody);
            if (response?.data) {
                const adminData = {
                    userFirst: response.data.data.firstName,
                    userLast: response.data.data.lastName,
                    role: response.data.data.role,
                    userName: data.email,
                    currentLoggedInUserId: response.data.data.userId,
                };
                localStorage.setItem("accessToken", response.data.data.accessToken);
                dispatch({ type: "SET_ADMIN_DETAILS", payload: adminData });
                sessionStorage.setItem("adminDetails", JSON.stringify(adminData));
                setTimeout(() => {
                    setLoading(false);
                    navigate("/admin/dashboard/inquery");

                }, 1000);
            }
        } catch (error) {
            console.error("error ", error);
            toast.error(error.response.data.message);
            setLoading(false);
        }
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
