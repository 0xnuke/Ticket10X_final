// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// contract name is conventionally the same as file name
contract Transactions {
    //transactionCounter holds the number of our transactions
    uint256 transactionCounter;
    // we  will call the event later on
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    // struct will hold all above object properties
    struct TransferStructure {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // create an array to store transactions with above objects as fields
    TransferStructure[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCounter += 1;
        transactions.push(TransferStructure(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferStructure[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCounter;
    }
}