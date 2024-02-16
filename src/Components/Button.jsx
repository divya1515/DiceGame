import React from 'react'
import {Link} from 'react-router-dom'

function Button({
    text,
    to,
    type='button',
    bgColor='bg-black',
    textColor='text-white',
    onClick,
    className='',
    Icon,
    ...props
}){
    const handleClick = () => {
        if (to) {
            window.location.href = to; // Redirect to the specified URL
        }
        onClick && onClick(); // Call the provided onClick function
    };
    return (
        <>
        <Link to={to}>
        <button className={`mx-0.5 px-7 py-2.5 rounded-lg ${bgColor} ${textColor} ${className}`}{...props}
        onClick={onClick?handleClick:undefined}>{text}</button>
        </Link>
        </>
    )
}

export default Button