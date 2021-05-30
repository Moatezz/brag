import { Grid, makeStyles, Paper, Box } from '@material-ui/core';
import React from 'react';
import Navigation from '../Navigation';
import CardPost from '../CardPost';
import InfoGroup from '../InfoGroup';
import OnlineNow from '../OnlineNow';
import CardCreatePost from '../CardCreatePost';

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
  mainContainer: {
    backgroundColor: theme.palette.grey[300],
  },
  main: {
    padding: theme.spacing(3, 8),
    margin: theme.spacing(0, 15),
  },
  postContainer: {
    paddingBottom: theme.spacing(5),
  },
  createPostContainer: {
    margin: theme.spacing(1, 0),
  },
}));

function Group() {
  const classes = useStyle();
  return (
    <Box>
      <Grid container className={classes.root} direction="row">
        <Grid item md={3}>
          <Paper variant="outlined">
            <InfoGroup />
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Box
            className={classes.mainContainer}
            display="flex"
            justifyContent="center"
          >
            <Paper className={classes.main} elevation={3}>
              <Box className={classes.createPostContainer}>
                <CardCreatePost />
              </Box>{' '}
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
        <Grid item md={3}>
          <Paper variant="outlined">
            <OnlineNow />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Group;
