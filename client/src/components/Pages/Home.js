import React, { useState } from 'react';
import Navigation from '../Navigation';

import { Box, makeStyles, Paper, Tabs, Tab } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(9),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(12),
    },
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
    </Box>
  );
}

export default Home;
