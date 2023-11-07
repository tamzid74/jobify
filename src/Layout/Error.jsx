import { Link } from "react-router-dom";
import error from "../assets/images/20602777_6325255.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Helmet } from "react-helmet-async";

const Error = () => {
  return (
    <>
    <Helmet>
        <title>Jobify | error</title>
    </Helmet>
      <div className=" max-w-6xl mx-auto p-5  ">
        <div className="flex justify-start mt-10">
          <Link to="/">
            <button className="btn btn-primary btn-sm">
              <AiOutlineArrowLeft></AiOutlineArrowLeft>Go Back home
            </button>
          </Link>
        </div>
        <div className=" w-full h-[80vh] flex justify-center items-center">
          <img className="md:w-1/2" src={error} alt="" />
        </div>
      </div>
    </>
  );
};

export default Error;
