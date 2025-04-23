import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img 
        src={doctor.image} 
        alt={doctor.name} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">
            Available
          </span>
          <span className="text-gray-500 text-sm">{doctor.experience} Experience</span>
        </div>
        
        <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{doctor.qualifications}</p>
        <p className="text-gray-500 text-xs mb-4">Reg No: {doctor.regNo}</p>
        
        <Link 
          to={`/doctors/${doctor.id}`}
          className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
        >
          View Details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    education: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    regNo: PropTypes.string.isRequired,
    available: PropTypes.bool
  }).isRequired
};

export default DoctorCard;