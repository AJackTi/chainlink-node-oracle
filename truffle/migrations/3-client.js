const ChainlinkClient = artifacts.require("ChainlinkClient");
let LinkToken = artifacts.require("LinkToken");

module.exports = async function (deployer) {
  await deployer.deploy(ChainlinkClient, LinkToken.address);
};
