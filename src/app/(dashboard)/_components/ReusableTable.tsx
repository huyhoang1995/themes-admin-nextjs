import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell, StyledTableRow } from '../invoice/StyledTable';

type ReusableTableProps = {
  headers: string[];
  rows: Array<{ [key: string]: string }>;
};

const ReusableTable: React.FC<ReusableTableProps> = ({ headers, rows }) => {
  return (
    <TableContainer component={Paper} className="shadow-md rounded-lg">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <StyledTableCell key={index} className="bg-purple-500 text-white">
                {header}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <StyledTableRow key={rowIndex} className="hover:bg-gray-100">
              {headers.map((header, colIndex) => (
                <StyledTableCell key={colIndex} align={colIndex > 0 ? 'right' : 'left'}>
                  {row[header]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReusableTable;
