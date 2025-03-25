import React from 'react';
import Cards from '../Cards/Cards';
import Teams from '../Teams/Teams';

const Render = ({idx, handleClickChoose}) => {

    if(idx ==0){
        return <Cards handleClickChoose={handleClickChoose}></Cards>
    }
    else{
        return <Teams></Teams>
    }

};

export default Render;