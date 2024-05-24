// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     affiliation: "",
//     position: "",
//     contact: {
//       email: "",
//       phone: "",
//       website: "",
//     },
//     researchInterests: [""],
//     education: [{ degree: "", institution: "", graduationYear: "" }],
//     publications: [{ title: "", type: "", year: "" }],
//     researchProjects: [
//       { title: "", description: "", startDate: "", endDate: "" },
//     ],
//     professionalExperience: [
//       { position: "", organization: "", startDate: "", endDate: "" },
//     ],
//     honorsAndAwards: [{ title: "", year: "" }],
//     professionalMemberships: [""],
//     skills: [""],
//     socialMediaProfiles: {
//       linkedIn: "",
//       researchGate: "",
//     },
//   });

//   const [message, setMessage] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const keys = name.split(".");
//     if (keys.length === 1) {
//       setFormData({ ...formData, [name]: value });
//     } else {
//       setFormData((prevState) => {
//         let data = { ...prevState };
//         let temp = data;
//         keys.forEach((key, index) => {
//           if (index === keys.length - 1) {
//             temp[key] = value;
//           } else {
//             temp = temp[key];
//           }
//         });
//         return data;
//       });
//     }
//   };

//   const handleArrayChange = (e, index, arrayName) => {
//     const { value } = e.target;
//     setFormData((prevState) => {
//       const updatedArray = [...prevState[arrayName]];
//       updatedArray[index] = value;
//       return { ...prevState, [arrayName]: updatedArray };
//     });
//   };

//   const handleNestedArrayChange = (e, index, fieldName, arrayName) => {
//     const { value } = e.target;
//     setFormData((prevState) => {
//       const updatedArray = [...prevState[arrayName]];
//       updatedArray[index][fieldName] = value;
//       return { ...prevState, [arrayName]: updatedArray };
//     });
//   };

//   const handleArrayAdd = (arrayName, newElement) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [arrayName]: [...prevState[arrayName], newElement],
//     }));
//   };

//   const handleArrayRemove = (arrayName, index) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [arrayName]: prevState[arrayName].filter((_, i) => i !== index),
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(null); // Reset the message

//     // Basic validation
//     for (let key in formData) {
//       if (Array.isArray(formData[key])) {
//         if (formData[key].length === 0) {
//           setMessage(`Please fill in all required fields.`);
//           return;
//         }
//       } else if (!formData[key]) {
//         setMessage(`Please fill in all required fields.`);
//         return;
//       }
//     }

//     try {
//       const { data } = await axios.post("/api/v1/researchers", formData);
//       setMessage("Profile saved successfully!");
//     } catch (error) {
//       setMessage("Profile Saved Successfully");
//         navigate("/discover");
//     }
//   };




//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md"
//     >
//       {message && <p className="mb-4 text-red-500">{message}</p>}
//       <div className="mb-4">
//         <label className="block text-gray-700">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Affiliation</label>
//         <input
//           type="text"
//           name="affiliation"
//           value={formData.affiliation}
//           onChange={handleChange}
//           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Position</label>
//         <input
//           type="text"
//           name="position"
//           value={formData.position}
//           onChange={handleChange}
//           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Email</label>
//         <input
//           type="email"
//           name="contact.email"
//           value={formData.contact.email}
//           onChange={handleChange}
//           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Phone</label>
//         <input
//           type="tel"
//           name="contact.phone"
//           value={formData.contact.phone}
//           onChange={handleChange}
//           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Website</label>
//         <input
//           type="url"
//           name="contact.website"
//           value={formData.contact.website}
//           onChange={handleChange}
//           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Research Interests</label>
//         {formData.researchInterests.map((interest, index) => (
//           <div key={index} className="flex items-center mb-2">
//             <input
//               type="text"
//               value={interest}
//               onChange={(e) => handleArrayChange(e, index, "researchInterests")}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//             />
//             <button
//               type="button"
//               onClick={() => handleArrayRemove("researchInterests", index)}
//               className="ml-2 text-red-500"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() => handleArrayAdd("researchInterests", "")}
//           className="mt-2 text-blue-500"
//         >
//           Add Research Interest
//         </button>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Education</label>
//         {formData.education.map((edu, index) => (
//           <div key={index} className="mb-2">
//             <input
//               type="text"
//               placeholder="Degree"
//               value={edu.degree}
//               name={`education.${index}.degree`}
//               onChange={(e) =>
//                 handleNestedArrayChange(e, index, "degree", "education")
//               }
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
//             />
//             <input
//               type="text"
//               placeholder="Institution"
//               value={edu.institution}
//               name={`education.${index}.institution`}
//               onChange={(e) =>
//                 handleNestedArrayChange(e, index, "institution", "education")
//               }
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
//             />
//             <input
//               type="number"
//               placeholder="Graduation Year"
//               value={edu.graduationYear}
//               name={`education.${index}.graduationYear`}
//               onChange={(e) =>
//                 handleNestedArrayChange(e, index, "graduationYear", "education")
//               }
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
//             />
//             <button
//               type="button"
//               onClick={() => handleArrayRemove("education", index)}
//               className="ml-2 text-red-500"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() =>
//             handleArrayAdd("education", {
//               degree: "",
//               institution: "",
//               graduationYear: "",
//             })
//           }
//           className="mt-2 text-blue-500"
//         >
//           Add Education
//         </button>
//       </div>
//       {/* Add similar structures for publications, researchProjects, professionalExperience, honorsAndAwards, professionalMemberships, skills, socialMediaProfiles */}

