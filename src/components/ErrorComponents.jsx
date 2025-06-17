import { NavLink } from 'react-router-dom'; // For a 'Go Home' or 'Go to Jobs' link

const ErrorComponent = ({ message, onRetry }) => {
  return (
    <div className="min-h-screen bg-[#161e23] flex flex-col items-center justify-center text-white p-6">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-lg w-full text-center">
        <svg
          className="mx-auto h-24 w-24 text-red-500 mb-6 animate-pulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>

        <h2 className="text-3xl font-bold text-red-400 mb-4">Oops! Something Went Wrong.</h2>

        {message && (
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            {message}
          </p>
        )}

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          {onRetry && (
            <button
              onClick={onRetry}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 active:translate-y-0.5 text-lg"
            >
              Retry
            </button>
          )}

          <NavLink
            to="/pages/jobs" // Or your homepage route: "/"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 active:translate-y-0.5 text-lg"
          >
            Go to Job Listings
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;