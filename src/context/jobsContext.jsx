import { createContext, useContext, useState } from "react";

// creating the job context(object)
const jobsContext = createContext();

// Function to consume the context
export function useMyJobs() {
  return useContext(jobsContext);
}

// Function that will provide children with props
export function JobsProvider({ children }) {
  const [job, setJob] = useState(null);
    console.log(job);
  // Add job to the job list
  const addJob = (job) => {
    // Update the joblist
    setJob(job);
  };
  return (
    <jobsContext.Provider value={{ job, addJob}}>
      {children}
    </jobsContext.Provider>
  );
}
