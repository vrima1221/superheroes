import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/create">Add your hero</Link>
    </header>
  );
};
