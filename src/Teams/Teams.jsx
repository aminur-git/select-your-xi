import React from 'react';
import TeamCard from './TeamCard';

const Teams = ({teams, setteams}) => {
    return (
        <div>
            <h2 className='font-bold text-2xl'>Selected Players ({teams.length}/6)</h2>
            {
                teams.map((team, i) => <TeamCard key={i} team={team} setteams={setteams}></TeamCard>)
            }
        </div>
    );
};

export default Teams;