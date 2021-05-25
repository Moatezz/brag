import React from 'react';

function Logo(props) {
  if (props.variant === 'big')
    return (
      <>
        <img src="/logo.svg" alt="logo" height="300px" width="300px" />
      </>
    );
  if (props.variant === 'min')
    return (
      <>
        <img src="/logo-min.svg" alt="logo-min" height="100px" width="100px" />
      </>
    );
}

export default Logo;
