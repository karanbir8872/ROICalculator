import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import { styled } from '@mui/material/styles';
import Details from './Details';
import TimeFrame from './TimeFrame';
import Tier from './Tier';
import BalanceButton from './BalanceButton';
import CardHeaderButton from './CardHeaderButton';
import EnableAccelerated from './EnalbleAccelerated';
import RoiRatesField from './RoiRatesField';
import DecisionButton from './DecisionButton';
import CalResultInput from './CalResultInput';

const Root = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxHeight: '100%',
    borderRadius: '16px',
    overflowY: 'scroll',
  },
  [theme.breakpoints.up('md')]: {
    width: '100%',
    maxHeight: '100%',
    borderRadius: '16px',
    overflowY: 'scroll',
  },
  [theme.breakpoints.up('lg')]: {
    width: 600,
    maxHeight: 800,
    borderRadius: '16px',
    overflowY: 'scroll',
  },
}));

const Home = () => {
  return (
    <div className="header-sec">
      <Root>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <CloseIcon />
            </IconButton>
          }
          title="ROI Calculator"
          sx={{ paddingBottom: '0px' }}
        />
        <CardContent sx={{ paddingTop: '0px' }}>
          <CardHeaderButton />
          <CalResultInput />
          <BalanceButton />
          <TimeFrame />
          <EnableAccelerated />
          <Tier />
          <RoiRatesField />
          <DecisionButton />
          <Details />
        </CardContent>
      </Root>
    </div>
  );
};

export default Home;
