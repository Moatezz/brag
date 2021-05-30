import React from 'react';
import { render } from 'react-dom';
//Pages
import Home from './Pages/Home';
import Group from './Pages/Group';
import LandingPage from './Pages/LandingPage';
//Material UI
import {
  AppBar,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
//Icons
import { RiHome4Line } from 'react-icons/ri';
import { TiGroupOutline } from 'react-icons/ti';
import { GoSettings } from 'react-icons/go';
import { BiLogOutCircle } from 'react-icons/bi';
import Notification from './Notification';
import Profile from './Profile';
import Inbox from './Pages/Inbox';

const useStyle = makeStyles((theme) => ({
  icons: {
    color: theme.palette.primary.light,
    fontSize: theme.spacing(3),
  },
  search: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(0, 2),
    borderRadius: theme.spacing(1),
    float: 'right',
  },
  rightWing: {
    float: 'left',
  },
}));

function Navigation() {
  const routeHome = () => {
    render(<Home />, document.getElementById('pageContainerX'));
  };
  const routeLandingPage = () => {
    render(<LandingPage />, document.getElementById('pageContainerX'));
  };
  const routeGroup = () => {
    render(<Group />, document.getElementById('pageContainerX'));
  };
  const classes = useStyle();
  return (
    <AppBar>
      <Toolbar>
        <Grid container>
          <Grid item>
            {/* Home */}
            <IconButton onClick={routeHome}>
              <RiHome4Line className={classes.icons} />
            </IconButton>
            {/* Profile */}
            <Profile className={classes.icons} />
            {/* Notifications */}
            <Notification className={classes.icons} />
            {/* Groups */}
            <IconButton onClick={routeGroup}>
              <TiGroupOutline className={classes.icons} />
            </IconButton>
            {/* Inbox */}
            <Inbox className={classes.icons} />

            {/* Settings */}
            <IconButton>
              <GoSettings className={classes.icons} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item container alignItems="center" justify="flex-end">
          {/* Log out */}
          <Grid item>
            <InputBase className={classes.search} placeholder="Search..." />
          </Grid>
          <Grid item>
            <IconButton onClick={routeLandingPage}>
              <BiLogOutCircle className={classes.icons} />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
