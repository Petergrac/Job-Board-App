import generalJobs from "../API/jobs";
import { useQuery } from "@tanstack/react-query";
import GeneralJobs from "../components/GeneralJobs";
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorComponent from "../components/ErrorComponents";
const Categories = () => {
  // Using useQuery from tanstack to fetch data
  const {
    data,
    error,
    isPending: loading,
  } = useQuery({
    queryKey: ["generalJobs"],
    queryFn: () => generalJobs(),
  });
  // Setting the state of the displaying data
  const [filter, setFilter] = useState(data);
  // Show loading page/ message if data is still being fetched
  if (loading) {
    return <LoadingSpinner />;
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
  // Function to handle the type of data to be displayed
  const handleClick = (jobtype) => {
    const filteredData = data.filter((data) => data.jobType[0] == `${jobtype}`);
    setFilter(filteredData);
  };
  return (
    <div>
      <div className="sticky md:top-20 top-11 z-30">
        <nav className="flex flex-col md:flex-row items-center gap-y-5 justify-between pr-10 bg-[#167fa9] font-bold text-white p-2">
          <p className="bg-amber-300 text-black p-2">
            {filter === undefined
              ? "All Jobs"
              : filter.length >= 50
              ? "All Jobs"
              : filter[0] === undefined
              ? "No Available Jobs"
              : filter.length === 1
              ? filter[0].jobType + "  " + filter.length + " job"
              : filter[0].jobType + "  " + filter.length + " jobs"}
          </p>
          <button onClick={() => handleClick("full-time")} className="">
            Full Time
          </button>
          <button onClick={() => handleClick("internship")} className="change">
            Internship
          </button>
          <button onClick={() => handleClick("contract")} className="change">
            Contract
          </button>
        </nav>
      </div>
      <main className=" bg-[#2b3452] min-h-screen ">
        <div className="flex justify-center p-4 gap-x-6 flex-wrap gap-y-6">
          {filter ? (
            filter.length === 0 ? (
              <div className="py-10 text-white font-bold text-lg md:text-4xl">
                Sorry No Job
              </div>
            ) : (
              filter.map((job) => <GeneralJobs key={job.id} job={job} />)
            )
          ) : (
            data.map((job) => <GeneralJobs key={job.id} job={job} />)
          )}
        </div>
      </main>
    </div>
  );
};
export default Categories;
