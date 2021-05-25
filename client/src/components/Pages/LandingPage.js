import {
  Box,
  Button,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Logo from '../Logo';
import React from 'react';

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundImage: 'url("/bg.jpg")',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
  },
  typography: {
    color: 'white',
    fontFamily: "'Cairo', sans-serif",
    textShadow: '0 0 3px #000000',
  },
  divider: {
    backgroundColor: 'white',
    height: theme.spacing(0.3),
    width: theme.spacing(50),
    boxShadow: '0px 0px 3px rgba(0,0,0,0.47)',
  },
  button: {
    fontSize: theme.spacing(4),
    color: 'white',
    borderColor: 'white',
  },
}));

function LandingPage() {
  const classes = useStyle();
  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box marginTop={10}>
        <Logo variant="big" />
      </Box>
      <Typography className={classes.typography} variant="h2" elevation={1}>
        THE START IS COMING
      </Typography>
      <Box className={classes.divider}> </Box>
      <Typography className={classes.typography} variant="h4">
        Lorem ipsum in the name of all of those who died in the battle of
        algeria
      </Typography>
      <Box boxShadow={2} className={classes.container} marginTop={10}>
        <Button variant="outlined" color="default" className={classes.button}>
          SIGN UP
        </Button>
      </Box>
      <Typography className={classes.typography}>
        You have an account? Sign In
      </Typography>
    </Box>
  );
}

export default LandingPage;
