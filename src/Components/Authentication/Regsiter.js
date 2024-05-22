import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const [photo, setPhoto] = useState(null);
  const [role, setRole] = useState(""); // Added role state
  const navigate = useNavigate();


  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("photo", photo);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("answer", answer);
      formData.append("role", role); // Include role in the form data

      console.log(Object.fromEntries(formData));

      const res = await axios.post("/api/v1/auth/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  console.log(role);
  return (
    <div title="Register E-commerce">
      <div className="reg">
        <div className="register">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <h3>Register</h3>
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="exampleInputName"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputRole" className="form-label">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="form-control"
                id="exampleInputRole"
                required
                
              >
                <option value="">Select Role</option>
                <option value="1">Supervisor</option>
                <option value="2">Scholar</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                id="exampleInputAddress"
                placeholder="Enter your address"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPhone" className="form-label">
                Phone No
              </label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                id="exampleInputPhone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPhoto" className="form-label">
                Photo
              </label>
              <input
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])} // Store the selected file in the state
                className="form-control"
                id="exampleInputPhoto"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Question
              </label>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Your Dream Car"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
