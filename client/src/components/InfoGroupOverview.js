import {
  Avatar,
  Box,
  Button,
  makeStyles,
  Typography,
  Paper,
} from '@material-ui/core';
import React from 'react';
import DottedMenu from './DottedMenu';
const useStyle = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
  },
  headSection: {},
  //children
  avatar: {
    height: theme.spacing(15),
    width: theme.spacing(15),
    margin: theme.spacing(3),
  },
  nameSection: {
    flexGrow: 1,
  },
  //children
  name: {
    fontSize: theme.spacing(4),
    fontFamily: 'Cairo',
    color: theme.palette.grey[700],
  },
  statusButton: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(0, 4),
  },
  //
  ownedBy: {
    width: 'min-content ',
  },
  //////////////
  descriptionSection: {
    padding: theme.spacing(0, 5),
    marginBottom: theme.spacing(8),
    fontFamily: 'Cairo',
  },
  //children
  contentContainer: {
    padding: theme.spacing(1),
  },
  content: {
    color: theme.palette.grey[700],
  },
  /////////////
  membersSection: {
    padding: theme.spacing(0, 5),
  },
  //children
  membersContainer: { padding: theme.spacing(1) },
  member: {},
  /////////////
  //shared descriptionSection & memberSection
  marker: {
    alignSelf: 'flex-start',
    color: theme.palette.grey[500],
    fontFamily: 'Cairo',
  },
}));
function InfoGroupOverview() {
  const classes = useStyle();
  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box
        className={classes.headSection}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Avatar className={classes.avatar} variant="rounded">
          G
        </Avatar>
        <Box
          className={classes.nameSection}
          display="flex"
          flexDirection="column"
        >
          <Typography className={classes.name}>Django</Typography>
          <Box>
            <Button
              className={classes.statusButton}
              variant="contained"
              size="large"
            >
              JOIN
            </Button>
          </Box>
        </Box>
        <DottedMenu />
      </Box>
      <Box
        className={classes.descriptionSection}
        display="flex"
        flexDirection="column"
        alignItems="center
        "
      >
        <Typography className={classes.marker}>Description</Typography>
        <Paper className={classes.contentContainer} variant="outlined">
          <Typography className={classes.content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </Typography>
        </Paper>
      </Box>
      <Box
        className={classes.membersSection}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography className={classes.marker}>Members</Typography>
        <Paper className={classes.membersContainer} variant="outlined">
          <Box display="flex" flexWrap="wrap">
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
            <Avatar className={classes.member}>M</Avatar>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default InfoGroupOverview;
