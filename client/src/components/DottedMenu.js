import React, { useState } from 'react';
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
function DottedMenu() {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton className={classes.dots} onClick={handleClick}>
        <BiDotsVerticalRounded />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <Typography> Hi</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default DottedMenu;
