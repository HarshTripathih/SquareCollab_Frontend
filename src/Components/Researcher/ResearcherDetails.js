import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import img1 from "../Images/avatar2.webp";

const ResearcherDetails = () => {
  const { _id } = useParams();
  const [researcher, setResearcher] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/researchers/${_id}`);
        setResearcher(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (_id) {
      fetchData();
    }
  }, [_id]);

  if (error) {
    return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
  }

  if (!researcher) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <img
          src={img1}
          alt={researcher.name}
          className="w-40 h-40 rounded-full mb-4 md:mb-0 md:mr-6 object-cover shadow-lg"
        />
        <h1 className="text-3xl font-bold mb-6 text-center mr-5">
          {researcher.name}
        </h1>
        <div className="text-center md:text-left">
          <p className="text-lg mb-2">
            <strong>Affiliation:</strong> {researcher.affiliation}
          </p>
          <p className="text-lg mb-2">
            <strong>Position:</strong> {researcher.position}
          </p>
          <p className="text-lg mb-2">
            <strong>Email:</strong> {researcher.contact.email}
          </p>
          <p className="text-lg mb-2">
            <strong>Phone:</strong> {researcher.contact.phone}
          </p>
          <p className="text-lg mb-2">
            <strong>Website:</strong>{" "}
            <a
              href={researcher.contact.website}
              className="text-blue-500 underline"
            >
              {researcher.contact.website}
            </a>
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Research Interests</h3>
        <p className="text-lg">{researcher.researchInterests.join(", ")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          {researcher.education &&
            researcher.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg">
                  <strong>Degree:</strong> {edu.degree}
                </p>
                <p className="text-lg">
                  <strong>Institution:</strong> {edu.institution}
                </p>
                <p className="text-lg">
                  <strong>Graduation Year:</strong> {edu.graduationYear}
                </p>
              </div>
            ))}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Publications</h3>
          {researcher.publications &&
            researcher.publications.map((pub, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg">
                  <strong>Title:</strong> {pub.title}
                </p>
                <p className="text-lg">
                  <strong>Type:</strong> {pub.type}
                </p>
                <p className="text-lg">
                  <strong>Year:</strong> {pub.year}
                </p>
              </div>
            ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Research Projects</h3>
        {researcher.researchProjects &&
          researcher.researchProjects.map((project, index) => (
            <div key={index} className="mb-4">
              <p className="text-lg">
                <strong>Title:</strong> {project.title}
              </p>
              <p className="text-lg">
                <strong>Description:</strong> {project.description}
              </p>
              <p className="text-lg">
                <strong>Year:</strong> {project.year}
              </p>
            </div>
          ))}
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Professional Experience</h3>
        {researcher.professionalExperience &&
          researcher.professionalExperience.map((exp, index) => (
            <div key={index} className="mb-4">
              <p className="text-lg">
                <strong>Position:</strong> {exp.position}
              </p>
              <p className="text-lg">
                <strong>Organization:</strong> {exp.organization}
              </p>
              <p className="text-lg">
                <strong>Start Date:</strong> {exp.startDate}
              </p>
              <p className="text-lg">
                <strong>End Date:</strong> {exp.endDate}
              </p>
            </div>
          ))}
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Honors and Awards</h3>
        {researcher.honorsAndAwards &&
          researcher.honorsAndAwards.map((honor, index) => (
            <div key={index} className="mb-4">
              <p className="text-lg">
                <strong>Title:</strong> {honor.title}
              </p>
              <p className="text-lg">
                <strong>Year:</strong> {honor.year}
              </p>
            </div>
          ))}
      </div>

      <div className="mb-8">
        <p className="text-lg">
          <strong>Professional Memberships:</strong>{" "}
          {researcher.professionalMemberships.join(", ")}
        </p>
        <p className="text-lg">
          <strong>Skills:</strong> {researcher.skills.join(", ")}
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Social Media Profiles</h3>
      <div className="space-y-2 mb-8">
        <p className="text-lg">
          <strong>LinkedIn:</strong>{" "}
          <a
            href={researcher.socialMediaProfiles.linkedIn}
            className="text-blue-500 underline"
          >
            {researcher.socialMediaProfiles.linkedIn}
          </a>
        </p>
        <p className="text-lg">
          <strong>ResearchGate:</strong>{" "}
          <a
            href={researcher.socialMediaProfiles.researchGate}
            className="text-blue-500 underline"
          >
            {researcher.socialMediaProfiles.researchGate}
          </a>
        </p>
      </div>
      <Link
        to="/chatting"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 md:mt-0 md:ml-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 "
      >
        Start Interacting With Research Partner
      </Link>
    </div>
  );
};

export default ResearcherDetails;