import generalJobs from "../API/jobs";
import { useQuery } from "@tanstack/react-query";
import GeneralJobs from "../components/GeneralJobs";
import LoadingSpinner from '../components/LoadingSpinner'
import { NavLink } from "react-router-dom";
import ErrorComponent  from "../components/ErrorComponents";

const Jobspage = () => {
  // Using useQuery from tanstack to fetch data
  const {
    data,
    error,
    isPending: loading,
  } = useQuery({
    queryKey: ["generalJobs"],
    queryFn: () => generalJobs(),
  });
  // Show loading page/ message if data is still being fetched
  if (loading) {
    return <LoadingSpinner />
  }
  // Return error if an error occurs
  if (error) {
    return (
      <ErrorComponent
        message={`Failed to load job listings. ${
          error.message || "Please check your connection."
        }`}
      />
    );
  }

  return (
    <div>
      <div className="bg-linear-to-t pt-6 pb-6 from-[#161e23] to-[#112532] flex flex-wrap md:gap-x-10 md:gap-y-3 justify-center">
        {data.map((job) => (
          <GeneralJobs key={job.id} job={job} />
        ))}
      </div>
      <footer className="site-footer">
        <div className="footer-content">
          <nav className="footer-nav">
            <ul>
              <li>
                <NavLink to="/pages/about">About Us</NavLink >
              </li>
              <li>
                <NavLink  to="/pages/contacts">Contact</NavLink >
              </li>
              <li>
                <NavLink  to="/pages/privacy">Privacy Policy</NavLink >
              </li>
              <li>
                <NavLink  to="/pages/terms">Terms of Service</NavLink >
              </li>
            </ul>
          </nav>
          <p className="copyright">
            &copy; 2025 Your Job Board. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Jobspage;
