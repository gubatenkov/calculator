import React from 'react';
import { Paper } from '@material-ui/core';

const NavbarPrice = () => {
  return (
    <nav className='navbar'>
      <Paper className='navbar-paper' elevation={1}>
        <p className='navbar-paper__title'>Вартість робіт:</p>{' '}
        <p className='navbar-paper__price'>23,758 грн</p>
      </Paper>
    </nav>
  );
};

export default NavbarPrice;
