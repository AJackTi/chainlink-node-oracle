const ChainlinkClient = artifacts.require("ChainlinkClient");
let LinkToken = artifacts.require("LinkToken");

module.exports = function (deployer) {
  deployer.deploy(ChainlinkClient, LinkToken.address);
};
