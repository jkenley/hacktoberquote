import React, {useState, useEffect, useRef} from 'react';
import {type} from "os";

export const useInterval = (callback: () => void, delay: number) => {
    const savedCallback = useRef<(() => void) | null>(null);

    useEffect(() => {
            savedCallback.current  = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            if(savedCallback && savedCallback.current){
                savedCallback.current();
            }
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

