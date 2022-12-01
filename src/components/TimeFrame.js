import React, { useState } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import ButtonView from './Common/Button';

const TimeFrame = () => {
  const [activeTwo, setActiveTwo] = useState('3');

  const handleClickTwo = (e) => {
    setActiveTwo(e.target.value);
  };
  return (
    <Box>
      <Typography
        variant="body2"
        color="black"
        mt={2}
        mb={2}
        sx={{ fontWeight: 500, fontSize: '14px' }}
      >
        Timeframe
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction="row">
            <ButtonView
              name=" 1 Day"
              value="1"
              onClick={handleClickTwo}
              className={activeTwo === '1' ? 'activeTwo' : undefined}
              color={activeTwo === '1' ? '#000000' : '#9A9A9A'}
              id={'1'}
            />
            <ButtonView
              name="7 Days"
              value="2"
              onClick={handleClickTwo}
              className={activeTwo === '2' ? 'activeTwo' : undefined}
              id={'2'}
              color={activeTwo === '2' ? '#000000' : '#9A9A9A'}
            />
            <ButtonView
              name="30 Days"
              value="3"
              onClick={handleClickTwo}
              className={activeTwo === '3' ? 'activeTwo' : undefined}
              id={'3'}
              color={activeTwo === '3' ? '#000000' : '#9A9A9A'}
            />
            <ButtonView
              name="1 Year"
              value="4"
              onClick={handleClickTwo}
              className={activeTwo === '4' ? 'activeTwo' : undefined}
              id={'4'}
              color={activeTwo === '4' ? '#000000' : '#9A9A9A'}
            />
            <ButtonView
              name="5 Year"
              value="5"
              onClick={handleClickTwo}
              className={activeTwo === '5' ? 'activeTwo' : undefined}
              id={'5'}
              color={activeTwo === '5' ? '#000000' : '#9A9A9A'}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TimeFrame;
