const Banner = () => {
  return (
    <div className="bg-white py-10">
      <div className="flex flex-col md:flex-row w-4/5 mx-auto items-center justify-between">
        <div className="md:w-3/6 w-full">
          <div className="w-[390px]">
            <h1 className="text-gray-800 text-4xl font-bold">
              Bringing Ideas to Life:
              <br />
              <span className="text-green-500 text-5xl">
                Crowdfunding <br />
              </span>
              Your Next Campaign
            </h1>
          </div>
        </div>
        <div className="shadow-xl shadow-grey md:w-3/5 w-full mt-10 md:mt-0 rounded-md overflow-hidden bg-white">
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-full w-full">
              <img
                class="h-80 w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="../funding_detail/Banner.jpeg"
                alt="Virtual Concert"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white"></h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
