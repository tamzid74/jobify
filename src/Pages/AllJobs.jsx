import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const AllJobs = () => {
  const navigate = useNavigate()
  const {user}=useContext(AuthContext)
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
  const handleDetailsButton = () => {
    if (!user) {
      toast.error("You have to logged in First to see view details");
      navigate("/login");
    } else {
      navigate("/job/:id");
    }
  };

  return (
    <div className=" w-full max-w-[1250px] px-[25px] mx-auto mt-20 mb-20">
      <h1 className="text-3xl text-center font-extrabold font-roboto">
        All Jobs
      </h1>
      <div className="join mt-5">
        <div>
          <input
            className="input input-bordered join-item"
            placeholder="Search Job title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="indicator font-roboto">
          <button
            onClick={search ? handleSearch : clearSearch}
            className="btn join-item font-roboto"
          >
            Search
          </button>
        </div>
      </div>
      <div className="divider mb-10"></div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          {/* head */}
          <thead className="font-roboto">
            <tr>
              <th></th>
              <th className="text-primary">Name</th>
              <th className="text-primary">Job Title</th>
              <th className="text-primary">Job Posting Date</th>
              <th className="text-primary">Salary Range</th>
              <th className="text-primary">Application deadLine</th>
            </tr>
          </thead>
          <tbody className="font-roboto">
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
                  <button onClick={handleDetailsButton} className="btn btn-primary btn-outline btn-xs">
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
