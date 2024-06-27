import React from 'react';
import './toggles.css';

const Toggles = ({ onClick }) => {
    return (
        <button className="toggles-button" onClick={onClick}>
            &#9776; {/* Unicode character for hamburger menu */}
        </button>
    );
};

export default Toggles;
