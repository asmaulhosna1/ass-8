import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Bookings = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  
  // Load appointments from localStorage
  useEffect(() => {
    const loadAppointments = () => {
      try {
        const savedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
        setAppointments(savedAppointments);
        
        // Debug log
        console.log('Loaded appointments:', savedAppointments);
      } catch (error) {
        toast.error('Failed to load appointments');
        console.error('Error loading appointments:', error);
      }
    };

    loadAppointments();
  }, []);

  // Prepare chart data
  const chartData = appointments.map(app => ({
    name: app.doctorName.split(' ')[1] || app.doctorName, // Use last name or full name
    fee: app.fee,
    
   education:app.education,
  }));

  // Cancel appointment function
  const cancelAppointment = (id) => {
    const updatedAppointments = appointments.filter(a => a.id !== id);
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    toast.success('Appointment cancelled!');
  };

  return (
    <div className="container mx-auto bg-[#EFEFEF]">
      

      {appointments.length === 0 ? (
        <div className="text-center bg-[#EFEFEF]">
          
          <h1 className="lg:text-4xl text-2xl font-bold pt-7">
            You haven't booked any appointments yet.
          </h1>
          <p className="text-gray-500 mb-4 mt-5">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
          <button
            onClick={() => navigate('/')}
            className="btn btn-primary md:mb-20 mb:10 lg:mb-32"
          >
            Book an Appointment
          </button>
        </div>
      ) : (
        <>
          {/* Appointments Chart */}
          <div className="bg-white w-11/12 mx-auto p-4 rounded-lg  mb-8">
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="fee" fill="#4f46e5" name="Fee (৳)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className='text-center'>
            <h1 className=' font-bold text-xl lg:text-3xl'>My Today Appointment</h1>
            <p className="text-gray-500 mb-4 mt-5">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
          </div>

          {/* Appointments List */}
          <div className="space-y-4 w-11/12 mx-auto pb-8 ">
            {appointments.map(appointment => (
              <div key={appointment.id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-bold">{appointment.doctorName}</h3>
                
                <div className='flex justify-between mb-2'>
                <p className="text-gray-600">{appointment.specialty}</p>
                
                <p >
          <span className="font-medium">Appointment Fee:</span> {appointment.fee} Taka 
            + VAT
                </p>
                </div>
                <p className='border border-gray-200 border-dashed mt-2 mb-2'></p>
                <button
                  onClick={() => cancelAppointment(appointment.id)}
                  className="border p-1 rounded-full text-red-500 border-red-700 w-full"
                >
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Bookings;