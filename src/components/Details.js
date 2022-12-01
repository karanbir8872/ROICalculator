import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Details = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ marginRight: '0px', marginLeft: '0px' }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: '14px', color: 'black', fontWeight: 500 }}
          >
            {expanded ? ' hide Detail ' : ' Show Detail'}
          </Typography>
          <IconButton sx={{ color: 'black', padding: '0px' }}>
            <ExpandMoreIcon />
          </IconButton>
        </ExpandMore>
      </Stack>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ paddingTop: '0px' }}>
          <List sx={{ padding: '0px' }}>
            <ListItem
              disableGutters
              secondaryAction="63.34%"
              sx={{
                color: '#F8C233',
                fontWeight: 700,
                fontSize: '22px',
                paddingBottom: '0px',
              }}
            >
              <ListItemText primary="APY" sx={{ color: 'Black' }} />
            </ListItem>
          </List>
          <ul>
            <li>
              <Typography paragraph sx={{ opacity: '0.6' }}>
                Calculated Based on Current Result
              </Typography>
            </li>
            <li>
              <Typography sx={{ opacity: '0.6' }}>
                All Figures are estimates provided for your convience only,and
                by no means represent guaranted returns.
              </Typography>
            </li>
          </ul>
        </CardContent>
      </Collapse>
    </>
  );
};

export default Details;
