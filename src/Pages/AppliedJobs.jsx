import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import image from "../assets/images/9264822-removebg-preview.png";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [myJobs, setMyJobs] = useState([]);
  const [selectCategory, setSelectCategory] = useState("All");
  useEffect(() => {
    fetch(`http://localhost:5000/appliedJobs?email=${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setMyJobs(data);
      });
  }, [user.email]);
  const filteredJobs = myJobs.filter((myJob) => {
    return selectCategory === "All" || myJob.jobCategory === selectCategory;
  });
  return (
    <div>
      <Helmet>
        <title>Jobify | AppliedJobs</title>
      </Helmet>
      <div className=" w-full max-w-[1250px] px-[25px] mx-auto mt-20 mb-20">
        <div className="flex justify-center items-center">
          <h1 className="text-center text-primary text-bold text-2xl font-roboto">
            Job By Category:
          </h1>
          <select
            value={selectCategory}
            onChange={(e) => setSelectCategory(e.target.value)}
            className="select select-success w-full max-w-xs font-roboto ml-4"
          >
            <option defaultValue="All">All</option>
            <option defaultValue="On Site">On Site</option>
            <option defaultValue="Remote">Remote</option>
            <option defaultValue="Hybrid">Hybrid</option>
            <option defaultValue="Part-Time">Part-Time</option>
          </select>
        </div>
        <div className="divider"></div>
        <div className="overflow-x-auto">
          {filteredJobs.length === 0 ? (
            <div className="flex justify-center">
              <img src={image} alt="" />
            </div>
          ) : (
            <table className="table font-roboto">
              {/* head */}
              <thead>
                <tr className="text-primary">
                  <th></th>
                  <th>JobTitle</th>
                  <th>JobCategory</th>
                  <th>ApplicationDeadline</th>
                  <th>Job Applicant</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((myJob) => (
                  <tr key={myJob._id}>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={myJob.companyLogo} />
                        </div>
                      </div>
                    </td>
                    <td>
                      <h4 className="font-bold">{myJob.jobTitle}</h4>
                    </td>
                    <td>{myJob.jobCategory}</td>
                    <td>{myJob.applicationDeadline}</td>
                    <td>{myJob.jobApplicants}</td>
                    <td>
                      <button className="btn btn-sm btn-primary">
                        Download Pdf
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
