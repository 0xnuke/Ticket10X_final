

const Proposal = ({ proposalCard, setProposalCard }) => {

  const vote = (id) => {
    const proposalIndex = proposalCard.findIndex((proposal) => proposal.id === id);
    const proposal = proposalCard[proposalIndex];
    const newCurrentFund = prompt(`How much do you want to donate to ${proposal.title}?`);
    if (newCurrentFund) {
      const newProposalCard = [...proposalCard];
      const updateCurrentFund = proposal.currentFund + parseInt(newCurrentFund);
      newProposalCard[proposalIndex] = { ...proposal, currentFund: updateCurrentFund };
      if (updateCurrentFund >= proposal.fundTarget) {
        newProposalCard[proposalIndex].status = "success";
      }
      setProposalCard(newProposalCard);
    }
  };


  const cards = proposalCard.map((card) => (
    <div key={card.id} className="pt-24 mb-5 px-6 flex justify-center">
      <div className="flex justify-center flex-col md:w-2/3">
        <div className="flex justify-start items-start sm:space-x-4 flex-wrap transform-gpu hover:scale-105 transition duration-300 relative">
          <img src={card.img} alt={'img'} className="rounded-xl h-64 object-cover sm:w-1/3 w-full" />
          <div className="flex-1 sm:py-0 py-4">
            <div className="flex flex-col justify-start flex-wrap">
              <h5 className="text-gray-900 text-xl font-medium mb-2">{card.title}</h5>
              <small className="text-gray-500">{card.date === '0' ? 'End' : `${card.date} Days left`}</small>
            </div>
            <div className="flex justify-between items-center w-full pt-1">
              <div className="flex justify-start space-x-2">
                <small className="text-gray-500 font-bold text-lg">{card.voting.toLocaleString() + ' Votings'}</small>
              </div>
              <div className="font-bold">
                {card.status === 'success' ? (
                  <big className="text-green-500">{card.status.toUpperCase()}</big>
                ) : card.status === 'failed' ? (
                  <big className="text-red-500">{card.status.toUpperCase()}</big>
                ) : (
                  <big className="text-gray-500">{card.status.toUpperCase()}</big>
                )}
              </div>
            </div>
            <div>
              <p className="text-sm font-light mt-5">{card.description}</p>
                <div className="w-full overflow-hidden bg-gray-300 mt-4">
                  <div
                    className="bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-l-full h-1 overflow-hidden"
                    style={{ width: (card.currentFund / card.fundTarget) * 100 + "%" }}
                  ></div>
                </div>
              <div className="flex justify-between items-center font-bold mt-2">
                <small>{'USDC Raised'} </small>
                <small className="flex justify-start items-center">
                  <span>{card.currentFund.toLocaleString() + ' / ' + card.fundTarget.toLocaleString() + ' USDC'}</span>
                </small>
              </div>
              <div className="flex justify-start items-center space-x-2 mt-4">
                <button
                  type="button"
                  className={`inline-block px-6 py-2.5 ${card.status === "success" ? "bg-gray-400 cursor-default" : "bg-green-600 hover:bg-green-700"
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
    <div>
      {cards.reverse()}
    </div>
  )
}

export default Proposal