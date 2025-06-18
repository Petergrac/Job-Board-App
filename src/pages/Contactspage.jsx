import { useState } from 'react'; 
import { NavLink } from 'react-router-dom';
import { toast } from 'sonner'; // Import the toast function

const Contacts = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will get back to you soon.');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="bg-[#161e23] min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-400 mb-4 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed animate-slide-up">
            We'd love to hear from you!
          </p>
        </div>

        {/* Contact Information Section */}
        <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg animate-fade-in animate-delay-100">
          <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-200">
            <div>
              <h3 className="font-semibold text-xl text-cyan-300 mb-3">General Inquiries</h3>
              <p className="mb-2">
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:info@yourjobportal.com" className="text-blue-400 hover:underline">
                  info@jobseeker.com
                </a>
              </p>
              <p className="mb-2">
                <span className="font-medium">Phone:</span>{' '}
                <a href="tel:+1234567890" className="text-blue-400 hover:underline">
                  +1 (234) 567-890
                </a>
              </p>
              <p>
                <span className="font-medium">Address:</span> 123 Job Seeker Lane, Nairobi City, NBO 90210
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-cyan-300 mb-3">Support</h3>
              <p className="mb-2">
                For technical support or assistance with your account, please email us at:
              </p>
              <p>
                <a href="mailto:support@yourjobportal.com" className="text-blue-400 hover:underline">
                  support@jobseeker.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg animate-fade-in animate-delay-200">
          <h2 className="text-3xl font-bold text-indigo-400 mb-6 text-center">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="Regarding a job application..."
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-y"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 active:translate-y-0.5"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* Removed the <dialog> element here as sonner handles the notifications */}

        {/* Social Media Section */}
        <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg text-center animate-fade-in animate-delay-300">
          <h2 className="text-3xl font-bold text-purple-400 mb-6">Connect With Us</h2>
          <div className="flex justify-center space-x-6 text-2xl">
            <a
              href="https://facebook.com/yourjobportal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition duration-200"
              aria-label="Visit our Facebook page"
            >
              <i className="fab fa-facebook-square"></i> {/* Or <FontAwesomeIcon icon={faFacebookSquare} /> */}
            </a>
            <a
              href="https://twitter.com/yourjobportal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition duration-200"
              aria-label="Visit our Twitter page"
            >
              <i className="fab fa-twitter-square"></i> {/* Or <FontAwesomeIcon icon={faTwitterSquare} /> */}
            </a>
            <a
              href="https://linkedin.com/company/yourjobportal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition duration-200"
              aria-label="Visit our LinkedIn page"
            >
              <i className="fab fa-linkedin"></i> {/* Or <FontAwesomeIcon icon={faLinkedin} /> */}
            </a>
            <a
              href="https://instagram.com/yourjobportal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 transition duration-200"
              aria-label="Visit our Instagram page"
            >
              <i className="fab fa-instagram-square"></i> {/* Or <FontAwesomeIcon icon={faInstagramSquare} /> */}
            </a>
          </div>
          <p className="mt-6 text-gray-300 text-lg">
            Follow us on social media for the latest job market insights and updates!
          </p>
        </section>

        {/* Explore Other Pages Section */}
        <section className="text-center p-6 bg-gray-800 rounded-lg shadow-lg animate-fade-in animate-delay-400">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Looking for Something Else?</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Check out our other pages for more information.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <NavLink
              to="/pages/jobs"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="Browse all jobs"
            >
              Browse Jobs
            </NavLink>
            <NavLink
              to="/"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="Go to homepage"
            >
              Homepage
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;