//       {/* Publications Fields */}
//       <div className="mb-4">
//         <label className="block text-gray-700">Publications</label>
//         {formData.publications.map((pub, index) => (
//           <div key={index} className="mb-2">
//             <input
//               type="text"
//               placeholder="Title"
//               value={pub.title}
//               name={`publications.${index}.title`}
//               onChange={(e) =>
//                 handleNestedArrayChange(e, index, "title", "publications")
//               }
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
//             />
//             <input
//               type="text"
//               placeholder="Type"
//               value={pub.type}
//               name={`publications.${index}.type`}
//               onChange={(e) =>
//                 handleNestedArrayChange(e, index, "type", "publications")
//               }
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
//             />
//             <input
//               type="text"
//               placeholder="Year"
//               value={pub.year}
//               name={`publications.${index}.year`}
//               onChange={(e) =>
//                 handleNestedArrayChange(e, index, "year", "publications")
//               }
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
//             />
//             <button
//               type="button"
//               onClick={() => handleArrayRemove("publications", index)}
//               className="ml-2 text-red-500"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() =>
//             handleArrayAdd("publications", { title: "", type: "", year: "" })
//           }
//           className="mt-2 text-blue-500"
//         >
//           Add Publication
//         </button>
//       </div>

//       {/* Research Projects Fields */}
//       <div className="mb-4">
//         <label className="block text-gray-700">Research Projects</label>
//         {formData.researchProjects.map((project, index) => (
//           <div key={index} className="mb-2">
//             <input
//               type="text"
//               placeholder="Title"
//               value={project.title}
//               name={`researchProjects.${index}.title`}
//               onChange={(e) =>
//                 handleNestedArrayChange(e, index, "title", "researchProjects")
//               }
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
//             />
//             <input
//               type="text"
//               placeholder="Description"
//               value={project.description}
//               name={`researchProjects.${index}.description`}
//               onChange={(e) =>
//                 handleNestedArrayChange(
//                   e,
//                   index,
//                   "description",
//                   "researchProjects"
//                 )
//               }
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
//             />
//             <input
//               type="text"
//               placeholder="Year"
//               value={project.year}
//               name={`researchProjects.${index}.year`}
//               onChange={(e) =>
//                 handleNestedArrayChange(e, index, "year", "researchProjects")
//               }
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
//             />
//             <button
//               type="button"
//               onClick={() => handleArrayRemove("researchProjects", index)}
//               className="ml-2 text-red-500"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() =>
//             handleArrayAdd("researchProjects", {
//               title: "",
//               description: "",
//               year: "",
//             })
//           }
//           className="mt-2 text-blue-500"
//         >
//           Add Research Project
//         </button>
//       </div>

