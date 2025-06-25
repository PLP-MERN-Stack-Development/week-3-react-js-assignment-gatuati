import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;