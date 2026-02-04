import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

interface AddUserDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (data: { branch_id: string; username: string; full_name: string; role: string; is_active: boolean }) => void;
}

const AddUserDialog: React.FC<AddUserDialogProps> = ({ open, onClose, onAdd }) => {
  const [branchId, setBranchId] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleAdd = () => {
    onAdd({ branch_id: branchId, username, full_name: fullName, role, is_active: isActive });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add New User</DialogTitle>
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
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Select
          fullWidth
          margin="normal"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select Role
          </MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="receptionist">Receptionist</MenuItem>
          <MenuItem value="manager">Manager</MenuItem>
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

export default AddUserDialog;
