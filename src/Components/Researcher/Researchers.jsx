import React, { useEffect, useState } from 'react';
import axios from 'axios';
import _debounce from 'lodash.debounce';
import SearchBar from '../Searchbar/SearchBar';

const Researchers = () => {
  const [researchers, setResearchers] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/researchers/');
        setResearchers(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleSearch = _debounce((term) => {
    setSearchTerm(term);
  }, 500);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filter researchers based on the search term
  const filteredResearchers = researchers.filter((researcher) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    return (
      researcher.name.toLowerCase().includes(lowerCaseTerm) ||
      researcher.position.toLowerCase().includes(lowerCaseTerm) ||
      researcher.affiliation.toLowerCase().includes(lowerCaseTerm) ||
      researcher.education.some((edu) => edu.degree.toLowerCase().includes(lowerCaseTerm)) ||
      researcher.education.some((edu) => edu.institution.toLowerCase().includes(lowerCaseTerm)) ||
      researcher.publications.some((pub) => pub.title.toLowerCase().includes(lowerCaseTerm)) ||
      researcher.publications.some((pub) => pub.type.toLowerCase().includes(lowerCaseTerm)) ||
      researcher.researchProjects.some((project) => project.title.toLowerCase().includes(lowerCaseTerm)) ||
      researcher.researchProjects.some((project) => project.description.toLowerCase().includes(lowerCaseTerm))
    );
  });

  return (
    <div>
      <div className='container mx-auto w-full h-36 mt-40 border-solid rounded-2xl bg-slate-400'>
        <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 rounded-2xl text-center
       text-white px-8 font-semibold text-5xl ">
          Our Researchers
        </span>
        <SearchBar onSearch={handleSearch} />
      </div>
      

      <div className="researchers-container mt-20">
        {filteredResearchers.map((researcher) => (
          <div className="card" key={researcher.id}>
            <div className="card-body">
              <h5 className="card-title">{researcher.name}</h5>
              <p className="card-text">{researcher.position}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Affiliation: {researcher.affiliation}</li>
              <li className="list-group-item">
                <h6>Education</h6>
                {researcher.education &&
                  researcher.education.map((edu) => (
                    <div key={edu.id}>
                      <p>Degree: {edu.degree}</p>
                      <p>Institution: {edu.institution}</p>
                      <p>Graduation Year: {edu.graduationYear}</p>
                    </div>
                  ))}
              </li>
              <li className="list-group-item">
                <h6>Publications</h6>
                {researcher.publications &&
                  researcher.publications.map((pub) => (
                    <div key={pub.id}>
                      <p>Title: {pub.title}</p>
                      <p>Type: {pub.type}</p>
                      <p>Year: {pub.year}</p>
                    </div>
                  ))}
              </li>
              <li className="list-group-item">
                <h6>Research Projects</h6>
                {researcher.researchProjects &&
                  researcher.researchProjects.map((project) => (
                    <div key={project.id}>
                      <p>Title: {project.title}</p>
                      <p>Description: {project.description}</p>
                      <p>Start Date: {project.startDate}</p>
                      <p>End Date: {project.endDate || 'Ongoing'}</p>
                    </div>
                  ))}
              </li>
              <li className="list-group-item">
                <h6>Contact</h6>
                <p>Email: {researcher.contact && researcher.contact.email}</p>
                <p>Phone: {researcher.contact && researcher.contact.phone}</p>
                <p>Address: {researcher.contact && researcher.contact.address}</p>
              </li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .researchers-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .card {
          flex: 1 1 300px;
          /* Adjust the card width and flex properties as needed */
        }
      `}</style>
    </div>
  );
};

export default Researchers;