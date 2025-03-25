import React from "react";
import { RxAvatar } from "react-icons/rx";
import { BsFillFlagFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
const Card = ({ card, handleClickChoose }) => {
  const { player_img, name, location, role, rating, hand_side, price } = card;

  return (
    <div className="border-2 border-gray-100 p-4 rounded-lg flex ">
      <div className="space-y-4 w-full  h-full">
        <img src={player_img} className="mx-auto w-full h-[220px] rounded-lg" />
        <div className="flex items-center gap-2">
          <RxAvatar className="text-2xl" />
          <h2 className="font-bold text-xl">{name}</h2>
        </div>
        {/* Location */}
        <div className="flex justify-between items-center font-medium text-gray-500 border-b-2 border-gray-100 pb-4">
          <div className="flex justify-between items-center gap-2 ">
            <BsFillFlagFill /> {location}{" "}
          </div>
          <div>
            {/* role */}
            <h1 className="bg-gray-100 px-3 py-2 rounded-md">{role}</h1>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            
            <h2 className="font-medium">Rating: </h2>
          </div>
          <div className="flex items-center gap-2 text-gray-500 font-medium">
            {rating}
            <FaStar className="text-orange-400" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            
            <h2 className="font-medium">Action Side: </h2>
          </div>
          <div className="flex items-center gap-2 text-gray-500 ">
            {hand_side}
          </div>
        </div>
        <div className="flex justify-between items-center" >
          <div><h2 className="font-medium">Price: {price}$ </h2></div>
          <div><button onClick={()=> handleClickChoose({price})} className="text-black font-semibold px-4 border-1 border-gray-400 rounded-sm cursor-pointer hover:bg-[#E7FE29]">Choose</button></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
