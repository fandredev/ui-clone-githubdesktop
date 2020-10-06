import React from 'react';
import './styles.scss';
import logo from '../../assets/images/icon-github.svg';

const Header: React.FC = () => {
  return (
    <header>
      <img src={logo} alt="Logotipo github desktop" />
      <ol>
        <li>Overview</li>
        <li>Release Notes</li>
        <li>Help</li>
      </ol>
    </header>
  );
};

export default Header;
