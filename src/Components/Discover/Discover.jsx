import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Discover = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/v1/blog");
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching blogs");
      setLoading(false);
    }
  };

  // Fetch a single blog by ID
  const fetchBlogById = async (id) => {
    try {
      const response = await axios.get(`/api/v1/blog/${id}`);
      setBlog(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching blog");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchBlogById(id);
    } else {
      fetchBlogs();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {id ? (
        blog && (
          <div className="blog-post">
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p>
              <strong>Author:</strong> {blog.author}
            </p>
            <p>
              <strong>Tags:</strong> {blog.tags.join(", ")}
            </p>
            <p>
              <strong>Published:</strong> {blog.published ? "Yes" : "No"}
            </p>
          </div>
        )
      ) : (
        <div>
          <h1>Blog Posts</h1>
          {blogs.map((blog) => (
            <div key={blog._id} className="blog-post">
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
              <p>
                <strong>Author:</strong> {blog.author}
              </p>
              <p>
                <strong>Tags:</strong> {blog.tags.join(", ")}
              </p>
              <p>
                <strong>Published:</strong> {blog.published ? "Yes" : "No"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Discover;
