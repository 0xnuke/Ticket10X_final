import Card from "./Card";
const arr = [1, 2, 3, 4];

const imgHero =
  "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg";

const Artwork = () => {
  return (
    <div className="bg-[#151c25] gradient-bg-artworks">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">
          Lastest Artworks
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
          {arr.map((nft, i) => (
            <Card key={i} nft={nft} />
          ))}
        </div>
        <button
          className="shadow-xl shadow-black text-white
          bg-[#e32970] hover:bg-[#bd255f]
          rounded-full cursor-pointer p-2"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Artwork;
