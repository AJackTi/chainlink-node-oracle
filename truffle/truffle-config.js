require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");

module.exports = {
  networks: {
    mumbai: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: process.env.MNEMONIC,
          providerOrUrl: 'wss://polygon-mumbai-bor.publicnode.com	',
          addressIndex: 0,
          numberOfAddresses: 10,
        }),
      network_id: "*",
      gas: 10000000,
      confirmations: 1,
    },
  },
  compilers: {
    solc: {
      version: "0.4.24",
    },
  },
};
