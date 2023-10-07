import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';
import Web3 from "web3";
import '../css/project.css'
import '../css/animations.css';
import { useNavigate } from 'react-router-dom';

function Landing () {
  const [buttonName, setButtonName] = useState("Connect Wallet");

  const ethereum = window.ethereum;

  const navigate = useNavigate();

  const connectWallet = async () => {
    if(ethereum == undefined || ethereum == null) {
      alert("Metamask Wallet Extension Not Intsalled");
      return;
    }
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
  
    setButtonName("Connected");

    navigate('/manage');
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
                <button onClick={connectWallet} id="connectButton" className="block w-1/2 px-3 py-3 mx-auto mt-10 text-sm font-semibold text-center text-white rounded-md shadow-sm bg-sky-900 hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900">
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
