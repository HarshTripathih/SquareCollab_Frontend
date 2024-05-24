import React, { useEffect, useState } from "react";
import axios from "axios";
import _debounce from "lodash.debounce";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../Images/avatar2.webp";



const Researchers = () => {
  const [researchers, setResearchers] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/api/v1/researchers/"
        );
        setResearchers(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const searchResearchers = _debounce(async (keyword) => {
    try {
      const response = await axios.get(
        `/api/v1/search/${keyword}`
      );
      setResearchers(response.data);
    } catch (error) {
      setError(error.message);
    }
  }, 500);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    searchResearchers(value);
  };

  const filteredResearchers = researchers.filter((researcher) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    return (
      researcher.name.toLowerCase().includes(lowerCaseTerm) ||
      researcher.affiliation.toLowerCase().includes(lowerCaseTerm)
    );
  });

  return (
    <div>
      <form>
        <input
          className="mt-3 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 text-left justify-content-around">
        {filteredResearchers.map((researcher) => (
          <div className="bg-white rounded-lg shadow-lg" key={researcher.id}>
            <img
              src={img1}
              alt={researcher.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="font-semibold text-lg mb-2">
                Name: {researcher.name}
              </h5>
              <p className="text-sm mb-2">
                <b>Affiliation:</b> {researcher.affiliation}
              </p>
              <p className="text-sm mb-2">
                <b>Position:</b>
                {researcher.position}
              </p>
              <div className="mb-4">
                <h6 className="font-semibold">Education:</h6>
                {researcher.education &&
                  researcher.education.map((edu) => (
                    <div key={edu.id}>
                      <p>Degree: {edu.degree}</p>
                      <p>Institution: {edu.institution}</p>
                      <p>Graduation Year: {edu.graduationYear}</p>
                    </div>
                  ))}
              </div>
              <div className="flex justify-between">
                <Link to="/chatting">
                  <button className="btn btn-primary chat">Chat</button>
                </Link>
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate(`/researchers/${researcher.id}`)}
                >
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Researchers;
