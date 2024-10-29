import React from 'react';

const Card = ({ id, name, instrument, link, link2 }) => {
    return (
        <div 
            className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5' 
            onClick={() => window.open(process.env.PUBLIC_URL + link2)}
        >
            <img src={link} alt={name} width="400" />
            <h2 className='Athelas'>{name}</h2>
            <p className='calisto'>{instrument}</p>
        </div>
    );
}

export default Card;
