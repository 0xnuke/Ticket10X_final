import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import Artwork from "./components/Artwork";
import Transaction from "./components/Transaction";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artwork />
      <Transaction />
    </div>
  );
}

export default App;
