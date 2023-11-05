import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Extra from "../Components/Extra";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Jobify | Home</title>
      </Helmet>
      <Banner></Banner>
      <Testimonials></Testimonials>
      <Extra></Extra>
    </div>
  );
};

export default Home;
