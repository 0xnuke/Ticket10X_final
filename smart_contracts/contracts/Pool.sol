// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract GoerliETHHolder {
    address payable[] private senders; // list of all senders
    mapping(address => uint256) private senderBalances; // GoerliETH balance for each sender
    uint256 private endTime; // timestamp when holder can send GoerliETH out
    
    // fallback function to receive GoerliETH
    receive() external payable {
        if (senderBalances[msg.sender] == 0) {
            senders.push(payable(msg.sender));
        }
        senderBalances[msg.sender] += msg.value;
    }
    
    // set the time when holder can send GoerliETH out
    function setEndTime(uint256 minutesFromNow) external {
        endTime = block.timestamp + (minutesFromNow * 1 minutes);
    }
    
    // send GoerliETH back to all senders when end time is met
    function returnGoerliETH() external {
        require(block.timestamp >= endTime, "End time not reached");
        for (uint256 i = 0; i < senders.length; i++) {
            address payable sender = senders[i];
            uint256 amount = senderBalances[sender];
            if (amount > 0) {
                senderBalances[sender] = 0;
                sender.transfer(amount);
            }
        }
    }
    
    // function to allow sending ETH to this smart contract
    function sendETH() external payable {
        if (senderBalances[msg.sender] == 0) {
            senders.push(payable(msg.sender));
        }
        senderBalances[msg.sender] += msg.value;
    }
}


