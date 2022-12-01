import React from 'react';
import {
  CardActions,
  Grid,
  Stack,
  Box,
  Typography,
  IconButton,
  Switch,
} from '@mui/material';
import CakeIcon from '@mui/icons-material/Cake';
import { styled } from '@mui/material/styles';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
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
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#f8c433' : '#f8c433',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const CardHeaderButton = () => {
  return (
    <CardActions disableSpacing>
      <Grid container spacing={3}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4} sx={{ paddingLeft: '0px' }}>
          <Box>
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              justifyContent="right"
            >
              <Typography variant="body2" color="text.secondary">
                <Stack direction="row" spacing={0.8} alignItems="center">
                  <IconButton aria-label="share" sx={{ padding: '0px' }}>
                    <CakeIcon
                      sx={{ fontSize: '1.2rem', marginBottom: '3px' }}
                    />
                  </IconButton>{' '}
                  <Typography sx={{ fontWeight: 700, fontSize: '16px' }}>
                    Cake
                  </Typography>
                </Stack>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Stack direction="row" spacing={0.8} alignItems="center">
                  <AntSwitch
                    defaultChecked
                    inputProps={{ 'aria-label': 'ant design' }}
                  />
                  <Typography sx={{ fontWeight: 700, fontSize: '16px' }}>
                    USD
                  </Typography>
                </Stack>
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </CardActions>
  );
};

export default CardHeaderButton;
