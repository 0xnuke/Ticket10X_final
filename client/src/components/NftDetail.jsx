
const NftDetail = () => {

    return (
            <div className="justify-center items-center h-screen">
            <h1
                className="text-5xl md:text-6xl xl:text-7xl font-bold
        tracking-tight mb-12 text-center"
            >
                <span className="capitalize">BUY </span>
                <span className="uppercase text-green-600">Collectible </span>
                <span className="capitalize">TICKET.</span>
            </h1>
                <div className="m-10">
                    <div className="flex justify-center py-24 px-8 ">
                        <div className="flex justify-center max-w-6xl w-full">
                            {/* Left side */}
                            <div className="flex-1 pr-8">
                                <div className="relative">
                                    <div className="shadow-lg rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                        <img src="../funding_detail/NFTs_ticket.jpg" alt="NFT" className="rounded-lg" />
                                    </div>
                                </div>
                            </div>


                            {/* Right side */}
                            <div className="flex-1 relative">
                                <div className="bg-white rounded-lg shadow-lg p-6 absolute right-0 top-0 ">
                                    <h2 className="text-2xl font-bold mb-4">NFT Ticket Name #001</h2>
                                    <h3 className="text-lg font-bold mb-2">Event Name </h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Total Items: 1000 | Created on: 01/01/2023 | Chain: Ethereum | Location: Bangkok Thailand
                                    </p>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
                                        nulla non dolor sollicitudin ullamcorper in eu eros. In hac habitasse
                                        platea dictumst. Fusce id odio augue.
                                    </p>

                                    {/* Price Zone */}

                                    <div className="pb-8"></div>

                                    <div className="bg-gray-100 rounded-lg p-4 mb-4 ">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600 font-bold">Total Volume:</span>
                                            <span className="text-gray-800">100 ETH</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600 font-bold">Floor Price:</span>
                                            <span className="text-gray-800">2.5 ETH</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600 font-bold">Best Offer:</span>
                                            <span className="text-gray-800">3.2 ETH</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600 font-bold">Listed:</span>
                                            <span className="text-gray-800">10</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600 font-bold">Sale ends:</span>
                                            <span className="text-gray-800"> October 3 </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600 font-bold">Owner:</span>
                                            <span className="text-gray-800">0x123...abc</span>
                                        </div>
                                        <div className="flex justify-between items-center">

                                        </div>
                                    </div>



                                    {/* Buy button */}
                                    <div className="flex justify-between items-center">
                                        <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
                                            Buy Now
                                        </button>
                                        <span className="text-gray-600 font-bold ml-2"> Current Price:  3.2 ETH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default NftDetail;