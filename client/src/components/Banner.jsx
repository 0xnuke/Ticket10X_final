const Banner = () => {
  return (
    <div className="bg-white py-10">
      <div className="flex flex-col md:flex-row w-4/5 mx-auto items-center justify-between">
        <div className="md:w-3/6 w-full">
          <div className="w-[390px]">
            <h1 className="text-gray-800 text-4xl font-bold">
              Bringing Ideas to Life:<br />
              <span className="text-green-500 text-5xl">
                Crowdfunding <br />
              </span>
              Your Next Campaign
            </h1>
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
