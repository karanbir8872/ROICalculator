import React, { useState } from 'react';
import { Grid, Box, Typography, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';

const EnableAccelerated = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 44,
    height: 22,
    padding: 0,
    borderRadius: 16,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(22px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? '#f8c433' : '#f8c433',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 18,
      height: 18,
      borderRadius: 15,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 0.3,
      backgroundColor: theme.palette.mode === 'dark' ? '#9A9A9A' : '#9A9A9A',
      boxSizing: 'border-box',
    },
  }));

  return (
    <Box mt={2} mb={2}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography
            variant="body2"
            color="black"
            mt={1}
            mb={1}
            sx={{ fontWeight: 400, fontSize: '16px' }}
          >
            Enable Accelerated APY
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <AntSwitch
            inputProps={{ 'aria-label': 'ant design' }}
            checked={checked}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EnableAccelerated;
