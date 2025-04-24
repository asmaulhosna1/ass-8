const AppointmentCard = ({ appointment, onCancel }) => {
    return (
      <div className="bg-[#EFEFEF]  rounded-xl p-6 hover:shadow-lg transition">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800">{appointment.doctorName}</h3>
            <p className="text-gray-600">{appointment.qualifications}</p>
            <p className="text-gray-500 text-sm">{appointment.specialty}</p>
          </div>
          
          <div className="flex flex-col md:items-end">
            <p className="text-2xl font-bold text-primary">৳{appointment.fee}</p>
            <p className="text-gray-500 text-sm mb-2">
              Booked on: {appointment.date} at {appointment.time}
            </p>
            <button 
              onClick={onCancel}
              className="btn btn-error btn-sm text-white"
            >
              Cancel Appointment
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default AppointmentCard;