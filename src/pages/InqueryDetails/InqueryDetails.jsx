import { useMemo, useRef } from 'react';
import { MaterialReactTable } from 'material-react-table';  // Fixed Import
// import 'material-react-table/dist/index.css';
import * as XLSX from 'xlsx';
import { Button } from '@mui/material';
import { FileDownload } from '@mui/icons-material';

const data = [
  { id: 1, name: 'Gold', price: 1800, quantity: 50 },
  { id: 2, name: 'Silver', price: 25.5, quantity: 100 },
  { id: 3, name: 'Platinum', price: 1000, quantity: 30 },
  { id: 4, name: 'Palladium', price: 1500, quantity: 20 }
];

export default function InqueryDetails() {
  const tableRef = useRef(null);

  const columns = useMemo(
    () => [
      { header: 'ID', accessorKey: 'id' },
      { header: 'Name', accessorKey: 'name' },
      { header: 'Price', accessorKey: 'price' },
      { header: 'Quantity', accessorKey: 'quantity' }
    ],
    []
  );

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'MaterialReactTable_Export.xlsx');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Material React Table with Excel Export</h2>
      <Button
        variant="contained"
        color="primary"
        startIcon={<FileDownload />}
        onClick={handleExport}
        className="mb-4"
      >
        Export to Excel
      </Button>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnOrdering
        enableRowSelection
        enableEditing
        enableSorting
        enableGlobalFilter
        muiTableProps={{
          ref: tableRef
        }}
      />
    </div>
  );
}
