import { NavLink } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-[#161e23] min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-400 mb-4 animate-fade-in">
            About Our Job Portal
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed animate-slide-up">
            Connecting Talent with Opportunity, Globally.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg animate-fade-in animate-delay-100">
          <h2 className="text-3xl font-bold text-emerald-400 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            At our core, we believe that everyone deserves to find a fulfilling career. Our mission is to
            simplify the job search and hiring process, making it more efficient, transparent, and
            accessible for job seekers and employers alike. We strive to be the bridge that connects
            ambitious individuals with companies that value their skills and potential.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed">
            Whether you're taking your first step into the professional world, looking for a career change,
            or an employer seeking top-tier talent, our platform is designed to meet your needs with precision
            and ease.
          </p>
        </section>

        {/* What We Offer Section */}
        <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg animate-fade-in animate-delay-200">
          <h2 className="text-3xl font-bold text-indigo-400 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-lg text-gray-200 leading-relaxed space-y-3">
            <li>
              <span className="font-semibold text-cyan-300">Extensive Job Listings:</span>
              Explore thousands of job opportunities across diverse
              <NavLink
                to="/pages/categories"
                className="text-blue-400 hover:underline ml-1"
                aria-label="View job categories"
              >
                categories
              </NavLink>
              and
              <NavLink
                to="/pages/locations"
                className="text-blue-400 hover:underline ml-1"
                aria-label="View job locations"
              >
                locations
              </NavLink>
              . We update our listings daily to ensure you have access to the latest openings.
            </li>
            <li>
              <span className="font-semibold text-cyan-300">User-Friendly Interface:</span>
              Our intuitive platform makes it easy to search, filter, and apply for
              <NavLink
                to="/pages/jobs"
                className="text-blue-400 hover:underline ml-1"
                aria-label="View all jobs"
              >
                jobs
              </NavLink>
              that match your profile.
            </li>
            <li>
              <span className="font-semibold text-cyan-300">Personalized Experience:</span>
              Apply and fill your details in  
              <NavLink
                to="/pages/apply/:id"
                className="text-blue-400 hover:underline ml-1"
                aria-label="Go to My Jobs page"
              >
                 Apply 
              </NavLink>
               for any job that you would like.  <span className='text-rose-500 font-bold'>NOTE: </span>You can only apply for one job at a time.
            </li>
            <li>
              <span className="font-semibold text-cyan-300">Employer Solutions:</span>
              For businesses, we provide robust tools to post jobs, manage applications, and connect
              with qualified candidates efficiently.
            </li>
          </ul>
        </section>

        {/* Our Values Section */}
        <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg animate-fade-in animate-delay-300">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-200">
            <div>
              <h3 className="font-semibold text-xl text-yellow-300 mb-2">Integrity</h3>
              <p>
                We operate with transparency and honesty, building trust with our users and partners.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-yellow-300 mb-2">Innovation</h3>
              <p>
                We continuously evolve our platform to leverage the latest technologies and best practices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-yellow-300 mb-2">Accessibility</h3>
              <p>
                Our platform is designed to be inclusive, ensuring everyone has an equal opportunity.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-yellow-300 mb-2">Community</h3>
              <p>
                We foster a supportive environment where job seekers and employers can thrive.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action / Get Started Section */}
        <section className="text-center p-6 bg-gray-800 rounded-lg shadow-lg animate-fade-in animate-delay-400">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Ready to Find Your Next Opportunity?</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Start your journey with us today! Explore our wide range of jobs, create your profile,
            or get in touch with us if you have any questions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <NavLink
              to="/pages/jobs"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="Start searching for jobs"
            >
              Browse All Jobs
            </NavLink>
            <NavLink
              to="/pages/contacts"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="Contact us for more information"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/pages/homepage"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="Go to the homepage"
            >
              Go to Homepage
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;