import React from 'react';
import './purchasePlan.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    TextField, Button, Box, Typography,
    FormGroup,
    FormControlLabel,
    Checkbox
} from '@mui/material';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoading } from '../../context/LoadingContext/LoadingContext';
import { useForm, Controller, useWatch } from 'react-hook-form';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const PurchaseSchema = Yup.object().shape({
    existingDiseases: Yup.array().of(Yup.string()).min(1, "Please select at least one disease"),
    otherDisease: Yup.string().when('existingDiseases', {
        is: (val) => val?.includes("Others"),
        then: Yup.string().required("Please specify the other disease"),
        otherwise: Yup.string().notRequired()
    }),

    pastDiseases: Yup.string().trim(),
    pastDiseasesDate: Yup.date()
        .nullable()
        .when('pastDiseases', {
            is: (val) => val && val.length > 0,
            then: (schema) => schema.required('Please select the date of past diseases'),
            otherwise: (schema) => schema.notRequired().nullable(),
        }),
});


const diseases = [
    "Diabetes",
    "Hypertension",
    "Heart Disease",
    "Chronic Respiratory Disease",
    "Cancer",
    "Tuberculosis",
    "Dengue",
    "Malaria",
    "Kidney Disease",
    "Hepatitis",
    "Others",
];

const PurchasePlan = () => {
    const { loading, setLoading } = useLoading();
    const location = useLocation();
    const navigate = useNavigate();

    const { plan, amount } = location.state || {};

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            plan: plan || '',
            amount: amount,
            existingDiseases: '',
            pastDiseases: '',
            pastDiseasesDate: null,
        },
        resolver: yupResolver(PurchaseSchema),
    });

    const pastDiseases = useWatch({ control, name: 'pastDiseases' });



    const onSubmit = (data) => {

        console.log('Submitted data:', data);
        // You can add your API call here
        // navigate("/dashboard");
    };

    const existingDiseases = useWatch({ control, name: 'existingDiseases' });

    return (
        <>
            <Box className='purchase-plan-wrapper'>
                <Box className="purchase-plan-form" sx={{ flexBasis: { xs: '95%', sm: '90%', md: '30%' } }} >
                    <Typography className='back' onClick={() => navigate('/dashboard')}>
                        <ArrowBackIcon sx={{ fontSize: "16px" }} /> Back
                    </Typography>

                    <Typography className='welcome-text'>
                        Please fill some additional details
                    </Typography>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                fullWidth
                                label="Selected Plan"
                                margin="normal"
                                value={plan || ''}
                                disabled
                            />
                            <TextField
                                fullWidth
                                label="Amount"
                                margin="normal"
                                value={amount || ''}
                                disabled
                            />
                            <TextField
                                fullWidth
                                label="Past Diseases"
                                margin="normal"
                                {...register('pastDiseases')}
                                error={!!errors.pastDiseases}
                                helperText={errors.pastDiseases?.message}
                            />

                            <Box sx={{ display: pastDiseases ? 'block' : 'none' }}>
                                <Controller
                                    name="pastDiseasesDate"
                                    control={control}
                                    render={({ field, fieldState }) => {

                                        console.log("fieldState :: ", fieldState)
                                        return (
                                            <DatePicker
                                                label="Date of Past Disease"
                                                disableFuture
                                                value={field.value}
                                                onChange={(date) => field.onChange(date)}
                                                className="dob"
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        fullWidth
                                                        margin="normal"
                                                        name="pastDiseasesDate"
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
                                                        error: !!errors.pastDiseasesDate,
                                                        helperText: errors.pastDiseasesDate?.message && errors.pastDiseasesDate?.message,

                                                    }
                                                }}
                                            />
                                        )
                                    }}
                                />
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: "600" }}>Existing Diseases</Typography>
                                <FormGroup>
                                    {diseases.map((disease) => (
                                        <FormControlLabel
                                            key={disease}
                                            control={
                                                <Checkbox
                                                    value={disease}
                                                    {...register("existingDiseases")}
                                                />
                                            }
                                            label={disease}
                                        />
                                    ))}
                                </FormGroup>
                                {existingDiseases?.includes("Others") && (
                                    <TextField
                                        fullWidth
                                        label="Specify Other Disease"
                                        margin="normal"
                                        {...register("otherDisease")}
                                        error={!!errors.otherDisease}
                                        helperText={errors.otherDisease?.message}
                                    />
                                )}
                            </Box>


                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Button fullWidth variant="contained" color="primary" type="submit">
                                    Purchase plan
                                </Button>
                            </Box>
                        </form>
                    </LocalizationProvider>
                </Box>
            </Box>
        </>

    );
};

export default PurchasePlan;
