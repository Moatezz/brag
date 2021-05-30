import React, { useState } from 'react';
import Navigation from '../Navigation';

import { Box, makeStyles, Paper, Tabs, Tab, Grid } from '@material-ui/core';
import CardGroup from '../CardGroup';

const useStyle = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

function Home() {
  const classes = useStyle();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
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
      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
        <CardGroup />

        <CardGroup />

        <CardGroup />

        <CardGroup />

        <CardGroup />

        <CardGroup />

        <CardGroup />

        <CardGroup />

        <CardGroup />

        <CardGroup />

        <CardGroup />

        <CardGroup />

        <CardGroup />
      </Box>
    </>
  );
}

export default Home;
