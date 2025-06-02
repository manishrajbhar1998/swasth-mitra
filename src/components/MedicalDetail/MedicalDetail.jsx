import { useLoading } from '../../context/LoadingContext/LoadingContext';
import './medicalDetails.scss';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CustomerDatePicker from '../CutomerDatePicker/CustomerDatePicker';


const MedicalSchema = Yup.object().shape({
    pastDiseases: Yup.string(),
    pastDiseasesDate: Yup.date()
        .nullable()
        .when('pastDiseases', {
            is: (val) => val.length > 0,
            then: (schema) => schema.required('Please select the date of past diseases'),
            otherwise: (schema) => schema.notRequired().nullable(),
        }),

    existingDiseases: Yup.array().of(Yup.string()).min(1, "Please select at least one disease"),
    otherDisease: Yup.string().when('existingDiseases', {
        is: (val) => val?.includes("Others"),
        then: Yup.string().required("Please specify the other disease"),
        otherwise: Yup.string().notRequired()
    }),
});

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

const MedicalDetail = ({ handleBack, planName, planAmount }) => {

    const { loading, setLoading } = useLoading();

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(MedicalSchema),
    });

    const { pastDiseases, existingDiseases } = watch();
    const onSubmit = (data) => {

        console.log('Submitted data:', data);
        // You can add your API call here

        // navigate("/dashboard");
    };

    return (
        <div>
            <Box className="medical-detail" sx={{ flexBasis: { xs: '95%', sm: '90%', md: '30%' } }} >
                <Box className="basicDetail-wrapper__title">
                    <p>{planName}</p>
                </Box>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <TextField
                            fullWidth
                            label="Past Diseases"
                            margin="normal"
                            {...register('pastDiseases')}
                            error={!!errors.pastDiseases}
                            helperText={errors.pastDiseases?.message}
                        />

                        <Box sx={{ display: pastDiseases ? 'block' : 'none' }}>
                            <CustomerDatePicker control={control} name="pastDiseasesDate" label="Date of Past Disease" error={errors?.pastDiseasesDate?.message} />
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: "600" }}>Existing Diseases</Typography>
                            <FormGroup className='disease-group'>
                                {diseases.map((disease) => (
                                    <FormControlLabel
                                        key={disease}
                                        control={
                                            <Checkbox
                                                value={disease}
                                                {...register("existingDiseases")}
                                            />
                                        }
                                        label={disease}
                                    />
                                ))}
                            </FormGroup>
                            {(existingDiseases || [])?.includes("Others") && (
                                <TextField
                                    fullWidth
                                    label="Specify Other Disease"
                                    margin="normal"
                                    {...register("otherDisease")}
                                    error={!!errors.otherDisease}
                                    helperText={errors.otherDisease?.message}
                                />
                            )}
                        </Box>

                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {
                                planName !== "Individual Plan" &&
                                <Button variant="contained" color="primary" onClick={handleBack}>
                                    <ArrowBackIcon sx={{ fontSize: "16px" }} /> Back
                                </Button>
                            }
                            <Button variant="contained" color="primary" type="submit">
                                Purchase plan
                            </Button>
                        </Box>
                    </form>
                </LocalizationProvider>
            </Box>
        </div>
    )
}

export default MedicalDetail