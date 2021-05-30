import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
  makeStyles,
  Grid,
} from '@material-ui/core';
import React, { useState } from 'react';
import { MdNotificationsNone } from 'react-icons/md';
const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
  },
  text: {
    fontSize: theme.spacing(1.5),
  },
  date: {
    fontSize: theme.spacing(1.2),
    opacity: 0.5,
  },
}));
function Notification(props) {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleClick}>
        <MdNotificationsNone className={props.className} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <Paper variant="outlined" className={classes.container}>
            <Grid
              justify="space-between"
              alignItems="center"
              container
              spacing={2}
            >
              <Grid item>
                <Avatar variant="rounded">N</Avatar>
              </Grid>
              <Grid item>
                <Typography className={classes.text}>
                  You Have received some new notification
                </Typography>
                <Typography className={classes.date}>
                  Sun 12th, 12:54 AM
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Notification;
