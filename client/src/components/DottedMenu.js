import React, { useState } from 'react';
import { render } from 'react-dom';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import {
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';

const useStyle = makeStyles({
  dots: {
    height: 'fit-content',
    width: 'fit-content',
  },
});
function Act() {
  const classes = useStyle();
  return <Typography className={classes.description}>hissssss</Typography>;
}
function Action() {
  const classes = useStyle();
  return <Typography className={classes.description}>hi</Typography>;
}
function DottedMenu() {
  const classes = useStyle();
  const [state, setState] = useState(true);
  const handleClick = () => {
    if (state) {
      render(<Action />, document.getElementById('cardGroupDescriptionArea'));
    } else {
      render(<Act />, document.getElementById('cardGroupDescriptionArea'));
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
