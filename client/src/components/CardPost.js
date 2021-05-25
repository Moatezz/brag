import React from 'react';
import DottedMenu from './DottedMenu';
import {
  makeStyles,
  Paper,
  Box,
  Avatar,
  Typography,
  Divider,
  IconButton,
  TextField,
} from '@material-ui/core';
import { RiShareLine } from 'react-icons/ri';
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import { GoCommentDiscussion } from 'react-icons/go';
const useStyle = makeStyles((theme) => ({
  root: {
    //remove
    margin: theme.spacing(10),
    width: 'min-content',
  },
  head: {},
  body: {},
  bottom: {},
  comment: {},
}));
function CardPost() {
  const classes = useStyle();
  return (
    <Paper variant="outlined" className={classes.root}>
      <Box className={classes.head} display="flex">
        <Avatar>U</Avatar>
        <Box className={classes.nameContainer}>
          <Typography>JamesMay24</Typography>
          <Typography>14 Hours ago</Typography>
        </Box>
        <DottedMenu />
      </Box>
      <Divider />
      <Box className={classes.body}>
        <Typography>
          aornsitniearntiesrntiesntiestn sentisentiesntiesntstnseintsyntis
          istnisntisntnnsientniesntisnntinsin snitnisnientinisentniesntiensin
        </Typography>
      </Box>
      <Divider />
      <Box className={classes.bottom} display="flex">
        <IconButton>
          <BiDownvote />
        </IconButton>
        <IconButton>
          <BiUpvote />
        </IconButton>

        <Avatar>u</Avatar>
        <Avatar>u</Avatar>
        <Avatar>u</Avatar>

        <IconButton>
          <GoCommentDiscussion />
        </IconButton>
        <IconButton>
          <RiShareLine />
        </IconButton>
      </Box>
      <Box className={classes.comment} display="flex">
        <Avatar>U</Avatar>
        <TextField variant="outlined" helperText="Comment something..." />
      </Box>
    </Paper>
  );
}

export default CardPost;
