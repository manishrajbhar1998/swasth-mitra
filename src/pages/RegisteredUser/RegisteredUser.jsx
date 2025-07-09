import { useMemo, useRef, useEffect, useState, useCallback } from 'react';
import { MaterialReactTable } from 'material-react-table';
import * as XLSX from 'xlsx';
import { Box, Button, Container, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton, Select, MenuItem } from '@mui/material';
import { FileDownload, PersonAddAltOutlined } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
// import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { GET_REGISTERED_USERS, GET_REGISTRED_USER_DETAILS } from '../../constant/config';
import { authApi } from '../../apis/api';
import './registeredUser.scss';
import RegisterCard from '../../components/RegisterCard/RegisterCard';
import { useLoadingAdminDeatils } from "../../context/AdminContext/AdminContext";
import { toast } from 'react-toastify';
import { useLoading } from '../../context/LoadingContext/LoadingContext';


const RegisteredUser = () => {

    const tableRef = useRef(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showRegisterUser, setShowRegisterUser] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [modalStatus, setModalStatus] = useState('');
    const { adminDetails } = useLoadingAdminDeatils();
    const [childTableDetails, setChildTableDetails] = useState({});
    const [expandedRowId, setExpandedRowId] = useState(null);
    const { setToastifyLoading } = useLoading ? useLoading() : { setToastifyLoading: () => { } };

    // Helper to safely get value or hyphen
    const safeValue = (val) => (val === undefined || val === null || val === "") ? "-" : val;

    // Helper to format plan expiry date
    const formatPlanExpiry = (val) => {
        if (!val || val === "-") return "-";
        const [date, time] = val.split("T");
        if (!date || !time) return safeValue(val);
        return `${date}(${time})`;
    };

    // Memoized columns with Cell render for hyphen fallback
    const columns = useMemo(
        () => [
            { header: 'First Name', accessorKey: 'firstName', Cell: ({ cell }) => safeValue(cell.getValue()) },
            { header: 'Last Name', accessorKey: 'lastName', Cell: ({ cell }) => safeValue(cell.getValue()) },
            { header: 'Date of Birth', accessorKey: 'dateOfBirth', Cell: ({ cell }) => safeValue(cell.getValue()) },
            { header: 'Gender', accessorKey: 'gender', Cell: ({ cell }) => safeValue(cell.getValue()) },
            { header: 'Marital Status', accessorKey: 'maritalStatus', Cell: ({ cell }) => safeValue(cell.getValue()) },
            { header: 'Plan Type', accessorKey: 'plan', Cell: ({ cell }) => safeValue(cell.getValue()) },
            { header: 'Payment Status', accessorKey: 'paymentStatus', Cell: ({ cell }) => safeValue(cell.getValue()) },
            { header: 'Account Status', accessorKey: 'status', Cell: ({ cell }) => safeValue(cell.getValue()) },
            { header: 'Plan Expiry', accessorKey: 'planExpiryDate', Cell: ({ cell }) => formatPlanExpiry(cell.getValue()) },
            { header: 'Role', accessorKey: 'role', Cell: ({ cell }) => safeValue(cell.getValue()) },
            { header: 'Email', accessorKey: 'email', Cell: ({ cell }) => safeValue(cell.getValue()) },
            { header: 'Phone Number', accessorKey: 'phoneNumber', Cell: ({ cell }) => safeValue(cell.getValue()) },
            { header: 'Address', accessorKey: 'address', Cell: ({ cell }) => safeValue(cell.getValue()) },
            { header: 'State', accessorKey: 'state', Cell: ({ cell }) => safeValue(cell.getValue()) },
            { header: 'District', accessorKey: 'district', Cell: ({ cell }) => safeValue(cell.getValue()) },
            { header: 'City', accessorKey: 'city', Cell: ({ cell }) => safeValue(cell.getValue()) },
            { header: 'Pin Code', accessorKey: 'pinCode', Cell: ({ cell }) => safeValue(cell.getValue()) },
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
        const memberId = row.original.memberId;
        setExpandedRowId(row.id);
        if (childTableDetails[row.id]) return; // Don't fetch again if already fetched
        if (!memberId) {
            // No memberId, but still show child table with no data found
            setChildTableDetails(prev => ({ ...prev, [row.id]: [] }));
            return;
        }
        try {
            const response = await authApi.get(GET_REGISTRED_USER_DETAILS, {
                params: { memberId }
            });
            setChildTableDetails(prev => ({ ...prev, [row.id]: response.data.data }));
        } catch (error) {
            setChildTableDetails(prev => ({ ...prev, [row.id]: { error: error?.response?.data || error.message } }));
        }
    }, [childTableDetails]);

    // Handler for default edit icon click
    const handleEditRow = (row) => {
        console.log('Edit row clicked:', row.original);
        setSelectedRowData(row.original);
        setModalStatus(row.original.status || '');
        setEditModalOpen(true);
    };

    // Save handler for status update
    const handleSaveStatus = async () => {
        if (!selectedRowData?.id) {
            toast.error('User ID not found.');
            return;
        }
        if (selectedRowData.paymentStatus !== 'SUCCESS') {
            toast.error("User hasn't purchased a plan yet");
            return;
        }
        try {
            setToastifyLoading && setToastifyLoading(true);
            const response = await authApi.post(`${GET_REGISTERED_USERS}/${selectedRowData.id}`, { status: modalStatus });
            toast.success('User Account Activated successfully!');
            setData(prev => prev.map(row => row.id === selectedRowData.id ? { ...row, status: modalStatus } : row));
            setEditModalOpen(false);
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Failed to update status.');
        } finally {
            setToastifyLoading && setToastifyLoading(false);
        }
    };

    // Helper to render child table
    const renderChildTable = (rowId) => {
        const detailsArr = childTableDetails[rowId];
        if (!detailsArr) return null;
        if (detailsArr.error) return <Box color="error.main">{safeValue(detailsArr.error)}</Box>;
        // If detailsArr is empty array, show no data found
        if (Array.isArray(detailsArr) && detailsArr.length === 0) {
            return (
                <Box sx={{ mt: 2, mb: 2, border: '1px solid #eee', borderRadius: 2, p: 2, background: '#fafafa' }}>
                    <Box sx={{ fontWeight: 600, mb: 1 }}>Family Details</Box>
                    <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
                        <Box component="thead">
                            <Box component="tr" sx={{ background: '#f0f0f0' }}>
                                <Box component="th" sx={{ p: 1, border: '1px solid #ddd' }}>Relation</Box>
                                <Box component="th" sx={{ p: 1, border: '1px solid #ddd' }}>Name</Box>
                                <Box component="th" sx={{ p: 1, border: '1px solid #ddd' }}>Date of Birth</Box>
                                <Box component="th" sx={{ p: 1, border: '1px solid #ddd' }}>Present Disease</Box>
                                <Box component="th" sx={{ p: 1, border: '1px solid #ddd' }}>Past Disease Input</Box>
                                <Box component="th" sx={{ p: 1, border: '1px solid #ddd' }}>Existing Diseases</Box>
                                <Box component="th" sx={{ p: 1, border: '1px solid #ddd' }}>Profile Photo</Box>
                            </Box>
                        </Box>
                        <Box component="tbody">
                            <Box component="tr">
                                <Box component="td" colSpan={7} sx={{ p: 1, border: '1px solid #ddd', textAlign: 'center' }}>No family details found.</Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            );
        }
        const details = Array.isArray(detailsArr) ? detailsArr[0] : detailsArr;
        if (!details) return null;
        // Prefer familyMembersDTO if present
        const familyDTO = details.familyMembersDTO || {};
        const getMember = (key) => familyDTO[key] || details[key] || null;
        const family = [];
        const spouse = getMember('spouse');
        if (spouse) family.push({ relation: 'Spouse', ...spouse });
        const father = getMember('father');
        if (father) family.push({ relation: 'Father', ...father });
        const mother = getMember('mother');
        if (mother) family.push({ relation: 'Mother', ...mother });
        const children = getMember('children');
        if (children && Array.isArray(children)) {
            children.forEach((child, idx) => family.push({ relation: `Child ${idx + 1}`, ...child }));
        }
        return (
            <Box sx={{ mt: 2, mb: 2, border: '1px solid #eee', borderRadius: 2, p: 2, background: '#fafafa' }}>
                <Box sx={{ fontWeight: 600, mb: 1 }}>Family Details</Box>
                <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
                    <Box component="thead">
                        <Box component="tr" sx={{ background: '#f0f0f0' }}>
                            <Box component="th" sx={{ p: 1, border: '1px solid #ddd' }}>Relation</Box>
                            <Box component="th" sx={{ p: 1, border: '1px solid #ddd' }}>Name</Box>
                            <Box component="th" sx={{ p: 1, border: '1px solid #ddd' }}>Date of Birth</Box>
                            <Box component="th" sx={{ p: 1, border: '1px solid #ddd' }}>Present Disease</Box>
                            <Box component="th" sx={{ p: 1, border: '1px solid #ddd' }}>Past Disease Input</Box>
                            <Box component="th" sx={{ p: 1, border: '1px solid #ddd' }}>Existing Diseases</Box>
                            <Box component="th" sx={{ p: 1, border: '1px solid #ddd' }}>Profile Photo</Box>
                        </Box>
                    </Box>
                    <Box component="tbody">
                        {family.length === 0 && (
                            <Box component="tr">
                                <Box component="td" colSpan={7} sx={{ p: 1, border: '1px solid #ddd', textAlign: 'center' }}>No family details found.</Box>
                            </Box>
                        )}
                        {family.map((mem, idx) => (
                            <Box component="tr" key={idx}>
                                <Box component="td" sx={{ p: 1, border: '1px solid #ddd' }}>{safeValue(mem.relation)}</Box>
                                <Box component="td" sx={{ p: 1, border: '1px solid #ddd' }}>{safeValue(mem.name)}</Box>
                                <Box component="td" sx={{ p: 1, border: '1px solid #ddd' }}>{mem.dob ? new Date(mem.dob).toLocaleDateString() : '-'}</Box>
                                <Box component="td" sx={{ p: 1, border: '1px solid #ddd' }}>{safeValue(mem.presentDisease)}</Box>
                                <Box component="td" sx={{ p: 1, border: '1px solid #ddd' }}>{safeValue(mem.pastDiseaseInput)}</Box>
                                <Box component="td" sx={{ p: 1, border: '1px solid #ddd' }}>{Array.isArray(mem.existingDiseases) ? (mem.existingDiseases.length ? mem.existingDiseases.join(', ') : '-') : safeValue(mem.existingDiseases)}</Box>
                                <Box component="td" sx={{ p: 1, border: '1px solid #ddd' }}>{mem.profilePhotoUrl ? <img src={mem.profilePhotoUrl} alt="profile" style={{ width: 40, height: 40, borderRadius: 4 }} /> : '-'}</Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        );
    };

    // Use getRowId for unique row identification
    const getRowId = useCallback((row) => row.memberId || row.email || row.id, []);

    const FIELDS_TO_SHOW = [
        "firstName", "lastName", "dateOfBirth", "role", "gender", "maritalStatus", "email", "phoneNumber", "address", "pinCode", "city", "state", "district", "memberId", "plan", "paymentStatus", "status"
    ];

    const FIELD_LABELS = {
        firstName: "First Name",
        lastName: "Last Name",
        dateOfBirth: "Date of Birth",
        role: "Role",
        gender: "Gender",
        maritalStatus: "Marital Status",
        email: "Email",
        phoneNumber: "Phone Number",
        address: "Address",
        pinCode: "Pin Code",
        city: "City",
        state: "State",
        district: "District",
        memberId: "Member ID",
        plan: "Plan",
        paymentStatus: "Payment Status",
        status: "Status"
    };

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
                    enableExpanding
                    getRowId={getRowId}
                    getIsDetailPanelExpanded={({ row }) => expandedRowId === row.id}
                    positionActionsColumn="last"
                    muiTableProps={{
                        ref: tableRef
                    }}
                    muiTableBodyRowProps={({ row }) => ({
                        onClick: () => {
                            // Expand row and fetch child data if not already fetched
                            handleRowClick(row);
                        },
                        sx: { cursor: 'pointer' },
                    })}
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
                    renderDetailPanel={({ row }) =>
                        expandedRowId === row.id ? renderChildTable(row.id) : null
                    }
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
            {/* Custom Edit Modal */}
            <Dialog open={editModalOpen} onClose={() => setEditModalOpen(false)} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    User Details
                    <IconButton
                        aria-label="close"
                        onClick={() => setEditModalOpen(false)}
                        sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    {selectedRowData && (
                        <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                            {FIELDS_TO_SHOW.map((field) => (
                                <Box key={field} sx={{ flex: '1 1 45%' }}>
                                    <Typography variant="subtitle2" color="text.secondary">{FIELD_LABELS[field] || field}</Typography>
                                    {field === 'status' ? (
                                        <Select
                                            value={modalStatus}
                                            onChange={e => setModalStatus(e.target.value)}
                                            fullWidth
                                            size="small"
                                            displayEmpty
                                            sx={{ mb: 1 }}
                                        >
                                            <MenuItem value={"IN_ACTIVE"}>IN_ACTIVE</MenuItem>
                                            <MenuItem value={"ACTIVE"}>ACTIVE</MenuItem>
                                        </Select>
                                    ) : (
                                        <Typography variant="body1" sx={{ mb: 1 }}>
                                            {typeof selectedRowData[field] === 'boolean'
                                                ? (selectedRowData[field] ? 'Yes' : 'No')
                                                : (selectedRowData[field] === undefined || selectedRowData[field] === null || selectedRowData[field] === '' ? '-' : selectedRowData[field])}
                                        </Typography>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    )}
                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
                    <Button onClick={() => setEditModalOpen(false)} color="primary" sx={{ mr: 2 }}>Close</Button>
                    <Button onClick={handleSaveStatus} color="primary" variant="contained">Save</Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default RegisteredUser