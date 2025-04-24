import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logoImg from '../assets/C001-assets/logo.png'

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <img src={logoImg} alt="DooTalk Logo" className="h-10" />
            <span className="text-xl font-bold">DooTalk</span>
          </Link>
          
          <div className="flex space-x-6 mb-6">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <Link to="/bookings" className="hover:text-primary transition">Bookings</Link>
            <Link to="/blogs" className="hover:text-primary transition">Blogs</Link>
            <Link to="/contact" className="hover:text-primary transition">Contact</Link>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;