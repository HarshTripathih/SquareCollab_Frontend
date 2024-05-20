import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../Searchbar/SearchBar';
import Navbar from '../Header/Navbar';
import ResearcherCard from '../Researcher/ResearcherCard';
import Researchers from '../Researcher/Researchers';
import Crowsels from './Crowsels';
import Profile from '../Researcher/Profile';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [role, setRole] = useState('');
  const [redirectPath, setRedirectPath] = useState('');
  const navigate = useNavigate();

  const features = [
    {
      title: 'Powerful search tool',
      description: 'Easily find collaborative research projects.',
    },
    {
      title: 'Stay connected',
      description: 'Stay updated with researchers and projects.',
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
      <Researchers />

      <div className='container mx-auto w-full h-96 mt-10 border-solid rounded-2xl bg-slate-50'>
        <div className="w-full h-11">
          <h1 className="title">Research Connect</h1>
          <p className="description">
            Connect with your research. Collaborate effectively with researchers
            and get started! Research Connect has revolutionized our research
            process, increasing productivity by 45%.
          </p>
          <div className="features">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Choose your role</h5>
              </div>
              <div className="modal-body">
                <label>
                  Researcher
                  <input
                    type="radio"
                    name="role"
                    value="researcher"
                    onChange={(e) => setRole(e.target.value)}
                  />
                </label>
                <label>
                  Scholar
                  <input
                    type="radio"
                    name="role"
                    value="scholar"
                    onChange={(e) => setRole(e.target.value)}
                  />
                </label>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePopupContinue}
                  disabled={!role}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;