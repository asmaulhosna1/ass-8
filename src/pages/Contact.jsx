import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };
    return (
        <div className='w-full bg-[#EFEFEF] bg mx-auto pb-28 text-center'>
            <h1 className='text-red-600 lg:text-4xl text-xl pt-28 '>404-Page Not Found</h1>
            <p className='mt-3 mb-3'>Oops! The page you're looking for doesn't exist</p>
            
            <button 
              onClick={handleGoHome}
              className="btn btn-primary"
            >
              ← Go Back Home
            </button>
        
        </div>
    );
};

export default Contact;