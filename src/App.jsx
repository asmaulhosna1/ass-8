import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import DoctorDetails from './pages/DoctorDetails';
import NoDoctorFound from './pages/NoDoctorFound';
import Bookings from './pages/Bookings';
import Blogs from './pages/Blogs';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RouteTransition from './components/RouteTransition';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <RouteTransition>
              <Home />
            </RouteTransition>
          } />
          <Route path="/doctors/:id" element={
            <RouteTransition>
              <DoctorDetails />
            </RouteTransition>
          } />
          <Route path="/no-doctor-found" element={
            <RouteTransition>
             <NoDoctorFound></NoDoctorFound>
            </RouteTransition>
          } />
          
          <Route path="/my-bookings" element={
            <RouteTransition>
              <Bookings />
            </RouteTransition>
          } />
          <Route path="/contact" element={
            <RouteTransition>
             <Contact></Contact>
            </RouteTransition>
          } />
          <Route path="/blogs" element={
            <RouteTransition>
              <Blogs />
            </RouteTransition>
          } />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
     );
   }

export default App;