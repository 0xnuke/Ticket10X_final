// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract GoerliETHTransfer {
    address constant recipient = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    function transfer(uint256 amount) external payable {
        uint256 amountInWei = amount * 10**18;
        payable(recipient).transfer(amountInWei);
    }
}