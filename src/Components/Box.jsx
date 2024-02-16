import React from 'react'

function Box({
    text,
    type='button',
    bgColor='bg-white',
    textColor='text-black',
    textsize='3xl',
    className='',
    name,
    ...props
}){
    return(
        <>
        <button className={`outline outline-offset-2 m-2 font-bold h-10 w-10 ${bgColor} ${textColor} ${textsize} ${className} hover:bg-black hover:text-white`}{...props}
        >{text}</button>
        </>
    )
}

export default Box