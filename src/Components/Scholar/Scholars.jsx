import React, { useEffect, useState } from "react";
import axios from "axios";
import _debounce from "lodash.debounce";

const Scholars = () => {
  const [scholars, setScholars] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/api/v1/scholars/"
        );
        setScholars(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const searchScholars = _debounce(async (keyword) => {
    try {
      const response = await axios.get(
        `/api/v1/search/${keyword}`
      );
      setScholars(response.data);
    } catch (error) {
      setError(error.message);
    }
  }, 500);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    searchScholars(value);
  };

  const filteredScholars = scholars.filter((scholar) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    return (
      scholar.name.toLowerCase().includes(lowerCaseTerm) ||
      scholar.affiliation.toLowerCase().includes(lowerCaseTerm)
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 text-left">
        {filteredScholars.map((scholar) => (
          <div className="bg-white rounded-lg shadow-lg" key={scholar.id}>
            <img
              src={scholar.photo}
              alt={scholar.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="font-semibold text-lg mb-2">
                Name: {scholar.name}
              </h5>
              <p className="text-sm mb-2">
                <b>Affiliation:</b> {scholar.affiliation}
              </p>
              <p className="text-sm mb-2">
                <b>Title:</b> {scholar.title}
              </p>
              <div className="mb-4">
                <h6 className="font-semibold">Education:</h6>
                {scholar.education &&
                  scholar.education.map((edu, index) => (
                    <div key={index}>
                      <p>Degree: {edu.degree}</p>
                      <p>Institution: {edu.institution}</p>
                      <p>Graduation Year: {edu.graduationYear}</p>
                    </div>
                  ))}
              </div>
              <div className="flex justify-between">
                <button className="btn btn-primary chat">Chat</button>
                <button className="btn btn-secondary chat">More Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholars;
