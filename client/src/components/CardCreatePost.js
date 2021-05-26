import {
  Box,
  makeStyles,
  Paper,
  Avatar,
  TextField,
  Divider,
  Button,
} from '@material-ui/core';
import React from 'react';
const useStyle = makeStyles((theme) => ({
  root: {},
  container: {},
  main: {
    padding: theme.spacing(2, 2),
    backgroundColor: theme.palette.grey[200],
    paddingBottom: theme.spacing(3),
  },
  avatar: {
    height: theme.spacing(6),
    width: theme.spacing(6),
    marginRight: theme.spacing(1),
  },
  textField: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.white,
  },
  divider: {
    backgroundColor: theme.palette.grey[400],
    margin: theme.spacing(0, 2),
  },
  bottom: { backgroundColor: theme.palette.grey[200] },
  button: {
    margin: theme.spacing(1),
  },
}));
function CardCreatePost() {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Paper className={classes.container} variant="outlined">
        <Box
          className={classes.main}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Avatar className={classes.avatar}>M</Avatar>
          <TextField
            className={classes.textField}
            variant="outlined"
          ></TextField>
        </Box>
        <Divider className={classes.divider} light />
        <Box
          className={classes.bottom}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Button className={classes.button}>Filler</Button>
          <Button className={classes.button}>Filler</Button>
          <Button className={classes.button}>Filler</Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default CardCreatePost;
