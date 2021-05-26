import { Box, Drawer, IconButton, Typography } from '@material-ui/core';
import React, { useReducer } from 'react';
import { CgProfile } from 'react-icons/cg';

function Profile({ icons }) {
  const [state, dispatch] = useReducer((state) => !state, false);
  return (
    <Box>
      <IconButton>
        <CgProfile className={icons} onClick={dispatch} />
      </IconButton>
      <Drawer anchor="left" open={state} onClose={dispatch}>
        <Typography>something</Typography>
      </Drawer>
    </Box>
  );
}

export default Profile;
