import React, { useEffect, useState } from "react";
import { useStarSignContext } from "./StarSignContext";

const DateHeader = () => {
    const { selectedTimestamp } = useStarSignContext();
    const [date, setDate] = useState(null);

    // Creates calendar formatter
    const dateFormatter = new Intl.DateTimeFormat("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    useEffect(() => {
        console.log(selectedTimestamp)
        if (selectedTimestamp === "") return;

        const timestamp = parseInt(selectedTimestamp, 10);
        const toDateString = new Date(timestamp * 1000);
        setDate(dateFormatter.format(toDateString));
    }, [selectedTimestamp]);

    useEffect(() => {
        console.log(date);
    }, [date]);

    return (
        <div>
            <h1>Your Birthdate</h1>
            <p>{date}</p>
        </div>
    );
};

export default DateHeader;
