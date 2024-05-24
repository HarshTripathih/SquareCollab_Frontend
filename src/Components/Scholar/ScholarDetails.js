import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ScholarDetails = () => {
  const {_id}  = useParams();
  const [scholar, setScholar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Received _id:", _id);
  }, [_id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/scholars/${_id}`);
        setScholar(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (_id) {
      fetchData();
    }
  }, [_id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!scholar) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h1>My name is harsh</h1>
      <h1>{scholar.name}</h1>
      <img src={scholar.photo} alt={scholar.name} />
      <p>Affiliation: {scholar.affiliation}</p>
      <p>Position: {scholar.position}</p>
      <div>
        <h6>Education:</h6>
        {scholar.education &&
          scholar.education.map((edu) => (
            <div key={edu._id}>
              <p>Degree: {edu.degree}</p>
              <p>Institution: {edu.institution}</p>
              <p>Graduation Year: {edu.graduationYear}</p>
            </div>
          ))}
      </div>
      <div>
        <h6>Research Interests:</h6>
        <p>{scholar.researchInterests}</p>
      </div>
    </div>
  );
};

export default ScholarDetails;


