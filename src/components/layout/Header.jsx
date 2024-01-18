import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='container flex between item-center'>
      <a className='logo' href='#'>
        <h2>Logo</h2>
      </a>
      <nav className='flex'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
      </nav>
    </header>
  );
}
