import React from 'react';
import Star from './Star';


const createArray = length => [...Array(length)]

export default function StarRating({
    totalStars = 5, 
    selectedStars = 0,
    onRate = f => f    
}){

    return (
        <div style={{padding:"5px"}}>
            {createArray(totalStars).map((n, i)=> 
                <Star
                    key={i} 
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}    
                />
            )}
            <h1>{selectedStars} / {totalStars}</h1> 
        </div>
    )
}