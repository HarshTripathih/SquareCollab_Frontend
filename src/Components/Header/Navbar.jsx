import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from './Button';
import { useAuth } from '../../context/Auth'; // Update the path to your Auth.js file

const Navbar = () => {
  const [auth, setAuth] = useAuth(); // Access the auth state and setter function from the AuthContext
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // Access the navigate function

  const handleLogout = () => {
    // Implement the logout functionality
    setAuth({ user: null, token: '' });
    localStorage.removeItem('auth'); // Remove the auth data from localStorage
    navigate('/login'); // Redirect to the login page after logout
  };

  let links = [
    { name: 'Login', link: '/login' },
    { name: 'Register', link: '/register' },
  ];

  if (auth.user) {
    // If the user is authenticated, modify the links accordingly
    links = [
      { name: 'Home', link: '/' },
      { name: 'Discover', link: '/discover' },
      { name: 'About', link: '/about' },
      { name: 'Researchers', link: '/researchers' },
      { name: 'FAQ', link: '/faq' },
      { name: 'Contact', link: '/contact' },
      { name: 'Logout', link: '/logout' },
    ];
  }

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <p>
            Square<span className="title">Collab</span>
          </p>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              {link.name === 'Logout' ? (
                <button
                  onClick={handleLogout}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
          {!auth.user && (
            <li>
              <Button>Get Started</Button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;