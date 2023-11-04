import { Link } from "react-router-dom";
import error from "../assets/images/undraw_Page_not_found_re_e9o6-removebg-preview.png";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Error = () => {
  return (
    <>
      <div className=" max-w-6xl mx-auto p-5  ">
        <div className="flex justify-start mt-10">
          <Link to="/">
            <button className="btn btn-primary btn-sm">
              <AiOutlineArrowLeft></AiOutlineArrowLeft>Go Back home
            </button>
          </Link>
        </div>
        <div className=" h-[80vh] flex justify-center items-center">
          <img src={error} alt="" />
        </div>
      </div>
    </>
  );
};

export default Error;
