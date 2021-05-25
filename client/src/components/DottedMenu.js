import React, { useState } from 'react';
import { render } from 'react-dom';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { MdReportProblem } from 'react-icons/md';
import { IoExitOutline } from 'react-icons/io5';
import {
  Box,
  Button,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  dots: {
    height: 'fit-content',
    width: 'fit-content',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));
export function Description() {
  return (
    <Typography>
      dhashdiaendioatnd asrit nairnti rss sssf ss earnst aitnsi etn isetn asrit
      nairnti earnst aitnsi etn isetn
    </Typography>
  );
}
function Action() {
  const classes = useStyle();
  return (
    <Box display="flex" flexDirection="column">
      <Button
        className={classes.button}
        variant="outlined"
        color="secondary"
        startIcon={<MdReportProblem />}
      >
        Report
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        startIcon={<IoExitOutline />}
      >
        Leave
      </Button>
    </Box>
  );
}
function DottedMenu() {
  const classes = useStyle();
  const [state, setState] = useState(true);
  const handleClick = () => {
    if (state) {
      render(<Action />, document.getElementById('cardGroupDescriptionArea'));
    } else {
      render(
        <Description />,
        document.getElementById('cardGroupDescriptionArea')
      );
    }
    setState(!state);
  };
  return (
    <>
      <IconButton className={classes.dots} onClick={handleClick}>
        <BiDotsVerticalRounded />
      </IconButton>
    </>
  );
}

export default DottedMenu;
