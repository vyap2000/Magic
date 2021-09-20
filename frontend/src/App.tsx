import React from "react";
import "./App.css";
import { Symfoni } from "./hardhat/SymfoniContext";
import { Swap } from "./components/Swap";

function App() {
  return (
    <div className="App">
        <Symfoni autoInit={true}>
          <div className="min-h-screen bg-purple-900">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
              <div className="text-pink-300 text-6xl pt-28 pb-10">
                 Magic Swap
              </div>
              <Swap tokenA="0x816C5111c694fe4170FdA983Bca5A534e141F754" tokenB="0x29b6bbdDc33639C269258c47ad4e5043383b07b6"></Swap>
            </div>
          </div>
        </Symfoni>
    </div>
  );
}

export default App;
