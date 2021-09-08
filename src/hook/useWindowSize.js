import React, { useState, useLayoutEffect } from 'react';

export function useWindowSize(){
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const resize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
    };

    useLayoutEffect(()=>{
            window.addEventListener("resize", resize);
            debugger;
            // resize();
            return () => window.removeEventListener("resize", resize);
    },[]);

    return [width, height];
}
