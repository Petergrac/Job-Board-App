import { NavLink } from "react-router-dom";

const MainFooter = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
            <div className="flex-shrink-0 text-center md:text-left">
              <a
                href="/"
                className="text-2xl font-bold text-white hover:text-gray-300"
              >
                JobFinder <span className="text-blue-400">Pro</span>
              </a>
              <p className="mt-2 text-gray-400 text-sm">
                Your dream job is just a click away.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-2">
              <h3 className="text-lg font-semibold text-white mb-2">
                Quick Links
              </h3>
              <NavLink
                to={`/pages/jobs`}
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Browse Jobs
              </NavLink>
              <NavLink
                to="/pages/locations"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Check Your Location
              </NavLink>
              <NavLink
                to="/pages/about"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                About Us
              </NavLink>
              <NavLink
                to="/pages/contacts"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Contact
              </NavLink>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-2">
              <h3 className="text-lg font-semibold text-white mb-2">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.007 2.01c-5.502 0-9.993 4.491-9.993 9.993S6.505 21.996 12.007 21.996c5.502 0 9.993-4.491 9.993-9.993S17.509 2.01 12.007 2.01Zm5.043 7.037c.189-.861-.264-1.849-1.077-2.302-.813-.453-1.834-.41-2.584.11-.75.52-1.042 1.545-.758 2.453-.189.861.264 1.849 1.077 2.302.813.453 1.834.41 2.584-.11.75-.52 1.042-1.545.758-2.453Zm-2.738 4.305c-1.226 1.137-2.916 1.87-4.664 1.87-1.748 0-3.438-.733-4.664-1.87-.247-.229-.27-.604-.055-.851.215-.247.59-.27.837-.055 2.115 1.961 4.707 1.961 6.822 0 .247-.215.622-.192.837.055.215.247.192.622-.055.851Zm-3.193-6.938c.189-.861-.264-1.849-1.077-2.302-.813-.453-1.834-.41-2.584.11-.75.52-1.042 1.545-.758 2.453.189.861.264 1.849 1.077 2.302.813.453 1.834.41 2.584-.11.75-.52 1.042-1.545.758-2.453Z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-2">
              <h3 className="text-lg font-semibold text-white mb-2">
                Contact Us
              </h3>
              <p className="text-gray-400 text-sm">
                123 Job Seeker Lane, Nairobi, Kenya
              </p>
              <p className="text-gray-400 text-sm">
                Email:{" "}
                <a
                  href="mailto:info@jobfinderpro.com"
                  className="hover:text-white"
                >
                  info@jobfinderpro.com
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                Phone:{" "}
                <a href="tel:+254712345678" className="hover:text-white">
                  +254 712 345 678
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
            &copy; 2025 JobSeeker. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainFooter;
