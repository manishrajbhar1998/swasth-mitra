import { useMemo, useRef, useEffect, useState, useCallback } from 'react';
import { MaterialReactTable } from 'material-react-table';
import * as XLSX from 'xlsx';
import { Box, Button, Container, Grid } from '@mui/material';
import { FileDownload, PersonAddAltOutlined } from '@mui/icons-material';
// import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { GET_ENQUIRY_API, GET_REGISTERED_USERS, GET_REGISTRED_USER_DETAILS } from '../../constant/config';
import { authApi } from '../../apis/api';
import './registeredUser.scss';
import RegisterCard from '../../components/RegisterCard/RegisterCard';
import { useLoadingAdminDeatils } from "../../context/AdminContext/AdminContext";
import Register from '../Register/Register';


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
            { header: 'State', accessorKey: 'state' },
            { header: 'District', accessorKey: 'district' },
            { header: 'City', accessorKey: 'city' },
            { header: 'Pin Code', accessorKey: 'pinCode' },
            { header: 'Plan Type', accessorKey: 'plan' },
            { header: 'Payment Status', accessorKey: 'paymentStatus' },
            { header: 'Account Status', accessorKey: 'status' },
            { header: 'Plan Expiry', accessorKey: 'planExpiryDate' },
        ],
        []
    );

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await authApi.get(GET_REGISTERED_USERS, {
                    params: {
                        role: "user"
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

    const handleRowClick = useCallback(async (row) => {
        const memberId = row.original.memberId;  // Get memberId from clicked row
        if (!memberId) {
            console.error('No memberId found for this user');
            return;
        }

        try {
            const response = await authApi.get(GET_REGISTRED_USER_DETAILS, {
                params: { memberId }   // Pass memberId as query param
            });

            console.log('Child API Response:', response.data);
        } catch (error) {
            console.error('Error fetching user details:', error?.response?.data || error.message);
        }
    }, []);

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
                    muiTableBodyRowProps={({ row }) => ({
                        onClick: () => handleRowClick(row),
                        sx: { cursor: 'pointer' },
                    })}
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
                <RegisterCard setShowRegisterUser={setShowRegisterUser} />

            }
        </Container>

    )
}

export default RegisteredUser