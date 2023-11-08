import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import image from "../assets/images/9264822-removebg-preview.png"

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const [myJobs, setMyJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myJobs?email=${user?.email}`,{credentials:'include'})
      .then((res) => res.json())
      .then((data) => {
        setMyJobs(data);
      });
  }, [user.email]);
  console.log(myJobs);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myJobs/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              setMyJobs(myJobs.filter((myJob) => myJob._id !== id));
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Jobify | MyJobs</title>
      </Helmet>
      <div className=" w-full max-w-[1250px] px-[25px] mx-auto mt-20 mb-20">
        <h1 className="text-center text-primary text-bold text-2xl divider font-roboto">
          My Jobs: <span>{myJobs.length}</span>
        </h1>
        <div className="overflow-x-auto">
          {myJobs.length === 0 ? (
            <div className="flex justify-center"><img src={image} alt="" /></div>
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
                </tr>
              </thead>
              <tbody>
                {myJobs.map((myJob) => (
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
                    <th>
                      <Link to={`/updatedJobs/${myJob._id}`}>
                        <button className="btn btn-primary btn-xs">
                          Update
                        </button>
                      </Link>
                    </th>
                    <th>
                      <button
                        onClick={() => handleDelete(myJob._id)}
                        className="btn btn-primary btn-xs"
                      >
                        Delete
                      </button>
                    </th>
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

export default MyJobs;
