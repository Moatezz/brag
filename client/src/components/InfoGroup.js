import { Box, Tabs, Tab } from '@material-ui/core';
import React, { useState } from 'react';
import InfoGroupOverview from './InfoGroupOverview';

function InfoGroup() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Overview" />
        <Tab label="Rules" />
        <Tab label="About" />
      </Tabs>
      <InfoGroupOverview />
    </Box>
  );
}

export default InfoGroup;
