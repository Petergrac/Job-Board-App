// src/components/JobApplicationForm.jsx
import { useState} from "react";
import { toast } from "sonner"; // For notifications
import { useMyJobs } from "../context/jobsContext";
import { NavLink } from "react-router-dom";

const JobApplicationForm = () => {
  const { job } = useMyJobs();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null, // For file input
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!job) {
      toast.error("Cannot submit application: Job details missing.");
      return;
    }

    toast.success(`Application for "${job.jobTitle}" submitted successfully!`);

    // Reset form (except for job details)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      resume: null,
      coverLetter: "",
    });
    // You might also want to redirect the user to a confirmation page here
    // navigate('/application-success');
  };

  if (!job) {
    return (
      <div className="bg-[#161e23] min-h-screen flex items-center justify-center text-white">
        <NavLink to={`/pages/jobs`}>
          <p className="text-xl px-5 text-center font-bold">No selected job.</p>
          <p className="text-xl px-5 text-center font-bold">Click me to go back to jobs page.</p>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="bg-[#161e23] min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Back to Job Details Link */}
        <div className="mb-8 animate-fade-in">
          <NavLink
            to={`/pages/jobs`}
            className="text-blue-400 hover:underline flex items-center group"
          >
            <svg
              className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Back to Job Details
          </NavLink>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-400 mb-4 animate-fade-in">
            Apply for Job
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed animate-slide-up">
            You are applying for:{" "}
            <span className="font-semibold text-emerald-400">
              {job.jobTitle} at {job.companyName}
            </span>
          </p>
        </div>

        {/* Application Form Section */}
        <section className="p-6 bg-gray-800 rounded-lg shadow-lg animate-fade-in animate-delay-100">
          <h2 className="text-3xl font-bold text-indigo-400 mb-6 text-center">
            Your Application
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-lg font-medium text-gray-300 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-gray-300 mb-2"
              >
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label
                htmlFor="resume"
                className="block text-lg font-medium text-gray-300 mb-2"
              >
                Upload Resume (PDF, DOCX)
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="block w-full text-lg text-gray-300
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-500 file:text-white
                  hover:file:bg-blue-600 cursor-pointer
                  transition duration-200 ease-in-out"
              />
              {formData.resume && (
                <p className="mt-2 text-sm text-gray-400">
                  Selected file: {formData.resume.name}
                </p>
              )}
            </div>

            {/* Cover Letter */}
            <div>
              <label
                htmlFor="coverLetter"
                className="block text-lg font-medium text-gray-300 mb-2"
              >
                Cover Letter (Optional)
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows="8"
                value={formData.coverLetter}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-y"
                placeholder="Tell us why you're a great fit for this role..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 active:translate-y-0.5 text-xl"
              >
                Submit Application
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default JobApplicationForm;
