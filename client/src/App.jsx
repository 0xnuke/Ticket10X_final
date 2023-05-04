import Header from "./components/Header";
import "./App.css";
import Banner from "./components/Banner";
import Funding from "./components/Funding";
import Upcoming from "./components/Upcoming";
import NftDetail from "./components/NftDetail";


function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Banner />
      </div>
      <Upcoming />
      <Funding />
      <NftDetail />
    </div>
  );
}

export default App;
