const Banner = () => {
  return (
    <div className="bg-white py-10">
      <div className="flex flex-col md:flex-row w-4/5 mx-auto items-center justify-between">
        <div className="md:w-3/6 w-full">
          <div>
            <h1 className="text-gray-800 text-5xl font-bold">
              Buy and Sell <br /> Ticket of your <br />
              <span className="text-green-500">
                favorite
              </span>{' '}
              events
            </h1>
            <p className="text-gray-500 font-semibold text-sm mt-3">
              Collect the hottest ticket NFT around.
            </p>
          </div>
        </div>
        <div className="shadow-xl shadow-grey md:w-3/5 w-full mt-10 md:mt-0 rounded-md overflow-hidden bg-white">
          <img
            src="../funding_detail/Banner.jpeg"
            alt="Virtual Concert"
            className="h-80 w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
