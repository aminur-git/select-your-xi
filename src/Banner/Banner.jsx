import React from "react";
import logo from "../assets/banner-main.png";
import background from "../assets/banner.jpg";
import overlay from '../assets/bg-shadow.png'

const Banner = ({handleClickCoin}) => {
  return (
    <div style={{
        backgroundImage: `url(${overlay}), url(${background}) `,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: 'cover, cover',
        
      }} className="w-full flex flex-col justify-center items-center p-8 text-white gap-5 text-center">
        <img className="max-w-40 md:max-w-64" src={logo} alt="" />
        <h2 className="text-2xl md:text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h2>
        <p className="md:text-2xl font-medium text-[#FFFFFFB3]">Beyond Boundaries Beyond Limits</p>
        <button onClick={handleClickCoin} className="text-black font-bold rounded-lg hover:border-2, cursor-pointer border-amber-500 px-6 py-2 bg-[#E7FE29]">Claim Free Credit</button>
      
    </div>
  );
};

export default Banner;
