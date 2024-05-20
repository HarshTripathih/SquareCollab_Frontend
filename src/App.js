import './App.css';
import { Routes, Route, Navigate, useSearchParams } from 'react-router-dom';
import { useAuth } from './context/Auth';
import { useEffect } from 'react'; // Import useEffect
import Navbar from './Components/Header/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Authentication/Login';
import ForgotPassword from './Components/Authentication/ForgotPassword';
import Contact from './Components/Contact/Contact';
import Discover from './Components/Discover/Discover';
import About from './Components/About/About';
import Register from './Components/Authentication/Regsiter';
import Faq from './Components/Faq/Faq';
import Researchers from './Components/Researcher/Researchers';
import Profile from './Components/Researcher/Profile';
import ScholarProfile from './Components/Scholar/ScholarProfile';



// Protected Route Component
const PrivateRoute = ({ element }) => {
  const { auth } = useAuth();

  if (!auth?.token) {
    // User is not logged in, redirect to login
    return <Navigate to="/login" />;
  }

  // User is logged in, allow access to the route
  return element;
};

const App = () => {
  const { auth } = useAuth();
  const [searchParams] = useSearchParams();
  const redirectPath = searchParams.get('redirect');
  const navigationPath = redirectPath || '/'; // Use redirectPath or a default path

  useEffect(() => {
    if (redirectPath) {
      // Programmatically navigate to the desired route
      window.history.replaceState({}, '', window.location.pathname); // Remove the search params from the URL
    }
  }, [redirectPath]);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {!auth?.token && (
          <Route path="/register" element={<Register />} />
        )}
        {!auth?.token && (
          <Route path="/login" element={<Login />} />
        )}
        {!auth?.token && (
          <Route
            path="/*"
            element={<Navigate to="/login" replace />}
          />
        )}
        {auth?.token && (
          <Route
            path="/register"
            element={<Navigate to="/" replace />}
          />
        )}
        {auth?.token && (
          <Route
            path="/login"
            element={<Navigate to="/" replace />}
          />
        )}
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/discover"
          element={<Discover />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/faq"
          element={<Faq />}
        />
        <Route
          path="/researchers"
          element={<Researchers />}
        />
        <Route 
          path="/researcherprofile" 
          element={<Profile/>} />
        <Route 
          path="/scholarprofile" 
          element={<ScholarProfile/>} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute/>
          }
        />
        {redirectPath && <Navigate to={navigationPath} replace />}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;