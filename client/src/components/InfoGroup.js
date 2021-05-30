import { Box, Tabs, Tab } from '@material-ui/core';
import React, { useState } from 'react';
import InfoGroupOverview from './InfoGroupOverview';
import { makeStyles } from '@material-ui/core';
const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  difi: {},
}));
function InfoGroup() {
  const classes = useStyle();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box className={classes.difi}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab className={classes.root} label="Overview" />
          <Tab className={classes.root} label="Rules" />
          <Tab className={classes.root} label="About" />
          <Tab className={classes.root} label="lohn" />
        </Tabs>
      </Box>
      <InfoGroupOverview />
    </Box>
  );
}

export default InfoGroup;
