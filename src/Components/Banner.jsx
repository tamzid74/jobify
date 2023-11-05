const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/talented-designers-focused-work_1098-16115.jpg?w=1380&t=st=1699167463~exp=1699168063~hmac=e22f8a8d2977ebc244f8b79e232368e5c83815bc312395c16fceac0d5daad89b)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-3xl md:text-5xl font-roboto font-bold">
            Join us &{" "}
            <span className="text-primary font-extrabold">
              Explore Thousands
            </span>{" "}
            of Jobs
          </h1>
          <p className="mb-5 font-roboto text-xs md:text-lg">
            Find jobs, create trackable resumes and enrich your applications.
          </p>
          <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item text-black"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="indicator">
              <button className="btn btn-primary join-item">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
