import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register';
import Doctors from "./pages/Doctors";
import Gallery from "./pages/Gallery";
import BookAppointment from "./pages/BookAppointment";
import Profile from './pages/Profile';
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminDoctors from "./pages/admin/AdminDoctors";
import Appointments from "./pages/admin/Appointments";
import Contacts from "./pages/admin/Contacts";
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>}/>
    <Route path="/doctors" element={<Doctors />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/book-appointment/:doctorId" element={<BookAppointment />} />
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/admin" element={<AdminLogin/>}/>
<Route path="/admin/dashboard" element={<AdminDashboard/>}/>
<Route path="/admin/doctors" element={<AdminDoctors/>}/>
<Route path="/admin/appointments" element={<Appointments/>}/>
<Route path="/admin/contact" element={<Contacts/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
