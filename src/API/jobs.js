import axios from "axios";

const generalJobs = async () => {
  const response = await axios.get("https://jobicy.com/api/v2/remote-jobs/");
  return response.data.jobs;
};
export default generalJobs;
