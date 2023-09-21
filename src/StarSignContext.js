import {createContext, useContext, useEffect, useState} from 'react';
import useStarSignDates from "./useStarSignDates";
import {starSigns} from "./StarSigns";

// Create the context
const StarSignContext = createContext();

// Create a custom hook for using the context
export function useStarSignContext() {
    return useContext(StarSignContext);
}

// Create the context provider component
export function StarSignProvider({ children }) {
    const [starSign, setStarSign] = useState("");
    const [selectedTimestamp, setSelectedTimestamp] = useState("");

    useEffect(() => {
        const timestamp = parseInt(selectedTimestamp, 10);
        const date = new Date(timestamp * 1000);
        //eslint-disable-next-line
        const currentStarSign = useStarSignDates(date);
        const matchingSign = starSigns.find((sign) => sign.name === currentStarSign);
        setStarSign(matchingSign);
    }, [selectedTimestamp]);

    const setTimestamp = (newTimestamp) => {
        setSelectedTimestamp(newTimestamp);
    };

    const value = {
        starSign,
        selectedTimestamp,
        setTimestamp,
    };

    return (
        <StarSignContext.Provider value={value}>
            {children}
        </StarSignContext.Provider>
    );
}
