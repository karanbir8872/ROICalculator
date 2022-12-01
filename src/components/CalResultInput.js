import React from 'react';
import { Box, TextField } from '@mui/material';

const CalResultInput = () => {
  return (
    <Box mb={2}>
      <TextField
        inputProps={{
          min: 0,
          style: {
            textAlign: 'Right',
            fontWeight: 700,
            fontSize: '24px',
            backgroundColor: '#F9FAFB',
            borderRadius: '14px',
          },
        }}
        sx={{ borderRadius: '14px' }}
        fullWidth
        defaultValue="2.10000 CAKE"
        variant="outlined"
        size="Normal"
      />
    </Box>
  );
};

export default CalResultInput;
