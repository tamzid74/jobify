import error from "../assets/images/404_error-removebg-preview.png";

const Error = () => {
  return (
    <>
      <div className="  max-w-6xl mx-auto  ">
        <div className="flex justify-start mt-10">
          <button className="btn btn-primary btn-sm">Go Back home</button>
        </div>
        <div className=" min-h-screen flex justify-center items-center">
          <img src={error} alt="" />
        </div>
      </div>
    </>
  );
};

export default Error;
