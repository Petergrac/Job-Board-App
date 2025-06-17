import { NavLink } from "react-router-dom";

function LocationPageFooter() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Left Section: Copyright */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm">
            &copy; {currentYear} JobFinder. All rights reserved.
          </p>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
          <NavLink to="/pages/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">About Us</NavLink>
          <NavLink to="/pages/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Contact</NavLink>
          <NavLink to="/pages/privacy" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</NavLink>
          <NavLink to="/pages/terms" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Terms of Service</NavLink>
        </div>

        {/* Right Section: Social Media Icons (placeholders) */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
            {/* Replace with actual SVG icons from a library like Heroicons, Font Awesome, etc. */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">Facebook</span> {/* For accessibility */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.532A8.318 8.318 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.417-4.293 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012 10.77a4.096 4.096 0 003.29 4.027 4.11 4.11 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.188a11.644 11.644 0 0011.077 2.188c13.23 0 18.271-10.999 18.271-18.271 0-.268-.011-.537-.026-.806A13.94 13.94 0 0024 4.687z" />
            </svg>
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19.812 5.05A.75.75 0 0019 4.75h-.75a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V5.05zM5 6.75C5 5.784 5.784 5 6.75 5h.5C8.216 5 9 5.784 9 6.75v10.5C9 18.216 8.216 19 7.25 19h-.5C5.784 19 5 18.216 5 17.25V6.75z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default LocationPageFooter;