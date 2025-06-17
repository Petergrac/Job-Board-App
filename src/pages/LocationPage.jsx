import { useState } from "react";
import generalJobs from "../API/jobs";
import { useQuery } from "@tanstack/react-query";
import GeneralJobs from "../components/GeneralJobs";
import LocationPageFooter from "../components/LocationpageFooter";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorComponent from "../components/ErrorComponents";

const LocationPage = () => {
  const {
    data,
    error,
    isLoading: loading,
  } = useQuery({
    queryKey: ["jobsData"],
    queryFn: () => generalJobs(),
  });
  const [countryName, setCountryName] = useState("");
  const [countryJobs, setCountryJobs] = useState(data);

  console.log(data);
  // Showing loading page
  if (loading) {
    return <LoadingSpinner/>
  }
  // Handling errors incase data does not load
  if (error) {
    return (
      <ErrorComponent
        message={`Failed to load job listings. ${error.message || 'Please check your connection.'}`}
      />
    )
  }

  // Function to handle the input
  const handleSubmit = (event) => {
    event.preventDefault();

    // Filter The Jobs based on the country
    const selectedCountry = data.filter(
      (data) => countryName.toLowerCase() === data[0].jobGeo.toLowerCase().split(',').slice(0)
    );
    setCountryJobs(selectedCountry);
    setCountryName("");
    console.log(selectedCountry);
  };

  return (
    <div className="flex flex-col">
      <header className="sticky md:top-20 z-40">
        <nav className="bg-slate-600 p-3 flex justify-around">
          <form onSubmit={handleSubmit} action="#">
            <label>
              <input
                className="bg-white p-2 outline-0 focus:border-2 rounded-md focus:border-sky-400"
                type="text"
                name="searchbar"
                id="country-name"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
                placeholder="Enter the Country Name"
              />
            </label>
            <button
              type="submit"
              className="bg-sky-500 change font-bold p-1 mx-2 rounded-md text-white"
            >
              Search
            </button>
          </form>
        </nav>
      </header>
      <div className="min-h-[65vh] bg-slate-700 py-5 ">
        <main className="flex flex-wrap md:gap-5 justify-center">
          {countryJobs
            ? (
              countryJobs.length === 0
              ? <div className="text-2xl font-bold text-white py-10"> Sorry no available job. Try another Country.</div>
               : countryJobs.map((jobs) => (
                <GeneralJobs key={jobs.id} job={jobs} />
              )))
            : data.map((job) => <GeneralJobs key={job.id} job={job} />)}
        </main>
      </div>
      <LocationPageFooter />
    </div>
  );
};
export default LocationPage;
