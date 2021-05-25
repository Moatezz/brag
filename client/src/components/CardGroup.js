import { Avatar, Box, Paper, Typography, Button } from '@material-ui/core';
import React from 'react';
import DottedMenu from './DottedMenu';

function CardGroup() {
  return (
    <Paper>
      <Box display="Flex" flexDirection="row">
        <Avatar>G</Avatar>
        <Box display="Flex" flexDirection="column">
          <Typography>Name</Typography>
          <Button>Join</Button>
        </Box>
        <DottedMenu />
      </Box>
    </Paper>
  );
}

export default CardGroup;
