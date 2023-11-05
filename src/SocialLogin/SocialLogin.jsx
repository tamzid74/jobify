import { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (media) => {
    // const toastId = toast.loading("Signing in....");
    media()
      .then((result) => {
        console.log(result.user);
        toast.success("Signed in...");
        navigate(`/`);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };
  return (
    <>
      <div className="divider">Continue With</div>
      <div>
        <button
          onClick={() => handleLogin(googleLogin)}
          className=" btn btn-sm btn-primary btn-outline w-full rounded-lg font-bold flex items-center"
        >
          <BsGoogle></BsGoogle>Login with Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
