"use client";

import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import ReusableTable from '@/app/(dashboard)/_components/ReusableTable';
import Link from 'next/link';
import { LocalizationProvider, DateRangePicker } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AddBrancheDialog from './AddUserDialog';

export default function InvoicePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  function createData(branch_id: string, username: string, full_name: string, role: string, is_active: boolean) {
    return { branch_id, username, full_name, role, is_active };
  }

  const rows = [
    createData('B001', 'johndoe', 'John Doe', 'Admin', true),
    createData('B002', 'janesmith', 'Jane Smith', 'User', false),
    createData('B003', 'alicej', 'Alice Johnson', 'Manager', true),
    createData('B004', 'bobbrown', 'Bob Brown', 'User', false),
    createData('B005', 'charliew', 'Charlie White', 'Admin', true),
  ];

  const headers = ['Branch ID', 'Username', 'Full Name', 'Role', 'Active'];
  const rowsData = rows.map((row) => ({
    'Branch ID': row.branch_id,
    Username: row.username,
    'Full Name': row.full_name,
    Role: row.role,
    Active: row.is_active ? 'Yes' : 'No',
  }));

  const handleAddBranch = (data: { code: string; name: string; address: string; phone: string; is_active: boolean }) => {
    console.log('New Branch:', data);
    // Add logic to update rows here
  };


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
