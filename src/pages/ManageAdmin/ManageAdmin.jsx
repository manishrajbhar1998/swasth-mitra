import { useMemo, useRef, useEffect, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import * as XLSX from 'xlsx';
import { Box, Button, Container, Grid } from '@mui/material';
import { FileDownload, PersonAddAltOutlined } from '@mui/icons-material';
import { GET_ENQUIRY_API, GET_REGISTERED_USERS } from '../../constant/config';
import { authApi } from '../../apis/api';
import './manageAdmin.scss';
import RegisterCard from '../../components/RegisterCard/RegisterCard';

const ManageAdmin = () => {

    const tableRef = useRef(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showRegisterUser, setShowRegisterUser] = useState(false);


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
            { header: 'City', accessorKey: 'city' },
            { header: 'State', accessorKey: 'state' }
        ],
        []
    );


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await authApi.get(GET_REGISTERED_USERS, {
                    params: {
                        role: "NOT_USER"
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
        <div className='manageAdmin-wrapper'>
            <Container>
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
                                Create Admin
                            </Button>
                        </Box>
                    )}
                />
            </Container>
            {
                showRegisterUser &&

                <RegisterCard setShowRegisterUser={setShowRegisterUser} type="admin" />

            }
        </div>

    )
}

export default ManageAdmin