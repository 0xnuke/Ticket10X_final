const Card = ({ nft }) => {
  const imgHero =
    "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg";

  return (
    <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
      <img
        src={imgHero}
        alt={"NFT Image"}
        className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
      />
      <h4 className="text-white font-semibold">NFT #{nft}</h4>
      <p className="text-gray-400 text-xs my-1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit libero
        omnis accusamus sed velit voluptas porro! Assumenda fuga nam, tenetur
        est fugiat error quod molestias reiciendis impedit perferendis cumque
        totam?
      </p>
      <div className="flex justify-between items-center mt-3 text-white">
        <div className="flex flex-col">
          <small className="text-xs">Current Price</small>
          <p className="text-sm font-semibold">0.34 ETH</p>
        </div>
        <button
          className="shadow-lg shadow-black text-white text-sm bg-[#e32970]
            hover:bg-[#bd255f] cursor-pointer rounded-full px-1.5 py-1"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
