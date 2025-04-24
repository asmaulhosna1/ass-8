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
    date: new Date(app.date).toLocaleDateString()
  }));

  // Cancel appointment function
  const cancelAppointment = (id) => {
    const updatedAppointments = appointments.filter(a => a.id !== id);
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    toast.success('Appointment cancelled!');
  };

  return (
    <div className="container mx-auto ">
      

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
          <div className="bg-white p-4 rounded-lg shadow-md mb-8">
            <h2 className="text-lg font-semibold mb-4">Appointments Overview</h2>
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

          {/* Appointments List */}
          <div className="space-y-4">
            {appointments.map(appointment => (
              <div key={appointment.id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-bold">{appointment.doctorName}</h3>
                <p className="text-gray-600">{appointment.qualifications}</p>
                <p className="my-2">
                  <span className="font-medium">Fee:</span> {appointment.fee} Taka + VAT
                </p>
                <p className="text-sm text-gray-500">
                  {appointment.date} at {appointment.time}
                </p>
                <button
                  onClick={() => cancelAppointment(appointment.id)}
                  className="btn btn-error btn-sm mt-3"
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