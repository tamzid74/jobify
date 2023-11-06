/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const [regError, setRegError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const photo = form.get("photo");
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, password, email, photo);

    setRegError("");
    if (password.length < 6) {
      setRegError("*password should contain at least 6 characters");
      return;
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=])/.test(password)
    ) {
      setRegError(
        "*password should contain at least an uppercase, a lowercase,one special character and a number"
      );
      return;
    }
    const toastId = toast.loading("loading...");
    createUser(email, password)
      .then((result) => {
        updateUser(name, photo).then(() => {
          setUser((prev) => {
            prev.displayName = name;
            prev.photoURL = photo;
            return { ...prev };
          });
          toast.success("Logged in...", { id: toastId });
          navigate(`/`);
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Jobify | Register</title>
      </Helmet>
      ;
      <div className="hero min-h-screen font-roboto">
        <div className="hero-content flex-col w-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoUrl"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span
                    className="absolute top-4 right-1"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </span>
                </div>
                {regError && (
                  <p className=" text-sm text-red-600">{regError}</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary btn-outline">
                  Register
                </button>
              </div>
              <p className="text-center">
                Already have an account?{" "}
                <Link className="btn-link" to="/login">
                  Login
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
