import React, { useMemo, useState } from 'react';
import './purchasePolicyPlan.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    TextField, Button, Box, Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    StepLabel,
    Step,
    Stepper,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio

} from '@mui/material';

import CustomerDatePicker from '../../components/CutomerDatePicker/CustomerDatePicker';
import * as Yup from 'yup';
import { Controller, useForm } from 'react-hook-form'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import MyDropzone from '../../components/MyDropZone/MyDropZone';
import { getPersonSchema } from '../../constant/constant';
import { useLocation } from 'react-router-dom';
import PastDiseaseQuestionary from '../../components/PastDiseaseQuestionary/PastDiseaseQuestionary';
import IndividualPlan from '../../components/IndividualPlan/IndividualPlan';
import PresentDiseaseQuestionary from '../../components/PresentDiseaseQuestionary/PresentDiseaseQuestionary';
import CustomerDashboardHeader from '../../layout/CustomerDashboardHeader/CustomerDashboardHeader';
import Footer from '../../layout/Footer/Footer';
import { authApi } from '../../apis/api';
import { POST_PURCHASE_PLAN_API } from '../../constant/config';
import { toast } from 'react-toastify';
import { useLoading } from '../../context/LoadingContext/LoadingContext';
import { useNavigate } from 'react-router-dom';

// const generateChildFields = (count = 0) => {
//     const fields = {};
//     for (let i = 1; i <= count; i++) {
//         fields[`Child${i}`] = Yup.string().required(`Child ${i} name is required`);
//         fields[`Child${i}DOB`] = Yup.date()
//             .nullable()
//             .required(`Child ${i} DOB is required`);
//     }
//     return fields;
// };

