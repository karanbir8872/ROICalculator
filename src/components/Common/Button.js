import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonStyle = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    padding: '6px 2px',
    marginRight: '8px',
    borderRadius: '8px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '6px 2px',
    marginRight: '8px',
    borderRadius: '8px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '8px 32px',
    marginRight: '5px',
    borderRadius: '24px',
  },
}));

const ButtonView = ({ name, value, className, onClick, id, color }) => {
  return (
    <div>
      <ButtonStyle
        onClick={onClick}
        variant="button"
        className={className}
        value={value}
        id={id}
        sx={{
          mr: 2,
          backgroundColor: '#F8F8F8',
          color: { color },
          boxShadow: 'none',
          borderRadius: '10px',
          textTransform: 'none',
        }}
      >
        {name}
      </ButtonStyle>
    </div>
  );
};

export default ButtonView;
