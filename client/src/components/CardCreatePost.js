import {
  Box,
  makeStyles,
  Paper,
  Avatar,
  TextField,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
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
  avatarDialog: {
    height: theme.spacing(7),
    width: theme.spacing(7),
    margin: theme.spacing(0, 2, 2, 2),
  },
  mainDialog: {
    margin: theme.spacing(2),
  },
  nameDialog: {
    marginBottom: theme.spacing(2),
    fontFamily: 'Cairo',
    color: theme.palette.grey[700],
    fontSize: theme.spacing(2.5),
  },
  submit: {
    margin: theme.spacing(2, 2),
  },
}));
function CardCreatePost() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
            onClick={handleClickOpen}
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
      <Dialog
        className={classes.dialog}
        fullWidth
        onClose={handleClose}
        open={open}
      >
        <DialogTitle>Create a Post</DialogTitle>
        <DialogContent>
          <Paper className={classes.containerDialog} variant="outlined">
            <Box
              className={classes.mainDialog}
              display="flex"
              flexDirection="column"
            >
              <Box display="flex" alignItems="center">
                <Avatar className={classes.avatarDialog}>M</Avatar>
                <Typography className={classes.nameDialog}>Rcun54s</Typography>
              </Box>
              <TextField
                className={classes.textFieldDialog}
                variant="outlined"
                onClick={handleClickOpen}
                multiline
                rows={10}
              ></TextField>
            </Box>
            <Divider className={classes.dividerDialog} light />
            <Box
              className={classes.bottomDialog}
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Button className={classes.buttonDialog}>Filler</Button>
              <Button className={classes.buttonDialog}>Filler</Button>
              <Button className={classes.buttonDialog}>Filler</Button>
            </Box>
            <Box className={classes.submit}>
              <Button fullWidth variant="contained" color="primary">
                Post
              </Button>
            </Box>
          </Paper>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default CardCreatePost;
