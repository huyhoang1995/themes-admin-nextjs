"use client";

import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import ReusableTable from '@/app/(dashboard)/_components/ReusableTable';
import Link from 'next/link';
import { LocalizationProvider, DateRangePicker } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AddStaffDialog from './AddStaffDialog';

export default function StaffPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  function createData(branch_id: string, code: string, name: string, status: string, is_active: boolean) {
    return { branch_id, code, name, status, is_active };
  }

  const rows = [
    createData('B001', 'S001', 'John Doe', 'Active', true),
    createData('B002', 'S002', 'Jane Smith', 'Inactive', false),
    createData('B003', 'S003', 'Alice Johnson', 'Active', true),
    createData('B004', 'S004', 'Bob Brown', 'Inactive', false),
    createData('B005', 'S005', 'Charlie White', 'Active', true),
  ];

  const headers = ['Branch ID', 'Code', 'Name', 'Status', 'Active'];
  const rowsData = rows.map((row) => ({
    'Branch ID': row.branch_id,
    Code: row.code,
    Name: row.name,
    Status: row.status,
    Active: row.is_active ? 'Yes' : 'No',
  }));

  const handleAddStaff = (data: { branch_id: string; code: string; name: string; status: string; is_active: boolean }) => {
    console.log('New Staff:', data);
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
        <h1 className="text-2xl font-bold mb-4">Staff Page</h1>
        <div className="mb-4 flex justify-between items-center">
          <div className="flex gap-4 ">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search Staff Code"
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
              Add New Staff
            </Button>
          </div>
        </div>
        <ReusableTable headers={headers} rows={rowsData} />
        <AddStaffDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          onAdd={handleAddStaff}
        />
      </div>
    </div>
  );
}
