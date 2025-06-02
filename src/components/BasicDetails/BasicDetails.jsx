import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import CustomerDatePicker from '../CutomerDatePicker/CustomerDatePicker'
import { useForm } from 'react-hook-form'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './basicDetail.scss';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { CustomerConext } from '../../context/CustomerContext/CustomerContext'


let numOfChildRef = 0;

const generateChildFields = (count = 0) => {
    const fields = {};
    for (let i = 1; i <= count; i++) {
        fields[`Child${i}`] = Yup.string().required(`Child ${i} name is required`);
        fields[`Child${i}DOB`] = Yup.date()
            .nullable()
            .required(`Child ${i} DOB is required`);
    }
    return fields;
};



const BasicDetails = ({ handleNext, planName, planAmount }) => {

    const { state, dispatcher } = useContext(CustomerConext);

    const [isMarried, setIsMarried] = useState(true);
    const [numOfChildRef, setNumOfChildRef] = useState(0);


    const validationSchema = useMemo(() => {
        return Yup.object().shape({
            spouse: Yup.string().required("Spouse name is required"),
            spouseDOB: Yup.date().nullable().when('spouse', {
                is: (val) => val?.length > 0,
                then: (schema) => schema.required("Spouse's Date of Birth is required"),
                otherwise: (schema) => schema.notRequired().nullable()
            }),
            father: Yup.string(),
            fatherDOB: Yup.date().nullable().when('father', {
                is: (val) => val?.length > 0,
                then: (schema) => schema.required("Father's Date of Birth is required"),
                otherwise: (schema) => schema.notRequired().nullable()
            }),
            mother: Yup.string(),
            motherDOB: Yup.date().nullable().when('mother', {
                is: (val) => val?.length > 0,
                then: (schema) => schema.required("Mother's Date of Birth is required"),
                otherwise: (schema) => schema.notRequired().nullable()
            }),
            anyChild: Yup.boolean(),
            numofChild: Yup.number()
                .typeError("Only numeric values are allowed")
                .nullable()
                .when("anyChild", {
                    is: true,
                    then: (schema) => schema.required("Number of child is required"),
                    otherwise: (schema) => schema.notRequired().nullable(),
                }),
            ...generateChildFields(numOfChildRef || 0)
        });
    }, [numOfChildRef]);


    const {
        register,
        control,
        handleSubmit,
        getValues,
        watch,
        formState: { errors }

    } = useForm({
        resolver: yupResolver(validationSchema)
    })


    const { anyChild, numofChild } = watch()

    useEffect(() => {
        setNumOfChildRef(numofChild)
    }, [numofChild])


    const onSubmit = (data) => {
        dispatcher({ type: "basicDetail", payload: data })
        setTimeout(() => {
            handleNext();
        }, 100)

    }

    return (
        <Box className="basicDetail-wrapper">
            <Box className="basicDetail-wrapper__title">
                <p>{planName}</p>
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        isMarried &&
                        <Box className="form-group">
                            <TextField
                                fullWidth
                                label="Spouse Name"
                                margin="normal"
                                {...register('spouse')}
                                error={!!errors?.spouse}
                                helperText={errors?.spouse?.message}
                            />
                            <CustomerDatePicker control={control} name="spouseDOB" label="Spouse DOB" error={errors?.spouseDOB?.message} />
                        </Box>
                    }
                    <Box className="form-group">
                        <TextField
                            fullWidth
                            label="Father Name"
                            margin="normal"
                            {...register('father')}
                            error={!!errors?.father}
                            helperText={errors?.father?.message}
                        />
                        <CustomerDatePicker control={control} name="fatherDOB" label="Father DOB" error={errors?.fatherDOB?.message} />
                    </Box>
                    <Box className="form-group">
                        <TextField
                            fullWidth
                            label="Mother Name"
                            margin="normal"
                            {...register('mother')}
                            error={!!errors?.mother}
                            helperText={errors?.mother?.message}
                        />
                        <CustomerDatePicker control={control} name="motherDOB" label="Mother DOB" error={errors?.motherDOB?.message} />
                    </Box>
                    <Box className="form-group">
                        <FormControlLabel control={<Checkbox {...register("anyChild")} />} label="Do you have child ?" />
                        {anyChild &&
                            <TextField
                                fullWidth
                                label="Number of child"
                                margin="normal"
                                {...register('numofChild', { valueAsNumber: true })}
                                error={!!errors?.numofChild}
                                helperText={errors?.numofChild?.message}

                            />
                        }
                    </Box>

                    {
                        numofChild > 0 &&
                        new Array(numofChild).fill(1).map((_, index) => (
                            <Box className="form-group">
                                <TextField
                                    fullWidth
                                    label={`Child ${index + 1}`}
                                    margin="normal"
                                    {...register(`Child${index + 1}`)}
                                    error={!!errors[`Child${index + 1}`]}
                                    helperText={errors[`Child${index + 1}`]?.message}
                                />
                                <CustomerDatePicker control={control} name={`Child${index + 1}DOB`} label={`Child ${index + 1} Date of Birth`} error={errors[`Child${index + 1}DOB`]?.message} />
                            </Box>
                        ))

                    }
                    <Box>

                    </Box>
                    <Box>
                        <Button variant="contained" sx={{ marginTop: "10px" }} color="primary" type="submit">Next</Button>
                    </Box>
                </form>
            </LocalizationProvider>
        </Box>
    )
}

export default BasicDetails