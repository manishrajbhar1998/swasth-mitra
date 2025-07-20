import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

const PastDiseaseQuestionary = ({ register, errors, watch, control, namePrefix }) => {

    const pastDisease = watch(`${namePrefix}.pastDisease`);
    // console.log("errors :: ", errors);

    return (
        <Box>
            <FormControl>
                <FormLabel>
                    Does {namePrefix} have any past disease?
                </FormLabel>
                <Controller
                    name={`${namePrefix}.pastDisease`}
                    control={control}
                    render={({ field }) => (
                        <RadioGroup row {...field} value={field.value ?? ''}>
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

export default PastDiseaseQuestionary;