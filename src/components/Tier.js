import React, { useState } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import ButtonView from './Common/Button';

const Tier = () => {
  const [activeThree, setActiveThree] = useState('4');

  const handleClickThree = (e) => {
    setActiveThree(e.target.value);
  };
  return (
    <Box>
      <Typography
        variant="body2"
        color="#9A9A9A"
        mb={2}
        sx={{ fontWeight: 700 }}
      >
        Select Tier
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction="row">
            <ButtonView
              name="Tier 1"
              value="1"
              onClick={handleClickThree}
              className={activeThree === '1' ? 'activeThree' : undefined}
              id={'1'}
              color={activeThree === '1' ? '#000000' : '#9A9A9A'}
            />
            <ButtonView
              name="Tier 2"
              value="2"
              onClick={handleClickThree}
              className={activeThree === '2' ? 'activeThree' : undefined}
              id={'2'}
              color={activeThree === '2' ? '#000000' : '#9A9A9A'}
            />
            <ButtonView
              name="Tier 3"
              value="3"
              onClick={handleClickThree}
              className={activeThree === '3' ? 'activeThree' : undefined}
              id={'3'}
              color={activeThree === '3' ? '#000000' : '#9A9A9A'}
            />
            <ButtonView
              name="Tier 4"
              value="4"
              onClick={handleClickThree}
              className={activeThree === '4' ? 'activeThree' : undefined}
              id={'4'}
              color={activeThree === '4' ? '#000000' : '#9A9A9A'}
            />
            <ButtonView
              name="Tier 5"
              value="5"
              onClick={handleClickThree}
              className={activeThree === '5' ? 'activeThree' : undefined}
              id={'5'}
              color={activeThree === '5' ? '#000000' : '#9A9A9A'}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tier;
