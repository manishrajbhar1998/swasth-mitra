import { useMemo, useRef, useEffect, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import * as XLSX from 'xlsx';
import { Box, Button, Container, Grid } from '@mui/material';
import { FileDownload, PersonAddAltOutlined } from '@mui/icons-material';
import { GET_ENQUIRY_API, GET_REGISTERED_USERS } from '../../constant/config';
import { authApi } from '../../apis/api';
import './manageAdmin.scss';
import RegisterCard from '../../components/RegisterCard/RegisterCard';
import AdminRegisterCard from '../../components/AdminRegisterCard/AdminRegisterCard';
import { useLoadingAdminDeatils } from '../../context/AdminContext/AdminContext';

const ManageAdmin = () => {

    const tableRef = useRef(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showRegisterUser, setShowRegisterUser] = useState(false);
    const { state } = useLoadingAdminDeatils();
    const [editMode, setEditMode] = useState(false);
    const [editData, setEditData] = useState(null);
    const [refreshData, setRefreshData] = useState(false);


    const columns = useMemo(
        () => [
            { header: 'First Name', accessorKey: 'firstName' },
            { header: 'Last Name', accessorKey: 'lastName' },
            { header: 'Role', accessorKey: 'role' },
            { header: "Status", accessorKey: 'status' },
            { header: 'Date of Birth', accessorKey: 'dateOfBirth' },
            { header: 'Gender', accessorKey: 'gender' },
            { header: 'Email', accessorKey: 'email' },
            { header: 'Phone Number', accessorKey: 'phoneNumber' },
            { header: 'Address', accessorKey: 'address' },
            { header: 'Pin Code', accessorKey: 'pinCode' },
            { header: 'State', accessorKey: 'state' },
            { header: "District", accessorKey: 'district' },
            { header: 'City', accessorKey: 'city' },
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
    }, [refreshData]);

    const handleExport = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, 'MaterialReactTable_Export.xlsx');
    };

    const handleRegister = () => {
        setEditMode(false);
        setEditData(null);
        setShowRegisterUser(true);
    }

    // Edit handler
    const handleEditRow = (row) => {
        setEditMode(true);
        setEditData(row.original);
        setShowRegisterUser(true);
    };

    // Refresh table after edit
    const handleEditSuccess = () => {
        setShowRegisterUser(false);
        setEditMode(false);
        setEditData(null);
        // Optionally, refetch data
        // fetchData();
        // Or update local state if you want
    };

    return (
        <>
            <Container sx={{ minWidth: '100%' }}>
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
                                {
                                    state.exportTableData &&
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<FileDownload />}
                                        onClick={handleExport}
                                        sx={{ height: "35px" }}
                                    >
                                        Export to Excel
                                    </Button>
                                }
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
                        renderRowActions={({ row }) => [
                            <Button
                                key="edit"
                                variant="text"
                                color="primary"
                                size="small"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleEditRow(row);
                                }}
                            >
                                <span className="material-icons">edit</span>
                            </Button>
                        ]}
                    />

                </Grid>
            </Container>
            {
                showRegisterUser && (
                    <AdminRegisterCard
                        setShowRegisterUser={setShowRegisterUser}
                        type="admin"
                        editMode={editMode}
                        editData={editData}
                        onEditSuccess={handleEditSuccess}
                        setRefreshData={setRefreshData}
                    />
                )
            }
        </>

    )
}

export default ManageAdmin