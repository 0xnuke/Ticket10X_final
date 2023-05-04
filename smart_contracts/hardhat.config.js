require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");


require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

const { alchemyApiKey, privateKey,etherscanAPIKey } = process.env;

module.exports = {
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: [`0x${privateKey}`]
    }
  },
   etherscan: {
    apiKey:etherscanAPIKey  // Replace with your API key
  },
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
  