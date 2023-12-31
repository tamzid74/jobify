import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdatedJob = () => {
  const job = useLoaderData();
  console.log(job)
  const {
    _id,
    jobBanner,
    jobTitle,
    jobCategory,
    salaryRange,
    jobDescription,
    jobPostingDate,
    companyLogo,
    applicationDeadline,
    jobApplicants,
  } = job;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobBanner = form.jobBanner.value;
    const userName = form.userName.value;
    const jobTitle = form.jobTitle.value;
    const jobCategory = form.jobCategory.value;
    const salaryRange = form.salaryRange.value;
    const jobDescription = form.jobDescription.value;
    const jobPostingDate = form.jobPostingDate.value;
    const companyLogo = form.companyLogo.value;
    const applicationDeadline = form.applicationDeadline.value;
    const jobApplicants = form.jobApplicants.value;
    const email = user?.email;
    const updateJob = {
      jobBanner,
      userName,
      email,
      jobTitle,
      jobCategory,
      salaryRange,
      jobDescription,
      jobPostingDate,
      applicationDeadline,
      jobApplicants,
      companyLogo,
    };
    fetch(`https://b8-a11-jobify-server-side.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Job Update successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="max-w-6xl mx-auto p-5 font-roboto">
      <Helmet>
        <title>Jobify | Add A Job</title>
      </Helmet>
      <h1 className="text-3xl text-center font-extrabold font-roboto mb-5 border-b-2 p-2">
        Update Your Job
      </h1>
      <form onSubmit={handleUpdate}>
        {/* {row-1} */}
        <div className="md:flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Image URL"
                name="jobBanner"
                defaultValue={jobBanner}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Company Logo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Logo"
                name="companyLogo"
                defaultValue={companyLogo}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* {row-2} */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Name"
                defaultValue={user?.displayName}
                name="userName"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Job Title"
                defaultValue={jobTitle}
                name="jobTitle"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* {row-3} */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Salary range</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Salary range"
                defaultValue={salaryRange}
                name="salaryRange"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Job Category</span>
            </label>
            <select
              className="select select-bordered w-full"
              defaultValue={jobCategory}
              name="jobCategory"
            >
              <option value="On Site">On Site</option>
              <option value="Remote">Remote</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>
        {/* {row-4} */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Job Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Job Description"
                name="jobDescription"
                defaultValue={jobDescription}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Job Posting Date</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                defaultValue={jobPostingDate}
                name="jobPostingDate"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* {row-5} */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Application Deadline</span>
            </label>
            <label className="input-group">
              <DatePicker
                selected={selectedDate}
                defaultValue={applicationDeadline}
                onChange={handleDateChange}
                shouldCloseOnSelect={false}
                name="applicationDeadline"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Job Applicants</span>
            </label>
            <label className="input-group">
              <input
                type="type"
                placeholder="Job Applicants"
                name="jobApplicants"
                defaultValue={jobApplicants}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          className="btn btn-success btn-sm w-full mt-10"
          type="submit"
          value="Update Job"
        />
      </form>
    </div>
  );
};

export default UpdatedJob;
