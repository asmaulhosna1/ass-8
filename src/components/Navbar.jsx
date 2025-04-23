import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/C001-assets/logo.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? '#4f46e5' : '#374151',
    fontWeight: isActive ? '600' : '500',
    borderBottom: isActive ? '2px solid #4f46e5' : 'none',
    paddingBottom: '4px'
  });

  return (
    <nav className="navbar bg-[#EFEFEF] w-full mx-auto py-4 px-6 sticky top-0 z-50 mt-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className='pl-11'>
        <NavLink 
          to="/" 
          className="flex items-center space-x-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img src={logoImg} alt="DooTalk Logo" className="h-10" />
          <span className="text-xl font-bold text-primary">DooTalk</span>
        </NavLink>
        </div>
        
        
       <div className=''>
       <div className="hidden md:flex space-x-8 items-center">
          <NavLink 
            to="/" 
            style={navLinkStyle}
            className="py-2 px-1 transition"
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/my-bookings" 
            style={navLinkStyle}
            className="py-2 px-1 transition"
          >
            My Bookings
          </NavLink>
          <NavLink 
            to="/blogs" 
            style={navLinkStyle}
            className="py-2 px-1 transition"
          >
            Blogs
          </NavLink>
          <NavLink 
            to="/contact" 
            style={navLinkStyle}
            className="py-2 px-1 transition"
          >
            Contact
          </NavLink>
       </div>
          
          </div>
          <div className='pr-11'>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition ml-4">
           Emergency
          </button>
        </div>
        
        {/* Mobile Menu Button with SVG Icons */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 space-y-4 border-t">
          <NavLink 
            to="/" 
            style={navLinkStyle}
            className="block py-2 px-1 transition"
            onClick={toggleMobileMenu}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/my-bookings" 
            style={navLinkStyle}
            className="block py-2 px-1 transition"
            onClick={toggleMobileMenu}
          >
            My Bookings
          </NavLink>
          <NavLink 
            to="/blogs" 
            style={navLinkStyle}
            className="block py-2 px-1 transition"
            onClick={toggleMobileMenu}
          >
            Blogs
          </NavLink>
          <NavLink 
            to="/contact" 
            style={navLinkStyle}
            className="block py-2 px-1 transition"
            onClick={toggleMobileMenu}
          >
            Contact
          </NavLink>
          <button className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition mt-4">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;