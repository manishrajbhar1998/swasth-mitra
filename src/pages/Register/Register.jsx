import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import './register.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Container, Box, Typography, styled, Autocomplete } from '@mui/material';
import registerImg from './../../assets/images/login-register.jpg';
import logo from './../../assets/images/swastha-mitra-logo2.png';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import {
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { api } from '../../apis/api';
import { POST_USER_REGISTER } from '../../constant/config';

import { useLoading } from '../../context/LoadingContext/LoadingContext';
import Loader from '../../components/Loader/Loader';
import { district, indianStates } from '../../constant/constant';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';

const CustomRadio = styled(Radio)({
    padding: '4px',
    '& .MuiSvgIcon-root': {
        fontSize: '14px',
    },


});


const LoginSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    mobile: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    gender: Yup.string().required('Gender is required'),
    maritalStatus: Yup.string().required('Marital status is required'),
    address: Yup.string().required('Address is required'),
    pincode: Yup.string().matches(/^\d{6}$/, 'Pincode must be 6 digits').required('Pincode is required'),
    dob: Yup.date().nullable().required('Date of birth is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    district: Yup.string().required('District is required')
});

const Register = () => {

    const { loading, setLoading } = useLoading();
    const [districtOption, setDistrictOption] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm({
        resolver: yupResolver(LoginSchema),
    });

    const onSubmit = async (data) => {
        const reqBody = {
            "firstName": data?.firstName,
            "lastName": data.lastName,
            "dateOfBirth": dayjs(data.dob).format('DD-MM-YYYY'),
            "gender": data.gender,
            "maritalStatus": data.maritalStatus,
            "email": data.email,
            "phoneNumber": data.mobile,
            "address": data.address,
            "city": data.city,
            "state": data.state,
            "district": data.district,
            "role": "USER",
            "pinCode": data.pincode,
            "planSelection": "",
            "patientHistory": "",
            "existingDiseases": "",
            "password": data.password

        }

        try {
            setLoading(true)
            const response = await api.post(POST_USER_REGISTER, JSON.stringify(reqBody));
            if (response?.data) {
                toast.success("Registration Successfull")
                setLoading(false)
                setTimeout(() => {
                    navigate("/login");
                }, 10)
            }
        } catch (error) {
            console.log("error", error?.response?.data?.errors[0]);
            setLoading(false)

            toast.error(error?.response?.data?.errors[0])

        }
    };

    const navigate = useNavigate()



    return (
        <>
            <Header />
            <Box className='register-wrapper'>
                <Box className="register-form" sx={{ flexBasis: { xs: '95%', sm: '90%', md: '30%' } }}>
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
                    <LocalizationProvider dateAdapter={AdapterDayjs}>

                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <Box sx={{
                                display: 'flex', gap: '20px', flexDirection: {
                                    xs: 'column',
                                    sm: 'row',
                                },
                            }}>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="First Name"
                                            error={!!errors.firstName}
                                            helperText={errors.firstName?.message}
                                            fullWidth
                                            onChange={(e) => {
                                                const onlyLetters = e.target.value.replace(/[^A-Za-z\s]/g, '');
                                                field.onChange(onlyLetters);
                                            }}
                                        />
                                    )}
                                />
                                <Controller
                                    name="lastName"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Last Name"
                                            error={!!errors.lastName}
                                            helperText={errors.lastName?.message}
                                            fullWidth
                                            onChange={(e) => {
                                                const onlyLetters = e.target.value.replace(/[^A-Za-z\s]/g, '');
                                                field.onChange(onlyLetters);
                                            }}
                                        />
                                    )}
                                />
                            </Box>

                            <Box sx={{
                                display: 'flex', gap: '20px', flexDirection: {
                                    xs: 'column',
                                    sm: 'row',
                                },
                            }}>
                                <Controller
                                    name="mobile"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Mobile No"
                                            error={!!errors.mobile}
                                            helperText={errors.mobile?.message}
                                            fullWidth
                                            onChange={(e) => {
                                                const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
                                                field.onChange(onlyNumbers);
                                            }}
                                            inputProps={{ maxLength: 10 }}
                                        />
                                    )}
                                />
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Email Address"
                                            error={!!errors.email}
                                            helperText={errors.email?.message}
                                            fullWidth
                                        />
                                    )}
                                />
                            </Box>
                            <Box className="dob-wrapper">
                                <Box>
                                    <Controller
                                        name="dob"
                                        control={control}
                                        defaultValue={null}
                                        render={({ field, fieldState }) => (
                                            <DatePicker
                                                className='datepicker'
                                                fullWidth
                                                label="Date of Birth"
                                                disableFuture
                                                value={field.value}
                                                onChange={(date) => field.onChange(date)}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        fullWidth
                                                        margin="normal"
                                                        error={!!fieldState.error}
                                                        helperText={fieldState.error?.message}

                                                    />
                                                )}

                                                slotProps={{
                                                    textField: {
                                                        InputProps: {
                                                            sx: {
                                                                '& .MuiPickersInputBase-sectionsContainer': {
                                                                    padding: '11.5px 0',

                                                                },


                                                            }
                                                        },
                                                        sx: {
                                                            '& .MuiInputLabel-root': {
                                                                fontSize: '12px !important',
                                                            },
                                                            '& .MuiPickersSectionList-sectionContent': {
                                                                fontSize: '12px !important',

                                                            }
                                                        },
                                                    }
                                                }}
                                            />
                                        )}
                                    />
                                </Box>

                                <Box>

                                    <Controller
                                        name="city"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                label="City"
                                                error={!!errors.city}
                                                helperText={errors.city?.message}
                                                fullWidth
                                            />
                                        )}
                                    />
                                </Box>
                            </Box>

                            <Box sx={{
                                display: 'flex', gap: '20px', flexDirection: {
                                    xs: 'column',
                                    sm: 'row',
                                },
                            }}>
                                <Controller
                                    name="state"
                                    control={control}
                                    render={({ field }) => (
                                        <Autocomplete
                                            options={indianStates}
                                            value={field.value || null}
                                            onChange={(_, data) => {

                                                setDistrictOption(district[data].districts)
                                                field.onChange(data)
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Select State"
                                                    error={!!errors.state}
                                                    helperText={errors.state?.message}
                                                />
                                            )}
                                            fullWidth
                                        />
                                    )}
                                />

                                <Controller
                                    name="district"
                                    control={control}
                                    render={({ field }) => (
                                        <Autocomplete
                                            options={districtOption}
                                            value={field.value || null}
                                            onChange={(_, data) => field.onChange(data)}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Select Dsitrict"
                                                    error={!!errors.state}
                                                    helperText={errors.state?.message}
                                                />
                                            )}
                                            fullWidth
                                        />
                                    )}
                                />

                            </Box>
                            <Box sx={{
                                display: 'flex', gap: '20px', flexDirection: {
                                    xs: 'column',
                                    sm: 'row',
                                },
                            }}>
                                <Controller
                                    name="pincode"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Pincode"
                                            error={!!errors.pincode}
                                            helperText={errors.pincode?.message}
                                            fullWidth
                                            onChange={(e) => {
                                                const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
                                                field.onChange(onlyNumbers);
                                            }}
                                            inputProps={{ maxLength: 6 }}
                                        />
                                    )}
                                />
                                <Controller
                                    name="address"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Address"
                                            error={!!errors.address}
                                            helperText={errors.address?.message}
                                            fullWidth
                                        />
                                    )}
                                />

                            </Box>




                            <Box sx={{
                                display: 'flex', gap: '20px', flexDirection: {
                                    xs: 'column',
                                    sm: 'row',
                                },
                                padding: "0",
                                marginTop: "-12px",
                            }}>
                                <Controller
                                    name="password"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Set Password"
                                            type="password"
                                            margin="normal"
                                            error={!!errors.password}
                                            helperText={errors.password?.message}
                                        />
                                    )}
                                />

                                <Controller
                                    name="confirmPassword"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Confirm Password"
                                            type="password"
                                            margin="normal"
                                            error={!!errors.confirmPassword}
                                            helperText={errors.confirmPassword?.message}
                                        />
                                    )}
                                />
                            </Box>

                            <Box className="dob-wrapper">
                                <Box>
                                    <Controller
                                        name="gender"
                                        control={control}

                                        defaultValue="male"
                                        render={({ field }) => (
                                            <FormControl component="fieldset" error={!!errors.gender}>
                                                <FormLabel component="legend" sx={{ fontSize: '16px', color: "#000" }}>Gender</FormLabel>
                                                <RadioGroup row {...field}>
                                                    <FormControlLabel value="male" control={<CustomRadio />} label="Male" />
                                                    <FormControlLabel value="female" control={<CustomRadio />} label="Female" />
                                                    <FormControlLabel value="other" control={<CustomRadio />} label="Other" />
                                                </RadioGroup>
                                                <Typography color="error">{errors.gender?.message}</Typography>
                                            </FormControl>
                                        )}
                                    />
                                </Box>

                                <Box>

                                    <Controller
                                        name="maritalStatus"
                                        control={control}
                                        defaultValue="single"
                                        render={({ field }) => (
                                            <FormControl component="fieldset" error={!!errors.maritalStatus}>
                                                <FormLabel component="legend" sx={{ fontSize: '16px', color: "#000" }}>Marital Status</FormLabel>
                                                <RadioGroup row {...field}>
                                                    <FormControlLabel value="single" control={<CustomRadio />} label="Single" />
                                                    <FormControlLabel value="married" control={<CustomRadio />} label="Married" />
                                                </RadioGroup>
                                                <Typography color="error">{errors.maritalStatus?.message}</Typography>
                                            </FormControl>
                                        )}
                                    />
                                </Box>
                            </Box>

                            <Box className="btn-wrapper" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Button fullWidth variant="contained" color="primary" type="submit" >
                                    Sign up
                                </Button>
                                <p className='login-link'>
                                    Already have an account?{' '}
                                    <span onClick={() => navigate("/login")}> Click here to login</span>.
                                </p>
                            </Box>
                        </form>
                    </LocalizationProvider>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default Register;
