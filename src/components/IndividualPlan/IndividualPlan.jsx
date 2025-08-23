import React from 'react';
import {
    Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,
    Typography, FormGroup, Checkbox, TextField, Button
} from '@mui/material';
import PastDiseaseQuestionary from '../PastDiseaseQuestionary/PastDiseaseQuestionary';
import * as Yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MyDropzone from '../MyDropZone/MyDropZone';
import PresentDiseaseQuestionary from '../PresentDiseaseQuestionary/PresentDiseaseQuestionary';
import './individualPlan.scss';
import { useLocation } from 'react-router-dom';
import { authApi } from '../../apis/api';
import { POST_PURCHASE_PLAN_API } from '../../constant/config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../context/LoadingContext/LoadingContext';

const IndividualPlan = () => {
    const location = useLocation();
    const { plan, amount } = location?.state || {};
    const navigate = useNavigate();
    const { setLoading } = useLoading ? useLoading() : { setLoading: () => { } };

    // Razorpay script loader
    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            if (document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')) {
                resolve(true);
                return;
            }
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    // Razorpay payment handler
    const handlePayment = async (formDataValues) => {
        const res = await loadRazorpayScript();
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        const cleanAmount = typeof amount === 'string' ? amount.replace(/[^\d.]/g, '') : amount;
        const options = {
            key: "rzp_test_m7kwYdRW44PWYw", //Razorpay Test key 
            // key: "rzp_live_y3M1CykMXog8r2", // Razorpay live key
            amount: Number(cleanAmount) * 100, // Amount in paise
            currency: "INR",
            name: "Swasth Mitra",
            description: "Individual Plan Purchase",
            handler: function (response) {
                // On successful payment, call onSubmit with payment info
                onSubmit(formDataValues, {
                    paymentStatus: "SUCCESS",
                    paymentId: response.razorpay_payment_id,
                });
            },
            prefill: {
                name: formDataValues.indiviual?.name || "",
                contact: "",
            },
            theme: {
                color: "#3399cc",
            },
            modal: {
                ondismiss: function () {
                    // Payment was cancelled or failed
                    onSubmit(formDataValues, {
                        paymentStatus: "FAILED",
                        paymentId: "",
                    });
                }
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    const validationSchema = Yup.object().shape({
        indiviual: Yup.object().shape({
            pastDisease: Yup.string().required('Please select an option'),
            pastDiseaseInput: Yup.string().when('pastDisease', {
                is: 'yes',
                then: (schema) => schema.required('Please provide details of the past disease'),
                otherwise: (schema) => schema.notRequired(),
            }),
            presentDisease: Yup.string().required('Please select an option'),
            existingDiseases: Yup.array()
                .of(Yup.string())
                .when('presentDisease', ([present], schema) =>
                    present === 'yes'
                        ? schema.min(1, 'Please select at least one existing disease')
                        : schema.notRequired()
                ),
            presentDiseaseOther: Yup.string().when('existingDiseases', {
                is: (val) => Array.isArray(val) && val.includes('Others'),
                then: (schema) => schema.required('Please specify other disease'),
                otherwise: (schema) => schema.notRequired(),
            }),
            avatar: Yup.array().min(1, 'Please upload a photo'),
        }),
    });

    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            indiviual: {
                pastDisease: '',
                pastDiseaseInput: '',
                presentDisease: '',
                existingDiseases: [],
                presentDiseaseOther: '',
                avatar: [],
            },
        },
    });

    const onSubmit = async (data, paymentInfo = {}) => {
        // Build payload object for logging
        const payload = {
            plan: plan || 'Individual Plan',
            amount: typeof amount === 'string' ? amount.replace(/[^\d.]/g, '') : amount,
            pastDisease: data.indiviual.pastDisease,
            pastDiseaseInput: data.indiviual.pastDiseaseInput,
            presentDisease: data.indiviual.presentDisease,
            existingDiseases: data.indiviual.existingDiseases?.join(','),
            presentDiseaseOther: data.indiviual.presentDiseaseOther,
            profilePic: data.indiviual.avatar && data.indiviual.avatar.length > 0 ? data.indiviual.avatar[0] : null,
            paymentStatus: paymentInfo.paymentStatus || '',
            paymentId: paymentInfo.paymentId || '',
            spouse: '',
            father: '',
            mother: '',
            anyChild: '',
            numofChild: '',
            children: ''
        };
        console.log('Form Payload:', payload);
        // If payment failed, do not hit API
        if (paymentInfo.paymentStatus === 'FAILED') {
            toast.error('Payment failed! Your plan purchase was unsuccessful. Please try again or check your payment method.');
            if (setLoading) setLoading(false);
            return;
        }
        try {
            if (setLoading) setLoading(true);
            const formData = new FormData();
            Object.entries(payload).forEach(([key, value]) => {
                if (key === 'profilePic' && value) {
                    formData.append('profilePic', value);
                } else if (key !== 'profilePic') {
                    formData.append(key, value);
                }
            });
            const response = await authApi.post(POST_PURCHASE_PLAN_API, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            toast.success('Individual Plan Purchase successful!');
            setTimeout(() => {
                if (setLoading) setLoading(false);
                navigate("/dashboard");
            }, 1200);
        } catch (error) {
            if (setLoading) setLoading(false);
            toast.error(error.response?.data?.errors?.[0] || 'Plan Purchase failed!');
            console.error('Purchase failed:', error.response?.data?.errors?.[0]);
        }
    };

    return (
        <Box className="individual_plan_wrapper">
            <form onSubmit={handleSubmit((formDataValues) => handlePayment(formDataValues))}>
                <Box className="form-group-2">
                    <PastDiseaseQuestionary
                        register={register}
                        errors={errors}
                        watch={watch}
                        control={control}
                        namePrefix="indiviual"
                    />
                    <PresentDiseaseQuestionary
                        register={register}
                        errors={errors}
                        watch={watch}
                        control={control}
                        namePrefix="indiviual"
                    />
                    <Controller
                        name="indiviual.avatar"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <MyDropzone
                                onDrop={(acceptedFiles) => onChange(acceptedFiles)}
                                files={value}
                            />
                        )}
                    />
                    {errors?.indiviual?.avatar && (
                        <Typography color="error" fontSize="0.8rem">
                            {errors?.indiviual?.avatar?.message}
                        </Typography>
                    )}
                </Box>
                <Box>
                    <Button variant="contained" sx={{ marginTop: "10px" }} color="primary" type="submit">
                        Pay Now
                    </Button>
                </Box>
            </form>
        </Box>
    );
}

export default IndividualPlan;
