import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Discover from './Components/Discover/Discover';
import Faq from './Components/Faq/Faq';
import About from './Components/About/About';
import Researchers from './Components/Researcher/Researchers';
import Footer from './Components/Footer/Footer';
import PrivateRoute from './Components/Routes/Private';
import Register from './Components/Authentication/Regsiter';
import Login from './Components/Authentication/Login';
import ForgotPasssword from './Components/Authentication/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<PrivateRoute />}>
          {/* <Route path="user" element={<Dashboard />} /> */}
          {/* <Route path="user/orders" element={<Orders />} /> */}
          {/* <Route path="user/profile" element={<Profile />} /> */}
        </Route>

        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/researchers" element={<Researchers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
