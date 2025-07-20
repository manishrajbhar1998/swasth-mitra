import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React from 'react'
import { Controller } from 'react-hook-form';


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
    // console.log("errors :: ", errors);
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
                        <RadioGroup row {...field} value={field.value ?? ''}>
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



export default PresentDiseaseQuestionary