import React from 'react';

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
        <div className='bg-gray-200 m-4 p-4 rounded-md'>
            <img className='w-[35px]' src={player_img} alt="" />
            <h1 className='text-xl font-bold '>{name}</h1>
            <p>{hand_side}</p>
            <button onClick={()=>handleDeleteTeam(id)} className='p-2 border-2'>Remove</button>
        </div>
    );
};

export default TeamCard;