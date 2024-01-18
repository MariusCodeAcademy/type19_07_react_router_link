import './styles/App.css';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <div className='App container'>
      <nav className='flex'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </nav>
      <hr />
    </div>
  );
}
