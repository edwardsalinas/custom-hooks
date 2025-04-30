import { useState } from "react";

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);
    
    const incremet = ( value = 1 ) => {
        setCounter((beforeCounter) => beforeCounter + value);
    };

    const decrement = (value = 1) => {
        // if (counter === 0) return;
        setCounter((beforeCounter) => beforeCounter - value);
    };

    const reset = () => {
        setCounter(initialValue);
    }
    return {
        counter,
        incremet,
        decrement,
        reset,
    };
};
