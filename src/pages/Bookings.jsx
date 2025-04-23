
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { toast } from 'react-toastify';

const Bookings = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  // Load appointments from localStorage
  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    setAppointments(savedAppointments);
  }, []);

  // Cancel appointment function
  const handleCancelAppointment = (id) => {
    const updatedAppointments = appointments.filter(app => app.id !== id);
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    toast.success('Appointment cancelled successfully!');
  };

  // Prepare chart data
  const chartData = appointments.map(appointment => ({
    name: appointment.doctorName.split(' ')[1], // Last name
    fee: appointment.fee,
    date: new Date(appointment.date).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    })
  }));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Appointments</h1>
      
      {appointments.length === 0 ? (
        <div className="text-center bg-white p-8 rounded-lg shadow">
          <p className="text-gray-500 mb-6">
            You haven't booked any appointments yet.
          </p>
          <p className="mb-8">
            Our platform connects you with verified, experienced doctors across various specialties.
          </p>
          <button
            onClick={() => navigate('/')}
            className="btn btn-primary px-6 py-3"
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
                <BarChart
                  data={chartData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  barSize={30}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="name"
                    tick={{ fontSize: 12 }}
                    axisLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    axisLine={false}
                    tickFormatter={(value) => `৳${value}`}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value} Taka`, 'Fee']}
                    contentStyle={{
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend />
                  <Bar 
                    dataKey="fee" 
                    fill="#4f46e5"
                    name="Consultation Fee"
                    radius={[4, 4, 0, 0]}
                  />
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
                <div className="my-3">
                  <p className="font-medium">Appointment Fee: {appointment.fee} Taka + VAT</p>
                  <p className="text-sm text-gray-500">
                    {appointment.date} at {appointment.time}
                  </p>
                </div>
                <button
                  onClick={() => handleCancelAppointment(appointment.id)}
                  className="btn btn-error btn-sm"
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