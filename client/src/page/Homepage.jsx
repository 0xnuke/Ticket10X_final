import Header from "../components/Header";
import Banner from "../components/Banner";
import Funding from "../components/Funding";
import NftDetail from "../components/NftDetail";
import Upcoming from "../components/Upcoming";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div id="funding">
        <Funding />
      </div>
      <div id="collectible">
        <NftDetail />
      </div>
      <div id="marketplace">
        <Upcoming />
      </div>
    </div>
  );
};

export default Homepage;
