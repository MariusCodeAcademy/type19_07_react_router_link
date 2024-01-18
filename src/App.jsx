import { useState } from 'react';
import './styles/App.css';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className='App container'>
      <h1>Hello, world!</h1>
      <nav className='flex'>
        <a onClick={() => setCurrentPage(1)} href='#'>
          Home
        </a>
        <a onClick={() => setCurrentPage(2)} href='#'>
          About
        </a>
        <a onClick={() => setCurrentPage(3)} href='#'>
          Contact
        </a>
      </nav>
      <hr />

      {currentPage === 1 && <h2>Home</h2>}
      {currentPage === 2 && <AboutPage />}
      {currentPage === 3 && <h2>Contact Us</h2>}
    </div>
  );
}
