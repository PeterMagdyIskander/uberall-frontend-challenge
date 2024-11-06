
import React from "react";
import '../styles/card.css';

const SearchHistory = ({ data, handleSubmit }) => {
    const timeAgo = (time) => {
        const seconds = Math.floor((new Date() - new Date(time)) / 1000);

        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60,
        };

        for (const [unit, secondsInUnit] of Object.entries(intervals)) {
            const interval = Math.floor(seconds / secondsInUnit);
            if (interval > 1) return `${interval} ${unit}s ago`;
            if (interval === 1) return `1 ${unit} ago`;
        }

        return seconds < 10 ? "just now" : `${seconds} seconds ago`;
    }
    const handleEntryClick = (entry) => {
        handleSubmit(entry)
    }
    return (
        <ul className="search-history-container">
            {
                data.toReversed().map((entry,index) => <li key={index} className="search-history-entry" onClick={() => handleEntryClick(entry)}>
                    <p>{`${entry.name} ${entry.streetAndNo}, ${entry.zip}`}</p>
                    <p>{timeAgo(entry.time)}</p>
                </li>)
            }
        </ul>
    );
};


export default SearchHistory;
