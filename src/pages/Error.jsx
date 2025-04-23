import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md">
        <h1 className="text-5xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/" 
          className="btn btn-primary"
        >
          Go Back Home
        </Link>
        
        <div className="mt-8 text-gray-500">
          <p>asma5167437@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Error;