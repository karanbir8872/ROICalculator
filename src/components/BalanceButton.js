import React, { useState } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import ButtonView from './Common/Button';

const BalanceButton = () => {
  const [active, setActive] = useState('1');

  const handleClick = (e) => {
    setActive(e.target.value);
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Stack direction="row">
            <ButtonView
              name="USA Balance"
              value="1"
              className={active === '1' ? 'active' : undefined}
              onClick={handleClick}
              id={'1'}
              color="black"
            />
            <ButtonView
              name="$1000"
              value="2"
              onClick={handleClick}
              className={active === '2' ? 'active' : undefined}
              color="black"
              id={'3'}
            />
            <ButtonView
              name="$100"
              value="3"
              onClick={handleClick}
              className={active === '3' ? 'active' : undefined}
              id={'3'}
              color="black"
            />
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 600, fontSize: '12px', textAlign: 'right' }}
          >
            ~$20.82
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BalanceButton;
