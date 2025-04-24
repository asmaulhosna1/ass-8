import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };
    return (
        <div>
            <h1>404-Page Not Found</h1>
            <p></p>
            <div className="flex justify-between items-center pt-4">
            <button 
              onClick={handleGoHome}
              className="btn btn-ghost"
            >
              ← Go Home
            </button>
        </div>
        </div>
    );
};

export default Contact;