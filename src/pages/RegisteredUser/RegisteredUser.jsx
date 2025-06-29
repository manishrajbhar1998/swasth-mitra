import { useMemo, useRef, useEffect, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import * as XLSX from 'xlsx';
import { Box, Button, Container, Grid } from '@mui/material';
import { FileDownload, PersonAddAltOutlined } from '@mui/icons-material';
// import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { GET_ENQUIRY_API, GET_REGISTERED_USERS } from '../../constant/config';
import { authApi } from '../../apis/api';
import './registeredUser.scss';
import RegisterCard from '../../components/RegisterCard/RegisterCard';
import { useLoadingAdminDeatils } from "../../context/AdminContext/AdminContext";


const RegisteredUser = () => {

    const tableRef = useRef(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showRegisterUser, setShowRegisterUser] = useState(false);
    const { adminDetails } = useLoadingAdminDeatils();

    const columns = useMemo(
        () => [
            { header: 'First Name', accessorKey: 'firstName' },
            { header: 'Last Name', accessorKey: 'lastName' },
            { header: 'Date of Birth', accessorKey: 'dateOfBirth' },
            { header: 'Role', accessorKey: 'role' },
            { header: 'Gender', accessorKey: 'gender' },
            { header: 'Marital Status', accessorKey: 'maritalStatus' },
            { header: 'Email', accessorKey: 'email' },
            { header: 'Phone Number', accessorKey: 'phoneNumber' },
            { header: 'Address', accessorKey: 'address' },
            { header: 'Pin Code', accessorKey: 'pinCode' },
            { header: 'Plan Selection', accessorKey: 'planSelection' },
            { header: 'Patient History', accessorKey: 'patientHistory' },
            { header: 'Existing Diseases', accessorKey: 'existingDiseases' },
            { header: 'City', accessorKey: 'city' },
            { header: 'State', accessorKey: 'state' }
        ],
        []
    );

    console.log("Admin Register Details component")


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            console.log("Fetching registered users with role:", adminDetails?.role);
            try {
                const response = await authApi.get(GET_REGISTERED_USERS, {
                    params: {
                        role: adminDetails?.role
                    }
                });
                setData(response.data.data || []);
            } catch (err) {
                console.error('Error fetching inquiries:', err?.response?.data || err.message);
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleExport = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, 'MaterialReactTable_Export.xlsx');
    };

    const handleRegister = () => {
        setShowRegisterUser(true);
    }

    return (

        <Container sx={{ minWidth: '100%' }} className='registeredUser-wrapper'>
            <Grid spacing={2} size={{ xs: 12, lg: 12 }}>
                <MaterialReactTable
                    columns={columns}
                    data={data}
                    enableColumnOrdering
                    enableRowSelection
                    enableEditing
                    enableSorting
                    enableGlobalFilter
                    positionActionsColumn="last"
                    muiTableProps={{
                        ref: tableRef
                    }}
                    renderTopToolbarCustomActions={() => (
                        <Box sx={{ display: "flex", gap: "10px" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<FileDownload />}
                                onClick={handleExport}
                                sx={{ height: "35px" }}
                            >
                                Export to Excel
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<PersonAddAltOutlined />}
                                onClick={handleRegister}
                                sx={{ height: "35px" }}
                            >
                                Create User
                            </Button>
                        </Box>
                    )}
                />
            </Grid>
            {
                showRegisterUser &&
                <Box className="registerCard-wrapper">
                    <RegisterCard setShowRegisterUser={setShowRegisterUser} />
                </Box>
            }
        </Container>

    )
}

export default RegisteredUser