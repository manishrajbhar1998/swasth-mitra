import React, { useState } from 'react';
import './purchasePlan.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    TextField, Button, Box, Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    StepLabel,
    Step,
    Stepper

} from '@mui/material';

import { useLocation, useNavigate } from 'react-router-dom';
import { useLoading } from '../../context/LoadingContext/LoadingContext';
import { useForm, Controller, useWatch } from 'react-hook-form';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BasicDetails from '../../components/BasicDetails/BasicDetails';
import login from './../../assets/images/login-register.jpg';
import MedicalDetail from '../../components/MedicalDetail/MedicalDetail';


const steps = ['Basic Details', 'Medical Details'];



const PurchasePlan = () => {

    const [activeStep, setActiveStep] = useState(0);
    const location = useLocation();
    const { plan, amount } = location.state || {};

    const isStepOptional = (step) => {
        return step === 1;
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => 0);
    };

    console.log("activeStep :: ", activeStep);

    const renderComponent = {
        0: <BasicDetails handleNext={handleNext} planName={plan} planAmount={amount} />,
        1: <MedicalDetail handleBack={handleBack} planName={plan} planAmount={amount} />
    }

    return (
        <>
            <Box className='purchase-plan-wrapper'>
                <Box className="left-side" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                    <img src={login} alt="" />
                </Box>
                <Box className="right-side">
                    {
                        plan === "Individual Plan" ?
                            <MedicalDetail planName={plan} planAmount={amount} />
                            :
                            <Box sx={{ width: '100%' }}>
                                <Stepper activeStep={activeStep}>
                                    {steps.map((label, index) => {

                                        return (
                                            <Step key={label} >
                                                <StepLabel>{label}</StepLabel>
                                            </Step>
                                        );
                                    })}
                                </Stepper>
                                {
                                    <React.Fragment>
                                        {
                                            renderComponent[activeStep]
                                        }

                                    </React.Fragment>
                                }
                            </Box>
                    }
                </Box>
            </Box>
        </>

    );
};

export default PurchasePlan;
