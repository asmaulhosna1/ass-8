import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../assets/C001-assets/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logoImg} alt="DooTalk Logo" className="h-10" />
          <span className="text-xl font-bold text-primary">DooTalk</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
          <Link to="/bookings" className="text-gray-700 hover:text-primary font-medium">Bookings</Link>
          <Link to="/blogs" className="text-gray-700 hover:text-primary font-medium">Blogs</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
        </div>
        
        <button className="btn btn-primary">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;