import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doctors } from '../data/doctors';
import { useEffect } from 'react';

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find(d => d.id === parseInt(id));

  useEffect(()=>{
    if (!doctor) {
      navigate('/no-doctor-found',{replace :true});
          }
  },[doctor,navigate]);
  
   
   
  

  const handleBookAppointment = () => {
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    
    // Check for existing appointment
    if (appointments.some(app => app.doctorId === doctor.id)) {
      toast.warning('You already have an appointment with this doctor!');
      return;
    }

    const newAppointment = {
      id: Date.now(),
      doctorId: doctor.id,
      doctorName: doctor.name,
      qualifications: doctor.qualifications,
      specialty: doctor.specialty,
      fee: doctor.fee,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    localStorage.setItem('appointments', JSON.stringify([...appointments, newAppointment]));
    toast.success(`Appointment booked with ${doctor.name}!`);
    setTimeout(() => navigate('/my-bookings'), 1000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{doctor.name}</h1>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="font-semibold">{doctor.qualifications}</p>
        <p className="text-gray-600 mb-2">{doctor.specialty}</p>
        <p className="font-bold">Appointment Fee: {doctor.fee} Taka + VAT</p>
      </div>
      
      <button
        onClick={handleBookAppointment}
        className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorDetails;