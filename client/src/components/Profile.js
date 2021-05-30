import {
  Box,
  Drawer,
  IconButton,
  Typography,
  makeStyles,
  Avatar,
  TextField,
  Button,
  Paper,
} from '@material-ui/core';
import React, { useReducer } from 'react';
import { CgProfile } from 'react-icons/cg';

const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  avatar: {
    height: theme.spacing(15),
    width: theme.spacing(15),
    margin: theme.spacing(3, 5),
  },
  container: {},
  name: {
    fontSize: theme.spacing(4),
    fontFamily: 'Cairo',
    color: theme.palette.grey[700],
    marginRight: theme.spacing(15),
  },
  marker: {
    alignSelf: 'flex-start',
    color: theme.palette.grey[500],
    fontFamily: 'Cairo',
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  doorNoteContainer: {
    margin: theme.spacing(0, 3),
    padding: theme.spacing(3),
  },
  textField: {
    marginBottom: theme.spacing(3),
  },
}));
function Profile({ className }) {
  const classes = useStyle();
  const [state, dispatch] = useReducer((state) => !state, false);
  return (
    <>
      <IconButton onClick={dispatch}>
        <CgProfile className={className} />
      </IconButton>
      <Drawer anchor="left" open={state} onClose={dispatch}>
        <Paper className={classes.root} variant="outlined">
          <Box className={classes.container} display="flex" alignItems="center">
            <Avatar className={classes.avatar}>U</Avatar>
            <Typography className={classes.name}>Seon74</Typography>
          </Box>
        </Paper>
        <Box className={classes.doorNote}>
          <Typography className={classes.marker}>Edit Your Door</Typography>
          <Paper className={classes.doorNoteContainer} variant="outlined">
            <Box display="flex" flexDirection="column" justifyContent="center">
              <TextField
                className={classes.textField}
                variant="outlined"
              ></TextField>
              <Button
                className={classes.button}
                fullWidth
                variant="contained"
                color="primary"
              >
                Save
              </Button>
            </Box>
          </Paper>
        </Box>
      </Drawer>
    </>
  );
}

export default Profile;
