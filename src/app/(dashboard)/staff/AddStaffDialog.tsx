import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface AddStaffDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (data: { branch_id: string; code: string; name: string; status: string; is_active: boolean }) => void;
}

const AddStaffDialog: React.FC<AddStaffDialogProps> = ({ open, onClose, onAdd }) => {
  const [branchId, setBranchId] = useState('');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleAdd = () => {
    onAdd({ branch_id: branchId, code, name, status, is_active: isActive });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add New Staff</DialogTitle>
      <DialogContent>
        <Select
          fullWidth
          margin="normal"
          value={branchId}
          onChange={(e) => setBranchId(e.target.value)}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select Branch ID
          </MenuItem>
          <MenuItem value="B001">B001</MenuItem>
          <MenuItem value="B002">B002</MenuItem>
          <MenuItem value="B003">B003</MenuItem>
          <MenuItem value="B004">B004</MenuItem>
          <MenuItem value="B005">B005</MenuItem>
        </Select>
        <TextField
          fullWidth
          margin="normal"
          label="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          fullWidth
          margin="normal"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select Status
          </MenuItem>
          <MenuItem value="available">Available</MenuItem>
          <MenuItem value="busy">Busy</MenuItem>
          <MenuItem value="off">Off</MenuItem>
        </Select>
        <FormControlLabel
          control={<Switch checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />}
          label="Active"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary" variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddStaffDialog;
