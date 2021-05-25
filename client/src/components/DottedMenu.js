import React, { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core';

function DottedMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleClick}>
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
