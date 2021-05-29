import React, { useReducer } from 'react';
import {
  Box,
  IconButton,
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  Avatar,
  Typography,
  Paper,
  Grid,
  ButtonGroup,
  Button,
} from '@material-ui/core';
import { BsFillInboxFill } from 'react-icons/bs';
import { RiMailAddFill } from 'react-icons/ri';
import DottedMenu from '../DottedMenu';
const useStyle = makeStyles((theme) => ({
  root: {},
  highContainer: {
    width: 'fit-content',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newLetter: {
    alignSelf: 'flex-end',
  },
  letterContainer: {
    flexGrow: 1,
  },
  letter: {
    padding: theme.spacing(1),
  },
  nameContainer: {
    flexGrow: 1,
  },
  name: {
    fontFamily: 'Cairo',
    fontWeight: 700,
    color: theme.palette.grey[700],
  },
  titleContainer: {
    margin: theme.spacing(1),
  },
  letterTitle: {
    margin: theme.spacing(1),
    fontSize: theme.spacing(2.1),
    color: theme.palette.grey[700],
  },
  avatar: {
    margin: theme.spacing(1),
  },
  contentTitleContainer: {
    marginBottom: theme.spacing(1),
  },
  contentTitle: {
    padding: theme.spacing(1),
    color: theme.palette.grey[700],
  },
  content: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: theme.palette.grey[700],
  },
}));

function Letter() {
  const classes = useStyle();
  return (
    <Box className={classes.letter}>
      <Paper variant="outlined">
        <Box display="flex" alignItems="center">
          <Box
            className={classes.nameContainer}
            display="flex"
            alignItems="center"
          >
            <Avatar className={classes.avatar}>F</Avatar>
            <Typography className={classes.name}>joh95s</Typography>
          </Box>
          <DottedMenu className={classes.dottedMenu} />
        </Box>
        <Paper className={classes.titleContainer} variant="outlined">
          <Typography className={classes.letterTitle}>
            This is letter Title...ssss
          </Typography>
        </Paper>
      </Paper>
    </Box>
  );
}

function Inbox({ className }) {
  const [state, handleClick] = useReducer((state) => !state, false);
  const classes = useStyle();
  return (
    <>
      <IconButton onClick={handleClick}>
        <BsFillInboxFill className={className} />
      </IconButton>
      <Dialog
        className={classes.root}
        open={state}
        onClose={handleClick}
        maxWidth="md"
      >
        <DialogTitle className={classes.title} disableTypography>
          <Typography variant="h5">Inbox</Typography>
          <IconButton className={classes.newLetter}>
            <RiMailAddFill />
          </IconButton>
        </DialogTitle>
        <DialogContent className={classes.highContainer}>
          <Grid container spacing={1}>
            <Grid item xs={5} className={classes.letterContainer}>
              <Letter />
              <Letter />
              <Letter />
              <Letter />
              <Letter />
            </Grid>
            <Grid item xs={7}>
              <Box display="flex" className={classes.mainContainer}>
                <Box
                  className={classes.main}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Box className={classes.head}>
                    <Paper
                      className={classes.contentTitleContainer}
                      variant="outlined"
                    >
                      <Typography className={classes.contentTitle}>
                        This is the title of this letter mad dude
                      </Typography>
                    </Paper>
                  </Box>
                  <Paper className={classes.content} variant="outlined">
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Typography>
                  </Paper>
                  <Box
                    className={classes.actionSection}
                    display="flex"
                    justifyContent="center"
                  >
                    <ButtonGroup>
                      <Button>Reply</Button>
                      <Button>share</Button>
                      <Button>Delete</Button>
                    </ButtonGroup>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Inbox;
