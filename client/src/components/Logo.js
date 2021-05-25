import React from 'react';

function Logo({ variant, specs }) {
  if (variant === 'big')
    return (
      <>
        <img src="/logo.svg" alt="logo" height="300px" width="300px" />
      </>
    );
  if (variant === 'min')
    return (
      <>
        <img src="/logo-min.svg" alt="logo-min" height={specs} width={specs} />
      </>
    );
}

export default Logo;
