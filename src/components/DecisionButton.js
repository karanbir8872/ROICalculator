import React from 'react';
import { Box, Grid, Button } from '@mui/material';

const DecisionButton = () => {
  return (
    <Box mt={2} mb={2.5}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            size="large"
            variant="contained"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '14px',
              padding: '12px 0px',
              backgroundColor: '#333333',
            }}
          >
            Apply
          </Button>
        </Grid>
        <Grid xs={6} item>
          <Button
            size="large"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '14px',
              padding: '12px 0px',
              borderColor: '#333333',
              color: '#333333',
            }}
            variant="outlined"
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DecisionButton;
