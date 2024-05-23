import React, { useEffect, useState } from "react";
import axios from "axios";
import img1 from "../Images/1.jpg";

const Discover = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/v1/blog/get-blogs");
        setBlogs(response.data.blogs);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center my-5">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold text-center mb-4">Discover Blogs</h1>
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <div key={blog._id} className="border border-gray-200 rounded-md">
            <button
              className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none"
              onClick={() => {
                const content = document.getElementById(`content-${index}`);
                content.classList.toggle("hidden");
              }}
            >
              <h2 className="text-xl font-semibold">{blog.title}</h2>
            </button>
            <div id={`content-${index}`} className="hidden px-4 py-2">
              <img
                src={img1}
                className="h-30 w-1/3 mx-auto mb-3"
                alt={blog.title}
              />
              <p>{blog.content}</p>
              <p className="mt-2 text-sm  text-gray-600">
                Author: {blog.author}
              </p>
              <p className="mt-1 text-sm text-gray-600">
                <strong>Tags:</strong> {blog.tags.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
