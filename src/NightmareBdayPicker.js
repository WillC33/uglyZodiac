import React from 'react';
import {useStarSignContext} from "./StarSignContext";

function UnixTimestampPicker() {
    const { selectedTimestamp, setTimestamp } = useStarSignContext();


    const generateRandomTimestamp = () => {
        const maxTimestamp = Math.floor(Date.now() / 1000); // now
        const randomTimestamp = Math.floor(Math.random() * (maxTimestamp + 1));
        setTimestamp(randomTimestamp);
    };

    return (
        <div>
            <p>Let's find your birthday, friend:</p>
            <input
                type="text"
                value={selectedTimestamp}
                readOnly
            />
            <button onClick={generateRandomTimestamp}>Enter Birthdate</button>
        </div>
    );
}

export default UnixTimestampPicker;
