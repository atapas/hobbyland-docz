import React from 'react';
import './heading.css';

export const Heading = ({ label }) => {
    
    return (
        <h1 className="heading">{label}</h1>
    );
};