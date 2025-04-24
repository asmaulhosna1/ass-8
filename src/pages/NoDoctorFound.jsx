import { Link, useNavigate } from 'react-router-dom';


import { useEffect } from 'react';

const NoDoctorFound = () => {
  const navigate = useNavigate();

  // Clear invalid URL from history
  useEffect(() => {
    window.history.replaceState(null, '', '/no-doctor-found');
  }, []);

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">No Doctor Found!</h1>
      <p className="mb-6">The doctor you're looking for doesn't exist.</p>
      
      <Link 
        to="/" 
        onClick={() => navigate('/doctors', { replace: true })}
        className="btn btn-primary"
      >
        View All Doctors
      </Link>
    </div>
  );
};

export default NoDoctorFound;