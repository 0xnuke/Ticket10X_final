import React, { useState } from "react";
import MakeProposal from "./MakeProposal";
import Proposal from "./Proposal";

const Funding = () => {
  const [sector, setSector] = useState("proposal");

  const addProposal = (proposal) => {
    const lastId = Math.max(...proposalCard.map((ele) => ele.id));
    const newId = lastId === -Infinity ? 0 : lastId + 1;
    const newProposal = { id: newId, ...proposal };
    const newProposals = [...proposalCard, newProposal];
    setProposalCard(newProposals);
  };

  const [proposalCard, setProposalCard] = useState([
    {
      id: 0,
      title: "Music Event 1",
      description:
        "This crowdfunding music event is a tour featuring up-and-coming indie bands, with funds raised going towards supporting independent music venues that have been impacted by the pandemic.",
      date: "12",
      img: "../funding_detail/event_1.jpg",
      voting: 2000,
      status: "open",
      currentFund: 20000,
      fundTarget: 35000,
    },
    {
      id: 1,
      title: "Music Event 2",
      description:
        "This crowdfunding music event is a series of outdoor concerts featuring local musicians, with proceeds going towards environmental conservation efforts in the community.",
      date: "0",
      img: "../funding_detail/event_2.jpg",
      voting: 4000,
      status: "success",
      currentFund: 40000,
      fundTarget: 40000,
    },
    {
      id: 2,
      title: "Music Event 3",
      description:
        "This crowdfunding music event is a charity concert featuring a range of popular artists, with proceeds going towards supporting mental health initiatives for musicians and music industry professionals.",
      date: "18",
      img: "../funding_detail/event_3.jpg",
      voting: 3670,
      status: "open",
      currentFund: 36700,
      fundTarget: 50000,
    },
    {
      id: 3,
      title: "Music Event 4",
      description:
        "This crowdfunding music event is a charity concert featuring a range of popular artists, with proceeds going towards supporting mental health initiatives for musicians and music industry professionals.",
      date: "3",
      img: "../funding_detail/event_4.jpg",
      voting: 1400,
      status: "open",
      currentFund: 14000,
      fundTarget: 150000,
    },
  ]);

  return (
    <div className="text-center bg-white text-gray-800 py-24 px-6">
      <h1
        className="text-5xl md:text-6xl xl:text-7xl font-bold
        tracking-tight mb-12"
      >
        <span className="capitalize">Bring Music Events to life on</span>
        <br />
        <span className="uppercase text-green-600">Ticket10X.</span>
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className={`inline-block px-6 py-2.5 rounded-full
          font-medium text-xs leading-tight uppercase hover:bg-green-700 hover:text-white
          ${
            sector === "proposal"
              ? "bg-green-600 text-white"
              : "border border-green-600 text-green-600 "
          }
          `}
          onClick={() => setSector("proposal")}
        >
          Proposal
        </button>

        <button
          type="button"
          className={`inline-block px-6 py-2.5 rounded-full
          font-medium text-xs leading-tight uppercase hover:bg-green-700 hover:text-white
          ${
            sector === "makeProposal"
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "border border-green-600 text-green-600 "
          }
          `}
          onClick={() => setSector("makeProposal")}
        >
          Make Proposal
        </button>
      </div>
      <div>
        {sector === "proposal" && (
          <Proposal
            proposalCard={proposalCard}
            setProposalCard={setProposalCard}
          />
        )}
        {sector === "makeProposal" && <MakeProposal onAdd={addProposal} />}
      </div>
    </div>
  );
};

export default Funding;
