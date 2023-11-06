import { useEffect, useState } from "react";

const AllJobs = () => {
  const [search, setSearch] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
        setFilteredJobs(data);
      });
  }, []);

  const handleSearch = () => {
    const filtered = jobs.filter((job) =>
      job.jobTitle.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredJobs(filtered);
    console.log(filtered);
  };
  const clearSearch = () => {
    setSearch("");
    setFilteredJobs(jobs);
  };

  return (
    <div className=" w-full max-w-[1250px] px-[25px] mx-auto mt-20 mb-20">
      <h1 className="text-3xl text-center font-extrabold font-roboto">
        All Jobs
      </h1>
      <div className="join">
        <div>
          <input
            className="input input-bordered join-item"
            placeholder="Search Job title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="indicator">
          <button onClick={search?handleSearch:clearSearch} className="btn join-item">
            Search
          </button>
        </div>
      </div>
      <div className="divider mb-10"></div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-primary">Name</th>
              <th className="text-primary">Job Title</th>
              <th className="text-primary">Job Posting Date</th>
              <th className="text-primary">Salary Range</th>
              <th className="text-primary">Application deadLine</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {filteredJobs.map((job, index) => (
              <tr key={job._id}>
                <th className="text-primary">{index + 1}</th>
                <td>
                  <div className="font-bold">{job.userName}</div>
                </td>
                <td>{job.jobTitle}</td>
                <td>{job.jobPostingDate}</td>
                <td>{job.salaryRange}</td>
                <td>{job.applicationDeadline}</td>
                <th>
                  <button className="btn btn-primary btn-outline btn-xs">
                    details
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJobs;
