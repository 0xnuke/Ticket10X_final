import Card from "./Card";

const cards = [
  {
    id: 0,
    img: "../funding_detail/Ticket_1.jpeg",
    name: "VeneVirtual",
    description:
      "VeneVirtual is an exciting virtual concert event that promises to deliver an unforgettable experience for fans of Latin music. This event is set to take place entirely online, making it accessible to fans around the world.",
    price: 3.2,
  },
  {
    id: 1,
    img: "../funding_detail/Ticket_2.jpeg",
    name: "Rukna Virtual Concert",
    description:
      "RuknaVirtualConcert is a highly-anticipated virtual music event that is set to take place entirely online. The concert promises to deliver an unforgettable experience for music fans, with a diverse lineup of talented musicians and a range of interactive features.",
    price: 2.5,
  },
  {
    id: 2,
    img: "../funding_detail/Ticket_3.jpeg",
    name: "Pattaya Virtual Concert",
    description:
      "Pattaya Virtual Concert is an exciting virtual music event that promises to deliver an immersive experience for music fans worldwide. The concert is set to take place entirely online, making it easily accessible for viewers from any location.",
    price: 4.0,
  },
  {
    id: 3,
    img: "../funding_detail/Ticket_4.jpeg",
    name: "Ticket NFT #1",
    description:
      "A exciting virtual concert event that promises to deliver an unforgettable experience for fans of Latin music. This event is set to take place entirely online, making it accessible to fans around the world.",
    price: 0.1,
  },
];

const Upcoming = () => {
  return (
    <div className="bg-white py-10">
      <div className="w-4/5 mx-auto">
        <h4 className="text-gray-800 text-3xl font-bold uppercase">
          Marketplace
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-5">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
        <button
          className="inline-block px-6 py-2.5 bg-green-500 border border-green-500
          font-medium text-xs leading-tight uppercase text-green-500
          rounded-full shadow-md bg-transparent hover:white
          hover:text-green-700 "
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Upcoming;
