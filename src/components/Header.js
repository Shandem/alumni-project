import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>I hope you like Crafts</h1>
      <div className="links">
        <ul>
          <li>  <Link to={'/'}>Home</Link></li>
          <li>  <Link to={'/gaby'}>Gaby's</Link></li>
          <li> <Link to={'/lisa'}>Lisa's</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;