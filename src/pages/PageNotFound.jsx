// src/components/NotFoundPage.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#161e23] flex flex-col items-center justify-center text-white p-6">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-lg w-full text-center">
        <h1 className="text-9xl font-extrabold text-red-500 mb-4 animate-pulse">404</h1>
        <h2 className="text-4xl font-bold text-teal-400 mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist or has been moved.
          Don't worry, you can find plenty of great jobs on our site!
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <NavLink
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 active:translate-y-0.5 text-lg"
          >
            Go to Homepage
          </NavLink>
          <NavLink
            to="/pages/jobs"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 active:translate-y-0.5 text-lg"
          >
            Explore Jobs
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;