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

const IndividualPlan = () => {
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

    const onSubmit = (data) => {
        console.log('Submitted data:', data);
        debugger
    };

    return (
        <Box className="individual_plan_wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        Submit
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default IndividualPlan;
