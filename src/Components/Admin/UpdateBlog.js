import React, { useState, useEffect } from "react";
// import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
const { Option } = Select;

const UpdateBlog = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");

  // Get single blog post
  const getSingleBlog = async () => {
    try {
      const { data } = await axios.get(`/api/v1/blog/get-blog/${params.slug}`);
      setTitle(data.blog.title);
      setId(data.blog._id);
      setContent(data.blog.content);
      setAuthor(data.blog.author);
      setTags(data.blog.tags);
      setCategory(data.blog.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleBlog();
    //eslint-disable-next-line
  }, []);

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting categories");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Update blog function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const blogData = new FormData();
      blogData.append("title", title);
      blogData.append("content", content);
      blogData.append("author", author);
      blogData.append("category", category);
      blogData.append("tags", tags.join(","));
      photo && blogData.append("photo", photo);

      const { data } = await axios.put(
        `/api/v1/blog/update-blog/${id}`,
        blogData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Blog Updated Successfully");
        navigate("/dashboard/admin/blogs");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Delete a blog post
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are You Sure want to delete this blog post?");
      if (!answer) return;
      const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
      toast.success("Blog Deleted Successfully");
      navigate("/dashboard/admin/blogs");
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
            <h1>Update Blog</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
                value={category}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
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
                {photo ? (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="blog_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <img
                      src={`/api/v1/blog/blog-photo/${id}`}
                      alt="blog_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
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
                <button className="btn btn-primary" onClick={handleUpdate}>
                  UPDATE BLOG
                </button>
              </div>
              <div className="mb-3">
                <button className="btn btn-danger" onClick={handleDelete}>
                  DELETE BLOG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
