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
    const [childTableDetails, setChildTableDetails] = useState({});
    const [expandedRowId, setExpandedRowId] = useState(null);

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
        </Container>
    )
}

export default RegisteredUser