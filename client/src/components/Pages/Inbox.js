import React, { useReducer } from 'react';
import {
  Box,
  IconButton,
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@material-ui/core';
import { BsFillInboxFill } from 'react-icons/bs';
const useStyle = makeStyles((theme) => ({
  root: {},
}));
function Inbox({ className }) {
  const [state, handleClick] = useReducer((state) => !state, false);
  const classes = useStyle();
  return (
    <>
      <IconButton onClick={handleClick}>
        <BsFillInboxFill className={className} />
      </IconButton>
      <Dialog className={classes.root} open={state} onClose={handleClick}>
        <DialogTitle className={classes.title}>Inbox</DialogTitle>
        <DialogContent className={classes.mainContainer}>Hi</DialogContent>
      </Dialog>
    </>
  );
}

export default Inbox;
