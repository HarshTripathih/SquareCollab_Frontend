import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../Searchbar/SearchBar';
import Navbar from '../Header/Navbar';
import ResearcherCard from '../Researcher/ResearcherCard';
import Researchers from '../Researcher/Researchers';
import Crowsels from './Crowsels';
import Profile from '../Researcher/Profile';
import {
  FaUser,
  FaUserEdit,
  FaSearch,
  FaComments,
  FaLightbulb,
} from "react-icons/fa";


const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [role, setRole] = useState('');
  const [redirectPath, setRedirectPath] = useState('');
  const navigate = useNavigate();

  const featuress = [
    "Research Collaboration Tools",
    "Mentorship Programs",
    "Knowledge Sharing",
    "Project Management",
  ];

   const steps = [
     {
       icon: FaUser,
       title: "Register/Login",
       description: "Register/Login on the platform",
     },
     {
       icon: FaUserEdit,
       title: "Complete Your Profile",
       description: "Complete your profile",
     },
     {
       icon: FaSearch,
       title: "Find Supervisor/Scholar",
       description: "Find Supervisor/Scholar as per requirements",
     },
     {
       icon: FaComments,
       title: "Chat or Connect",
       description: "Chat or connect with them",
     },
     {
       icon: FaLightbulb,
       title: "Collaborate & Innovate",
       description: "Start collaborating and innovating",
     },
   ];

  const features = [
    {
      title: "Powerful search tool",
      description: "Easily find collaborative research projects.",
    },
    {
      title: "Stay connected",
      description: "Stay updated with researchers and projects.",
    },
    {
      title: "Advanced Analytics (Futuristic Plans)",
      description: "Gain insights into research trends and performance.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handlePopupContinue = () => {
    if (role === 'researcher') {
      setRedirectPath('/researcherprofile');
    } else if (role === 'scholar') {
      setRedirectPath('/scholarprofile');
    }
  };

  useEffect(() => {
    if (redirectPath) {
      navigate(redirectPath);
    }
  }, [redirectPath, navigate]);

  return (
    <div>
      <Navbar />
      <Crowsels />

      <div className="container mx-auto w-full h-auto mt-10 p-6 border-solid rounded-2xl bg-slate-50 shadow-lg">
        <div className="w-full h-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Research Connect
          </h1>
          <p className="text-lg mb-6 text-center px-4">
            Connect with your research. Collaborate effectively with researchers
            and get started! Research Connect has revolutionized our research
            process, increasing productivity by 45%.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-item p-4 bg-white rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 text-gray-900">
        {/* Hero Section */}
        <section className="bg-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Empower Your Research</h1>
          <p className="text-lg mb-4">
            Seamless collaboration between researchers and supervisors.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Join Now
          </button>
        </section>

        <section className="p-8">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuress.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
              >
                <h3 className="text-lg font-medium mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="p-8">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 text-center"
              >
                <step.icon className="text-indigo-600 text-4xl mb-4 mx-auto" />
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="leading-relaxed text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;