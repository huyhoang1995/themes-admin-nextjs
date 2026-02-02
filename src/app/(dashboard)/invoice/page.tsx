"use client";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell, StyledTableRow } from './StyledTable';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import AddIcon from '@mui/icons-material/Add';
import ReusableTable from '@/app/(dashboard)/_components/ReusableTable';
import Link from 'next/link';

export default function InvoicePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  function createData(code: string, date: string, total: string) {
    return { code, date, total };
  }

  const rows = [
    createData('HD001', '2023-01-01', '159,000đ'),
    createData('HD002', '2023-01-02', '237,000đ'),
    createData('HD003', '2023-01-03', '262,000đ'),
    createData('HD004', '2023-01-04', '305,000đ'),
    createData('HD005', '2023-01-05', '356,000đ'),
    createData('HD005', '2023-01-05', '356,000đ'),
    createData('HD005', '2023-01-05', '356,000đ'),
    createData('HD005', '2023-01-05', '356,000đ'),
  ];

  const headers = ['Invoice Code', 'Date', 'Total'];
  const rowsData = rows.map((row) => ({
    'Invoice Code': row.code,
    Date: row.date,
    Total: row.total,
  }));

  const filteredRows = rows.filter((row) => {
    const isCodeMatch = row.code.toLowerCase().includes(searchTerm.toLowerCase());
    const isStartDateMatch = startDate ? new Date(row.date) >= startDate : true;
    const isEndDateMatch = endDate ? new Date(row.date) <= endDate : true;

    return isCodeMatch && isStartDateMatch && isEndDateMatch;
  });

  return (
    <div className="flex w-full justify-center">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-4">Invoice Page</h1>
        <div className="mb-4 flex justify-between items-center">
          <div className="flex gap-4">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search Invoice Code"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4"
            />
            <TextField
              fullWidth
              variant="outlined"
              type="date"
              value={startDate ? startDate.toISOString().split('T')[0] : ''}
              onChange={(e) => setStartDate(e.target.value ? new Date(e.target.value) : null)}
              className="mb-4"
            />
            <TextField
              fullWidth
              variant="outlined"
              type="date"
              value={endDate ? endDate.toISOString().split('T')[0] : ''}
              onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
              className="mb-4"
            />
          </div>
          <div className="flex gap-4">
            <Link href="/invoice/0" passHref>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
              >
                Add New Invoice
              </Button>
            </Link>
          </div>
        </div>
        <ReusableTable headers={headers} rows={rowsData} />
      </div>
    </div>
  );
}
