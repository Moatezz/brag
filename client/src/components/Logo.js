import React from 'react';

function Logo(props) {
  if (props.variant === 'big')
    return (
      <>
        <img src="/logo.svg" alt="logo" />
      </>
    );
  if (props.variant === 'min')
    return (
      <>
        <img src="/logo-min.svg" alt="logo-min" />
      </>
    );
}

export default Logo;
