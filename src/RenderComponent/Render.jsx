import React from 'react';
import Cards from '../Cards/Cards';
import Teams from '../Teams/Teams';

const Render = ({idx, handleClickChoose, teams, setteams}) => {

     if(idx === 0){
        return <Cards handleClickChoose={handleClickChoose} teamsLength={teams.length}></Cards>
    }
    else{
        return <Teams teams={teams} setteams={setteams}></Teams>
    }

};

export default Render;