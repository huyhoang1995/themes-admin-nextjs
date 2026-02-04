"use client";

import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, IconButton, Typography, Box, Grid, InputAdornment, Autocomplete } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import UpdateIcon from '@mui/icons-material/Update';

const ProductForm = () => {
  const [variants, setVariants] = useState([{ variant: '', value: '' }]);

  const handleAddVariant = () => {
    setVariants([...variants, { variant: '', value: '' }]);
  };

  const handleRemoveVariant = (index) => {
    const updatedVariants = variants.filter((_, i) => i !== index);
    setVariants(updatedVariants);
  };

  const handleVariantChange = (index, field, value) => {
    const updatedVariants = variants.map((variant, i) =>
      i === index ? { ...variant, [field]: value } : variant
    );
    setVariants(updatedVariants);
  };

  return (
    <>
        
        <Box>
        <Typography variant="h6" gutterBottom>
            Product Information
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Autocomplete
              fullWidth
              options={['HN', 'HCM', 'DN']}
              renderInput={(params) => <TextField {...params} label="Chi nhánh" variant="outlined" />}
            />
            </Grid>
            <Grid item xs={12} sm={3}>
            <Autocomplete
              fullWidth
              options={['Hoàng', 'Kiên', 'Hữu']}
              renderInput={(params) => <TextField {...params} label="Tên khách hàng" variant="outlined" />}
            />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField fullWidth label="Số điện thoại" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Ghi chú" variant="outlined" />

            </Grid>
        </Grid>
        </Box>
       <Box>
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Thông tin dịch vụ
      </Typography>
      {variants.map((variant, index) => (
        <Grid container spacing={2} key={index} alignItems="center" sx={{ mb: 2 }}>
          <Grid item xs={12} sm={5}>
            <Select
              fullWidth
              value={variant.variant}
              onChange={(e) => handleVariantChange(index, 'variant', e.target.value)}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select Variant
              </MenuItem>
              <MenuItem value="Size">Size</MenuItem>
              <MenuItem value="Color">Color</MenuItem>
              <MenuItem value="Material">Material</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              label="Variant Value"
              value={variant.value}
              onChange={(e) => handleVariantChange(index, 'value', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <IconButton onClick={() => handleRemoveVariant(index)}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={handleAddVariant}
        sx={{ mt: 2 }}
      >
        Add Another Option
      </Button>

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Tổng tiền: <strong>0 VND</strong>
      </Typography>

      <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>
          Thêm
        </Button>
        <Button variant="contained" color="secondary" startIcon={<EditIcon />}>
          Sửa
        </Button>
        <Button variant="contained" color="success" startIcon={<UpdateIcon />}>
          Cập nhật
        </Button>
      </Box>

   
    </Box>
    </>
  );
};

export default ProductForm;
