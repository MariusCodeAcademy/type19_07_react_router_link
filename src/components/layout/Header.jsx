import React from 'react';

export default function Header() {
  return (
    <header className='container flex between item-center'>
      <a className='logo' href='#'>
        <h2>Logo</h2>
      </a>
      <nav className='flex'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </nav>
    </header>
  );
}
