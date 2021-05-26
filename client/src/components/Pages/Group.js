import { Grid, makeStyles, Paper, Box } from '@material-ui/core';
import React from 'react';
import Navigation from '../Navigation';
import CardPost from '../CardPost';
import InfoGroup from '../InfoGroup';
import OnlineNow from '../OnlineNow';

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
  mainContainer: {
    backgroundColor: theme.palette.grey[200],
  },
  main: {
    padding: theme.spacing(0, 1),
  },
  postContainer: {
    paddingBottom: theme.spacing(5),
  },
}));

function Group() {
  const classes = useStyle();
  return (
    <Box>
      <Navigation />
      <Grid container xs={12} className={classes.root} direction="row">
        <Grid item xs={3}>
          <Paper variant="outlined">
            <InfoGroup />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Box
            className={classes.mainContainer}
            display="flex"
            justifyContent="center"
          >
            <Paper className={classes.main} elevation={3}>
              <Box className={classes.postContainer}>
                <CardPost />
              </Box>
              <Box className={classes.postContainer}>
                <CardPost />
              </Box>
              <Box className={classes.postContainer}>
                <CardPost />
              </Box>
              <Box className={classes.postContainer}>
                <CardPost />
              </Box>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Paper variant="outlined">
            <OnlineNow />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Group;
