import image from "../assets/images/side-view-man-making-video-call.jpg";

const ExtraBanner = () => {
  return (
    <div
      className=" grid bg-cover bg-center min-h-[600px] bg-fixed mt-20"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="z-0 hero-overlay flex items-center justify-end p-20 text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl text-primary font-roboto font-bold">Join Thousands of Companies That Rely on Jobify</h1>
          <p className="mb-5 text-sm">
          Jobify offers a way to completely optimize your entire recruiting process. Find better candidates, conduct more focused interviews, and make data-driven hiring decisions.
          </p>
          <p className="text-black w-32 flex justify-center bg-white rounded-md font-bold font-roboto border p-3 hover:bg-transparent">Get Started</p>
        </div>
      </div>
    </div>
  );
};

export default ExtraBanner;
