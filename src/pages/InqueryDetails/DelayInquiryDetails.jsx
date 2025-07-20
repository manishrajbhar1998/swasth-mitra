import { useMemo, useRef, useEffect, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';  // Fixed Import
// import 'material-react-table/dist/index.css';
import * as XLSX from 'xlsx';
import { Button, Container, Dialog, DialogTitle, Grid, DialogContent, DialogActions, TextField, IconButton, Typography } from '@mui/material';
import { FileDownload } from '@mui/icons-material';
import { GET_ENQUIRY_API, UPDATE_ENQUIRY_API, GET_REGISTERED_USERS } from '../../constant/config';
import { authApi } from '../../apis/api';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import { useLoadingAdminDeatils } from '../../context/AdminContext/AdminContext';



export default function DelayInqueryDetails() {
    const tableRef = useRef(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [modalValues, setModalValues] = useState({});
    const { state, dispatch } = useLoadingAdminDeatils();

    // Editable fields for modal
    const EDIT_FIELDS = [
        'userName', 'email', 'mobileNo', 'address', 'city', 'district', 'state', 'country', 'pinCode', 'status', 'followUpBy'
    ];
    const columns = useMemo(
        () => [
            { header: 'User Name', accessorKey: 'userName' },
            { header: 'Email', accessorKey: 'email' },
            { header: 'Mobile No', accessorKey: 'mobileNo' },
            { header: 'Address', accessorKey: 'address' },
            { header: 'City', accessorKey: 'city' },
            { header: 'District', accessorKey: 'district' },
            { header: 'State', accessorKey: 'state' },
            { header: 'Pin Code', accessorKey: 'pinCode' },
            { header: 'User Message', accessorKey: 'userMsg' },
            {
                header: 'Status',
                accessorKey: 'status',
                Cell: ({ row }) => {
                    const status = row.original.status;
                    return status === null || status === undefined || status === '' ? 'New' : status;
                },
            },
            {
                header: "Followup By",
                accessorKey: 'followUpBy',
                Cell: ({ row }) => {
                    const [name, setName] = useState('');
                    useEffect(() => {
                        const uuid = row.original.followUpUUID;
                        if (!uuid) {
                            setName('');
                            return;
                        }
                        let ignore = false;
                        authApi.get(`${GET_REGISTERED_USERS}/${uuid}`)
                            .then(res => {
                                if (!ignore && res?.data?.data) {
                                    const { firstName, lastName } = res.data.data;
                                    setName(`${firstName || ''} ${lastName || ''}`.trim());
                                }
                            })
                            .catch(() => {
                                if (!ignore) setName('');
                            });
                        return () => { ignore = true; };
                    }, [row.original.followUpUUID]);
                    return name || row.original.followUpBy || '';
                },
            },
            {
                header: "Followup At",
                accessorKey: 'updatedAt',
                accessorFn: row => {
                    if (!row.updatedAt) return '';
                    const d = new Date(row.updatedAt);
                    const yyyy = d.getFullYear();
                    const mm = String(d.getMonth() + 1).padStart(2, '0');
                    const dd = String(d.getDate()).padStart(2, '0');
                    const hh = String(d.getHours()).padStart(2, '0');
                    const min = String(d.getMinutes()).padStart(2, '0');
                    const ss = String(d.getSeconds()).padStart(2, '0');
                    return `${yyyy}-${mm}-${dd}(${hh}:${min}:${ss})`;
                },
                Cell: ({ cell }) => cell.getValue(),
            },
        ],
        []
    );


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await authApi.get(GET_ENQUIRY_API, {
                    params: {
                        delayedEnquiries: true
                    }
                }); // Axios call with queryPerms
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

    // Open modal for editing
    const handleEditRow = (row) => {
        console.log(row.original);
        setSelectedRowData(row.original);
        setModalValues(row.original);
        setEditModalOpen(true);
    };

    // Save handler for modal
    const handleSaveModal = async () => {
        if (!selectedRowData?.id) {
            toast.error('Inquiry ID not found.');
            return;
        }
        try {
            const currentLoggedInUserId = state.currentLoggedInUserId;
            const currentLoggedInUserName = `${state.userFirst} ${state.userLast}`;
            const payload = {
                id: selectedRowData.id,
                userName: modalValues.userName || '',
                email: modalValues.email || '',
                mobileNo: modalValues.mobileNo || '',
                address: modalValues.address || '',
                city: modalValues.city || '',
                district: modalValues.district || '',
                state: modalValues.state || '',
                country: modalValues.country || '',
                pinCode: modalValues.pinCode || '',
                followUpUUID: currentLoggedInUserId || '',
                status: modalValues.status || '',
                // followUpBy: currentLoggedInUserName || '',
                // updatedBy: currentLoggedInUserName || ''
            };
            await authApi.put(`${UPDATE_ENQUIRY_API}/${selectedRowData.id}`, payload);
            toast.success('Inquiry updated successfully!');
            setData(prev => prev.map(row => row.id === selectedRowData.id ? { ...row, ...payload } : row));
            setEditModalOpen(false);
        } catch (error) {
            console.error("API error:", error);
            toast.error(error?.response?.data?.message || error.message || 'Failed to update inquiry.');
        }
    };
    return (

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
                        ref: tableRef,
                    }}
                    renderTopToolbarCustomActions={() => (
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<FileDownload />}
                            onClick={handleExport}
                            className="mb-4"
                            sx={{ height: "35px" }}
                        >
                            Export to Excel
                        </Button>
                    )}
                    renderRowActions={({ row }) => [
                        <Button
                            key="edit"
                            variant="text"
                            color="primary"
                            size="small"
                            onClick={e => {
                                e.stopPropagation();
                                handleEditRow(row);
                            }}
                        >
                            <span className="material-icons">edit</span>
                        </Button>
                    ]}
                />
            </Grid>
            {/* Custom Edit Modal */}
            <Dialog open={editModalOpen} onClose={() => setEditModalOpen(false)} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    Edit Inquiry
                    <IconButton
                        aria-label="close"
                        onClick={() => setEditModalOpen(false)}
                        sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    {EDIT_FIELDS.map(field => (
                        <TextField
                            key={field}
                            label={field.charAt(0).toUpperCase() + field.slice(1)}
                            value={modalValues[field] || ''}
                            onChange={e => setModalValues({ ...modalValues, [field]: e.target.value })}
                            margin="normal"
                            fullWidth
                            size="small"
                            disabled={field !== 'status'}
                        />
                    ))}
                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
                    <Button onClick={() => setEditModalOpen(false)} color="primary" sx={{ mr: 2 }}>Close</Button>
                    <Button onClick={handleSaveModal} color="primary" variant="contained">Save</Button>
                </DialogActions>
            </Dialog>
        </Container>

    );
}
