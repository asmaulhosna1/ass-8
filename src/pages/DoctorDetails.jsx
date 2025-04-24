import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doctors } from '../data/doctors';
import { useEffect } from 'react';
import doctor1 from '../assets/C001-assets/doctor1.png';
import doctor2 from '../assets/C001-assets/docto2.jpg';
import doctor3 from '../assets/C001-assets/doctor3.jpg';
import doctor4 from '../assets/C001-assets/doctor4.jpg';
import doctor5 from '../assets/C001-assets/doctor5.png';
import doctor6 from '../assets/C001-assets/doctor6.jpg';
import doctor7 from '../assets/C001-assets/doctor7.jpg';
import doctor8 from '../assets/C001-assets/doctor8.jpg';
import doctor9 from '../assets/C001-assets/doctor9.jpg';
import doctor10 from '../assets/C001-assets/doctor10.jpg';
import doctor11 from '../assets/C001-assets/doctor11.jpg';
import doctor12 from '../assets/C001-assets/doctor12.jpg';

const doctorImages ={
  1:doctor1,
  2:doctor2,
  3:doctor3,
  4:doctor4,
  5:doctor5,
  6:doctor6,
  7:doctor7,
  8:doctor8,
  9:doctor9,
  10:doctor10,
  11:doctor11,
  12:doctor12,
}


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
    <main className="flex-grow p-4 md:p-8 mx-auto w-full bg-[#EFEFEF]">
        {/* Doctor Profile Header */}
        <div className="bg-white w-10/12 mx-auto rounded-lg  p-6 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">Doctor's Profile Details</h1>
          <p className="text-gray-600 ">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
          </p>
        </div>

        {/* Doctor Information Section */}
        <div className="bg-white w-10/12 mx-auto rounded-lg shadow-md p-6 mb-6 flex space-x-6">
          <div className=''>
            <img className='w-64' src={doctorImages[doctor.id]}  alt="" />
          </div>
         <div>
         <h2 className="text-xl md:text-2xl font-bold mb-1">{doctor.name}</h2>
          <p className="text-gray-700 mb-2">{doctor.education}</p>
          
            <p className="font-semibold text-gray-700 mb-2">Working at</p>
            <p className="font-bold">{doctor.hospital}</p>
            <p className='border border-gray-200 border-dashed mt-2 mb-2'></p>                
            <span className="font-medium text-gray-700">Reg No: {doctor.regNo}</span>
            <p className='border border-gray-200 border-dashed mt-2 mb-2'></p>
       

        {/* Availability Section */}
        
          <div className="overflow-x-auto">
            <table className=" w-full ">
              <thead  className="">
                <tr>
                  <th className="text-start">Availability</th>
                  {doctor.availability.map(day => (
                    <th key={day}   className="bg-yellow-50 text-yellow-700 border-yellow-400 text-sm px-4 py-1 rounded-full text-center ">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody className=''>
                <tr >
                  <td className="font-semibold ">Consultation Fee</td>
                  <td colSpan={doctor.availability.length}>
                    <span className='text-blue-600 font-medium space-x-1 pl-1'>Taka : {doctor.fee}</span> (incl. VAT) <span className='text-blue-600'>Per consultation</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
         </div>
          </div>

        {/* Appointment Section */}
        <div className="bg-white w-10/12 mx-auto rounded-lg  p-6">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-center">Book an Appointment</h3>
          <p className='border border-gray-200 border-dashed mt-2 mb-2'></p>
          <div className='flex justify-between'>
            <p className='font-bold'>Availability</p>
            <p className="border border-green-500 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-2">Doctor Available Today</p>
          </div>
          <p className='border border-gray-200 border-dashed mt-2 mb-2'></p>
          
      <p className="text-yellow-700 bg-yellow-50 border-yellow-400 text-sm rounded-full mb-5 mt-3"> 
         Due to high patient volume, we are currently accepting appointments for today 
           only. We appreciate your understanding and cooperation.
           </p> 
                      
          <button 
            onClick={handleBookAppointment}
            className="btn btn-primary w-full rounded-full"
          >
            Book Appointment Now
          </button>

          
        </div>
      </main>
  );
};

export default DoctorDetails;