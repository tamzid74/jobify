import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgImage from "../assets/images/scattered-forcefields.svg";
import image from "../assets/images/close-up-portrait-curly-handsome-european-male.jpg";
import image1 from "../assets/images/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses.jpg";
import image2 from "../assets/images/portrait-smiling-blonde-woman.jpg";
import image3 from "../assets/images/portrait-white-man-isolated.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <h1 className="text-center mt-24 mb-5 text-2xl text-primary font-bold font-roboto">Testimonials From Our Customers</h1>
      <p className="text-center text-xs md:text-base font-edu font-bold mb-10">Jobify turned my life around, securing me a job in no time. <br /> I’m immensely grateful for their quick and effective assistance</p>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className=" w-full max-w-[1250px] px-[25px] h-full mx-auto glass bg-cover bg-center rounded-3xl "
      >
        <Slider className=" w-full h-[500px]" {...settings}>
          <div className="avatar text-center mt-20 h-[400px]">
            <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={image} />
            </div>
            <div className="space-y-3">
              <h1 className="mt-3 text-primary font-bold">Great Job!</h1>
              <p className="w-1/2 mx-auto text-sm text-[696969] font-medium">
                TechPros has been a lifesaver for my IT needs. They work
                diligently to maintain a high level of quality in their
                services, ensuring my business runs smoothly.
              </p>
              <h2 className=" text-lg font-medium">Ashley Jenkins</h2>
              <p className="text-sm text-[77838F] ">Web Developer</p>
            </div>
          </div>
          <div className="avatar text-center mt-20 h-[400px]">
            <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={image1} />
            </div>
            <div className="space-y-3">
              <h1 className="mt-3 text-primary font-bold">Great Quality!</h1>
              <p className="w-1/2 mx-auto text-sm text-[696969] font-medium">
                Without JobHunt i’d be homeless, they found me a job and got me
                sorted out quickly with everything! Can’t quite… The Mitech team
                works really hard to ensure high level of quality
              </p>
              <h2 className=" text-lg font-medium">Benjamin Williams</h2>
              <p className="text-sm text-[77838F] ">Graphics Designer</p>
            </div>
          </div>
          <div className="avatar text-center mt-20 h-[400px]">
            <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={image2} />
            </div>
            <div className="space-y-3">
              <h1 className="mt-3 text-primary font-bold">Good Work!</h1>
              <p className="w-1/2 mx-auto text-sm text-[696969] font-medium">
                The DreamHome team puts in a lot of effort to deliver top-notch
                real estate solutions. They made the home-buying process a
                breeze for me!
              </p>
              <h2 className=" text-lg font-medium">Emily Rodriguez</h2>
              <p className="text-sm text-[77838F] ">Systems Analyst</p>
            </div>
          </div>
          <div className="avatar text-center mt-20 h-[400px]">
            <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={image3} />
            </div>
            <div className="space-y-3">
              <h1 className="mt-3 text-primary font-bold">Great Job!</h1>
              <p className="w-1/2 mx-auto text-sm text-[696969] font-medium">
                Without HealthPlus, I’d be struggling with my medical bills.
                They provided me with excellent healthcare services and took
                care of everything quickly. Can’t recommend them enough!
              </p>
              <h2 className=" text-lg font-medium">Daniel Martinez</h2>
              <p className="text-sm text-[77838F] ">Software Engineer</p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Testimonials;
