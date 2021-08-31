import React from 'react';
import {FaStar} from 'react-icons/fa';

const createArray = length => [...Array(length)]

export default function StarRating({totalStars = 5, selectedStars = 0}){

    //onSelect 가짜 함수
    const Star =({selected = false, onSelect = f => f})=>(
        <>
            <FaStar color={selected ? "red" : "gray"} onClick={onSelect}/>
        </>
      )
    return (
        <div style={{padding:"5px"}}>
            {createArray(totalStars).map((n, i)=> 
                <Star key={i} selected={selectedStars > i}/>
            )}
            <h1>{selectedStars} / {totalStars}</h1> 
        </div>
    )
}