import { useState } from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import Navbar from "./Head/Navbar";
import Cards from "./Cards/Cards";
import Teams from "./Teams/Teams";

function App() {
  const [coin, setCoin] = useState(0);
  const [visible, SetVisible] = useState(false);

  const handleClickCoin = () => {
    console.log("clicked");
    setCoin(coin + 16578000);
  };

  return (
    <>
      <div className="space-y-10">
        <Navbar coin={coin}></Navbar>
        <Banner handleClickCoin={handleClickCoin}></Banner>
        <div className="">
          <div className=" flex justify-end items-center gap-4 ">
            <button className="text-black font-bold rounded-lg hover:border-2, cursor-pointer border-amber-500 px-6 py-2 bg-[#E7FE29]">
              Availabe
            </button>
            <button className="text-black font-bold rounded-lg hover:border-2, cursor-pointer border-amber-500 px-6 py-2 bg-[#E7FE29]">
              Selected
            </button>
          </div>
        </div>
        <Teams></Teams>
      </div>
    </>
  );
}

export default App;
