import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import bgImage from "../assets/images/13295064_5172658.jpg";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    setEmailError("");
    setPassError("");

    if (password.length < 6) {
      setPassError("*Invalid email and Password");
      return;
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=])/.test(password)
    ) {
      setPassError(
        "*password should contain at least an uppercase, a lowercase,one special character and a number"
      );
      return;
    }

    const toastId = toast.loading("logging in...");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Logged in...", { id: toastId });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
        setEmailError("*Invalid Email and Password");
      });
  };
  return (
    <>
      <Helmet>
        <title>Jobify | Login</title>
      </Helmet>
      ;
      <div className="hero min-h-screen font-roboto bg-center bg-cover"style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-content flex-col glass w-[400px] lg:w-[500px] mt-10 mb-10 rounded-lg p-10 font-roboto">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-primary">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
                {emailError && (
                  <p className="text-sm text-red-600">{emailError}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
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
                {passError && (
                  <p className="text-sm text-red-600">{passError}</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-white">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success">Login</button>
              </div>
              <div>
                <p className="text-center text-white">
                  Don&apos;t have an account?
                  <Link to="/register" className="btn-link">
                    Register
                  </Link>
                </p>
              </div>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
