const Card = ({ card }) => {
  return (
    <div className="w-full shadow-xl shadow-gray-300 rounded-md overflow-hidden bg-white my-2 p-3">
      <img
        src={card.img}
        alt={"NFT Image"}
        className="h-60 w-full object-cover rounded-lg mb-3"
      />
      <h4 className="text-gray-800 font-semibold text-lg">{card.name}</h4>
      <div className="h-40">
        <p className="text-gray-500 text-sm my-1">{card.description}</p>
      </div>
      <div className="flex justify-between items-center mt-3 text-gray-800">
        <div className="flex flex-col">
          <small className="text-sm">Current Price</small>
          <p className="text-lg font-semibold">{card.price} ETH</p>
        </div>
        <button
          className="inline-block px-6 py-2.5 bg-green-600
              text-white font-medium text-xs leading-tight uppercase
              rounded-full shadow-md hover:bg-green-700"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
