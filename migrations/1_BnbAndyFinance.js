const BnbAndyFinance = artifacts.require('../contracts/BnbAndyFinance.sol')

module.exports = async function (deployer) {
  await deployer.deploy(BnbAndyFinance, '0x779D0fe3C586C8492d7a04141a7F92048e4d180e', '0x779D0fe3C586C8492d7a04141a7F92048e4d180e', '0x779D0fe3C586C8492d7a04141a7F92048e4d180e')
}
