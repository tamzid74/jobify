// import Swal from "sweetalert2";

const AddAJob = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const jobTitle = form.jobTitle.value;
    const jobCategory = form.jobCategory.value;
    const salaryRange = form.salaryRange.value;
    const jobDescription = form.jobDescription.value;
    const jobPostingDate = form.jobPostingDate.value;
    const newProduct = {
      photo,
      name,
      jobTitle,
      jobCategory,
      salaryRange,
      jobDescription,
      jobPostingDate,
    };
    console.log(newProduct);
  };
  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl text-center font-extrabold mb-5 border-b-2 p-2">
        Add Product
      </h1>
      <form onSubmit={handleAdd}>
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
                name="photo"
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
                name="name"
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
                name="type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Job Category</span>
            </label>
            <select className="select select-bordered w-full" name="jobCategory">
              <option value="on site">
                On Site
              </option>
              <option value="remote">Remote</option>
              <option value="part-time">Part-Time</option>
              <option value="hybrid">Hybrid</option>
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
                name="jobPostingDate"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          className="btn btn-success btn-sm w-full mt-10"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddAJob;
