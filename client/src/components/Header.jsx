import Web3 from "web3";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const Header = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  async function connectWallet() {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);
        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("No web3 provider detected");
    }
  }

  return (
    <nav className="bg-white flex md:justify-evenly justify-between items-center py-4 mx-auto">
      <RouterLink to="/">
        <div className="flex  flex-initial justify-center items-center">
          <h1 className="text-gray-800 text-5xl font-bold"> Ticket10</h1>
          <h1 className="text-green-500 text-5xl font-bold">X</h1>
        </div>
      </RouterLink>
      <ul
        className="md:flex-[0.5] text-gray-800 md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial"
      >
        <Link to="funding" smooth={true} duration={1000}>
          <li className="mx-4 cursor-pointer">Event Crowdfunding</li>
        </Link>
        <Link to="collectible" smooth={true} duration={1000}>
          <li className="mx-4 cursor-pointer">Collectible</li>
        </Link>
        <Link to="marketplace" smooth={true} duration={1000}>
          <li className="mx-4 cursor-pointer">Marketplace</li>
        </Link>
        <li className="mx-4 cursor-pointer">Profile</li>
      </ul>

      <button
        className="inline-block px-6 py-2.5 border border-green-600
          font-medium text-xs leading-tight uppercase text-green-600
          rounded-full shadow-md bg-transparent hover:bg-green-700
          hover:text-white"
        onClick={connectWallet}
      >
        {web3 && accounts.length > 0 ? (
          <Dropdown accounts={accounts} />
        ) : (
          "Connect Wallet"
        )}
      </button>
    </nav>
  );
};

export default Header;
