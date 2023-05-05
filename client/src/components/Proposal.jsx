import Web3 from "web3";
import Pool from "../../../smart_contracts/artifacts/contracts/Pool.sol/GoerliETHHolder.json";

async function Pay_Vote() {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    try {
      // Request account access
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      const tokenContract = new web3.eth.Contract(
        Pool.abi,
        "0x22cB458FD5263d9baAD33279C659fC6c49668Cf4"
      );
      // Mint the token
      const voting = await tokenContract.methods
        .sendETH()
        .send({ from: accounts[0] });

      // Get the transaction hash and display it
      const txHash = voting.transactionHash;
      alert(`Vote success! Transaction hash: ${txHash}`);
      return voting; // Add this line to return the voting object
    } catch (error) {
      console.error(error);
      throw new Error("Transaction failed");
    }
  } else {
    console.log("No web3 provider detected");
  }
  return undefined; // Return undefined when the transaction fails
}

const Proposal = ({ proposalCard, setProposalCard }) => {
  const vote = async (id) => {
    const updatedProposalCard = proposalCard.map(async (card) => { // Add async keyword here
      if (card.id === id && card.status !== "success") {


        try {
          const proposalIndex = proposalCard.findIndex((proposal) => proposal.id === id);
          const proposal = proposalCard[proposalIndex];
          const newCurrentFund = prompt(`VOTE ${proposal.title}?`);
          await Pay_Vote();
          return {
            ...card,
            voting: card.voting + 1,
            currentFund: card.currentFund + 10,
          };
        } catch (error) {
          console.error(error);
          throw new Error("Vote failed");
        }
      }
      return card;
    });
    setProposalCard(await Promise.all(updatedProposalCard)); // Wait for all the promises to be resolved with Promise.all()
  };

  const cards = proposalCard.map((card) => (
    <div
      key={card.id}
      className="pt-24 mb-5 px-6 flex justify-center group/item"
    >
      <div className="flex justify-center flex-col md:w-2/3 group/edit ">
        <div className="flex justify-start items-start sm:space-x-4 flex-wrap transform-gpu hover:scale-105 transition duration-300 relative">
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-full w-full">
              <img
                class="rounded-xl h-64 w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={card.img}
                alt={"img"}
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
          <div className="flex-1 sm:py-0 py-4">
            <div className="flex flex-col justify-start flex-wrap">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {card.title}
              </h5>
              <small className="text-gray-500">
                {card.date === "0" ? "End" : `${card.date} Days left`}
              </small>
            </div>
            <div className="flex justify-between items-center w-full pt-1">
              <div className="flex justify-start space-x-2">
                <small className="text-gray-500 font-bold text-lg">
                  {card.voting.toLocaleString() + " Votings"}
                </small>
              </div>
              <div className="font-bold">
                {card.status === "success" ? (
                  <big className="text-green-500">
                    {card.status.toUpperCase()}
                  </big>
                ) : card.status === "failed" ? (
                  <big className="text-red-500">
                    {card.status.toUpperCase()}
                  </big>
                ) : (
                  <big className="text-gray-500">
                    {card.status.toUpperCase()}
                  </big>
                )}
              </div>
            </div>
            <div>
              <p className="text-sm font-light mt-5">{card.description}</p>
              <div className="w-full overflow-hidden bg-gray-300 mt-4">
                <div
                  className="bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-l-full h-1 overflow-hidden"
                  style={{
                    width: (card.currentFund / card.fundTarget) * 100 + "%",
                  }}
                ></div>
              </div>
              <div className="flex justify-between items-center font-bold mt-2">
                <small>{"USDC Raised"} </small>
                <small className="flex justify-start items-center">
                  <span>
                    {card.currentFund.toLocaleString() +
                      " / " +
                      card.fundTarget.toLocaleString() +
                      " USDC"}
                  </span>
                </small>
              </div>
              <div className="flex justify-start items-center space-x-2 mt-4">
                <button
                  type="button"
                  className={`inline-block px-6 py-2.5 ${
                    card.status === "success"
                      ? "bg-gray-400 cursor-default"
                      : "bg-green-600 hover:bg-green-700"
                  } text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md`}
                  onClick={() => {
                    if (card.status !== "success") {
                      vote(card.id);
                    }
                  }}
                  disabled={card.status === "success"}
                >
                  {card.status === "success" ? "SUCCESS" : "VOTE EVENT"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    // Main Container
    <div>{cards.reverse()}</div>
  );
};

export default Proposal;
