import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import dotenv from "dotenv";
dotenv.config();

const { REACT_APP_PROVIDER_RPC_KEY, REACT_APP_PRIVATE_KEY, REACT_APP_ETHERSCAN_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  paths: { tests: "test" },
};

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

export default config;
