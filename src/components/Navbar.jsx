import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';

const Navbar = () => {
     const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">MyApp</Link>
        <div className="space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;