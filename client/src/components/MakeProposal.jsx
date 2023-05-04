import React, { useState } from "react";


const MakeProposal = ({ onAdd }) => {

    const [proposal, setProposal] = useState({
        id: "",
        title: "",
        description: "",
        date: "",
        img: "../funding_detail/event_1.jpg",
        voting: "0",
        status: "",
        currentFund: "0",
        fundTarget: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProposal(prevProposal => ({
            ...prevProposal,
            [name]: value
        }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd(proposal);
        setProposal({
            title: "",
            description: "",
            cost: "",
            img: "",
            date: "",
        });
    };


    return (
        <div className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-6">Add Your Proposal</h2>
            <form onSubmit={handleSubmit} className="addActivity">
                <div className="mb-4">
                    <label htmlFor="title" className="block font-bold mb-2">
                        Title
                    </label>
                    <input
                        name="title"
                        type="text"
                        value={proposal.title}
                        onChange={handleChange}
                        placeholder="Add Your Title"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block font-bold mb-2">
                        Description
                    </label>
                    <input
                        name="description"
                        type="text"
                        value={proposal.description}
                        onChange={handleChange}
                        placeholder="Add Your Description"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="cost" className="block font-bold mb-2">
                        Fund Target (USD)
                    </label>
                    <input
                        name="fundTarget"
                        type="number"
                        value={proposal.fundTarget}
                        onChange={handleChange}
                        placeholder="Add Your Fund Target(USD)"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block font-bold mb-2">
                        Date
                    </label>
                    <input
                        name="date"
                        type="date"
                        value={proposal.date}
                        onChange={handleChange}
                        placeholder="Add Your Date"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block font-bold mb-2">
                        Picture
                    </label>
                    <input type="file" value={proposal.value} />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Proposal
                    </button>
                    <button
                        onClick={() => handleClick()}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>

    );
};

export default MakeProposal;