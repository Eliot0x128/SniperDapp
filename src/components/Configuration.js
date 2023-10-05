import React, { useEffect, useState } from "react";
import WalletDetails from './Configuration/WalletDetails';
import '../css/project.css'
import '../css/animations.css';

function ManageSniper () {
    return (
      <div className="App">
        <div className='relative flex items-center justify-center w-full h-screen body bg-[#030015]'>
          <div className="w-1/3">
            <p className="text-4xl font-semibold text-gray-50">Manage Sniper</p>
            <WalletDetails />
          </div>
        </div>
      </div>
    );
}

export default ManageSniper;
