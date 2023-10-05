import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';
import Web3 from "web3";
import '../css/project.css'
import '../css/animations.css';

function Landing () {
  const [buttonName, setButtonName] = useState("Connect Wallet");

  const ethereum = window.ethereum;
  const provider = new ethers.providers.Web3Provider(ethereum);

  const connectWallet = async () => {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    const walletAddress = accounts[0];    // first account in MetaMask
    
    setButtonName("Connected");
  };

    return (
      <div className="App">
        <div className='relative flex items-center justify-center w-full h-screen body bg-[#030015]'>
          <div className="p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="py-10 text-center claim_eth_box rounded-2xl ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="px-8 mx-auto">
                <p className="text-4xl font-semibold text-gray-50">Manage Sniper</p>
                <p className="flex items-baseline justify-center mt-6 gap-x-2">
                  <span className="text-base font-semibold leading-6 tracking-wide text-gray-400">Connect Your wallet to access this section</span>
                </p>
                <button onClick={connectWallet} id="connectButton" className="block w-1/2 px-3 py-3 mx-auto mt-10 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  {buttonName}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Landing;
