import { Box, Divider, makeStyles, Typography } from '@material-ui/core';
import Logo from '../Logo';
import React from 'react';

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
  },
  typography: {
    color: 'white',
    fontFamily: "'Cairo', sans-serif",
  },
  divider: {
    color: 'white',
  },
}));

function LandingPage() {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Logo variant="big" />
      <Typography className={classes.typography} variant="h2">
        THE START IS COMING
      </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.typography} variant="h4">
        Lorem ipsum in the name of all of those who died in the battle of
        algeria
      </Typography>
      -
    </Box>
  );
}

export default LandingPage;
