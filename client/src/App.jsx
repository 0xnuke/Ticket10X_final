import Header from "./components/Header";
import "./App.css";
import Banner from "./components/Banner";
import Funding from "./components/Funding";
import Upcoming from "./components/Upcoming";
import NftDetail from "./components/NftDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
