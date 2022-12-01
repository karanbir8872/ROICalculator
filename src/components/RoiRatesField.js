import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';

const RoiRatesField = () => {
  return (
    <>
      <Box mt={3} mb={1}>
        <Grid container spacing={2}>
          <Grid item xs={6}></Grid>
          <Grid
            xs={6}
            item
            direction="row"
            display="flex"
            alignItems="center"
            justifyContent="end"
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: 600, fontSize: '14px' }}
            >
              ROI at Current Rates
            </Typography>
          </Grid>
        </Grid>
      </Box>
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
        defaultValue="100.0 USD"
        variant="outlined"
        size="Normal"
      />
      <Box mt={1}>
        <Grid container spacing={2}>
          <Grid item xs={8}></Grid>
          <Grid
            xs={4}
            item
            direction="row"
            display="flex"
            alignItems="center"
            justifyContent="end"
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: 500, fontSize: '12px' }}
            >
              ~3CAKE + 10 DON
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RoiRatesField;
