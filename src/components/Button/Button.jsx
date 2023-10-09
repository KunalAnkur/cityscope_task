import React from 'react';
import './Button.css';

const Button = ({ className="", onClick = () => {}, type = "primary" ,label = "", disabled=false ,children, ...props }) => {
    const allowedTypes = ["primary", "secondary"];

    const buttonType = allowedTypes.includes(type) ? type : "primary";

    return (
        <button
            className={`button ${className} ${buttonType} ${disabled ? "disabled":""}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {label || children}
        </button>
    );
};

export { Button };
