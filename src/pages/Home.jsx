
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

import DoctorCard from '../components/DoctorCard';
import SuccessCard from '../components/SuccessCard';
import LoadingSpinner from '../components/LoadingSpinner';
// import { doctors } from '../data/doctors';

const Home = () => {
  const allDoctors =[
    {
      id: 1,
      name: "Dr. Cameron Williamson",
     qualifications: "MBBS, MD - General Medicine, DNB",
      experience: "5+ Years Experience",
      specialty: "General Medicine",
      regNo: "BD 12415254",
      image: "/doctor1.jpg",
      available: true,
      availability: ["Sunday", "Monday", "Thursday"],
      hospital: "TMSS Medical College & Rafatullah Community Hospital, Bogura",
      fee: 273
    },
    {
     id: 2,
      name: "Dr. Rumana Kabir",
      education: "MBBS, MD - General Medicine, DNB",
      experience: "7+ Years Experience",
      specialty: "Internal Medicine",
      regNo: "BD 12345678",
      image: "/doctor2.jpg",
      available: true,
      availability: ["Monday", "Wednesday"],
      hospital: "Green Life Hospital, Dhaka",
      fee: 450
    },
    {
     id: 3,
      name: "Dr. Kabir Hossain",
      education: "MBBS, MD - Cardiology",
      experience: "1+0 Years Experience",
      specialty: "Cardiology",
      regNo: "BD 12987564",
      image: "/doctor3.jpg",
      available: true,
      availability: ["Tuesday", "Thursday"],
      hospital: "United Hospital, Dhaka",
      fee: 950
    },
    {
     id: 4,
      name: "Dr. Kumar Singh",
      education: "MBBS, MS - Orthopedics",
      experience: "8+ Years Experience",
      specialty: "Orthopedics",
      regNo: "BD 11122233",
      image: "/doctor4.jpg",
      available: true,
      availability: ["Saturday", "Monday"],
      hospital: "Apollo Hospital, Dhaka",
      fee: 850
    },
    {
     id: 5,
      name: "Dr. Samiya Sultana",
      education: "MBBS, MD - Pediatrics",
      experience: "6+ Years Experience",
      specialty: "Pediatrics",
      regNo: "BD 99887766",
      image: "/doctor5.jpg",
      available: true,
      availability: ["Sunday", "Tuesday"],
      hospital: "Shishu Hospital, Dhaka",
      fee: 500
    },
    {
     id: 6,
      name: "Dr. Jhanika Mahbub",
      education: "MBBS, DGO",
      experience: "9+ Years Experience",
      specialty: "Gynecology",
      regNo: "BD 11223344",
      image: "/doctor6.jpg",
      available: true,
      availability: ["Monday", "Thursday"],
      hospital: "Ibn Sina Hospital, Dhaka",
      fee: 750
    },
    {
     id: 7,
      name: "Dr. Tanvir Ahsan",
      education: "MBBS, FCPS - Neurology",
      experience: "1+2 Years Experience",
      specialty: "Neurology",
      regNo: "BD 55443322",
      image: "/doctor7.jpg",
      available: true,
      availability: ["Wednesday", "Friday"],
      hospital: "Square Hospital, Dhaka",
      fee: 1200
    },
    {
     id: 8,
      name: "Dr. Mahira Islam",
      education: "MBBS, MS - ENT",
      experience: "4+ Years Experience",
      specialty: "ENT",
      regNo: "BD 33445566",
      image: "/doctor8.jpg",
      available: true,
      availability: ["Tuesday", "Friday"],
      hospital: "Popular Diagnostic Center, Dhaka",
      fee: 600
    },
    {
     id: 9 ,
      name: "Dr. Hossain Rahman",
      education: "MBBS, MD - Dermatology",
      experience: "1+1 Years Experience",
      specialty: "Dermatology",
      regNo: "BD 77788899",
      image: "/doctor9.jpg",
      available: true,
      availability: ["Sunday", "Wednesday"],
      hospital: "Labaid Specialized Hospital, Dhaka",
      fee: 700
    },
    {
     id: 10,
      name: "Dr. Ayesha Karim",
      education: "MBBS, MS - Urology",
      experience: "6+ Years Experience",
      specialty: "Urology",
      regNo: "BD 22334455",
      image: "/doctor10.jpg",
      available: true,
      availability: ["Saturday", "Thursday"],
      hospital: "Medinova Medical Services, Dhaka",
      fee: 800
    },
    {
     id: 11,
      name: "Dr. Anisur Rahman",
      education: "MBBS, MS - Nephrology",
      experience: "9+ Years Experience",
      specialty: "Nephrology",
      regNo: "BD 44556677",
      image: "/doctor11.jpg",
      available: true,
      availability: ["Monday", "Friday"],
      hospital: "BIRDEM General Hospital, Dhaka",
      fee: 1000
    },
    {
     id: 12,
      name: "Dr. Fatema Noor",
      education: "MBBS, MD - Psychiatry",
      experience: "7+ Years Experience",
      specialty: "Psychiatry",
      regNo: "BD 55667788",
      image: "/doctor12.jpg",
      available: true,
      availability: ["Tuesday", "Saturday"],
      hospital: "National Institute of Mental Health, Dhaka",
      fee: 650
    }
  ]
  const [showAllDoctors, setShowAllDoctors] = useState(false);
  const doctorsToShow = showAllDoctors ? allDoctors : allDoctors.slice(0, 6);
  const [isLoading, setIsLoading] = useState(true);
  
  

  // Success metrics data
  const successData = [
    { title: "Total Doctors", value: 199, icon: "👨‍⚕️" },
    { title: "Total Reviews", value: 467, icon: "⭐" },
    { title: "Patients", value: 1900, icon: "👨‍👩‍👧‍👦" },
    { title: "Total Staff", value: 300, icon: "👩‍⚕️" }
  ];

  

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 mb-12 text-white text-center border-2 border-white shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Dependable Care, Backed by Trusted Professionals</h1>
        <p className="text-xl mb-6">
          Our platform connects you with verified, experienced doctors across various specialties – all at your convenience.
        </p>
        <div className="max-w-md mx-auto relative">
          <input 
            type="text" 
            placeholder="Search any doctor..." 
            className="w-full p-4 rounded-lg text-gray-800"
          />
          <button className="absolute right-2 top-2 bg-primary text-white px-4 py-2 rounded-md">
            Search Now
          </button>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-4">Our Best Doctors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctorsToShow.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button 
            onClick={() => setShowAllDoctors(!showAllDoctors)}
            className="btn btn-primary px-6 py-3"
          >
            {showAllDoctors ? 'Show Less' : `Show All (${allDoctors.length - 6} More)`}
          </button>
        </div>
      </section>

      {/* Success Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">We Provide Best Medical Services</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {successData.map((item, index) => (
            <SuccessCard key={index} item={item} />
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default Home;