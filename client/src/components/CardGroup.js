import {
  Avatar,
  Box,
  Paper,
  Typography,
  Button,
  makeStyles,
  Divider,
} from '@material-ui/core';
import React from 'react';
import DottedMenu from './DottedMenu';

const useStyle = makeStyles((theme) => ({
  root: {
    width: 'min-content',
    //remove
    margin: theme.spacing(10),
  },
  topContainer: {
    backgroundColor: theme.palette.grey[300],
  },
  avatar: {
    height: theme.spacing(10),
    width: theme.spacing(10),
    margin: theme.spacing(2),
    border: '3px solid ' + theme.palette.common.white,
  },
  name: {
    fontSize: theme.spacing(3),
    fontFamily: 'Cairo',
    color: theme.palette.grey[800],
    marginBottom: theme.spacing(1),
  },
  container: {
    margin: theme.spacing(0, 2),
  },
  description: {
    margin: theme.spacing(1),
    textAlign: 'center',
  },
}));
function CardGroup() {
  const classes = useStyle();
  return (
    <Paper className={classes.root} variant="outlined">
      <Box className={classes.topContainer} display="Flex" flexDirection="row">
        <Avatar className={classes.avatar} variant="rounded">
          G
        </Avatar>
        <Box
          className={classes.container}
          display="Flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography className={classes.name}>Serigo</Typography>
          <Button variant="contained" color="primary" size="small">
            Join
          </Button>
        </Box>
        <Box display="flex" alignItems="center">
          <DottedMenu />
        </Box>
      </Box>

      <Box>
        <Divider />
        <Typography className={classes.description}>
          dhashdiaendioatnd asrit nairnti rss sssf ss earnst aitnsi etn isetn
          asrit nairnti earnst aitnsi etn isetn
        </Typography>
      </Box>
    </Paper>
  );
}

export default CardGroup;
