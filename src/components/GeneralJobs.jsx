import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMyJobs } from "../context/jobsContext";
const GeneralJobs = ({ job }) => {
  const number = Math.floor((Math.random() + 1) * 150000);
  const salary = Intl.NumberFormat("en-US").format(number);
  const [show, setShow] = useState(false);
  const { addJob } = useMyJobs();
  const jobId = job.id;

  const handleDetails = () => setShow((prev) => !prev);

  return (
    <div className="py-2 outline-1 rounded-2xl px-10 w-full md:w-1/3 md:m-0 m-3 text-white">
      <p className="md:text-2xl text-lg hover:underline text-teal-50">
        {job.jobTitle}
      </p>
      <p className="text-cyan-300">
        Company Name:
        <span className="font-bold text-emerald-500"> {job.companyName}</span>
      </p>
      <p>
        {job.jobType} in {job.jobGeo}
      </p>
      <div
        className={`
          transition-all duration-500 overflow-hidden
          ${show ? "opacity-100 max-h-100" : "opacity-0 max-h-0"}
        `}
      >
        <p className="outline-1 p-1 m-1 overflow-scroll rounded-sm text-green-300">
          {job.jobExcerpt}
        </p>
      </div>
      <p>
        <span className="text-lime-400 font-bold">Salary:</span> Around{" "}
        <span className="text-[#c7df67] font-bold">${salary}</span> per year.
      </p>
      <div className="flex justify-around">
        <NavLink
          onClick={() => addJob(job)}
          to={`/pages/apply/${jobId}`} /* <--- THIS IS THE KEY CHANGE */
          className="bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-sm font-bold active:translate-y-0.5 flex items-center justify-center"
          aria-label={`Apply for ${job.jobTitle}`}
        >
          Apply
        </NavLink>
        <button
          onClick={handleDetails}
          className="bg-blue-800 hover:bg-blue-600 px-2 py-1 mt-1 rounded-sm font-bold active:translate-y-0.5"
        >
          {show ? "Hide" : "Show"} Details
        </button>
      </div>
    </div>
  );
};

export default GeneralJobs;
