import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Extra from "../Components/Extra";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Jobify | Home</title>
      </Helmet>
      <Banner></Banner>
      <Extra></Extra>
    </div>
  );
};

export default Home;
