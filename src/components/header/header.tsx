import React from 'react';
import './header.scss';

export const Header = () => {
  return (
    <div className="header">
      <nav className="header__navigation-bar">
        <a href="#" className="header__navigation-bar-route">Home</a>
        <a href="#" className="header__navigation-bar-route">Feed</a>
        <a href="#" className="header__navigation-bar-route">Market</a>
      </nav>
    </div>
  );
};

export default Header;