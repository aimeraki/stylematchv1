import React from 'react';
import './Header.scss';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" className='logoimg' />
    </header>
  );
};

export default Header;
