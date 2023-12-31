import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
const JobByCategory = () => {
  const [jobs, setJobs] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://b8-a11-jobify-server-side.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
        setIsLoading(false);
      });
  }, []);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  const categories = ["All Jobs", "On Site", "Remote", "Part-Time", "Hybrid"];

  const filterJobsByCategory = (category) => {
    if (category === "All Jobs") {
      return jobs;
    }
    return jobs.filter((job) => job.jobCategory === category);
  };

  const handleDetailsButton = (_id) => {
    if (!user) {
      toast.error("You have to logged in First to see view details");
      navigate("/login");
    } else {
      navigate(`/jobDetails/${_id}`);
    }
  };

  return (
    <div className="w-full max-w-[1250px] px-[25px] mx-auto mt-20">
      <h1 className="text-3xl text-primary font-robot font-bold text-center mb-2">
        Features Jobs
      </h1>
      <p className="text-center mb-10 font-bold font-edu">
        Know your worth and find the job that qualify your life
      </p>
      {isLoading ? ( // Conditionally render loading indicator if isLoading is true
        <div className="text-7xl min-h-screen flex items-center justify-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
          <TabList>
            {categories.map((category, index) => (
              <Tab key={index}>{category}</Tab>
            ))}
          </TabList>
          {categories.map((category, index) => (
            <TabPanel key={index}>
              <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filterJobsByCategory(category).map((job) => (
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 0 }}
                    key={job._id}
                    className="card bg-primary font-roboto "
                  >
                    <div className="card-body">
                      <h2 className="card-title">Job Title: {job.jobTitle}</h2>
                      <p className=""> Posted By Job: {job.userName}</p>
                      <p className="">Job Posting Date: {job.jobPostingDate}</p>
                      <p className="">
                        Application Deadline: {job.applicationDeadline}
                      </p>
                      <div className="flex items-center gap-1">
                        <FaMoneyBillAlt></FaMoneyBillAlt>
                        <span className="text-sm">{job.salaryRange}/month</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillPeopleFill></BsFillPeopleFill>
                        <p>Applicant: {parseInt(job.jobApplicants)}</p>
                      </div>

                      <div className="card-actions justify-end">
                        <button
                          onClick={() => handleDetailsButton(job._id)}
                          className="btn btn-sm rounded-full btn-white hover:btn-outline"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      )}
    </div>
  );
};

export default JobByCategory;
