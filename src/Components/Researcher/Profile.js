import React, { useState, useEffect } from "react";
// import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/Auth";
import toast from "react-hot-toast";
import axios from "axios";

const Profile = () => {
  // context
  const [auth, setAuth] = useAuth();

  // state
  const [name, setName] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [researchInterests, setResearchInterests] = useState("");
  const [education, setEducation] = useState("");
  const [publications, setPublications] = useState("");
  const [researchProjects, setResearchProjects] = useState("");
  const [professionalExperience, setProfessionalExperience] = useState("");
  const [honorsAndAwards, setHonorsAndAwards] = useState("");
  const [professionalMemberships, setProfessionalMemberships] = useState("");
  const [skills, setSkills] = useState("");
  const [socialMediaProfiles, setSocialMediaProfiles] = useState("");
  const [photo, setPhoto] = useState("");

  // get user data
  useEffect(() => {
    const {
      name,
      affiliation,
      title,
      contact,
      researchInterests,
      education,
      publications,
      researchProjects,
      professionalExperience,
      honorsAndAwards,
      professionalMemberships,
      skills,
      socialMediaProfiles,
      photo,
    } = auth?.user;

    setName(name);
    setAffiliation(affiliation);
    setTitle(title);
    setContact(contact);
    setResearchInterests(researchInterests);
    setEducation(education);
    setPublications(publications);
    setResearchProjects(researchProjects);
    setProfessionalExperience(professionalExperience);
    setHonorsAndAwards(honorsAndAwards);
    setProfessionalMemberships(professionalMemberships);
    setSkills(skills);
    setSocialMediaProfiles(socialMediaProfiles);
    setPhoto(photo);
  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/auth/profile", {
        name,
        affiliation,
        title,
        contact,
        researchInterests,
        education,
        publications,
        researchProjects,
        professionalExperience,
        honorsAndAwards,
        professionalMemberships,
        skills,
        socialMediaProfiles,
        photo,
      });

      if (data?.error) {
        toast.error(data.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            {/* <UserMenu /> */}
          </div>
          <div className="col-md-9">
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <h4 className="title">USER PROFILE</h4>
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Name"
                    autoFocus
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={affiliation}
                    onChange={(e) => setAffiliation(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Affiliation"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Title"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Contact Information"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={researchInterests}
                    onChange={(e) => setResearchInterests(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Research Interests"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Education"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={publications}
                    onChange={(e) => setPublications(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Publications"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={researchProjects}
                    onChange={(e) => setResearchProjects(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Research Projects"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={professionalExperience}
                    onChange={(e) => setProfessionalExperience(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Professional Experience"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={honorsAndAwards}
                    onChange={(e) => setHonorsAndAwards(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Honors and Awards"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={professionalMemberships}
                    onChange={(e) => setProfessionalMemberships(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Professional Memberships"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Skills"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={socialMediaProfiles}
                    onChange={(e) => setSocialMediaProfiles(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Social Media Profiles"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    className="form-control"
                    placeholder="Enter URL of Your Photo"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