//       {/* Professional Experience Fields */}
//       <div className="mb-4">
//         <label className="block text-gray-700">Professional Experience</label>
//         {formData.professionalExperience.map((experience, index) => (
//           <div key={index} className="mb-2">
//             <input
//               type="text"
//               placeholder="Position"
//               value={experience.position}
//               name={`professionalExperience.${index}.position`}
//               onChange={(e) =>
//                 handleNestedArrayChange(
//                   e,
//                   index,
//                   "position",
//                   "professionalExperience"
//                 )
//               }
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
//             />
//             <input
//               type="text"
//               placeholder="Organization"
//               value={experience.organization}
//               name={`professionalExperience.${index}.organization`}
//               onChange={(e) =>
//                 handleNestedArrayChange(
//                   e,
//                   index,
//                   "organization",
//                   "professionalExperience"
//                 )
//               }
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
//             />
//             <input
//               type="text"
//               placeholder="Start Date"
//               value={experience.startDate}
//               name={`professionalExperience.${index}.startDate`}
//               onChange={(e) =>
//                 handleNestedArrayChange(
//                   e,
//                   index,
//                   "startDate",
//                   "professionalExperience"
//                 )
//               }
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
//             />
//             <input
//               type="text"
//               placeholder="End Date"
//               value={experience.endDate}
//               name={`professionalExperience.${index}.endDate`}
//               onChange={(e) =>
//                 handleNestedArrayChange(
//                   e,
//                   index,
//                   "endDate",
//                   "professionalExperience"
//                 )
//               }
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
//             />
//             <button
//               type="button"
//               onClick={() => handleArrayRemove("professionalExperience", index)}
//               className="ml-2 text-red-500"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() =>
//             handleArrayAdd("professionalExperience", {
//               position: "",
//               organization: "",
//               startDate: "",
//               endDate: "",
//             })
//           }
//           className="mt-2 text-blue-500"
//         >
//           Add Professional Experience
//         </button>
//       </div>

//       {/* Honors and Awards Fields */}
//       <div className="mb-4">
//         <label className="block text-gray-700">Honors and Awards</label>
//         {formData.honorsAndAwards.map((award, index) => (
//           <div key={index} className="mb-2">
//             <input
//               type="text"
//               placeholder="Title"
//               value={award.title}
//               name={`honorsAndAwards.${index}.title`}
//               onChange={(e) =>
//                 handleNestedArrayChange(e, index, "title", "honorsAndAwards")
//               }
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
//             />
//             <input
//               type="text"
//               placeholder="Year"
//               value={award.year}
//               name={`honorsAndAwards.${index}.year`}
//               onChange={(e) =>
//                 handleNestedArrayChange(e, index, "year", "honorsAndAwards")
//               }
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
//             />
//             <button
//               type="button"
//               onClick={() => handleArrayRemove("honorsAndAwards", index)}
//               className="ml-2 text-red-500"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() =>
//             handleArrayAdd("honorsAndAwards", { title: "", year: "" })
//           }
//           className="mt-2 text-blue-500"
//         >
//           Add Honor/Award
//         </button>
//       </div>

//       {/* Professional Memberships Fields */}
//       <div className="mb-4">
//         <label className="block text-gray-700">Professional Memberships</label>
//         {formData.professionalMemberships.map((membership, index) => (
//           <div key={index} className="flex items-center mb-2">
//             <input
//               type="text"
//               value={membership}
//               onChange={(e) =>
//                 handleArrayChange(
//                   e,
//                   index,
//                   "professionalMemberships",
//                   "professionalMemberships"
//                 )
//               }
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//             />
//             <button
//               type="button"
//               onClick={() =>
//                 handleArrayRemove("professionalMemberships", index)
//               }
//               className="ml-2 text-red-500"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() => handleArrayAdd("professionalMemberships", "")}
//           className="mt-2 text-blue-500"
//         >
//           Add Membership
//         </button>
//       </div>

//       {/* Skills Fields */}
//       <div className="mb-4">
//         <label className="block text-gray-700">Skills</label>
//         {formData.skills.map((skill, index) => (
//           <div key={index} className="flex items-center mb-2">
//             <input
//               type="text"
//               value={skill}
//               onChange={(e) => handleArrayChange(e, index, "skills", "skills")}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//             />
//             <button
//               type="button"
//               onClick={() => handleArrayRemove("skills", index)}
//               className="ml-2 text-red-500"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() => handleArrayAdd("skills", "")}
//           className="mt-2 text-blue-500"
//         >
//           Add Skill
//         </button>
//       </div>

//       {/* Social Media Profiles Fields */}
//       <div className="mb-4">
//         <label className="block text-gray-700">LinkedIn</label>
//         <input
//           type="url"
//           name="socialMediaProfiles.linkedIn"
//           value={formData.socialMediaProfiles.linkedIn}
//           onChange={handleChange}
//           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700">ResearchGate</label>
//         <input
//           type="url"
//           name="socialMediaProfiles.researchGate"
//           value={formData.socialMediaProfiles.researchGate}
//           onChange={handleChange}
//           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//         />
//       </div>

//       {/* end */}

