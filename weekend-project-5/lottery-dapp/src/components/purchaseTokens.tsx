import { ethers } from "ethers";
import React, { useState } from "react";
import { lotteryTokenContract } from "../assets/lotteryTokenContract";
import { lotteryTokenERC20Address } from "../assets/lotteryTokenERC20Address";
import { lotteryContract } from "../assets/lotteryContract";
import { lotteryAddress } from "../assets/lotteryAddress";

function PurchaseTokens({ accounts, setAccounts }: { accounts: any; setAccounts: any }) {
  const [transactionHash, setTransactionHash] = useState("");
  const [msgValue, setMsgValue] = useState(0);
  const [amountOfTokens, setAmountOfTokens] = useState(0);

  const handlePurchaseTokens = (event: { target: { value: any } }) => {
    setMsgValue(event.target.value);
  };

  async function purchaseTokens() {
    try {
      if (accounts[0] !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        console.log("Account:", signer.getAddress());

        const erc20Contract = new ethers.Contract(lotteryTokenERC20Address, lotteryTokenContract.abi, signer);
        const lottery = new ethers.Contract(lotteryAddress, lotteryContract.abi, signer);

        const purchaseRatio = await lottery.purchaseRatio();
        console.log(purchaseRatio);
        const purchaseTokens = await lottery.purchaseTokens({ value: ethers.utils.parseEther(msgValue.toString()) });

        const amountOfTokens = purchaseRatio * msgValue;
        setAmountOfTokens(amountOfTokens);

        const receipt = await purchaseTokens.wait();

        console.log(`receipt.transactionHash ${receipt.transactionHash}`);

        if (receipt.transactionHash !== "undefined") {
          setTransactionHash(receipt.transactionHash);
        } else {
          setTransactionHash("Transaction failed");
        }
      }
    } catch (error) {
      let result = (error as Error).message;
      setTransactionHash(result);
    }
  }

  return (
    <div className="inner-container">
      <h2>Purchase Tokens</h2>
      <p>
        <b>Purchase Tokens Transaction Hash:</b> <i>{transactionHash}</i>
      </p>
      <p>
        <b>Tokens</b> {amountOfTokens}
      </p>
      <input type="number" id="tokens" name="tokens" onChange={handlePurchaseTokens} value={msgValue}></input>
      <button className="button" onClick={purchaseTokens}>
        Purchase Tokens
      </button>
    </div>
  );
}

export default PurchaseTokens;
