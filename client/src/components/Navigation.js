import React from 'react';
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
import { BsFillInboxFill } from 'react-icons/bs';
import { RiHome4Line } from 'react-icons/ri';
import { TiGroupOutline } from 'react-icons/ti';
import { GoSettings } from 'react-icons/go';
import { BiLogOutCircle } from 'react-icons/bi';
import Notification from './Notification';
import Profile from './Profile';

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
  const classes = useStyle();
  return (
    <AppBar>
      <Toolbar>
        <Grid container>
          <Grid item>
            {/* Home */}
            <IconButton>
              <RiHome4Line className={classes.icons} />
            </IconButton>
            {/* Profile */}
            <Profile class={classes.icons} />
            {/* Notifications */}
            <Notification className={classes.icons} />

            {/* Groups */}
            <IconButton>
              <TiGroupOutline className={classes.icons} />
            </IconButton>
            {/* Inbox */}
            <IconButton>
              <BsFillInboxFill className={classes.icons} />
            </IconButton>
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
            <IconButton>
              <BiLogOutCircle className={classes.icons} />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
