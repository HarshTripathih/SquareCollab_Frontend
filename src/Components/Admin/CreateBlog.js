import React, { useState, useEffect } from "react";
// import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [photo, setPhoto] = useState("");

  
  // Create blog function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const blogData = new FormData();
      blogData.append("title", title);
      blogData.append("content", content);
      blogData.append("author", author);
      blogData.append("category", category);
      blogData.append("tags", tags.join(","));
      blogData.append("photo", photo);

      const { data } = await axios.post("/api/v1/blog/create-blog", blogData);
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Blog Created Successfully");
        navigate("/dashboard/admin/blogs");
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
            {/* <AdminMenu /> */}
          </div>
          <div className="col-md-9">
            <h1>Create Blog</h1>
            <div className="m-1 w-75">

              {/* <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="blog_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div> */}
              <div className="mb-3">
                <input
                  type="text"
                  value={title}
                  placeholder="Write a title"
                  className="form-control"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={content}
                  placeholder="Write content"
                  className="form-control"
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={author}
                  placeholder="Author name"
                  className="form-control"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={tags}
                  placeholder="Tags (comma separated)"
                  className="form-control"
                  onChange={(e) => setTags(e.target.value.split(","))}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE BLOG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
