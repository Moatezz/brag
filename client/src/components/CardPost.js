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
const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(10),
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
      <Box className={classes.head}>
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
      <Box className={classes.bottom}>
        <IconButton></IconButton>
      </Box>
      <Box className={classes.comment}>
        <Avatar>U</Avatar>
        <TextField variant="outlined" helperText="Comment something..." />
      </Box>
    </Paper>
  );
}

export default CardPost;
