import React from 'react';
import './Home.css';
import SearchBar from '../Searchbar/SearchBar';
import Navbar from '../Header/Navbar';



const Home = () => {
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

  return (
    <div>

      <Navbar/>

      <div className='container mx-auto w-full h-96 mt-28 border-solid rounded-2xl bg-slate-400'>
        <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 rounded-2xl text-center
       text-white px-8 font-semibold text-5xl ">
          My Research
        </span>
        <SearchBar />
        
      </div>



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