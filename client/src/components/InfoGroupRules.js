import { Box, Divider, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 0),
  },
  caution: {
    marginLeft: theme.spacing(2),
    color: theme.palette.grey[500],
    fontFamily: 'Cairo',
    fontSize: theme.spacing(1.5),
  },
  rulesContainer: {
    margin: theme.spacing(0, 5),
  },
  //children
  divider: {
    margin: theme.spacing(2, 0),
  },
  rule: {
    color: theme.palette.grey[700],
  },
  ////////////////
}));
function InfoGroupRules() {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Typography className={classes.caution}>
        *Be sure to follow the rules or you'll be kicked
      </Typography>
      <Box className={classes.rulesContainer}>
        <Divider className={classes.divider} />
        <Typography className={classes.rule}>
          This are some new rules to day
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.rule}>
          This are some new rules to day This are some new rules to day
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.rule}>
          This are some new rules to day
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.rule}>
          This are some new rules to day
        </Typography>{' '}
        <Divider className={classes.divider} />
        <Typography className={classes.rule}>
          This is a big fat rules so you need to do anything but this thig do
          not do it untill i tell you to do it
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.rule}>
          This are some new rules to day
        </Typography>
        <Divider className={classes.divider} />
      </Box>
    </Box>
  );
}

export default InfoGroupRules;
