import React from "react";

interface Props {
    children: React.ReactNode;
    htmlFor: string;
    customClass?: string;
}

function Label({children, htmlFor, customClass}:Props) {
    return (
        <label 
            className={`block mb-2 ${customClass}`}
            htmlFor={htmlFor}
        >
            {children}
        </label>
    )
}

export default Label;