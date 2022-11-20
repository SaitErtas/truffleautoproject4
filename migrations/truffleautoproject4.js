// const HelloBlockchain = artifacts.require("HelloBlockchain");
const DoubleMyContract = artifacts.require('DoubleMyContract')
// const ReceiveMoneyContract = artifacts.require("ReceiveMoneyContract");

module.exports = function (deployer) {
  // deployer.deploy(HelloBlockchain, "Hello Blockchain");
  deployer.deploy(DoubleMyContract, 'DoubleMyContract')
}