//       <div className="mt-6">
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm"
//         >
//           Save Profile
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Profile;



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    affiliation: "",
    position: "",
    contact: {
      email: "",
      phone: "",
      website: "",
    },
    researchInterests: [""],
    education: [{ degree: "", institution: "", graduationYear: "" }],
    publications: [{ title: "", type: "", year: "" }],
    researchProjects: [
      { title: "", description: "", startDate: "", endDate: "" },
    ],
    professionalExperience: [
      { position: "", organization: "", startDate: "", endDate: "" },
    ],
    honorsAndAwards: [{ title: "", year: "" }],
    professionalMemberships: [""],
    skills: [""],
    socialMediaProfiles: {
      linkedIn: "",
      researchGate: "",
    },
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    if (keys.length === 1) {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData((prevState) => {
        let data = { ...prevState };
        let temp = data;
        keys.forEach((key, index) => {
          if (index === keys.length - 1) {
            temp[key] = value;
          } else {
            temp = temp[key];
          }
        });
        return data;
      });
    }
  };

  const handleArrayChange = (e, index, arrayName) => {
    const { value } = e.target;
    setFormData((prevState) => {
      const updatedArray = [...prevState[arrayName]];
      updatedArray[index] = value;
      return { ...prevState, [arrayName]: updatedArray };
    });
  };

  const handleNestedArrayChange = (e, index, fieldName, arrayName) => {
    const { value } = e.target;
    setFormData((prevState) => {
      const updatedArray = [...prevState[arrayName]];
      updatedArray[index][fieldName] = value;
      return { ...prevState, [arrayName]: updatedArray };
    });
  };

  const handleArrayAdd = (arrayName, newElement) => {
    setFormData((prevState) => ({
      ...prevState,
      [arrayName]: [...prevState[arrayName], newElement],
    }));
  };

  const handleArrayRemove = (arrayName, index) => {
    setFormData((prevState) => ({
      ...prevState,
      [arrayName]: prevState[arrayName].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // Reset the message

    // Basic validation
    for (let key in formData) {
      if (Array.isArray(formData[key])) {
        if (formData[key].length === 0) {
          setMessage(`Please fill in all required fields.`);
          return;
        }
      } else if (!formData[key]) {
        setMessage(`Please fill in all required fields.`);
        return;
      }
    }

    try {
      const { data } = await axios.post("/api/v1/researchers", formData);
      setMessage("Profile saved successfully!");
      navigate("/discover");
    } catch (error) {
      setMessage("Failed to save profile. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md"
    >
      {message && <p className="mb-4 text-red-500">{message}</p>}
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Affiliation</label>
        <input
          type="text"
          name="affiliation"
          value={formData.affiliation}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Position</label>
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="contact.email"
          value={formData.contact.email}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="tel"
          name="contact.phone"
          value={formData.contact.phone}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Website</label>
        <input
          type="url"
          name="contact.website"
          value={formData.contact.website}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Research Interests</label>
        {formData.researchInterests.map((interest, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={interest}
              onChange={(e) => handleArrayChange(e, index, "researchInterests")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            <button
              type="button"
              onClick={() => handleArrayRemove("researchInterests", index)}
              className="ml-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleArrayAdd("researchInterests", "")}
          className="mt-2 text-blue-500"
        >
          Add Research Interest
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Education</label>
        {formData.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              name={`education.${index}.degree`}
              onChange={(e) =>
                handleNestedArrayChange(e, index, "degree", "education")
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
            />
            <input
              type="text"
              placeholder="Institution"
              value={edu.institution}
              name={`education.${index}.institution`}
              onChange={(e) =>
                handleNestedArrayChange(e, index, "institution", "education")
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
            />
            <input
              type="number"
              placeholder="Graduation Year"
              value={edu.graduationYear}
              name={`education.${index}.graduationYear`}
              onChange={(e) =>
                handleNestedArrayChange(e, index, "graduationYear", "education")
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
            />
            <button
              type="button"
              onClick={() => handleArrayRemove("education", index)}
              className="ml-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            handleArrayAdd("education", {
              degree: "",
              institution: "",
              graduationYear: "",
            })
          }
          className="mt-2 text-blue-500"
        >
          Add Education
        </button>
      </div>
      {/* Add similar structures for researchProjects, professionalExperience, honorsAndAwards, professionalMemberships, skills, socialMediaProfiles */}

      <div className="mb-4">
        <label className="block text-gray-700">Publications</label>
        {formData.publications.map((pub, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              placeholder="Title"
              value={pub.title}
              name={`publications.${index}.title`}
              onChange={(e) =>
                handleNestedArrayChange(e, index, "title", "publications")
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
            />
            <input
              type="text"
              placeholder="Type"
              value={pub.type}
              name={`publications.${index}.type`}
              onChange={(e) =>
                handleNestedArrayChange(e, index, "type", "publications")
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
            />
            <input
              type="number"
              placeholder="Year"
              value={pub.year}
              name={`publications.${index}.year`}
              onChange={(e) =>
                handleNestedArrayChange(e, index, "year", "publications")
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
            />
            <button
              type="button"
              onClick={() => handleArrayRemove("publications", index)}
              className="ml-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            handleArrayAdd("publications", { title: "", type: "", year: "" })
          }
          className="mt-2 text-blue-500"
        >
          Add Publication
        </button>
      </div>

      {/* Professional Experience Fields */}
      <div className="mb-4">
        <label className="block text-gray-700">Professional Experience</label>
        {formData.professionalExperience.map((exp, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              placeholder="Position"
              value={exp.position}
              name={`professionalExperience.${index}.position`}
              onChange={(e) =>
                handleNestedArrayChange(
                  e,
                  index,
                  "position",
                  "professionalExperience"
                )
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
            />
            <input
              type="text"
              placeholder="Organization"
              value={exp.organization}
              name={`professionalExperience.${index}.organization`}
              onChange={(e) =>
                handleNestedArrayChange(
                  e,
                  index,
                  "organization",
                  "professionalExperience"
                )
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
            />
            <input
              type="date"
              placeholder="Start Date"
              value={exp.startDate}
              name={`professionalExperience.${index}.startDate`}
              onChange={(e) =>
                handleNestedArrayChange(
                  e,
                  index,
                  "startDate",
                  "professionalExperience"
                )
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
            />
            <input
              type="date"
              placeholder="End Date"
              value={exp.endDate}
              name={`professionalExperience.${index}.endDate`}
              onChange={(e) =>
                handleNestedArrayChange(
                  e,
                  index,
                  "endDate",
                  "professionalExperience"
                )
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
            />
            <button
              type="button"
              onClick={() => handleArrayRemove("professionalExperience", index)}
              className="ml-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            handleArrayAdd("professionalExperience", {
              position: "",
              organization: "",
              startDate: "",
              endDate: "",
            })
          }
          className="mt-2 text-blue-500"
        >
          Add Professional Experience
        </button>
      </div>

      {/* Honors and Awards Fields */}
      <div className="mb-4">
        <label className="block text-gray-700">Honors and Awards</label>
        {formData.honorsAndAwards.map((award, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              placeholder="Title"
              value={award.title}
              name={`honorsAndAwards.${index}.title`}
              onChange={(e) =>
                handleNestedArrayChange(e, index, "title", "honorsAndAwards")
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
            />
            <input
              type="number"
              placeholder="Year"
              value={award.year}
              name={`honorsAndAwards.${index}.year`}
              onChange={(e) =>
                handleNestedArrayChange(e, index, "year", "honorsAndAwards")
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
            />
            <button
              type="button"
              onClick={() => handleArrayRemove("honorsAndAwards", index)}
              className="ml-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            handleArrayAdd("honorsAndAwards", { title: "", year: "" })
          }
          className="mt-2 text-blue-500"
        >
          Add Honor or Award
        </button>
      </div>

      {/* Professional Memberships Fields */}
      <div className="mb-4">
        <label className="block text-gray-700">Professional Memberships</label>
        {formData.professionalMemberships.map((membership, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={membership}
              onChange={(e) =>
                handleArrayChange(e, index, "professionalMemberships")
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            <button
              type="button"
              onClick={() =>
                handleArrayRemove("professionalMemberships", index)
              }
              className="ml-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleArrayAdd("professionalMemberships", "")}
          className="mt-2 text-blue-500"
        >
          Add Membership
        </button>
      </div>

      {/* Skills Fields */}
      <div className="mb-4">
        <label className="block text-gray-700">Skills</label>
        {formData.skills.map((skill, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleArrayChange(e, index, "skills")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            <button
              type="button"
              onClick={() => handleArrayRemove("skills", index)}
              className="ml-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleArrayAdd("skills", "")}
          className="mt-2 text-blue-500"
        >
          Add Skill
        </button>
      </div>

      {/* Social Media Profiles Fields */}
      <div className="mb-4">
        <label className="block text-gray-700">Social Media Profiles</label>
        <div className="mb-2">
          <input
            type="url"
            placeholder="LinkedIn"
            value={formData.socialMediaProfiles.linkedIn}
            name="socialMediaProfiles.linkedIn"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
          />
          <input
            type="url"
            placeholder="ResearchGate"
            value={formData.socialMediaProfiles.researchGate}
            name="socialMediaProfiles.researchGate"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm mb-2"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default Profile;
