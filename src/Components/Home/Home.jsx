import React, { useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../Searchbar/SearchBar';
import Navbar from '../Header/Navbar';
import ResearcherCard from '../Researcher/ResearcherCard';
import Researchers from '../Researcher/Researchers';
import Crowsels from './Crowsels';
import Profile from '../Researcher/Profile';

const Home = () => {
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

  const handlePopupContinue = () => {
    // Add your logic here for handling the popup continue button action
  };

  useEffect(() => {
    // Add any additional useEffect logic if needed
  }, []);

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
    </div>
  );
};

export default Home;