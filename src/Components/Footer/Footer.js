import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer bg-gray-800 text-white p-8 mt-3">
      <footer className="bg-gray-800 text-white p-8 mt-2">
        <div className="flex justify-between">
          <h1 className="text-center">
            All Right Reserved &copy; Researcher's Hub
          </h1>
          <p>Empowering researchers and supervisors through collaboration</p>
          <div className="space-x-4">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq"> FAQ's</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;