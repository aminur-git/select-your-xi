import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = ({handleClickChoose}) => {
    const [cards, setCards] = useState([])
    
    useEffect(()=>{
        fetch("players.json")
        .then(res=> res.json())
        .then(data=> setCards(data))
    }, [])


    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8'>
            {
                cards.map((card, idx)=> <Card key={idx} card={card} handleClickChoose={handleClickChoose}></Card> )
            }
        </div>
    );
};

export default Cards;