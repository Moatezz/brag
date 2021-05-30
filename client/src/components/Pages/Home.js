import React, { useState } from 'react';
import Navigation from '../Navigation';

import { Box, makeStyles, Paper, Tabs, Tab, Grid } from '@material-ui/core';
import CardGroup from '../CardGroup';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(9),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(12),
    },
  },
  grid: {
    marginTop: theme.spacing(4),
    width: 'max-content',
  },
}));

function Home() {
  const classes = useStyle();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Navigation />
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Joined" />
          <Tab label="Owned" />
          <Tab label="Public" />
        </Tabs>
      </Paper>
      <Grid
        className={classes.grid}
        container
        spacing={2}
        justify="space-around"
      >
        <Grid item>
          <CardGroup />
        </Grid>
        <Grid item>
          <CardGroup />
        </Grid>
        <Grid item>
          <CardGroup />
        </Grid>
        <Grid item>
          <CardGroup />
        </Grid>
        <Grid item>
          <CardGroup />
        </Grid>
        <Grid item>
          <CardGroup />
        </Grid>
        <Grid item>
          <CardGroup />
        </Grid>
        <Grid item>
          <CardGroup />
        </Grid>

        <Grid item>
          <CardGroup />
        </Grid>
        <Grid item>
          <CardGroup />
        </Grid>
        <Grid item>
          <CardGroup />
        </Grid>
        <Grid item>
          <CardGroup />
        </Grid>
        <Grid item>
          <CardGroup />
        </Grid>
        <Grid item>
          <CardGroup />
        </Grid>
        <Grid item>
          <CardGroup />
        </Grid>
        <Grid item>
          <CardGroup />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
