import { TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import React from 'react'
import { Controller } from 'react-hook-form'
import './customerDatePicker.scss';

const CustomerDatePicker = ({ control, name, label, error }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => {

                return (
                    <DatePicker
                        label={label}
                        disableFuture
                        value={field.value}
                        onChange={(date) => field.onChange(date)}
                        className="customer-dob"
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                fullWidth
                                name={name}
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
                                error: error,
                                helperText: error,

                            }
                        }}
                    />
                )
            }}
        />
    )
}

export default CustomerDatePicker