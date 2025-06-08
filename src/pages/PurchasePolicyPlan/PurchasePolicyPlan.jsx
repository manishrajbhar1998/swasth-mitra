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
    const [numOfChildRef, setNumOfChildRef] = useState(0);
    const [isMarried, setIsMarried] = useState(true);

    const location = useLocation();
    const { plan, amount } = location.state;


    let validationSchema;

    if (plan === "Individual Plan") {

        validationSchema = Yup.object().shape({
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
                    .when('presentDisease', {
                        is: 'yes',
                        then: (schema) => schema.min(1, 'Please select at least one existing disease'),
                        otherwise: (schema) => schema.notRequired(),
                    }),
                presentDiseaseOther: Yup.string().when('existingDiseases', {
                    is: (val) => val && val.includes('Others'),
                    then: (schema) => schema.required('Please specify other disease'),
                    otherwise: (schema) => schema.notRequired(),
                }),
            }),
        });



    } else {

        validationSchema = Yup.object().shape({
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

        });

    }

    console.log("validationSchema :: ", validationSchema)

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

    console.log("errors :: ", errors);

    const { numofChild } = watch()

    const onSubmit = (data) => {
        debugger
        console.log('Submitted data:', data);
        // You can add your API call here
        // navigate("/dashboard");
    };

    return (
        <>
            <Box className='purchase-policyplan-wrapper'>
                <Box className="header">
                    <p>
                        {plan}/ {amount}
                    </p>
                </Box>
                <Box className="content">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {
                                plan === "Individual Plan" ?
                                    <Box>
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
                                    </Box>
                                    :
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
                            }

                            <Box>
                                <Button variant="contained" sx={{ marginTop: "10px" }} color="primary" type="submit">Submit</Button>
                            </Box>
                        </form>
                    </LocalizationProvider>
                </Box>

            </Box>
        </>

    );
};

export default PurchasePolicyPlan;


const PastDiseaseQuestionary = ({ register, errors, watch, control, namePrefix }) => {
    const pastDisease = watch(`${namePrefix}.pastDisease`);

    console.log("errors :: ", errors);

    return (
        <Box>
            <FormControl >
                <FormLabel>
                    Does {namePrefix} have any past disease?
                </FormLabel>
                <Controller
                    name={`${namePrefix}.pastDisease`}
                    control={control}
                    render={({ field }) => (
                        <RadioGroup row {...field}>
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    )}
                />
                {errors?.[namePrefix]?.pastDisease && (
                    <Typography color="error" fontSize="0.8rem">
                        {errors?.[namePrefix]?.pastDisease?.message}
                    </Typography>
                )}
            </FormControl>

            {pastDisease === 'yes' && (
                <TextField
                    fullWidth
                    label={`Please provide details of past disease`}
                    margin="normal"
                    {...register(`${namePrefix}.pastDiseaseInput`)}
                    error={!!errors?.[namePrefix]?.pastDiseaseInput}
                    helperText={errors?.[namePrefix]?.pastDiseaseInput?.message}
                />
            )}
        </Box>
    );
};


const PresentDiseaseQuestionary = ({ register, errors, watch, control, namePrefix }) => {

    const presentDisease = watch(`${namePrefix}.presentDisease`);
    const existingDiseases = watch(`${namePrefix}.existingDiseases`) || [];
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
    console.log("errors :: ", errors);
    return (
        <Box>
            <FormControl>
                <FormLabel>
                    Does {namePrefix} have any present disease?
                </FormLabel>
                <Controller
                    name={`${namePrefix}.presentDisease`}
                    control={control}
                    render={({ field }) => (
                        <RadioGroup row {...field}>
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    )}
                />
                {errors?.[namePrefix]?.presentDisease && (
                    <Typography color="error" fontSize="0.8rem">
                        {errors?.[namePrefix]?.presentDisease?.message}
                    </Typography>
                )}
            </FormControl>

            {presentDisease === 'yes' && (
                <Box sx={{ mt: 2 }}>
                    <Typography sx={{ fontWeight: "600", mb: 1 }}>Existing Diseases</Typography>
                    <FormGroup className='disease-group'>
                        {diseases.map((disease) => (
                            <Box key={disease}>
                                <Controller
                                    name={`${namePrefix}.existingDiseases`}
                                    control={control}
                                    render={({ field }) => {
                                        const { value, onChange } = field;
                                        return (
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={value?.includes(disease)}
                                                        onChange={(e) => {
                                                            const currentValue = value ?? []; // fallback to empty array
                                                            if (e.target.checked) {
                                                                onChange([...currentValue, disease]);
                                                            } else {
                                                                onChange(currentValue.filter((item) => item !== disease));
                                                            }
                                                        }}
                                                    />
                                                }
                                                label={disease}
                                            />
                                        );
                                    }}
                                />

                                {existingDiseases.includes('Others') && disease === 'Others' && (
                                    <TextField
                                        fullWidth
                                        label="Please specify other disease"
                                        margin="normal"
                                        {...register(`${namePrefix}.presentDiseaseOther`)}
                                        error={!!errors?.[namePrefix]?.presentDiseaseOther}
                                        helperText={errors?.[namePrefix]?.presentDiseaseOther?.message}
                                    />
                                )}
                            </Box>
                        ))}
                        {errors?.[namePrefix]?.existingDiseases && (
                            <Typography color="error" fontSize="0.8rem" sx={{ mt: 1 }}>
                                {errors?.[namePrefix]?.existingDiseases?.message}
                            </Typography>
                        )}
                    </FormGroup>
                </Box>
            )}
        </Box>
    );
};
const DoesHaveChildQuestionary = ({ register, errors, watch, control, namePrefix }) => {

    const anyChild = watch(`${namePrefix}`);
    console.log("errors :: ", errors);

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



