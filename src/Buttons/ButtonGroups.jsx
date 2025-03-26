import React from 'react';

const ButtonGroups = ({buttons, isSelected, setIsSelected}) => {

    

    return (
        <div>
            <div className='flex gap-3 justify-center md:justify-end pb-5'>
                {
                    buttons.map((text, idx)=>{
                        return <button key={idx}
                        id={idx}
                        onClick={() => setIsSelected(idx)}
                        className={isSelected == idx ? 
                            " text-black font-bold rounded-lg  cursor-pointer border-amber-500 px-6 py-2 bg-[#E7FE29]" : 
                            'text-black font-bold rounded-lg border-2 cursor-pointer border-gray-100 px-6 py-2  bg-[#ffff]'}>{text}</button>
                    })
                }
            </div>
        </div>
    );
};

export default ButtonGroups;