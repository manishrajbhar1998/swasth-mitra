import { useMemo, useRef, useEffect, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';  // Fixed Import
// import 'material-react-table/dist/index.css';
import * as XLSX from 'xlsx';
import { Button, Container } from '@mui/material';
import { FileDownload } from '@mui/icons-material';
import { GET_ENQUIRY_API } from '../../constant/config';
import { authApi } from '../../apis/api';



export default function InqueryDetails() {
  const tableRef = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = useMemo(
    () => [
      { header: 'User Name', accessorKey: 'userName' },
      { header: 'Email', accessorKey: 'email' },
      { header: 'Mobile No', accessorKey: 'mobileNo' },
      { header: 'Address', accessorKey: 'address' },
      { header: 'City', accessorKey: 'city' },
      { header: 'State', accessorKey: 'state' },
      { header: 'Country', accessorKey: 'country' },
      { header: 'Pin Code', accessorKey: 'pinCode' },
      { header: 'Status', accessorKey: 'status' }
    ],
    []
  );


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await authApi.get(GET_ENQUIRY_API); // Axios call
        const enrichedData = (response.data.data || []).map(item => ({
          ...item,
          status: 'New',
        }));
        setData(enrichedData);
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

  return (
    <div className="p-4">
      <Container maxWidth="lg">
        {/* <MaterialReactTable
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
        /> */}
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
          editingMode="modal" // important: enables modal editing
          onEditingRowSave={({ values, row }) => {
            // update the row in state
            setData(prevData =>
              prevData.map((item, index) =>
                index === row.index ? { ...item, ...values } : item
              )
            );
          }}
        />

      </Container>
    </div>
  );
}
