const CrowdFunding = artifacts.require("CrowdFunding");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("CrowdFunding", function (/* accounts */) {
  it("should assert true", async function () {
    await CrowdFunding.deployed();
    return assert.isTrue(true);
  });
});
