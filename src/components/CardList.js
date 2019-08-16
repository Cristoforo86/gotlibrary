import React from 'react'
import Card from './Card';

const CardList = ({ houses }) =>  {
    
        return (
            <div>
                {houses.map((civ, i) => {
                    return (
                        <Card
                            key={i}
                            name={houses[i].name}
                            region={houses[i].region}
                            words={houses[i].words}
                        />
                    );
                })}
            </div>
        )
    
}

export default CardList;
