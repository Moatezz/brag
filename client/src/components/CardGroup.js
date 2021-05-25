import { Avatar, Box, Paper, Typography, Button } from '@material-ui/core';
import React from 'react';

function CardGroup() {
  return (
    <Paper>
      <Box display="Flex" flexDirection="row">
        <Avatar>G</Avatar>
        <Box display="Flex" flexDirection="column">
          <Typography>Name</Typography>
          <Button>Join</Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default CardGroup;