const PurchasePolicyPlan = () => {
    const navigate = useNavigate()
    const [numOfChildRef, setNumOfChildRef] = useState(0);
    const [isMarried, setIsMarried] = useState(true);
    const { setLoading } = useLoading();

    const location = useLocation();
    const { plan, amount } = location?.state || {};

    let validationSchema = Yup.object().shape({
        spouse: getPersonSchema(),
        father: getPersonSchema(),
        mother: getPersonSchema(),
        anyChild: Yup.string().required('Please select an option'),
        numofChild: Yup.mixed().when('anyChild', {
            is: 'yes',
            then: () =>
                Yup.number()
                    .transform((value, originalValue) =>
                        originalValue === '' ? undefined : value
                    )
                    .typeError('Please enter a number')
                    .required('This field is required')
                    .min(1, 'Must be at least 1'),
            otherwise: () => Yup.mixed().notRequired(),
        }),
        children: Yup.array().of(
            Yup.object().shape({
                name: Yup.string().required('Child name is required'),
                dob: Yup.date().nullable().required('Child DOB is required'),
                avatar: Yup.array()
                    .min(1, 'Avatar is required')
                    .required('Avatar is required'),
            })
        ).when('anyChild', {
            is: 'yes',
            then: (schema) => schema.min(1, 'At least one child must be entered'),
            otherwise: (schema) => schema.notRequired(),
        }),
    });


    const {
        register,
        control,
        handleSubmit,
        getValues,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            spouse: {
                name: '',
                dob: null,
                mobile: '',
                avatar: [],
                pastDisease: '',
                pastDiseaseInput: '',
                presentDisease: '',
                existingDiseases: [],
                presentDiseaseInput: {},   // must be object not string
                presentDiseaseOther: ''
            },
            father: {
                name: '',
                dob: null,
                mobile: '',
                avatar: [],
                pastDisease: '',
                pastDiseaseInput: '',
                presentDisease: '',
                existingDiseases: [],
                presentDiseaseInput: {},   // must be object not string
                presentDiseaseOther: ''
            },
            mother: {
                name: '',
                dob: null,
                mobile: '',
                avatar: [],
                pastDisease: '',
                pastDiseaseInput: '',
                presentDisease: '',
                existingDiseases: [],
                presentDiseaseInput: {},   // must be object not string
                presentDiseaseOther: ''
            },
            anyChild: '',
            numofChild: '',
            children: []
        },
        resolver: yupResolver(validationSchema)
    })

    const { numofChild } = watch()

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
            // key: "rzp_test_m7kwYdRW44PWYw", // Razorpay test key
            key: "rzp_live_y3M1CykMXog8r2", // Razorpay live key
            amount: Number(11) * 100, // Amount in paise
            currency: "INR",
            name: "Swasth Mitra",
            description: "Plan Purchase",
            handler: function (response) {
                // On successful payment, call onSubmit with payment info
                onSubmit(formDataValues, {
                    paymentStatus: "SUCCESS",
                    paymentId: response.razorpay_payment_id,
                });
            },
            prefill: {
                name: formDataValues.spouse?.name || "",
                contact: formDataValues.spouse?.mobile || "",
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    const onSubmit = async (data, paymentInfo = {}) => {
        try {
            setLoading(true);
            const formData = new FormData();

            // Top-level fields
            formData.append('plan', plan);
            // Clean amount: remove all non-digit and non-dot characters
            const cleanAmount = typeof amount === 'string' ? amount.replace(/[^\d.]/g, '') : amount;
            formData.append('amount', 1);
            formData.append('anyChild', data.anyChild);
            formData.append('numofChild', data.numofChild);

            // Spouse
            if (data.spouse) {
                formData.append('familyMembersDTO.spouse.name', data.spouse.name);
                formData.append('familyMembersDTO.spouse.dob', data.spouse.dob);
                formData.append('familyMembersDTO.spouse.mobile', data.spouse.mobile);
                formData.append('familyMembersDTO.spouse.pastDisease', data.spouse.pastDisease);
                formData.append('familyMembersDTO.spouse.pastDiseaseInput', data.spouse.pastDiseaseInput);
                formData.append('familyMembersDTO.spouse.presentDisease', data.spouse.presentDisease);
                formData.append('familyMembersDTO.spouse.existingDiseases', data.spouse.existingDiseases?.join(','));
                formData.append('familyMembersDTO.spouse.presentDiseaseOther', data.spouse.presentDiseaseOther);
                // File
                if (data.spouse.avatar && data.spouse.avatar.length > 0) {
                    formData.append('familyMembersDTO.spouse.profilePic', data.spouse.avatar[0]);
                }
            }

            // Father
            if (data.father) {
                formData.append('familyMembersDTO.father.name', data.father.name);
                formData.append('familyMembersDTO.father.dob', data.father.dob);
                formData.append('familyMembersDTO.father.mobile', data.father.mobile);
                formData.append('familyMembersDTO.father.pastDisease', data.father.pastDisease);
                formData.append('familyMembersDTO.father.pastDiseaseInput', data.father.pastDiseaseInput);
                formData.append('familyMembersDTO.father.presentDisease', data.father.presentDisease);
                formData.append('familyMembersDTO.father.existingDiseases', data.father.existingDiseases?.join(','));
                formData.append('familyMembersDTO.father.presentDiseaseOther', data.father.presentDiseaseOther);
                if (data.father.avatar && data.father.avatar.length > 0) {
                    formData.append('familyMembersDTO.father.profilePic', data.father.avatar[0]);
                }
            }

            // Mother
            if (data.mother) {
                formData.append('familyMembersDTO.mother.name', data.mother.name);
                formData.append('familyMembersDTO.mother.dob', data.mother.dob);
                formData.append('familyMembersDTO.mother.mobile', data.mother.mobile);
                formData.append('familyMembersDTO.mother.pastDisease', data.mother.pastDisease);
                formData.append('familyMembersDTO.mother.pastDiseaseInput', data.mother.pastDiseaseInput);
                formData.append('familyMembersDTO.mother.presentDisease', data.mother.presentDisease);
                formData.append('familyMembersDTO.mother.existingDiseases', data.mother.existingDiseases?.join(','));
                formData.append('familyMembersDTO.mother.presentDiseaseOther', data.mother.presentDiseaseOther);
                if (data.mother.avatar && data.mother.avatar.length > 0) {
                    formData.append('familyMembersDTO.mother.profilePic', data.mother.avatar[0]);
                }
            }

            // Children
            if (Array.isArray(data.children)) {
                data.children.forEach((child, idx) => {
                    formData.append(`familyMembersDTO.children[${idx}].name`, child.name);
                    formData.append(`familyMembersDTO.children[${idx}].dob`, child.dob);
                    formData.append(`familyMembersDTO.children[${idx}].pastDisease`, child.pastDisease);
                    formData.append(`familyMembersDTO.children[${idx}].pastDiseaseInput`, child.pastDiseaseInput);
                    formData.append(`familyMembersDTO.children[${idx}].presentDisease`, child.presentDisease);
                    formData.append(`familyMembersDTO.children[${idx}].existingDiseases`, child.existingDiseases?.join(','));
                    formData.append(`familyMembersDTO.children[${idx}].presentDiseaseOther`, child.presentDiseaseOther);
                    if (child.avatar && child.avatar.length > 0) {
                        formData.append(`familyMembersDTO.children[${idx}].profilePic`, child.avatar[0]);
                    }
                });
            }

            // Add payment info if available
            if (paymentInfo.paymentStatus) {
                formData.append('paymentStatus', paymentInfo.paymentStatus);
            }
            if (paymentInfo.paymentId) {
                formData.append('paymentId', paymentInfo.paymentId);
            }
            const response = await authApi.post(POST_PURCHASE_PLAN_API, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            toast.success('Plan Purchase successful!');
            setTimeout(() => {
                setLoading(false);
                navigate("/dashboard");
            }, 1200);
            console.log('Purchase successful:', response.data);
        } catch (error) {
            setLoading(false);
            toast.error(error.response?.data?.errors[0] || 'Plan Purchase failed!');
            console.error('Purchase failed:', error.response?.data?.errors[0]);
        }
    };

    return (
        <>
            <CustomerDashboardHeader />
            <Box className='purchase-policyplan-wrapper'>
                <Box className="header">
                    {plan}  {amount}
                </Box>
                <Box className="content">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        {
                            plan === "Individual Plan" ?
                                <IndividualPlan />
                                :
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <>
                                        {/* Spouse Details */}
                                        {
                                            isMarried &&
                                            <Box className="form-wrapper">
                                                <Typography className='title'>Spouse Details</Typography>
                                                <Box className="inner-box">
                                                    <Box className="form-group">
                                                        <TextField
                                                            fullWidth
                                                            label="Spouse Name"
                                                            margin="normal"
                                                            {...register('spouse.name')}
                                                            error={!!errors?.spouse?.name}
                                                            helperText={errors?.spouse?.name?.message}
                                                        />
                                                        <CustomerDatePicker control={control} name="spouse.dob" label="Spouse DOB" error={errors?.spouse?.dob?.message} />


                                                    </Box>
                                                    <Box className="form-group">
                                                        <TextField
                                                            fullWidth
                                                            label="Spouse mobile number"
                                                            margin="normal"
                                                            {...register('spouse.mobile')}
                                                            error={!!errors?.spouse?.mobile}
                                                            helperText={errors?.spouse?.mobile?.message}
                                                        />
                                                        <Controller
                                                            name="spouse.avatar"
                                                            control={control}
                                                            render={({ field: { onChange, value } }) => (
                                                                <MyDropzone
                                                                    onDrop={(acceptedFiles) => {
                                                                        onChange(acceptedFiles);
                                                                    }}
                                                                    files={value}
                                                                />
                                                            )}
                                                        />
                                                    </Box>
                                                    <Box className="form-group-2">
                                                        <PastDiseaseQuestionary
                                                            register={register}
                                                            errors={errors}
                                                            watch={watch}
                                                            control={control}
                                                            namePrefix="spouse"
                                                        />
                                                        <PresentDiseaseQuestionary
                                                            register={register}
                                                            errors={errors}
                                                            watch={watch}
                                                            control={control}
                                                            namePrefix="spouse"
                                                        />

                                                    </Box>

                                                </Box>
                                            </Box>
                                        }
                                        {/* father Details */}
                                        <Box className="form-wrapper">
                                            <Typography className='title'>Father's Details</Typography>
                                            <Box className="inner-box">
                                                <Box className="form-group">
                                                    <TextField
                                                        fullWidth
                                                        label="Father Name"
                                                        margin="normal"
                                                        {...register('father.name')}
                                                        error={!!errors?.father?.name}
                                                        helperText={errors?.father?.name?.message}
                                                    />
                                                    <CustomerDatePicker control={control} name="father.dob" label="Father DOB" error={errors?.father?.dob?.message} />


                                                </Box>
                                                <Box className="form-group">
                                                    <TextField
                                                        fullWidth
                                                        label="Father mobile number"
                                                        margin="normal"
                                                        {...register('father.mobile')}
                                                        error={!!errors?.father?.mobile}
                                                        helperText={errors?.father?.mobile?.message}
                                                    />
                                                    <Controller
                                                        name="father.avatar"
                                                        control={control}
                                                        render={({ field: { onChange, value } }) => (
                                                            <MyDropzone
                                                                onDrop={(acceptedFiles) => {
                                                                    onChange(acceptedFiles);
                                                                }}
                                                                files={value}
                                                            />
                                                        )}
                                                    />
                                                </Box>
                                                <Box className="form-group-2">
                                                    <PastDiseaseQuestionary
                                                        register={register}
                                                        errors={errors}
                                                        watch={watch}
                                                        control={control}
                                                        namePrefix="father"
                                                    />
                                                    <PresentDiseaseQuestionary
                                                        register={register}
                                                        errors={errors}
                                                        watch={watch}
                                                        control={control}
                                                        namePrefix="father"
                                                    />

                                                </Box>

                                            </Box>
                                        </Box>
                                        {/* Mother Details */}
                                        <Box className="form-wrapper">
                                            <Typography className='title'>Mother's Details</Typography>
                                            <Box className="inner-box">
                                                <Box className="form-group">
                                                    <TextField
                                                        fullWidth
                                                        label="Mother Name"
                                                        margin="normal"
                                                        {...register('mother.name')}
                                                        error={!!errors?.mother?.name}
                                                        helperText={errors?.mother?.name?.message}
                                                    />
                                                    <CustomerDatePicker control={control} name="mother.dob" label="Mother DOB" error={errors?.mother?.dob?.message} />
                                                </Box>
                                                <Box className="form-group">
                                                    <TextField
                                                        fullWidth
                                                        label="Mother mobile number"
                                                        margin="normal"
                                                        {...register('mother.mobile')}
                                                        error={!!errors?.mother?.mobile}
                                                        helperText={errors?.mother?.mobile?.message}
                                                    />
                                                    <Controller
                                                        name="mother.avatar"
                                                        control={control}
                                                        render={({ field: { onChange, value } }) => (
                                                            <MyDropzone
                                                                onDrop={(acceptedFiles) => {
                                                                    onChange(acceptedFiles);
                                                                }}
                                                                files={value}
                                                            />
                                                        )}
                                                    />
                                                </Box>
                                                <Box className="form-group-2">
                                                    <PastDiseaseQuestionary
                                                        register={register}
                                                        errors={errors}
                                                        watch={watch}
                                                        control={control}
                                                        namePrefix="mother"
                                                    />
                                                    <PresentDiseaseQuestionary
                                                        register={register}
                                                        errors={errors}
                                                        watch={watch}
                                                        control={control}
                                                        namePrefix="mother"
                                                    />

                                                </Box>

                                            </Box>
                                        </Box>
                                        {/* Dose you have any child */}
                                        <Box className='form-wrapper'>
                                            <Typography className='title'>Child Details</Typography>
                                            <DoesHaveChildQuestionary
                                                register={register}
                                                errors={errors}
                                                watch={watch}
                                                control={control}
                                                namePrefix="anyChild"
                                            />
                                        </Box>
                                        {Array.from({ length: Number(numofChild) }, (_, index) => (
                                            <Box key={index} className="form-wrapper">
                                                <Typography className='title'>Child {index + 1} Details</Typography>
                                                <Box className="inner-box">
                                                    <Box className="form-group">
                                                        <TextField
                                                            fullWidth
                                                            label={`Child ${index + 1} Name`}
                                                            margin="normal"
                                                            {...register(`children.${index}.name`)}
                                                            error={!!errors?.children?.[index]?.name}
                                                            helperText={errors?.children?.[index]?.name?.message}
                                                        />
                                                        <CustomerDatePicker
                                                            control={control}
                                                            name={`children.${index}.dob`}
                                                            label={`Child ${index + 1} DOB`}
                                                            error={errors?.children?.[index]?.dob?.message}
                                                        />
                                                    </Box>
                                                    <Box className="form-group">
                                                        <Controller
                                                            name={`children.${index}.avatar`}
                                                            control={control}
                                                            render={({ field: { onChange, value } }) => (
                                                                <MyDropzone
                                                                    onDrop={(acceptedFiles) => {
                                                                        onChange(acceptedFiles);
                                                                    }}
                                                                    files={value}
                                                                />
                                                            )}
                                                        />
                                                        {errors?.children?.[index]?.avatar && (
                                                            <Typography color="error" fontSize="0.8rem">
                                                                {errors?.children?.[index]?.avatar?.message}
                                                            </Typography>
                                                        )}
                                                    </Box>
                                                </Box>
                                            </Box>
                                        ))}
                                    </>
                                    <Box>
                                        <Button
                                            variant="contained"
                                            sx={{ marginTop: "10px" }}
                                            color="primary"
                                            onClick={handleSubmit((formDataValues) => handlePayment({ ...formDataValues, amount }))}
                                        >
                                            Pay Now
                                        </Button>
                                    </Box>
                                </form>
                        }
                    </LocalizationProvider>
                </Box>

            </Box>
            <Footer />
        </>

    );
};

export default PurchasePolicyPlan;

const DoesHaveChildQuestionary = ({ register, errors, watch, control, namePrefix }) => {

    const anyChild = watch(`${namePrefix}`);

    return (<Box>
        <FormControl>
            <FormLabel>
                Does you have any child ?
            </FormLabel>
            <Controller
                name={`${namePrefix}`}
                control={control}
                render={({ field }) => (
                    <RadioGroup row {...field}>
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                )}
            />
            {errors?.[namePrefix] && (
                <Typography color="error" fontSize="0.8rem">
                    {errors?.[namePrefix]?.message}
                </Typography>
            )}
        </FormControl>
        {anyChild == "yes" &&
            <TextField
                fullWidth
                label="Number of child"
                margin="normal"
                {...register('numofChild', { valueAsNumber: true })}
                error={!!errors?.numofChild}
                helperText={errors?.numofChild?.message}

            />
        }
    </Box>)
}



