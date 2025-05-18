import './inquery.scss';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    Box,
    Button,
    TextField,
    Typography,
    Autocomplete,
} from '@mui/material';
import { indianStates } from '../../constant/constant';
import { postInquery } from '../../apis/postInquery';
import logo from './../../assets/images/swastha-mitra-logo2.png';


// Schema
const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    mobile: yup
        .string()
        .required('Mobile number is required')
        .matches(/^[0-9]{10}$/, 'Must be a 10-digit number'),
    email: yup
        .string()
        .required('Email is required')
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Invalid email format'
        ),
    address: yup.string().required('Address is required'),
    city: yup.string().required('City is required'),
    state: yup
        .string()
        .required('State is required')
        .oneOf(indianStates, 'Invalid state selected'),
    pincode: yup
        .string()
        .required('Pincode is required')
        .matches(/^[0-9]{6}$/, 'Must be a 6-digit number'),
    message: yup.string().required('Message is required'),
});

const Inquery = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: '',
            lastName: '',
            mobile: '',
            email: '',
            address: '',
            city: '',
            state: '',
            pincode: '',
            message: '',
        },
    });

    const onSubmit = async (data) => {
        debugger
        console.log('Form Data:', data);
        try {
            const resp = await postInquery(data)
            console.log("resp :: ", resp);
        } catch (error) {
            console.log("error :: ", error)
        }
    };

    return (
        <Box className="inquery-container">
            <Box className="inquery-form">
                <Box className="inquery-form-header">
                    <img src={logo} alt="" />
                    <Box className="inquery-form-header-text">
                        <Typography variant="h5">
                            Welcome to Swasth Mitra
                        </Typography>
                        <Typography variant="h6" >
                            Your Health, Our Priority
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="h6">
                    Inquiry Form
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Box sx={{
                        display: 'flex', gap: '30px', flexDirection: {
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
                        display: 'flex', gap: '30px', flexDirection: {
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

                    <Box >
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
                        display: 'flex', gap: '30px', flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                    }}>
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

                        <Controller
                            name="state"
                            control={control}
                            render={({ field }) => (
                                <Autocomplete
                                    options={indianStates}
                                    value={field.value || null}
                                    onChange={(_, data) => field.onChange(data)}
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
                    </Box>

                    <Box >
                        <Controller
                            name="message"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Message"
                                    multiline
                                    rows={2}
                                    error={!!errors.message}
                                    helperText={errors.message?.message}
                                    fullWidth
                                />
                            )}
                        />
                    </Box>

                    <Button variant="contained" type="submit">
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default Inquery;
