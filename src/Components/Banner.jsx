import { motion } from "framer-motion";
import bannerImage from '../assets/images/talented-designers-focused-work_1098-16115.jpg'

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <motion.div
          // initial={{ opacity: 0, scale: 2 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{
          //   duration: 0.5,
          //   delay: 0.5,
          // }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <h1 className="mb-5 text-4xl lg:text-5xl font-roboto font-bold">
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
            <div className=" ">
                <input
                  className="input input-bordered input-sm md:input w-full max-w-xs join-item  text-black"
                  placeholder="Search"
                />
            </div>
            <div className="indicator">
              <button className=" btn btn-primary btn-sm md:btn md:btn-primary join-item ">Search</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
