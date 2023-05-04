const Header = () => {
  return (
    <nav className="bg-white flex md:justify-evenly justify-between items-center py-4 mx-auto">
      <div className="flex  flex-initial justify-center items-center">
        <h1 className="text-gray-800 text-5xl font-bold"> Ticket10</h1>
        <h1 className="text-green-500 text-5xl font-bold">X</h1>
      </div>
      <ul
        className="md:flex-[0.5] text-gray-800 md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer">Events</li>
        <li className="mx-4 cursor-pointer">Marketplace</li>
        <li className="mx-4 cursor-pointer">Event Crowdfunding</li>
        <li className="mx-4 cursor-pointer">Profile</li>
      </ul>

      <button
        className="inline-block px-6 py-2.5 border border-green-600
          font-medium text-xs leading-tight uppercase text-green-600
          rounded-full shadow-md bg-transparent hover:bg-green-700
          hover:text-white"
      >
        Connect Wallet
      </button>
    </nav>
  );
};

export default Header;

