import React from 'react';
import Login from './Login';
import Signup from './Signup';
import { render } from 'react-dom';
import { Box, Button, Link, makeStyles, Typography } from '@material-ui/core';
import Logo from '../Logo';

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
  const routeLogin = () => {
    render(<Login />, document.getElementById('pageContainerX'));
  };
  const routeSignup = () => {
    render(<Signup />, document.getElementById('pageContainerX'));
  };
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
        <Button
          variant="outlined"
          color="default"
          className={classes.button}
          onClick={routeSignup}
        >
          SIGN UP
        </Button>
      </Box>
      <Typography className={classes.typography}>
        You have an account? <Link onClick={routeLogin}>Sign In</Link>
      </Typography>
    </Box>
  );
}
export default LandingPage;
