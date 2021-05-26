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
  main: {},
}));

function Group() {
  const classes = useStyle();
  return (
    <Box>
      <Navigation />
      <Grid container xs={12} className={classes.root} direction="row">
        <Grid item xs={4}>
          <InfoGroup />
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.main}>
            <CardPost />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <OnlineNow />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Group;
