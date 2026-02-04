"use client";

import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import ReusableTable from '@/app/(dashboard)/_components/ReusableTable';
import Link from 'next/link';
import { LocalizationProvider, DateRangePicker } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AddBrancheDialog from './AddBrancheDialog';

export default function InvoicePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  function createData(code: string, name: string, address: string, phone: string, is_active: boolean) {
    return { code, name, address, phone, is_active };
  }

  const rows = [
    createData('HD001', 'John Doe', '123 Main St', '123-456-7890', true),
    createData('HD002', 'Jane Smith', '456 Elm St', '987-654-3210', false),
    createData('HD003', 'Alice Johnson', '789 Oak St', '555-123-4567', true),
    createData('HD004', 'Bob Brown', '321 Pine St', '444-555-6666', false),
    createData('HD005', 'Charlie White', '654 Maple St', '333-222-1111', true),
  ];

  const headers = ['Branch Code', 'Name', 'Address', 'Phone', 'Active'];
  const rowsData = rows.map((row) => ({
    'Branch Code': row.code,
    Name: row.name,
    Address: row.address,
    Phone: row.phone,
    Active: row.is_active ? 'Yes' : 'No',
  }));

  const handleAddBranch = (data: { code: string; name: string; address: string; phone: string; is_active: boolean }) => {
    console.log('New Branch:', data);
    // Add logic to update rows here
  };

  const filteredRows = rows.filter((row) => {
    const isCodeMatch = row.code.toLowerCase().includes(searchTerm.toLowerCase());
    const isStartDateMatch = startDate ? new Date(row.date) >= startDate : true;
    const isEndDateMatch = endDate ? new Date(row.date) <= endDate : true;

    return isCodeMatch && isStartDateMatch && isEndDateMatch;
  });

  return (
    <div className="flex w-full justify-center">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-4">Branch Page</h1>
        <div className="mb-4 flex justify-between items-center">
          <div className="flex gap-4 ">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search Branch Code"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4"
            />
          </div>
          <div className="flex gap-4">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => setDialogOpen(true)}
            >
              Add New Branch
            </Button>
          </div>
        </div>
        <ReusableTable headers={headers} rows={rowsData} />
        <AddBrancheDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          onAdd={handleAddBranch}
        />
      </div>
    </div>
  );
}
