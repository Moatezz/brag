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
import { IoSend } from 'react-icons/io5';
const useStyle = makeStyles((theme) => ({
  root: {
    //remove
    margin: theme.spacing(10),
    width: 'min-content',
    padding: theme.spacing(1),
  },
  headSection: {
    avatar: {},
    nameContainer: {},
    name: {},
    date: {},
  },

  contentSection: {},
  interactionsSection: {
    votes: {},
    recentInteractionsContainer: {},
    recentInteractions: {},
    comments: {},
    share: {},
  },

  commentingSection: {
    avatar: {},
    textField: {},
    submit: {},
  },
}));
function CardPost() {
  const classes = useStyle();
  return (
    <Paper variant="outlined" className={classes.root}>
      <Box className={classes.headSection} display="flex">
        <Avatar className={classes.headSection.avatar}>U</Avatar>
        <Box className={classes.headSection.nameContainer}>
          <Typography className={classes.headSection.name}>
            JamesMay24
          </Typography>
          <Typography className={classes.headSection.date}>
            14 Hours ago
          </Typography>
        </Box>
        <DottedMenu />
      </Box>
      <Divider />
      <Box className={classes.ContentSection}>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was in the 1960s with the
        </Typography>
      </Box>
      <Divider />
      <Box className={classes.interactionsSection} display="flex">
        <Box className={classes.interactionsSection.votes} display="flex">
          <IconButton>
            <BiDownvote />
          </IconButton>
          <IconButton>
            <BiUpvote />
          </IconButton>
        </Box>
        <Box
          className={classes.interactionsSection.recentInteractionsContainer}
        >
          <Avatar className={classes.interactionsSection.recentInteractions}>
            u
          </Avatar>
          <Avatar className={classes.interactionsSection.recentInteractions}>
            u
          </Avatar>
          <Avatar className={classes.interactionsSection.recentInteractions}>
            u
          </Avatar>
        </Box>

        <IconButton className={classes.interactionsSection.comments}>
          <GoCommentDiscussion />
        </IconButton>
        <IconButton className={classes.interactionsSection.share}>
          <RiShareLine />
        </IconButton>
      </Box>
      <Box className={classes.commentingSection} display="flex">
        <Avatar className={classes.commentingSection.avatar}>U</Avatar>
        <TextField
          className={classes.commentingSection.textField}
          variant="outlined"
          helperText="Comment something..."
        />
        <IconButton className={classes.commentingSection.submit}>
          <IoSend />
        </IconButton>
      </Box>
    </Paper>
  );
}

export default CardPost;
