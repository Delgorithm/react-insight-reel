import React from 'react';
import './Button.css';

const Button = ({ onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>
            Get started
        </button>
    );
};

export default Button;