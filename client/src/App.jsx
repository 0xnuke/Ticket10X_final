import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import Artwork from "./components/Artwork";
import Transaction from "./components/Transaction";
import Funding_section from "./components/Funding";
import FundingDetail from "./components/funding_detail";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artwork />
      <Transaction />
      <Funding_section/>
      <FundingDetail/>
    </div>
  );
}

export default App;
