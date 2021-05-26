import {
  Avatar,
  Box,
  Divider,
  makeStyles,
  Typography,
  Paper,
} from '@material-ui/core';
import React from 'react';
const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 0),
  },
  sideNote: {
    marginLeft: theme.spacing(2),
    color: theme.palette.grey[500],
    fontFamily: 'Cairo',
    fontSize: theme.spacing(1.5),
  },
  container: {
    margin: theme.spacing(0, 5),
  },
  //children
  divider: {
    margin: theme.spacing(2, 0),
  },
  avatar: {
    height: theme.spacing(7),
    width: theme.spacing(7),
  },
  name: {
    margin: theme.spacing(0, 2),
    fontFamily: 'Cairo',
    color: theme.palette.grey[700],
  },
  doorNote: {
    color: theme.palette.grey[600],
    padding: theme.spacing(0.5),
  },
  ////////////////
}));
function OnlineNow() {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Typography className={classes.sideNote}>
        *Be sure to follow the rules or you'll be kicked
      </Typography>
      <Box className={classes.container}>
        <Divider className={classes.divider} />
        <Box
          className={classes.contentContainer}
          display="flex"
          alignItems="center"
        >
          <Box
            className={classes.memberContainer}
            display="flex"
            alignItems="center"
          >
            <Avatar className={classes.avatar}>M</Avatar>
            <Typography className={classes.name}>Sailor9</Typography>
          </Box>
          <Paper variant="outlined">
            <Typography className={classes.doorNote}>
              Im on fire, and Im High AF*
            </Typography>
          </Paper>
        </Box>
        <Divider className={classes.divider} />
        <Box
          className={classes.contentContainer}
          display="flex"
          alignItems="center"
        >
          <Box
            className={classes.memberContainer}
            display="flex"
            alignItems="center"
          >
            <Avatar className={classes.avatar}>M</Avatar>
            <Typography className={classes.name}>Sailor9</Typography>
          </Box>
          <Paper variant="outlined">
            <Typography className={classes.doorNote}>
              Im on fire, and Im High AF*
            </Typography>
          </Paper>
        </Box>
        <Divider className={classes.divider} />
        <Box
          className={classes.contentContainer}
          display="flex"
          alignItems="center"
        >
          <Box
            className={classes.memberContainer}
            display="flex"
            alignItems="center"
          >
            <Avatar className={classes.avatar}>M</Avatar>
            <Typography className={classes.name}>Sailor9</Typography>
          </Box>
          <Paper variant="outlined">
            <Typography className={classes.doorNote}>
              Im on fire, and Im High AF*
            </Typography>
          </Paper>
        </Box>
        <Divider className={classes.divider} />
        <Box
          className={classes.contentContainer}
          display="flex"
          alignItems="center"
        >
          <Box
            className={classes.memberContainer}
            display="flex"
            alignItems="center"
          >
            <Avatar className={classes.avatar}>M</Avatar>
            <Typography className={classes.name}>Sailor9</Typography>
          </Box>
          <Paper variant="outlined">
            <Typography className={classes.doorNote}>
              Im on fire, and Im High AF*
            </Typography>
          </Paper>
        </Box>
        <Divider className={classes.divider} />
        <Box
          className={classes.contentContainer}
          display="flex"
          alignItems="center"
        >
          <Box
            className={classes.memberContainer}
            display="flex"
            alignItems="center"
          >
            <Avatar className={classes.avatar}>M</Avatar>
            <Typography className={classes.name}>Sailor9</Typography>
          </Box>
          <Paper variant="outlined">
            <Typography className={classes.doorNote}>
              Im on fire, and Im High AF*
            </Typography>
          </Paper>
        </Box>
        <Divider className={classes.divider} />
        <Box
          className={classes.contentContainer}
          display="flex"
          alignItems="center"
        >
          <Box
            className={classes.memberContainer}
            display="flex"
            alignItems="center"
          >
            <Avatar className={classes.avatar}>M</Avatar>
            <Typography className={classes.name}>Sailor9</Typography>
          </Box>
          <Paper variant="outlined">
            <Typography className={classes.doorNote}>
              Im on fire, and Im High AF*
            </Typography>
          </Paper>
        </Box>
        <Divider className={classes.divider} />
        <Box
          className={classes.contentContainer}
          display="flex"
          alignItems="center"
        >
          <Box
            className={classes.memberContainer}
            display="flex"
            alignItems="center"
          >
            <Avatar className={classes.avatar}>M</Avatar>
            <Typography className={classes.name}>Sailor9</Typography>
          </Box>
          <Paper variant="outlined">
            <Typography className={classes.doorNote}>
              Im on fire, and Im High AF*
            </Typography>
          </Paper>
        </Box>
        <Divider className={classes.divider} />
        <Box
          className={classes.contentContainer}
          display="flex"
          alignItems="center"
        >
          <Box
            className={classes.memberContainer}
            display="flex"
            alignItems="center"
          >
            <Avatar className={classes.avatar}>M</Avatar>
            <Typography className={classes.name}>Sailor9</Typography>
          </Box>
          <Paper variant="outlined">
            <Typography className={classes.doorNote}>
              Im on fire, and Im High AF*
            </Typography>
          </Paper>
        </Box>
        <Divider className={classes.divider} />
        <Box
          className={classes.contentContainer}
          display="flex"
          alignItems="center"
        >
          <Box
            className={classes.memberContainer}
            display="flex"
            alignItems="center"
          >
            <Avatar className={classes.avatar}>M</Avatar>
            <Typography className={classes.name}>Sailor9</Typography>
          </Box>
          <Paper variant="outlined">
            <Typography className={classes.doorNote}>
              Im on fire, and Im High AF*
            </Typography>
          </Paper>
        </Box>
        <Divider className={classes.divider} />
        <Box
          className={classes.contentContainer}
          display="flex"
          alignItems="center"
        >
          <Box
            className={classes.memberContainer}
            display="flex"
            alignItems="center"
          >
            <Avatar className={classes.avatar}>M</Avatar>
            <Typography className={classes.name}>Sailor9</Typography>
          </Box>
          <Paper variant="outlined">
            <Typography className={classes.doorNote}>
              Im on fire, and Im High AF*
            </Typography>
          </Paper>
        </Box>
        <Divider className={classes.divider} />
      </Box>
    </Box>
  );
}

export default OnlineNow;
