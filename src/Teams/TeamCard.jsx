import React from 'react';
import { MdDeleteForever } from "react-icons/md";

const TeamCard = ({team, setteams}) => {

    const {id, name, hand_side, player_img } = team
    
    const handleDeleteTeam = (id) => {
        console.log(id)
        
        setteams((prev)=>{
            console.log(prev)
            const newTeams = prev.filter((team)=>team.id !== id)
            return newTeams
        })

        
    }

    return (
        <div className='bg-gray-200 m-4 p-4 rounded-md flex justify-between'>
            <div className='flex gap-2 items-center'>
            <img className='w-[50px] h-[50px] rounded-sm border-2 border-amber-50 shadow'  src={player_img} alt="" />
            <div>
            <h1 className='text-xl font-bold '>{name}</h1>
            <p className='text-gray-500 text-sm '>{hand_side}</p>
            </div>
            </div>
            <button onClick={()=>handleDeleteTeam(id)}><MdDeleteForever className='text-3xl bg-red-50 text-red-600 shadow rounded-sm cursor-pointer' /></button>
        </div>
    );
};

export default TeamCard;