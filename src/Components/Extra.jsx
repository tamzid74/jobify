import image from "../assets/images/stacked-peaks-haikei.svg";
import image1 from "../assets/images/rsz_24portrait-smiling-blonde-woman-removebg-preview.png";

const Extra = () => {
  return (
    <div className=" w-full max-w-[1250px]  px-[25px] mx-auto mt-20 mb-20">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="hidden lg:flex rounded-3xl h-[440px]"
      >
        <div className="flex flex-col justify-center flex-1 p-5  rounded-3xl space-y-5 ml-10">
          <h1 className=" text-2xl md:text-4xl font-bold text-white font-roboto">
            Get Matched The Most <br /> Valuable Jobs, Just Drop <br /> Your Cv
            at jobify
          </h1>
          <p className="text-sm font-roboto text-white w-[460px] ">
            The template is really nice and offers quite a large set of options.
            It’s beautiful and the coding is done quickly and seamlessly. Thank
            you!
          </p>
          <button className= " btn rounded-full w-36">Upload you Cv</button>
        </div>
        <div className="hidden lg:flex">
          <img className="" src={image1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Extra;
