import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResearcherDetails = () => {
  const { id } = useParams();
  const [researcher, setResearcher] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/researchers/${id}`
        );
        setResearcher(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!researcher) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{researcher.name}</h1>
      <img src={researcher.photo} alt={researcher.name} />
      <p>Affiliation: {researcher.affiliation}</p>
      <p>Position: {researcher.position}</p>
      <div>
        <h6>Education:</h6>
        {researcher.education &&
          researcher.education.map((edu) => (
            <div key={edu.id}>
              <p>Degree: {edu.degree}</p>
              <p>Institution: {edu.institution}</p>
              <p>Graduation Year: {edu.graduationYear}</p>
            </div>
          ))}
      </div>
      <div>
        <h6>Research Interests:</h6>
        <p>{researcher.researchInterests}</p>
      </div>
    </div>
  );
};

export default ResearcherDetails;
