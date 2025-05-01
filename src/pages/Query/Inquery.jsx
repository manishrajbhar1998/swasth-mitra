import './inquery.scss';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    Box,
    Button,
    MenuItem,
    Select,
    TextField,
    Typography,
    InputLabel,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Grid,
} from '@mui/material';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    mobile: yup.string().required('Mobile number is required').matches(/^[0-9]{10}$/, 'Must be 10 digits'),
    email: yup.string().email('Invalid email').required('Email is required'),
    age: yup.string().required('Age is required'),
    gender: yup.string().required('Gender is required'),
    date: yup.date().required('Date is required'),
    time: yup.string().required('Time is required'),
    visitedBefore: yup.boolean().required(),
});

const Inquery = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            mobile: '',
            email: '',
            age: '',
            gender: '',
            date: '',
            time: '',
            visitedBefore: true,
        },
    });

    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };

    return (
        <Box className="appointment-form">
            <Typography variant="h6" gutterBottom>
                Request Appointment With Dr. Naresh Trehan
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Controller
                            name="date"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type="date"
                                    label="Select Date"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    error={!!errors.date}
                                    helperText={errors.date?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Controller
                            name="time"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Select Time"
                                    type="time"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    error={!!errors.time}
                                    helperText={errors.time?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="subtitle2">Have you visited this hospital before?</Typography>
                        <Controller
                            name="visitedBefore"
                            control={control}
                            render={({ field }) => (
                                <RadioGroup row {...field}>
                                    <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                    <FormControlLabel value={false} control={<Radio />} label="No" />
                                </RadioGroup>
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Enter Your Name"
                                    fullWidth
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Controller
                            name="mobile"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Mobile Number"
                                    fullWidth
                                    error={!!errors.mobile}
                                    helperText={errors.mobile?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email ID"
                                    fullWidth
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FormControl fullWidth error={!!errors.age}>
                            <InputLabel>Select Your Age</InputLabel>
                            <Controller
                                name="age"
                                control={control}
                                render={({ field }) => (
                                    <Select {...field} label="Select Your Age">
                                        {[...Array(80)].map((_, i) => (
                                            <MenuItem key={i + 1} value={i + 1}>
                                                {i + 1}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                            <Typography className="helper-text">{errors.age?.message}</Typography>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                        <FormControl fullWidth error={!!errors.gender}>
                            <InputLabel>Gender</InputLabel>
                            <Controller
                                name="gender"
                                control={control}
                                render={({ field }) => (
                                    <Select {...field} label="Gender">
                                        <MenuItem value="male">Male</MenuItem>
                                        <MenuItem value="female">Female</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </Select>
                                )}
                            />
                            <Typography className="helper-text">{errors.gender?.message}</Typography>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth type="submit">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default Inquery;
