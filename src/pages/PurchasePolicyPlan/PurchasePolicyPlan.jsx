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
import { useForm } from 'react-hook-form'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'





const PurchasePolicyPlan = () => {

    const [numOfChildRef, setNumOfChildRef] = useState(0);

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

    return (
        <>
            <Box className='purchase-policyplan-wrapper'>
                <Box className="header">
                    <Typography>
                        PlanName
                    </Typography>
                </Box>
                <Box className="content">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <form>
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
                                <TextField
                                    fullWidth
                                    label="Spouse mobile number"
                                    margin="normal"
                                    {...register('spouseMob')}
                                    error={!!errors?.spouseMob}
                                    helperText={errors?.spouseMob?.message}
                                />

                            </Box>
                            <Box>
                                <Questionary />
                                {/* <FormControl row>
                                    <FormLabel>Past Disease</FormLabel>
                                    <RadioGroup name="pastDisease" row>
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl> */}

                                {/* <FormControl>
                                    <FormLabel>Existing Disease </FormLabel>
                                    <RadioGroup name="existingDisease" row>
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl> */}

                            </Box>
                        </form>
                    </LocalizationProvider>
                </Box>

            </Box>
        </>

    );
};

export default PurchasePolicyPlan;


const Questionary = () => {

    return (
        <Box>
            <Box>

                <FormControl row>
                    <FormLabel>Past Disease</FormLabel>
                    <RadioGroup name="pastDisease" row>
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </Box>

        </Box>
    )
}
